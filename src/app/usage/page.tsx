'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';

interface UsageData {
  period: string;
  error?: string;
  hint?: string;
  processed?: {
    totalInputTokens: number;
    totalOutputTokens: number;
    totalTokens: number;
    totalRequests?: number;
    byModel: Record<string, { input: number; output: number; total: number; requests?: number }>;
    byPeriod: Array<{ date: string; input: number; output: number; total: number }>;
    estimatedCost: number;
  };
}

const periods = [
  { id: 'day', label: 'Today', shortLabel: '24h' },
  { id: 'week', label: 'This Week', shortLabel: '7d' },
  { id: 'month', label: 'This Month', shortLabel: '30d' },
  { id: 'year', label: 'This Year', shortLabel: '1y' },
];

function formatNumber(num: number): string {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(2) + 'M';
  if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
  return num.toLocaleString();
}

function formatCost(cost: number): string {
  return '$' + cost.toFixed(2);
}

function UsageCard({ 
  title, 
  data, 
  loading, 
  error, 
  hint,
  color 
}: { 
  title: string; 
  data: UsageData['processed'] | null; 
  loading: boolean; 
  error: string | null;
  hint?: string;
  color: 'primary' | 'coral';
}) {
  const colorClasses = color === 'primary' 
    ? { bg: 'bg-[var(--primary-bg)]', text: 'text-[var(--primary)]', bar: 'bg-[var(--primary)]' }
    : { bg: 'bg-[var(--coral-bg)]', text: 'text-[var(--coral)]', bar: 'bg-[var(--coral)]' };

  const maxTokens = data?.byPeriod?.reduce((max, p) => Math.max(max, p.total), 0) || 1;

  if (loading) {
    return (
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
        <h2 className="text-lg font-semibold text-[var(--text-strong)] mb-4">{title}</h2>
        <div className="flex items-center justify-center py-12">
          <div className={`w-6 h-6 border-2 ${colorClasses.text} border-t-transparent rounded-full animate-spin`}></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
        <h2 className="text-lg font-semibold text-[var(--text-strong)] mb-4">{title}</h2>
        <div className={`p-4 ${colorClasses.bg} rounded-lg`}>
          <p className={`text-sm ${colorClasses.text} font-medium mb-1`}>Setup Required</p>
          <p className="text-sm text-[var(--text)]">{error}</p>
          {hint && <p className="text-xs text-[var(--text-muted)] mt-2">{hint}</p>}
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
        <h2 className="text-lg font-semibold text-[var(--text-strong)] mb-4">{title}</h2>
        <p className="text-[var(--text-muted)] text-center py-8">No data available</p>
      </div>
    );
  }

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
      <h2 className="text-lg font-semibold text-[var(--text-strong)] mb-6">{title}</h2>
      
      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className={`${colorClasses.bg} rounded-lg p-3`}>
          <p className="text-xs text-[var(--text-muted)]">Total</p>
          <p className={`text-xl font-bold ${colorClasses.text}`}>{formatNumber(data.totalTokens)}</p>
        </div>
        <div className="bg-[var(--bg)] rounded-lg p-3">
          <p className="text-xs text-[var(--text-muted)]">Input</p>
          <p className="text-xl font-bold text-[var(--text-strong)]">{formatNumber(data.totalInputTokens)}</p>
        </div>
        <div className="bg-[var(--bg)] rounded-lg p-3">
          <p className="text-xs text-[var(--text-muted)]">Output</p>
          <p className="text-xl font-bold text-[var(--text-strong)]">{formatNumber(data.totalOutputTokens)}</p>
        </div>
        <div className="bg-[var(--bg)] rounded-lg p-3">
          <p className="text-xs text-[var(--text-muted)]">Est. Cost</p>
          <p className="text-xl font-bold text-[var(--text-strong)]">{formatCost(data.estimatedCost)}</p>
        </div>
      </div>

      {/* Chart */}
      {data.byPeriod.length > 0 && (
        <div className="mb-6">
          <p className="text-sm font-medium text-[var(--text-muted)] mb-3">Usage Over Time</p>
          <div className="space-y-2">
            {data.byPeriod.slice(-7).map((item) => (
              <div key={item.date} className="flex items-center gap-3">
                <span className="text-xs text-[var(--text-muted)] w-16 shrink-0">
                  {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
                <div className="flex-1 h-5 bg-[var(--bg)] rounded overflow-hidden flex">
                  <div 
                    className={colorClasses.bar}
                    style={{ width: `${(item.total / maxTokens) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-[var(--text-strong)] w-14 text-right">
                  {formatNumber(item.total)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* By Model */}
      {Object.keys(data.byModel).length > 0 && (
        <div>
          <p className="text-sm font-medium text-[var(--text-muted)] mb-3">By Model</p>
          <div className="space-y-2">
            {Object.entries(data.byModel)
              .sort(([,a], [,b]) => b.total - a.total)
              .slice(0, 5)
              .map(([model, stats]) => (
              <div key={model} className="flex items-center justify-between p-3 bg-[var(--bg)] rounded-lg">
                <div>
                  <p className="text-sm font-medium text-[var(--text-strong)]">{model}</p>
                  <p className="text-xs text-[var(--text-muted)]">
                    {formatNumber(stats.input)} in / {formatNumber(stats.output)} out
                  </p>
                </div>
                <p className={`text-lg font-bold ${colorClasses.text}`}>{formatNumber(stats.total)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function UsagePage() {
  const [period, setPeriod] = useState('week');
  
  const [anthropicData, setAnthropicData] = useState<UsageData | null>(null);
  const [anthropicLoading, setAnthropicLoading] = useState(true);
  const [anthropicError, setAnthropicError] = useState<string | null>(null);
  
  const [openaiData, setOpenaiData] = useState<UsageData | null>(null);
  const [openaiLoading, setOpenaiLoading] = useState(true);
  const [openaiError, setOpenaiError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAnthropicUsage() {
      setAnthropicLoading(true);
      setAnthropicError(null);
      try {
        const res = await fetch(`/api/anthropic-usage?period=${period}`);
        const json = await res.json();
        setAnthropicData(json);
        if (json.error && !json.processed) {
          setAnthropicError(json.error);
        }
      } catch {
        setAnthropicError('Failed to fetch');
      } finally {
        setAnthropicLoading(false);
      }
    }

    async function fetchOpenaiUsage() {
      setOpenaiLoading(true);
      setOpenaiError(null);
      try {
        const res = await fetch(`/api/openai-usage?period=${period}`);
        const json = await res.json();
        setOpenaiData(json);
        if (json.error && !json.processed) {
          setOpenaiError(json.error);
        }
      } catch {
        setOpenaiError('Failed to fetch');
      } finally {
        setOpenaiLoading(false);
      }
    }

    fetchAnthropicUsage();
    fetchOpenaiUsage();
  }, [period]);

  // Combined totals
  const anthropicProcessed = anthropicData?.processed;
  const openaiProcessed = openaiData?.processed;
  
  const combinedTotal = (anthropicProcessed?.totalTokens || 0) + (openaiProcessed?.totalTokens || 0);
  const combinedCost = (anthropicProcessed?.estimatedCost || 0) + (openaiProcessed?.estimatedCost || 0);

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Navigation */}
      <nav className="border-b border-[var(--border)] bg-[var(--card)]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo size={36} />
            <span className="font-bold text-xl text-[var(--text-strong)]">VibeM</span>
          </Link>
          <Link href="/" className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)]">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[var(--text-strong)]">Token Usage</h1>
            <p className="text-[var(--text-muted)] mt-1">API usage statistics across all providers</p>
          </div>
          
          {/* Period Selector */}
          <div className="flex gap-2 bg-[var(--card)] border border-[var(--border)] rounded-xl p-1">
            {periods.map((p) => (
              <button
                key={p.id}
                onClick={() => setPeriod(p.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  period === p.id
                    ? 'bg-[var(--primary)] text-white'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-strong)]'
                }`}
              >
                {p.shortLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Combined Summary */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
            <p className="text-sm text-[var(--text-muted)] mb-1">Total Tokens (All Providers)</p>
            <p className="text-4xl font-bold text-[var(--text-strong)]">{formatNumber(combinedTotal)}</p>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
            <p className="text-sm text-[var(--text-muted)] mb-1">Est. Total Cost</p>
            <p className="text-4xl font-bold text-[var(--text-strong)]">{formatCost(combinedCost)}</p>
          </div>
        </div>

        {/* Provider Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <UsageCard
            title="Anthropic (Claude)"
            data={anthropicProcessed || null}
            loading={anthropicLoading}
            error={anthropicError}
            hint={anthropicData?.hint}
            color="primary"
          />
          <UsageCard
            title="OpenAI (GPT)"
            data={openaiProcessed || null}
            loading={openaiLoading}
            error={openaiError}
            hint={openaiData?.hint}
            color="coral"
          />
        </div>

        {/* Session Categories */}
        <div className="mt-8 p-6 bg-[var(--card)] border border-[var(--border)] rounded-xl">
          <h3 className="font-semibold text-[var(--text-strong)] mb-4">OpenClaw Session Categories</h3>
          <p className="text-sm text-[var(--text-muted)] mb-4">
            Token usage is tracked per API key, not per session. OpenClaw sessions are categorized as:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Discord Channels', pattern: 'discord:channel:*', examples: '#development, #reddit, #sxsw', color: 'primary' },
              { name: 'Telegram', pattern: 'telegram:*', examples: 'Direct messages', color: 'coral' },
              { name: 'Heartbeat/Main', pattern: 'main:main', examples: 'Heartbeat polls', color: 'primary' },
              { name: 'Cron Jobs', pattern: 'cron:*', examples: 'Email Monitor, Reddit Builder', color: 'coral' },
              { name: 'Sub-agents', pattern: 'spawn:*', examples: 'Background tasks', color: 'primary' },
            ].map((cat) => (
              <div key={cat.name} className={`p-4 rounded-lg ${cat.color === 'primary' ? 'bg-[var(--primary-bg)]' : 'bg-[var(--coral-bg)]'}`}>
                <p className={`font-medium ${cat.color === 'primary' ? 'text-[var(--primary)]' : 'text-[var(--coral)]'}`}>{cat.name}</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">{cat.examples}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-4 italic">
            Note: Per-session historical usage tracking requires custom instrumentation in OpenClaw.
          </p>
        </div>

        {/* Setup Instructions */}
        <div className="mt-6 p-6 bg-[var(--card)] border border-[var(--border)] rounded-xl">
          <h3 className="font-semibold text-[var(--text-strong)] mb-4">Setup Instructions</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-medium text-[var(--primary)] mb-2">Anthropic</p>
              <ol className="list-decimal list-inside text-[var(--text-muted)] space-y-1">
                <li>Go to console.anthropic.com</li>
                <li>Settings → Admin API Keys</li>
                <li>Create new Admin Key</li>
                <li>Add <code className="bg-[var(--bg)] px-1 rounded">ANTHROPIC_ADMIN_API_KEY</code> to Vercel</li>
              </ol>
            </div>
            <div>
              <p className="font-medium text-[var(--coral)] mb-2">OpenAI</p>
              <ol className="list-decimal list-inside text-[var(--text-muted)] space-y-1">
                <li>Go to platform.openai.com</li>
                <li>Settings → Organization → Admin Keys</li>
                <li>Create new Admin Key</li>
                <li>Add <code className="bg-[var(--bg)] px-1 rounded">OPENAI_ADMIN_API_KEY</code> to Vercel</li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
