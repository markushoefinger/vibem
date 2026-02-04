'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';

interface UsageData {
  period: string;
  startDate: string;
  endDate: string;
  error?: string;
  hint?: string;
  processed?: {
    totalInputTokens: number;
    totalOutputTokens: number;
    totalTokens: number;
    byModel: Record<string, { input: number; output: number; total: number }>;
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
  return num.toString();
}

function formatCost(cost: number): string {
  return '$' + cost.toFixed(2);
}

export default function UsagePage() {
  const [period, setPeriod] = useState('week');
  const [data, setData] = useState<UsageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsage() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/anthropic-usage?period=${period}`);
        const json = await res.json();
        setData(json);
        if (json.error && !json.processed) {
          setError(json.error);
        }
      } catch (e) {
        setError('Failed to fetch usage data');
      } finally {
        setLoading(false);
      }
    }
    fetchUsage();
  }, [period]);

  const processed = data?.processed;
  const maxTokens = processed?.byPeriod?.reduce((max, p) => Math.max(max, p.total), 0) || 1;

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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[var(--text-strong)]">Token Usage</h1>
            <p className="text-[var(--text-muted)] mt-1">Anthropic API usage statistics</p>
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

        {/* Error/Setup Message */}
        {error && (
          <div className="mb-8 p-6 bg-[var(--coral-bg)] border border-[var(--coral)] rounded-xl">
            <h3 className="font-semibold text-[var(--coral)] mb-2">Setup Required</h3>
            <p className="text-[var(--text)] mb-4">{error}</p>
            {data?.hint && (
              <p className="text-sm text-[var(--text-muted)]">{data.hint}</p>
            )}
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="w-8 h-8 border-2 border-[var(--primary)] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : processed ? (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
                <p className="text-sm text-[var(--text-muted)] mb-1">Total Tokens</p>
                <p className="text-3xl font-bold text-[var(--text-strong)]">{formatNumber(processed.totalTokens)}</p>
              </div>
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
                <p className="text-sm text-[var(--text-muted)] mb-1">Input Tokens</p>
                <p className="text-3xl font-bold text-[var(--primary)]">{formatNumber(processed.totalInputTokens)}</p>
              </div>
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
                <p className="text-sm text-[var(--text-muted)] mb-1">Output Tokens</p>
                <p className="text-3xl font-bold text-[var(--coral)]">{formatNumber(processed.totalOutputTokens)}</p>
              </div>
              <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
                <p className="text-sm text-[var(--text-muted)] mb-1">Est. Cost</p>
                <p className="text-3xl font-bold text-[var(--text-strong)]">{formatCost(processed.estimatedCost)}</p>
              </div>
            </div>

            {/* Usage Chart */}
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6 mb-8">
              <h2 className="text-lg font-semibold text-[var(--text-strong)] mb-6">Usage Over Time</h2>
              <div className="space-y-3">
                {processed.byPeriod.map((item) => (
                  <div key={item.date} className="flex items-center gap-4">
                    <span className="text-sm text-[var(--text-muted)] w-24 shrink-0">
                      {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <div className="flex-1 h-8 bg-[var(--bg)] rounded-lg overflow-hidden flex">
                      <div 
                        className="h-full bg-[var(--primary)]"
                        style={{ width: `${(item.input / maxTokens) * 100}%` }}
                        title={`Input: ${formatNumber(item.input)}`}
                      />
                      <div 
                        className="h-full bg-[var(--coral)]"
                        style={{ width: `${(item.output / maxTokens) * 100}%` }}
                        title={`Output: ${formatNumber(item.output)}`}
                      />
                    </div>
                    <span className="text-sm font-medium text-[var(--text-strong)] w-20 text-right">
                      {formatNumber(item.total)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-[var(--primary)]"></div>
                  <span className="text-sm text-[var(--text-muted)]">Input</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-[var(--coral)]"></div>
                  <span className="text-sm text-[var(--text-muted)]">Output</span>
                </div>
              </div>
            </div>

            {/* By Model */}
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
              <h2 className="text-lg font-semibold text-[var(--text-strong)] mb-6">Usage by Model</h2>
              <div className="space-y-4">
                {Object.entries(processed.byModel).map(([model, stats]) => (
                  <div key={model} className="flex items-center justify-between p-4 bg-[var(--bg)] rounded-lg">
                    <div>
                      <p className="font-medium text-[var(--text-strong)]">{model}</p>
                      <p className="text-sm text-[var(--text-muted)]">
                        {formatNumber(stats.input)} in / {formatNumber(stats.output)} out
                      </p>
                    </div>
                    <p className="text-xl font-bold text-[var(--primary)]">{formatNumber(stats.total)}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-24 text-[var(--text-muted)]">
            No usage data available
          </div>
        )}
      </main>
    </div>
  );
}
