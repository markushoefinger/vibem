import { NextResponse } from 'next/server';

// Anthropic Admin API for usage reports
// Docs: https://docs.anthropic.com/en/api/usage-cost-api

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const period = searchParams.get('period') || 'week'; // day, week, month, year
  
  const apiKey = process.env.ANTHROPIC_ADMIN_API_KEY || process.env.ANTHROPIC_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json({ error: 'ANTHROPIC_ADMIN_API_KEY not configured' }, { status: 500 });
  }

  // Calculate date ranges
  const now = new Date();
  const endDate = now.toISOString();
  let startDate: string;
  let bucketWidth: string;

  switch (period) {
    case 'day':
      startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
      bucketWidth = '1h';
      break;
    case 'week':
      startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
      bucketWidth = '1d';
      break;
    case 'month':
      startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString();
      bucketWidth = '1d';
      break;
    case 'year':
      startDate = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000).toISOString();
      bucketWidth = '1w';
      break;
    default:
      startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
      bucketWidth = '1d';
  }

  try {
    const url = new URL('https://api.anthropic.com/v1/organizations/usage_report/messages');
    url.searchParams.set('starting_at', startDate);
    url.searchParams.set('ending_at', endDate);
    url.searchParams.set('bucket_width', bucketWidth);
    url.searchParams.set('group_by', 'model');

    const response = await fetch(url.toString(), {
      headers: {
        'anthropic-version': '2023-06-01',
        'x-api-key': apiKey,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Anthropic API error:', response.status, errorText);
      
      // If Admin API fails, return mock data structure for demo
      if (response.status === 403 || response.status === 401) {
        return NextResponse.json({
          error: 'Admin API key required. Set ANTHROPIC_ADMIN_API_KEY in Vercel.',
          hint: 'Get your Admin API key from console.anthropic.com → Settings → Admin API Keys',
          period,
          data: null
        }, { status: 200 });
      }
      
      return NextResponse.json({ error: `API error: ${response.status}` }, { status: response.status });
    }

    const data = await response.json();
    
    // Process and aggregate the data
    const processed = processUsageData(data, period);
    
    return NextResponse.json({
      period,
      startDate,
      endDate,
      bucketWidth,
      raw: data,
      processed
    });
  } catch (error) {
    console.error('Error fetching usage:', error);
    return NextResponse.json({ error: 'Failed to fetch usage data' }, { status: 500 });
  }
}

interface UsageBucket {
  started_at: string;
  ended_at: string;
  input_tokens: number;
  output_tokens: number;
  model?: string;
}

interface ProcessedData {
  totalInputTokens: number;
  totalOutputTokens: number;
  totalTokens: number;
  byModel: Record<string, { input: number; output: number; total: number }>;
  byPeriod: Array<{ date: string; input: number; output: number; total: number }>;
  estimatedCost: number;
}

function processUsageData(data: { data?: UsageBucket[] }, period: string): ProcessedData {
  const buckets = data.data || [];
  
  let totalInputTokens = 0;
  let totalOutputTokens = 0;
  const byModel: Record<string, { input: number; output: number; total: number }> = {};
  const byPeriodMap: Record<string, { input: number; output: number; total: number }> = {};

  for (const bucket of buckets) {
    totalInputTokens += bucket.input_tokens || 0;
    totalOutputTokens += bucket.output_tokens || 0;

    // Group by model
    const model = bucket.model || 'unknown';
    if (!byModel[model]) {
      byModel[model] = { input: 0, output: 0, total: 0 };
    }
    byModel[model].input += bucket.input_tokens || 0;
    byModel[model].output += bucket.output_tokens || 0;
    byModel[model].total += (bucket.input_tokens || 0) + (bucket.output_tokens || 0);

    // Group by period
    const dateKey = bucket.started_at?.split('T')[0] || 'unknown';
    if (!byPeriodMap[dateKey]) {
      byPeriodMap[dateKey] = { input: 0, output: 0, total: 0 };
    }
    byPeriodMap[dateKey].input += bucket.input_tokens || 0;
    byPeriodMap[dateKey].output += bucket.output_tokens || 0;
    byPeriodMap[dateKey].total += (bucket.input_tokens || 0) + (bucket.output_tokens || 0);
  }

  const byPeriod = Object.entries(byPeriodMap)
    .map(([date, data]) => ({ date, ...data }))
    .sort((a, b) => a.date.localeCompare(b.date));

  // Rough cost estimation (Claude 3.5 Sonnet pricing as baseline)
  // Input: $3/1M tokens, Output: $15/1M tokens
  const estimatedCost = (totalInputTokens * 3 + totalOutputTokens * 15) / 1_000_000;

  return {
    totalInputTokens,
    totalOutputTokens,
    totalTokens: totalInputTokens + totalOutputTokens,
    byModel,
    byPeriod,
    estimatedCost
  };
}
