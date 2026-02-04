import { NextResponse } from 'next/server';

// This API would need to be called from the OpenClaw host
// For now, we'll return mock data structure showing what's available

export async function GET() {
  // In production, this would call the OpenClaw gateway
  // The gateway doesn't expose sessions externally, so this is informational
  
  return NextResponse.json({
    info: 'Session data must be fetched from OpenClaw gateway directly',
    categories: [
      {
        id: 'discord',
        name: 'Discord Channels',
        pattern: 'agent:main:discord:channel:*',
        description: 'Chat sessions in Discord channels',
        examples: ['#development', '#reddit', '#sxsw', '#general']
      },
      {
        id: 'telegram',
        name: 'Telegram',
        pattern: 'agent:main:telegram:*',
        description: 'Direct Telegram messages'
      },
      {
        id: 'heartbeat',
        name: 'Heartbeat/Main',
        pattern: 'agent:main:main',
        description: 'Main session for heartbeat polls and Telegram delivery'
      },
      {
        id: 'cron',
        name: 'Cron Jobs',
        pattern: 'agent:main:cron:*',
        description: 'Scheduled tasks (Email Monitor, SXSW Weekly, Reddit Builder, etc.)',
        examples: ['Email Monitor (4h)', 'SXSW Weekly (Mon 10:00)', 'Reddit Karma Builder']
      },
      {
        id: 'spawn',
        name: 'Spawned Sub-agents',
        pattern: 'agent:spawn:*',
        description: 'Background tasks spawned by main agent'
      }
    ],
    metrics: [
      'totalTokens - Current context token count',
      'contextTokens - Max context window',
      'model - Model being used',
      'updatedAt - Last activity timestamp'
    ],
    note: 'Historical usage per session is not tracked by OpenClaw. Only current session state is available.'
  });
}
