'use client';

import { useState } from 'react';

// Project data
const projects = [
  {
    name: 'Bill.Dock',
    tagline: 'AI Receipt & Expense Scanner',
    description: 'Snap a photo. Done. AI extracts everything and creates tax-ready expense reports.',
    status: 'live',
    url: 'https://billdock.io',
    color: 'primary',
  },
  {
    name: 'Jenda',
    tagline: 'Subscription Tracker',
    description: 'Connect Gmail or forward receipts. AI detects your subscriptions automatically. No bank access needed.',
    status: 'live',
    url: 'https://jenda.app',
    color: 'coral',
  },
  {
    name: 'Zero-Friction Tasks',
    tagline: 'Personal Task Manager',
    description: 'One tap. One task. Done. Task management stripped to its essence.',
    status: 'live',
    url: 'https://zerofriction.app',
    color: 'primary',
  },
  {
    name: 'StarReply',
    tagline: 'Smart Email Responses',
    description: 'AI-powered email templates that actually sound like you.',
    status: 'coming',
    url: 'https://starreply.at',
    color: 'coral',
  },
  {
    name: 'Ohne Aktien wird schwer',
    tagline: 'Performance Tracker',
    description: 'Track your stock portfolio performance with clarity and precision.',
    status: 'coming',
    url: '#',
    color: 'primary',
  },
  {
    name: 'Sea Wallet',
    tagline: 'Crypto Portfolio',
    description: 'Simple, beautiful crypto tracking without the complexity.',
    status: 'coming',
    url: '#',
    color: 'coral',
  },
];

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--bg)]/90 border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[var(--primary)] flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="font-bold text-xl text-[var(--text-strong)]">VibeM</span>
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">About</a>
            <a href="#projects" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">Projects</a>
            <a href="#contact" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-bg)] text-[var(--primary)] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
            Micro-SaaS Studio
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--text-strong)] mb-6 leading-tight">
            Building the future,<br />
            <span className="text-[var(--primary)]">one friction at a time.</span>
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

      {/* About */}
      <section id="about" className="py-24 px-6">
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
              {[
                { icon: '🎯', title: 'Minimalism', desc: 'If it adds complexity, it doesn\'t ship.' },
                { icon: '✨', title: 'Attention to Detail', desc: 'The things most won\'t notice but everyone will feel.' },
                { icon: '⚡', title: 'Zero Friction', desc: 'One tap. One task. Done.' },
                { icon: '👤', title: 'User First', desc: 'From user needs backwards to technology.' },
              ].map((item) => (
                <div key={item.title} className="p-5 bg-[var(--card)] border border-[var(--border)] rounded-2xl">
                  <div className="text-2xl mb-3">{item.icon}</div>
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
          <div className="w-16 h-16 rounded-2xl bg-[var(--coral-bg)] flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🤖</span>
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
                className={`group relative p-6 bg-[var(--card)] border border-[var(--border)] rounded-2xl transition-all hover:border-[var(--${project.color})] hover:shadow-lg hover:-translate-y-1 ${project.url === '#' ? 'cursor-default' : ''}`}
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
                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${project.color === 'primary' ? 'bg-[var(--primary-bg)]' : 'bg-[var(--coral-bg)]'}`}>
                  <span className={`text-xl font-bold ${project.color === 'primary' ? 'text-[var(--primary)]' : 'text-[var(--coral)]'}`}>
                    {project.name.charAt(0)}
                  </span>
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
                  <div className={`absolute bottom-6 right-6 w-8 h-8 rounded-full bg-[var(--bg)] flex items-center justify-center transition-all ${hoveredProject === project.name ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                    <svg className="w-4 h-4 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-6 bg-[var(--primary)]">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-white/90 italic">
            &ldquo;When you try to be everything to everyone, you end up being nothing to anyone.&rdquo;
          </blockquote>
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
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            hello@vibem.net
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--border)]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <span className="font-semibold text-[var(--text-strong)]">VibeM</span>
              <span className="text-[var(--text-muted)]">— Micro-SaaS Studio, Vienna</span>
            </div>
            <div className="text-sm text-[var(--text-muted)]">
              © {new Date().getFullYear()} S&C Holding GmbH. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
