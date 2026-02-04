import { NextResponse } from 'next/server';

// OpenAI Admin API for usage reports
// Docs: https://platform.openai.com/docs/api-reference/usage

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const period = searchParams.get('period') || 'week';
  
  const apiKey = process.env.OPENAI_ADMIN_API_KEY || process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json({ error: 'OPENAI_ADMIN_API_KEY not configured' }, { status: 500 });
  }

  // Calculate date ranges (Unix timestamps)
  const now = Math.floor(Date.now() / 1000);
  let startTime: number;
  let bucketWidth: string;
  let limit: number;

  switch (period) {
    case 'day':
      startTime = now - 24 * 60 * 60;
      bucketWidth = '1h';
      limit = 24;
      break;
    case 'week':
      startTime = now - 7 * 24 * 60 * 60;
      bucketWidth = '1d';
      limit = 7;
      break;
    case 'month':
      startTime = now - 30 * 24 * 60 * 60;
      bucketWidth = '1d';
      limit = 31;
      break;
    case 'year':
      startTime = now - 365 * 24 * 60 * 60;
      bucketWidth = '1d';
      limit = 31; // API max is 31 for daily buckets
      break;
    default:
      startTime = now - 7 * 24 * 60 * 60;
      bucketWidth = '1d';
      limit = 7;
  }

  try {
    // Fetch completions usage
    const completionsUrl = new URL('https://api.openai.com/v1/organization/usage/completions');
    completionsUrl.searchParams.set('start_time', startTime.toString());
    completionsUrl.searchParams.set('bucket_width', bucketWidth);
    completionsUrl.searchParams.set('limit', limit.toString());
    completionsUrl.searchParams.set('group_by', 'model');

    const completionsRes = await fetch(completionsUrl.toString(), {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!completionsRes.ok) {
      const errorText = await completionsRes.text();
      console.error('OpenAI API error:', completionsRes.status, errorText);
      
      if (completionsRes.status === 403 || completionsRes.status === 401) {
        return NextResponse.json({
          error: 'Admin API key required. Set OPENAI_ADMIN_API_KEY in Vercel.',
          hint: 'Get your Admin API key from platform.openai.com → Settings → Organization → Admin Keys',
          period,
          data: null
        }, { status: 200 });
      }
      
      return NextResponse.json({ error: `API error: ${completionsRes.status}` }, { status: completionsRes.status });
    }

    const completionsData = await completionsRes.json();

    // Also fetch embeddings usage
    const embeddingsUrl = new URL('https://api.openai.com/v1/organization/usage/embeddings');
    embeddingsUrl.searchParams.set('start_time', startTime.toString());
    embeddingsUrl.searchParams.set('bucket_width', bucketWidth);
    embeddingsUrl.searchParams.set('limit', limit.toString());
    embeddingsUrl.searchParams.set('group_by', 'model');

    const embeddingsRes = await fetch(embeddingsUrl.toString(), {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    let embeddingsData = { data: [] };
    if (embeddingsRes.ok) {
      embeddingsData = await embeddingsRes.json();
    }

    // Process and aggregate the data
    const processed = processUsageData(completionsData, embeddingsData, period);
    
    return NextResponse.json({
      period,
      startTime,
      endTime: now,
      bucketWidth,
      raw: { completions: completionsData, embeddings: embeddingsData },
      processed
    });
  } catch (error) {
    console.error('Error fetching OpenAI usage:', error);
    return NextResponse.json({ error: 'Failed to fetch usage data' }, { status: 500 });
  }
}

interface OpenAIBucket {
  start_time: number;
  end_time: number;
  results: Array<{
    input_tokens?: number;
    output_tokens?: number;
    input_cached_tokens?: number;
    num_model_requests?: number;
    model?: string;
  }>;
}

interface ProcessedData {
  totalInputTokens: number;
  totalOutputTokens: number;
  totalTokens: number;
  totalRequests: number;
  byModel: Record<string, { input: number; output: number; total: number; requests: number }>;
  byPeriod: Array<{ date: string; input: number; output: number; total: number }>;
  estimatedCost: number;
}

function processUsageData(
  completions: { data?: OpenAIBucket[] },
  embeddings: { data?: OpenAIBucket[] },
  period: string
): ProcessedData {
  const completionsBuckets = completions.data || [];
  const embeddingsBuckets = embeddings.data || [];
  
  let totalInputTokens = 0;
  let totalOutputTokens = 0;
  let totalRequests = 0;
  const byModel: Record<string, { input: number; output: number; total: number; requests: number }> = {};
  const byPeriodMap: Record<string, { input: number; output: number; total: number }> = {};

  // Process completions
  for (const bucket of completionsBuckets) {
    const dateKey = new Date(bucket.start_time * 1000).toISOString().split('T')[0];
    
    for (const result of bucket.results || []) {
      const input = result.input_tokens || 0;
      const output = result.output_tokens || 0;
      const requests = result.num_model_requests || 0;
      
      totalInputTokens += input;
      totalOutputTokens += output;
      totalRequests += requests;

      // Group by model
      const model = result.model || 'unknown';
      if (!byModel[model]) {
        byModel[model] = { input: 0, output: 0, total: 0, requests: 0 };
      }
      byModel[model].input += input;
      byModel[model].output += output;
      byModel[model].total += input + output;
      byModel[model].requests += requests;

      // Group by period
      if (!byPeriodMap[dateKey]) {
        byPeriodMap[dateKey] = { input: 0, output: 0, total: 0 };
      }
      byPeriodMap[dateKey].input += input;
      byPeriodMap[dateKey].output += output;
      byPeriodMap[dateKey].total += input + output;
    }
  }

  // Process embeddings
  for (const bucket of embeddingsBuckets) {
    const dateKey = new Date(bucket.start_time * 1000).toISOString().split('T')[0];
    
    for (const result of bucket.results || []) {
      const input = result.input_tokens || 0;
      const requests = result.num_model_requests || 0;
      
      totalInputTokens += input;
      totalRequests += requests;

      // Group by model
      const model = result.model || 'embeddings';
      if (!byModel[model]) {
        byModel[model] = { input: 0, output: 0, total: 0, requests: 0 };
      }
      byModel[model].input += input;
      byModel[model].total += input;
      byModel[model].requests += requests;

      // Group by period
      if (!byPeriodMap[dateKey]) {
        byPeriodMap[dateKey] = { input: 0, output: 0, total: 0 };
      }
      byPeriodMap[dateKey].input += input;
      byPeriodMap[dateKey].total += input;
    }
  }

  const byPeriod = Object.entries(byPeriodMap)
    .map(([date, data]) => ({ date, ...data }))
    .sort((a, b) => a.date.localeCompare(b.date));

  // Rough cost estimation (GPT-4o pricing as baseline)
  // Input: $2.50/1M tokens, Output: $10/1M tokens
  const estimatedCost = (totalInputTokens * 2.5 + totalOutputTokens * 10) / 1_000_000;

  return {
    totalInputTokens,
    totalOutputTokens,
    totalTokens: totalInputTokens + totalOutputTokens,
    totalRequests,
    byModel,
    byPeriod,
    estimatedCost
  };
}
