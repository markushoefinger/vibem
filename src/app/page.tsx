'use client';

import { useState } from 'react';
import { Logo } from '@/components/Logo';

// Project data
type Project = {
  name: string;
  tagline: string;
  description: string;
  status: string;
  url: string;
  devStart: string;
  logo: string;
  favorite?: boolean;
};
const projects: Project[] = [
  { name: 'Bill.Dock', tagline: 'AI Receipt & Expense Scanner', description: 'Snap a photo. Done. AI extracts everything and creates tax-ready expense reports.', status: 'live', url: 'https://billdock.io', devStart: '2025-11', favorite: true, logo: '/logos/billdock.png' },
  { name: 'Jenda', tagline: 'Subscription Tracker', description: 'Connect Gmail or forward receipts. AI detects your subscriptions automatically. No bank access needed.', status: 'live', url: 'https://jenda.app', devStart: '2026-01', logo: '/logos/jenda.png' },
  { name: 'AgentSpeed', tagline: 'AI Agent Readiness Scanner', description: 'Like PageSpeed, but for AI agents. Scans your site for invisible barriers that block AI agents and gives you actionable fixes.', status: 'live', url: 'https://agentspeed.dev', devStart: '2026-03', logo: '/logos/agentspeed.png' },
  { name: 'OpenPAX', tagline: 'Flight Booking API for AI', description: 'Where AI agents book travel. Search 300+ airlines, book flights via REST API or MCP server. Flat €9.99 per booking.', status: 'live', url: 'https://openpax.ai', devStart: '2026-02', favorite: true, logo: '/logos/openpax.png' },
  { name: 'Zero-Friction Tasks', tagline: 'Personal Task Manager', description: 'The first and only Todo app that syncs iOS and Windows natively. One tap. One task. Done.', status: 'live', url: 'https://zerofriction.app', devStart: '2025-09', favorite: true, logo: '/logos/zerofriction.png' },
  { name: 'StarReply', tagline: 'Automated Google Review Replies', description: 'AI-powered replies that sound like you. Connect Google Business Profile, never worry about reviews again.', status: 'coming', url: 'https://starreply.ai', devStart: '2026-01', logo: '/logos/starreply.png' },
  { name: 'OAWS Performance', tagline: 'Podcast Investment Tracker', description: 'Stock picks from the "Ohne Aktien wird schwer" podcast vs. S&P 500 Index. Investment tracking since August 2024.', status: 'live', url: 'https://oaws-performance.vercel.app/', devStart: '2025-08', logo: '/logos/oaws.png' },
  { name: 'Seajet Wallet', tagline: 'Ferry Tickets to Wallet', description: 'Convert your SEAJETS ferry tickets to Apple or Google Wallet. Board faster.', status: 'live', url: 'https://seajetswallet.onrender.com/', devStart: '2025-07', logo: '/logos/seajets.png' },
  { name: 'Jaukerl', tagline: 'Vaccination Record Analyzer', description: 'Analyze your Austrian ELGA vaccination records. Fast, secure, private.', status: 'live', url: 'https://www.jaukerl.com/', devStart: '2025-07', logo: '/logos/jaukerl.png' },
  { name: 'Sheduler', tagline: 'Dynamic Event Agendas', description: 'Beautiful multi-day workshop agendas with automatic calendar sync for participants.', status: 'coming', url: 'https://www.sheduler.com', devStart: '2025-11', logo: '/logos/sheduler.svg' },
  { name: 'ETF Savings Calculator', tagline: 'Plan Your Wealth', description: 'The simplest yet most advanced ETF savings plan calculator. Visualize your future.', status: 'live', url: 'https://etf-rechner-sparplan.de', devStart: '2026-02', logo: '/logos/etf.png' },
  { name: 'HireSift', tagline: 'AI Applicant Screening', description: 'AI-powered hiring that sifts through applicants and shortlists the right talent.', status: 'live', url: 'https://hiresift.ai', devStart: '2026-02', logo: '/logos/hiresift.png' },
  { name: 'SoloCoach', tagline: 'Booking & Payments for Coaches', description: 'Independent sports coaches take bookings and get paid in one app. Clients book on mobile web, payments run through Stripe. No spreadsheets, no chasing money.', status: 'live', url: 'https://solocoach.io/', devStart: '2026-04', favorite: true, logo: '/logos/solocoach.png' },
  { name: 'MokkApp', tagline: 'App Store Screenshot Studio', description: 'Turn raw app screenshots into polished App Store visuals. The fastest way to design store listings that convert. Built for indie devs who ship.', status: 'live', url: 'https://mokkapp.app/', devStart: '2026-06', favorite: true, logo: '/logos/mokkapp.svg' },
  { name: 'Glimpy', tagline: 'Math Trainer for Children', description: 'A calculator that works the other way round: it poses the problem, the child types the answer. Ages 5 to 9, five levels, and a drill built from the problems they got wrong. No ads, no accounts, no data leaving the phone.', status: 'coming', url: 'https://www.spacer-gif.com/glimpy', devStart: '2026-07', logo: '/logos/glimpy.png' },
  { name: 'HeyDiane', tagline: 'Agent-Ready Conversation Knowledge', description: 'Record meetings, client calls and voice notes. AI turns them into speaker-labelled conversations, summaries, follow-up emails and searchable knowledge. Automatically.', status: 'live', url: 'https://www.heydiane.ai/', devStart: '2026-08', logo: '/logos/heydiane.svg' },
];

const principles = [
  { n: '01', title: 'Minimalism', body: 'If it adds complexity, it does not ship.' },
  { n: '02', title: 'Attention to Detail', body: 'The things most people will not notice, but everyone will feel.' },
  { n: '03', title: 'Zero Friction', body: 'One tap. One task. Done.' },
  { n: '04', title: 'User First', body: 'Start with what the user needs. Work backwards to the tech.' },
];

const badges = ['User-First', 'Built to Last', 'Privacy-Focused', 'Made in Vienna'];

const aiTags = [
  'Smart parsing that understands intent.',
  'Categorization that learns as you go.',
  'Plain language that just works.',
];

const navLinks = [
  { label: 'projects', href: '#projects' },
  { label: 'story', href: '#about' },
  { label: 'principles', href: '#principles' },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sort, setSort] = useState<'date' | 'a-z' | 'fav'>('date');
  const sortedProjects = [...projects].sort((a, b) => {
    if (sort === 'a-z') return a.name.localeCompare(b.name);
    if (sort === 'fav') {
      const diff = (b.favorite ? 1 : 0) - (a.favorite ? 1 : 0);
      if (diff !== 0) return diff;
    }
    return b.devStart.localeCompare(a.devStart); // newest first
  });

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
            Small tools that do one job right.<span className="tm-cursor" />
          </h1>
          <p className="mono text-[16px] leading-[1.65] text-[var(--body)] m-0 mb-12">
            I have built software since 1993, when I co-founded Austria&apos;s first digital agency at 23. Three decades later I am back at the keyboard to build products myself. Not for enterprises with endless budgets. For the small everyday annoyances nobody bothers to fix. If it annoys me, it probably annoys you too.
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
          <div className="mono text-[12px] text-[var(--faint)] mb-10">{'// founder'}</div>
          <div className="grid md:grid-cols-[240px_1fr] gap-12">
            <div className="flex flex-col gap-4">
              <img src="/founder.jpg" alt="Markus Hoefinger - Founder SpacerGIF" className="w-full max-w-[240px] aspect-square object-cover" />
              <div>
                <div className="text-[22px] font-medium tracking-[-0.01em]">Markus Hoefinger</div>
                <div className="mono text-[13px] text-[var(--green)] mt-1">Founder, SpacerGIF</div>
                <div className="mono text-[12px] text-[var(--faint)] mt-1">Vienna, Austria</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Since 1993', 'Serial Founder', 'Product-First'].map((t) => (
                  <span key={t} className="mono text-[11px] text-[var(--muted)] border border-[var(--border)] px-2.5 py-1">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-medium text-[clamp(28px,5vw,40px)] tracking-[-0.02em] m-0 mb-7">From Dial-Up to AI</h2>
              <p className="mono text-[15px] leading-[1.8] text-[var(--body)] m-0 mb-4">
                A spacer.gif was a 1x1 pixel nobody ever saw, but every web layout in the nineties needed one. Invisible, tiny, holding the whole thing together. That is the kind of software I build.
              </p>
              <p className="mono text-[15px] leading-[1.8] text-[var(--body)] m-0 mb-4">
                I co-founded Austria&apos;s first digital agency in 1993, at 23. The next three decades went from startups to leading a 150-person team at Accenture Song. Big budgets, big teams, big complexity.
              </p>
              <p className="mono text-[15px] leading-[1.8] text-[var(--body)] m-0 mb-4">
                Now I am back to where I started: building products with my own hands. Not for enterprises. For real people with real problems. The kind of tools I want to use myself.
              </p>
              <p className="mono text-[15px] leading-[1.8] text-[var(--body)] m-0">
                Every product here started the same way. Something annoyed me. I waited for someone to fix it. Nobody did. So I built it, with AI doing the heavy lifting. Sixteen annoyances, sixteen tools. If they bug me, chances are they bug you too.
              </p>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section id="principles" className="border-b border-[var(--border)] px-6 md:px-12 py-20">
          <div className="mono text-[12px] text-[var(--faint)] mb-10">{'// principles'}</div>
          <div className="mb-12">
            <h2 className="font-medium text-[clamp(26px,4.5vw,36px)] tracking-[-0.02em] leading-[1.15] m-0 mb-6">One Problem. One Tool. Finished.</h2>
            <p className="mono text-[14px] leading-[1.75] text-[var(--body)] m-0">Most software tries to do everything and nails nothing. I pick one annoying problem and build the tool that finally solves it the way it always should have worked. Then I move to the next one. The test for every feature is the same question: does this make the tool simpler or more complex? If it is the second one, it does not ship.</p>
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
          <div className="mono text-[12px] text-[var(--faint)] mb-10">{'// ai'}</div>
          <div>
            <h2 className="font-medium text-[clamp(26px,4.5vw,36px)] tracking-[-0.02em] m-0 mb-6">AI Where It Earns Its Place</h2>
            <p className="mono text-[15px] leading-[1.8] text-[var(--body)] m-0 mb-8">No chat box slapped on top of everything. AI sits inside the product only where it does real work: reading a receipt, sorting a subscription, understanding what you actually meant.</p>
            <div className="flex flex-wrap gap-3">
              {aiTags.map((t) => (
                <span key={t} className="mono text-[12px] text-[var(--green)] border border-[var(--green)] px-[14px] py-2">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="border-b border-[var(--border)] px-6 md:px-12 py-20">
          <div className="mono flex flex-wrap justify-between items-baseline gap-x-4 gap-y-2 mb-9 text-[12px] text-[var(--faint)]">
            <span>$ ls ./projects</span>
            <div className="flex items-center gap-2.5">
              <span>sort:</span>
              {(['date', 'a-z', 'fav'] as const).map((opt, i) => (
                <span key={opt} className="flex items-center gap-2.5">
                  {i > 0 && <span className="text-[var(--border2)]" aria-hidden="true">·</span>}
                  <button
                    type="button"
                    onClick={() => setSort(opt)}
                    aria-pressed={sort === opt}
                    className={`transition-colors ${sort === opt ? 'text-[var(--green)]' : 'text-[var(--faint)] hover:text-[var(--ink)]'}`}
                  >
                    {opt}
                  </button>
                </span>
              ))}
              <span className="text-[var(--border2)]" aria-hidden="true">·</span>
              <span>{projects.length} tools</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sortedProjects.map((t) => (
              <a
                key={t.name}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-[var(--border)] bg-[var(--card)] px-[22px] py-5 flex items-start gap-[15px] hover:border-[var(--ink)] transition-colors"
              >
                {t.logo
                  ? (
                    <span className="relative flex-none w-10 h-10 mt-0.5">
                      <img src={t.logo.replace(/(\.\w+)$/, '-mono$1')} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-contain opacity-90 group-hover:opacity-0 transition-opacity duration-200" />
                      <img src={t.logo} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </span>
                  )
                  : <span className="inline-block flex-none w-[13px] h-[13px] border border-[var(--border2)] mt-1.5 group-hover:border-[var(--green)] transition-colors" />}
                <div className="flex-1 flex flex-col gap-1.5">
                  <div className="flex justify-between items-baseline gap-3">
                    <span className="mono font-bold text-[16px] inline-flex items-center gap-1.5">
                      {t.name}
                      {t.favorite && <span className="text-[var(--green)] text-[12px] leading-none" title="favorite" aria-label="favorite">★</span>}
                    </span>
                    <span className="mono text-[11px] whitespace-nowrap flex items-baseline gap-2.5">
                      {t.devStart && <span className="text-[var(--faint)]" title="dev start">{t.devStart}</span>}
                      {t.status === 'live'
                        ? <span className="text-[var(--green)]">[live]</span>
                        : <span className="text-[var(--border2)]">[soon]</span>}
                    </span>
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
          <div className="mono text-[12px] text-[var(--faint)] mb-5">{'// contact'}</div>
          <a href="mailto:hello@spacer-gif.com" className="mono inline-block font-bold text-[clamp(28px,6vw,44px)] tracking-[-0.025em] text-[var(--green)] hover:text-[var(--ink)] transition-colors no-underline">hello@spacer-gif.com</a>
          <div className="mono text-[13px] text-[var(--faint)] mt-5">{'// made in Vienna'}</div>
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
