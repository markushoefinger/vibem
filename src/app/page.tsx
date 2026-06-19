'use client';

import { useState } from 'react';
import { Logo } from '@/components/Logo';

// Project data
const projects = [
  { name: 'Bill.Dock', tagline: 'AI Receipt & Expense Scanner', description: 'Snap a photo. Done. AI extracts everything and creates tax-ready expense reports.', status: 'live', url: 'https://billdock.io' },
  { name: 'Jenda', tagline: 'Subscription Tracker', description: 'Connect Gmail or forward receipts. AI detects your subscriptions automatically. No bank access needed.', status: 'live', url: 'https://jenda.app' },
  { name: 'AgentSpeed', tagline: 'AI Agent Readiness Scanner', description: 'Like PageSpeed, but for AI agents. Scans your site for invisible barriers that block AI agents and gives you actionable fixes.', status: 'live', url: 'https://agentspeed.dev' },
  { name: 'OpenPAX', tagline: 'Flight Booking API for AI', description: 'Where AI agents book travel. Search 300+ airlines, book flights via REST API or MCP server. Flat €9.99 per booking.', status: 'live', url: 'https://openpax.ai' },
  { name: 'Zero-Friction Tasks', tagline: 'Personal Task Manager', description: 'The first and only Todo app that syncs iOS and Windows natively. One tap. One task. Done.', status: 'live', url: 'https://zerofriction.app' },
  { name: 'StarReply', tagline: 'Automated Google Review Replies', description: 'AI-powered replies that sound like you. Connect Google Business Profile, never worry about reviews again.', status: 'coming', url: 'https://starreply.ai' },
  { name: 'OAWS Performance', tagline: 'Podcast Investment Tracker', description: 'Stock picks from the "Ohne Aktien wird schwer" podcast vs. S&P 500 Index. Investment tracking since August 2024.', status: 'live', url: 'https://oaws-performance.vercel.app/' },
  { name: 'Seajet Wallet', tagline: 'Ferry Tickets to Wallet', description: 'Convert your SEAJETS ferry tickets to Apple or Google Wallet. Board faster.', status: 'live', url: 'https://seajetswallet.onrender.com/' },
  { name: 'Jaukerl', tagline: 'Vaccination Record Analyzer', description: 'Analyze your Austrian ELGA vaccination records. Fast, secure, private.', status: 'live', url: 'https://www.jaukerl.com/' },
  { name: 'Sheduler', tagline: 'Dynamic Event Agendas', description: 'Beautiful multi-day workshop agendas with automatic calendar sync for participants.', status: 'coming', url: 'https://www.sheduler.com' },
  { name: 'ETF Savings Calculator', tagline: 'Plan Your Wealth', description: 'The simplest yet most advanced ETF savings plan calculator. Visualize your future.', status: 'live', url: 'https://etf-rechner-sparplan.de' },
  { name: 'Grouple', tagline: 'Group Payments Made Easy', description: 'Split bills and collect group payments frictionlessly. No app downloads needed.', status: 'coming', url: 'https://grouple.net' },
  { name: 'HireSift', tagline: 'AI Applicant Screening', description: 'AI-powered hiring that sifts through applicants and shortlists the right talent.', status: 'live', url: 'https://hiresift.ai' },
];

const principles = [
  { n: '01', title: 'Minimalism', body: "If it adds complexity, it doesn't ship." },
  { n: '02', title: 'Attention to Detail', body: "The things most won't notice but everyone will feel." },
  { n: '03', title: 'Zero Friction', body: 'One tap. One task. Done.' },
  { n: '04', title: 'User First', body: 'From user needs backwards to technology.' },
];

const badges = ['User-First', 'AI-Powered', 'Zero Friction', 'Privacy-Focused', 'Made in Vienna'];

const aiTags = [
  'Smart parsing that understands intent',
  'Auto-categorization that learns',
  'Natural language that just works',
];

const navLinks = [
  { label: 'projects', href: '#projects' },
  { label: 'story', href: '#about' },
  { label: 'principles', href: '#principles' },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      {/* HEADER */}
      <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[rgba(241,236,224,0.85)] backdrop-blur-[8px]">
        <div className="flex items-center justify-between px-6 md:px-12 py-4">
          <a href="#" className="flex items-center gap-3 text-[var(--ink)]">
            <Logo size={30} />
            <span className="mono font-bold text-[17px] tracking-[-0.01em]">SpacerGIF</span>
          </a>

          {/* Desktop nav */}
          <nav className="mono hidden md:flex items-center gap-7 text-[13px]">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-[var(--muted)] hover:text-[var(--ink)] transition-colors">{l.label}</a>
            ))}
            <a href="mailto:hello@spacer-gif.com" className="inline-flex items-center px-[18px] py-[9px] bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--green)] transition-colors">contact</a>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden mono inline-flex items-center justify-center w-[34px] h-[34px] border border-[var(--ink)] text-[var(--ink)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '×' : '≡'}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="mono md:hidden border-t border-[var(--border)] px-6 py-4 flex flex-col gap-4 text-[14px]">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileMenuOpen(false)} className="text-[var(--muted)] hover:text-[var(--ink)] transition-colors">{l.label}</a>
            ))}
            <a href="mailto:hello@spacer-gif.com" onClick={() => setMobileMenuOpen(false)} className="text-[var(--green)]">contact</a>
          </nav>
        )}
      </header>

      <div className="max-w-[1200px] mx-auto">
        {/* HERO */}
        <section className="grid-paper border-b border-[var(--border)] px-6 md:px-12 pt-20 md:pt-[120px] pb-20 md:pb-[104px]">
          <div className="mono text-[13px] text-[var(--green)] mb-8 md:mb-10">~/vienna/micro-saas $ <span className="text-[var(--ink)]">whoami</span></div>
          <h1 className="font-medium tracking-[-0.03em] leading-[1.0] m-0 mb-9 text-[clamp(40px,8.5vw,92px)]">
            Removing friction, one tool at a time.<span className="tm-cursor" />
          </h1>
          <p className="mono text-[16px] leading-[1.65] text-[var(--body)] m-0 mb-12">
            We find everyday annoyances and build AI-powered tools that make them disappear. Simple products. Perfect use cases. Zero friction.
          </p>
          <div className="flex gap-3 items-center flex-wrap">
            <a href="#projects" className="mono inline-flex items-center px-7 py-[15px] bg-[var(--green)] text-[var(--paper)] text-[14px] hover:bg-[var(--green-dark)] transition-colors">Explore Projects</a>
            <a href="#about" className="mono inline-flex items-center px-7 py-[15px] border border-[var(--ink)] text-[var(--ink)] text-[14px] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors">Our Story</a>
            <div className="mono flex items-center gap-[9px] ml-2.5 text-[11px] text-[var(--faint)]">
              <span className="inline-block w-3 h-3 border border-[var(--border2)]" />width=1 height=1
            </div>
          </div>
        </section>

        {/* STACK / BADGES */}
        <section className="border-b border-[var(--border)] px-6 md:px-12 py-12">
          <div className="mono text-[12px] text-[var(--faint)] mb-6">$ cat stack.txt</div>
          <div className="flex flex-wrap gap-3">
            {badges.map((b) => (
              <span key={b} className="mono text-[13px] text-[var(--muted)] border border-[var(--border)] bg-[var(--card)] px-[14px] py-[7px]">{b}</span>
            ))}
          </div>
        </section>

        {/* FOUNDER */}
        <section id="about" className="border-b border-[var(--border)] px-6 md:px-12 py-20">
          <div className="mono text-[12px] text-[var(--faint)] mb-10">// founder</div>
          <div className="grid md:grid-cols-[240px_1fr] gap-12">
            <div className="flex flex-col gap-4">
              <img src="/founder.jpg" alt="Markus Hoefinger - Founder SpacerGIF" className="w-full max-w-[240px] aspect-square object-cover" />
              <div>
                <div className="text-[22px] font-medium tracking-[-0.01em]">Markus Hoefinger</div>
                <div className="mono text-[13px] text-[var(--green)] mt-1">Founder, SpacerGIF</div>
                <div className="mono text-[12px] text-[var(--faint)] mt-1">Vienna, Austria</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['30+ Years Digital', 'Serial Founder', 'Product-First'].map((t) => (
                  <span key={t} className="mono text-[11px] text-[var(--muted)] border border-[var(--border)] px-2.5 py-1">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-medium text-[clamp(28px,5vw,40px)] tracking-[-0.02em] m-0 mb-7">From Dial-Up to AI</h2>
              <p className="mono text-[15px] leading-[1.8] text-[var(--body)] m-0 mb-4">
                &ldquo;I&apos;ve been building digital products since 1993 — when I co-founded Austria&apos;s first digital agency at 23. Since then, I&apos;ve spent 30+ years in the digital space, from startups to leading a 150-person team at Accenture Song.&rdquo;
              </p>
              <p className="mono text-[15px] leading-[1.8] text-[var(--body)] m-0 mb-4">
                Today, I&apos;m back to my roots: building products. Not for enterprises with endless budgets, but for real people with real problems. The kind of tools I&apos;d want to use myself.
              </p>
              <p className="mono text-[15px] leading-[1.8] text-[var(--body)] m-0">
                SpacerGIF is my answer to 30 years of watching software promise simplicity and deliver complexity. We build micro-SaaS that actually makes sense — one perfect use case at a time.
              </p>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section id="principles" className="border-b border-[var(--border)] px-6 md:px-12 py-20">
          <div className="mono text-[12px] text-[var(--faint)] mb-10">// principles</div>
          <div className="mb-12">
            <h2 className="font-medium text-[clamp(26px,4.5vw,36px)] tracking-[-0.02em] leading-[1.15] m-0 mb-6">We Build Micro-SaaS That Actually Makes Sense</h2>
            <p className="mono text-[14px] leading-[1.75] text-[var(--body)] m-0 mb-3">We&apos;re not building the flashy, never-been-done-before kind of products. We&apos;re building the kind that&apos;s been around forever but never quite worked the way it should.</p>
            <p className="mono text-[14px] leading-[1.75] text-[var(--body)] m-0 mb-3">We look for those moments where people think &ldquo;there has to be a better way&rdquo; — and build that better way.</p>
            <p className="mono text-[14px] leading-[1.75] text-[var(--body)] m-0">Every feature we add, we ask: does this make things simpler or more complex? If it&apos;s the latter, it doesn&apos;t ship.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {principles.map((p) => (
              <div key={p.n} className="border border-[var(--border)] bg-[var(--card)] px-[22px] pt-[26px] pb-8 flex flex-col gap-4 min-h-[178px]">
                <div className="flex items-center gap-[9px]">
                  <span className="inline-block w-[11px] h-[11px] border border-[var(--green)]" />
                  <span className="mono text-[12px] text-[var(--green)]">{p.n}</span>
                </div>
                <span className="font-medium text-[19px] tracking-[-0.01em]">{p.title}</span>
                <span className="mono text-[12px] leading-[1.6] text-[var(--muted)]">{p.body}</span>
              </div>
            ))}
          </div>
        </section>

        {/* AI */}
        <section className="border-b border-[var(--border)] px-6 md:px-12 py-20">
          <div className="mono text-[12px] text-[var(--faint)] mb-10">// ai</div>
          <div>
            <h2 className="font-medium text-[clamp(26px,4.5vw,36px)] tracking-[-0.02em] m-0 mb-6">AI That Actually Helps</h2>
            <p className="mono text-[15px] leading-[1.8] text-[var(--body)] m-0 mb-8">We&apos;re not building AI wrappers that slap a chat interface on everything and call it innovation. We&apos;re integrating AI where it genuinely solves problems.</p>
            <div className="flex flex-wrap gap-3">
              {aiTags.map((t) => (
                <span key={t} className="mono text-[12px] text-[var(--green)] border border-[var(--green)] px-[14px] py-2">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="border-b border-[var(--border)] px-6 md:px-12 py-20">
          <div className="mono flex justify-between items-baseline mb-9 text-[12px] text-[var(--faint)]">
            <span>$ ls ./projects</span>
            <span>{projects.length} tools</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((t) => (
              <a
                key={t.name}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-[var(--border)] bg-[var(--card)] px-[22px] py-5 flex items-start gap-[15px] hover:border-[var(--ink)] transition-colors"
              >
                <span className="inline-block flex-none w-[13px] h-[13px] border border-[var(--border2)] mt-1.5 group-hover:border-[var(--green)] transition-colors" />
                <div className="flex-1 flex flex-col gap-1.5">
                  <div className="flex justify-between items-baseline gap-3">
                    <span className="mono font-bold text-[16px]">{t.name}</span>
                    {t.status === 'live'
                      ? <span className="mono text-[11px] text-[var(--green)] whitespace-nowrap">[live]</span>
                      : <span className="mono text-[11px] text-[var(--border2)] whitespace-nowrap">[soon]</span>}
                  </div>
                  <span className="mono text-[12px] text-[var(--faint)]">{t.tagline}</span>
                  <span className="text-[14.5px] leading-[1.45] text-[var(--body)]">{t.description}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-b border-[var(--border)] px-6 md:px-12 py-24">
          <div className="mono text-[12px] text-[var(--faint)] mb-5">// contact</div>
          <a href="mailto:hello@spacer-gif.com" className="mono inline-block font-bold text-[clamp(28px,6vw,44px)] tracking-[-0.025em] text-[var(--green)] hover:text-[var(--ink)] transition-colors no-underline">hello@spacer-gif.com</a>
          <div className="mono text-[13px] text-[var(--faint)] mt-5">// made in Vienna</div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="max-w-[1200px] mx-auto px-6 md:px-12 py-7 flex flex-col sm:flex-row gap-4 justify-between items-center mono text-[12px] text-[var(--faint)]">
        <div className="flex items-center gap-2.5 text-[var(--faint)]">
          <Logo size={18} />
          <span>© {new Date().getFullYear()} S&amp;C Holding GmbH</span>
        </div>
        <span className="flex gap-[22px]">
          <a href="/legal/imprint" className="text-[var(--faint)] hover:text-[var(--ink)] transition-colors">imprint</a>
          <a href="/legal/privacy" className="text-[var(--faint)] hover:text-[var(--ink)] transition-colors">privacy</a>
          <a href="/legal/terms" className="text-[var(--faint)] hover:text-[var(--ink)] transition-colors">terms</a>
        </span>
      </footer>
    </div>
  );
}
