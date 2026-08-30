'use client';

import { achievements, profileLinks } from '@/content/skills';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Signals() {
  return (
    <section id="signals" aria-labelledby="signals-heading" className="max-w-7xl mx-auto px-6 py-24">
      <ScrollReveal>
        <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-muted)] mb-2">
          CH.05 / SIGNALS
        </div>
        <h2 id="signals-heading" className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-[2.5rem] tracking-[-0.02em] text-[var(--color-ink)] mb-16">
          Signals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="border border-[var(--color-edge)] rounded-[4px] bg-[var(--color-panel)] p-5 relative overflow-hidden group">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/[0.06] to-transparent z-10" />
              <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-flux)] font-semibold">
                {achievement.title}
              </h3>
              <p className="text-xs text-[var(--color-muted)] mt-2">
                {achievement.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          {profileLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-[var(--color-ink)] hover:text-[var(--color-trace)] transition-colors border border-[var(--color-edge)] rounded-[4px] px-4 py-3 flex items-center gap-2 group"
            >
              {link.label}
              <ArrowUpRight size={16} className="text-[var(--color-muted)] group-hover:text-[var(--color-trace)] transition-colors" />
            </a>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
