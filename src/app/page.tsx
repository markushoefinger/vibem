'use client';

import { useState } from 'react';
import { Logo } from '@/components/Logo';

// Minimal SVG Icons
const Icons = {
  target: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  sparkle: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-7.07l-2.83 2.83M9.76 14.24l-2.83 2.83m11.14 0l-2.83-2.83M9.76 9.76L6.93 6.93" />
    </svg>
  ),
  bolt: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  user: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  cpu: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3m6-3v3M9 20v3m6-3v3M1 9h3m-3 6h3M20 9h3m-3 6h3" />
    </svg>
  ),
  receipt: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M9 14l2 2 4-4" />
      <path d="M4 4v16l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V4l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z" />
    </svg>
  ),
  calendar: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  mail: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  ),
  chart: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M3 3v18h18" />
      <path d="M7 16l4-4 4 4 6-6" />
    </svg>
  ),
  wallet: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <circle cx="16" cy="14" r="1" />
    </svg>
  ),
  ship: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M3 17l2 4h14l2-4" />
      <path d="M5 17V9l7-4 7 4v8" />
      <path d="M12 5v8" />
    </svg>
  ),
  health: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
      <path d="M12 8v8m-4-4h8" />
    </svg>
  ),
  arrow: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
};

// Project data
const projects = [
  {
    name: 'Bill.Dock',
    tagline: 'AI Receipt & Expense Scanner',
    description: 'Snap a photo. Done. AI extracts everything and creates tax-ready expense reports.',
    status: 'live',
    url: 'https://billdock.io',
    color: 'primary',
    icon: Icons.receipt,
  },
  {
    name: 'Jenda',
    tagline: 'Subscription Tracker',
    description: 'Connect Gmail or forward receipts. AI detects your subscriptions automatically. No bank access needed.',
    status: 'live',
    url: 'https://jenda.app',
    color: 'coral',
    icon: Icons.calendar,
  },
  {
    name: 'Zero-Friction Tasks',
    tagline: 'Personal Task Manager',
    description: 'The first and only Todo app that syncs iOS and Windows natively. One tap. One task. Done.',
    status: 'live',
    url: 'https://zerofriction.app',
    color: 'primary',
    icon: Icons.check,
  },
  {
    name: 'StarReply',
    tagline: 'Smart Email Responses',
    description: 'AI-powered email templates that actually sound like you.',
    status: 'coming',
    url: 'https://starreply.ai',
    color: 'coral',
    icon: Icons.mail,
  },
  {
    name: 'OAWS Performance',
    tagline: 'Podcast Investment Tracker',
    description: 'Stock picks from the "Ohne Aktien wird schwer" podcast vs. S&P 500 Index. Investment tracking since August 2024.',
    status: 'live',
    url: 'https://oaws-performance.vercel.app/',
    color: 'primary',
    icon: Icons.chart,
  },
  {
    name: 'Seajet Wallet',
    tagline: 'Ferry Tickets to Wallet',
    description: 'Convert your SEAJETS ferry tickets to Apple or Google Wallet. Board faster.',
    status: 'live',
    url: 'https://seajetswallet.onrender.com/',
    color: 'coral',
    icon: Icons.ship,
  },
  {
    name: 'Jaukerl',
    tagline: 'Vaccination Record Analyzer',
    description: 'Analyze your Austrian ELGA vaccination records. Fast, secure, private.',
    status: 'live',
    url: 'https://www.jaukerl.com/',
    color: 'primary',
    icon: Icons.health,
  },
  {
    name: 'Sheduler',
    tagline: 'Dynamic Event Agendas',
    description: 'Beautiful multi-day workshop agendas with automatic calendar sync for participants.',
    status: 'coming',
    url: 'https://www.sheduler.com',
    color: 'coral',
    icon: Icons.calendar,
  },
];

const philosophyItems = [
  { icon: Icons.target, title: 'Minimalism', desc: "If it adds complexity, it doesn't ship." },
  { icon: Icons.sparkle, title: 'Attention to Detail', desc: "The things most won't notice but everyone will feel." },
  { icon: Icons.bolt, title: 'Zero Friction', desc: 'One tap. One task. Done.' },
  { icon: Icons.user, title: 'User First', desc: 'From user needs backwards to technology.' },
];

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--bg)]/90 border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Logo size={36} />
            <span className="font-bold text-xl text-[var(--text-strong)]">VibeM</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">About</a>
            <a href="#projects" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">Projects</a>
            <a href="#contact" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">Contact</a>
          </div>

          {/* Mobile Burger Button */}
          <button 
            className="md:hidden p-2 text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]">
            <div className="px-6 py-4 flex flex-col gap-4">
              <a 
                href="#about" 
                className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-bg)] text-[var(--primary)] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
            Micro-SaaS Studio
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-strong)] mb-6 leading-tight">
            Removing friction,<br />
            <span className="text-[var(--primary)]">one tool at a time.</span>
          </h1>
          <p className="text-xl text-[var(--text)] max-w-2xl mx-auto mb-10">
            We find everyday annoyances and build AI-powered tools that make them disappear. 
            Simple products. Perfect use cases. Zero friction.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a 
              href="#projects"
              className="px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-xl hover:bg-[var(--primary-light)] transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--primary)]/20"
            >
              Explore Projects
            </a>
            <a 
              href="#about"
              className="px-6 py-3 bg-[var(--card)] text-[var(--text-strong)] font-semibold rounded-xl border border-[var(--border)] hover:border-[var(--primary)] transition-all hover:-translate-y-0.5"
            >
              Our Story
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy Badges */}
      <section className="py-12 px-6 border-y border-[var(--border)]">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {['User-First', 'AI-Powered', 'Zero Friction', 'Privacy-Focused', 'Made in Vienna'].map((badge) => (
            <span key={badge} className="px-4 py-2 bg-[var(--card)] border border-[var(--border)] rounded-full text-sm font-medium text-[var(--text-muted)]">
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Photo & Badge */}
            <div className="md:col-span-2 flex flex-col items-center text-center">
              <div className="relative mb-4">
                <img 
                  src="/founder.png" 
                  alt="Markus Höfinger - Founder VibeM"
                  className="w-40 h-40 rounded-2xl object-cover border-4 border-[var(--border)]"
                />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--primary)] text-white text-xs font-semibold rounded-full">
                  Founder
                </span>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-strong)]">Markus Höfinger</h3>
              <p className="text-sm text-[var(--text-muted)] mb-4">Founder, VibeM</p>
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Vienna, Austria
              </div>
            </div>

            {/* Story */}
            <div className="md:col-span-3">
              <p className="text-lg text-[var(--text)] mb-4 leading-relaxed">
                &ldquo;I&apos;ve been building digital products since 1993 — when I founded Austria&apos;s first internet agency at 23. 
                Since then, I&apos;ve spent 30+ years in the digital space, from startups to leading a 150-person team at Accenture Song.&rdquo;
              </p>
              <p className="text-[var(--text)] mb-4">
                Today, I&apos;m back to my roots: building products. Not for enterprises with endless budgets, but for real people with real problems. 
                The kind of tools I&apos;d want to use myself.
              </p>
              <p className="text-[var(--text)] mb-6">
                VibeM is my answer to 30 years of watching software promise simplicity and deliver complexity. 
                We build micro-SaaS that actually makes sense — one perfect use case at a time.
              </p>
              <div className="flex flex-wrap gap-2">
                {['30+ Years Digital', 'Serial Founder', 'Product-First'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[var(--primary-bg)] text-[var(--primary)] text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--text-strong)] mb-6">
                We Build Micro-SaaS That Actually Makes Sense
              </h2>
              <p className="text-[var(--text)] mb-4">
                We&apos;re not building the flashy, never-been-done-before kind of products. 
                We&apos;re building the kind that&apos;s been around forever but never quite worked the way it should.
              </p>
              <p className="text-[var(--text)] mb-4">
                We look for those moments where people think &ldquo;there has to be a better way&rdquo; — and build that better way.
              </p>
              <p className="text-[var(--text)]">
                Every feature we add, we ask: does this make things simpler or more complex? 
                If it&apos;s the latter, it doesn&apos;t ship.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {philosophyItems.map((item) => (
                <div key={item.title} className="p-5 bg-[var(--bg)] border border-[var(--border)] rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary-bg)] text-[var(--primary)] flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-[var(--text-strong)] mb-1">{item.title}</h3>
                  <p className="text-xs text-[var(--text-muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-20 px-6 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-2xl bg-[var(--coral-bg)] text-[var(--coral)] flex items-center justify-center mx-auto mb-6">
            {Icons.cpu}
          </div>
          <h2 className="text-3xl font-bold text-[var(--text-strong)] mb-4">
            AI That Actually Helps
          </h2>
          <p className="text-[var(--text)] max-w-xl mx-auto mb-8">
            We&apos;re not building AI wrappers that slap a chat interface on everything and call it innovation. 
            We&apos;re integrating AI where it genuinely solves problems.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Smart parsing that understands intent', 'Auto-categorization that learns', 'Natural language that just works'].map((item) => (
              <span key={item} className="px-4 py-2 bg-[var(--coral-bg)] text-[var(--coral)] rounded-full text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--text-strong)] mb-4">Our Projects</h2>
            <p className="text-[var(--text)] max-w-xl mx-auto">
              Single-purpose tools that do one thing exceptionally well. No feature bloat. No &ldquo;enterprise&rdquo; complexity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target={project.url !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`group relative p-6 bg-[var(--card)] border border-[var(--border)] rounded-2xl transition-all hover:border-[var(--primary)] hover:shadow-lg hover:-translate-y-1 ${project.url === '#' ? 'cursor-default' : ''}`}
                onMouseEnter={() => setHoveredProject(project.name)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  {project.status === 'live' ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[var(--success-bg)] text-[var(--success)] text-xs font-semibold rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]"></span>
                      Live
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-1 bg-[var(--bg)] text-[var(--text-muted)] text-xs font-semibold rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Project Icon */}
                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${project.color === 'primary' ? 'bg-[var(--primary-bg)] text-[var(--primary)]' : 'bg-[var(--coral-bg)] text-[var(--coral)]'}`}>
                  {project.icon}
                </div>

                <h3 className="text-lg font-bold text-[var(--text-strong)] mb-1 group-hover:text-[var(--primary)] transition-colors">
                  {project.name}
                </h3>
                <p className={`text-sm font-medium mb-3 ${project.color === 'primary' ? 'text-[var(--primary)]' : 'text-[var(--coral)]'}`}>
                  {project.tagline}
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  {project.description}
                </p>

                {/* Hover Arrow */}
                {project.url !== '#' && (
                  <div className={`absolute bottom-6 right-6 w-8 h-8 rounded-full bg-[var(--bg)] flex items-center justify-center transition-all text-[var(--primary)] ${hoveredProject === project.name ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                    {Icons.arrow}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--text-strong)] mb-4">Let&apos;s Talk</h2>
          <p className="text-[var(--text)] mb-8">
            Have an everyday problem that deserves a better solution? We&apos;d love to hear about it.
          </p>
          <a 
            href="mailto:hello@vibem.net"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-xl hover:bg-[var(--primary-light)] transition-all hover:-translate-y-0.5 shadow-lg shadow-[var(--primary)]/20"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            hello@vibem.net
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--border)]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-3">
              <Logo size={32} />
              <span className="font-semibold text-[var(--text-strong)]">VibeM</span>
              <span className="text-[var(--text-muted)]">— Micro-SaaS Studio, Vienna</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/legal/imprint" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">Imprint</a>
              <a href="/legal/privacy" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">Privacy</a>
              <a href="/legal/terms" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">Terms</a>
            </div>
          </div>
          <div className="text-center text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} S&C Holding GmbH. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
