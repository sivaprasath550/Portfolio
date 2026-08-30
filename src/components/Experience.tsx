'use client';

import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { experiences } from '@/content/experience';

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="max-w-7xl mx-auto px-6 py-24">
      <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-muted)] mb-3">
        CH.01 / EXPERIENCE
      </div>
      <h2
        id="experience-heading"
        className="font-display font-bold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--color-ink)] mb-12"
      >
        Experience
      </h2>

      <div className="relative border-l border-[var(--color-edge)] pl-8 space-y-12">
        {experiences.map((job) => (
          <ScrollReveal key={job.id}>
            <div className="relative group">
              {/* Tick mark on timeline */}
              <div className="absolute -left-[33px] top-6 w-2 h-px bg-[var(--color-edge)]" />

              <div className="relative border border-[var(--color-edge)] rounded-[4px] bg-[var(--color-panel)] p-6 transition-all duration-200 hover:border-[var(--color-trace)]/30 hover:-translate-y-[2px]">
                {/* Inner top highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/[0.06] to-transparent rounded-t-[4px]" />

                <h3 className="font-sans font-medium text-lg text-[var(--color-ink)] mb-1">
                  {job.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-4">
                  <span className="font-mono text-xs text-[var(--color-muted)] tracking-[0.12em] uppercase">
                    {job.company} — {job.location}
                  </span>
                  <span className="font-mono text-xs text-[var(--color-muted)] hidden sm:block">·</span>
                  <span className="font-mono text-xs text-[var(--color-muted)]">{job.period}</span>
                </div>

                <ul className="list-disc pl-4 space-y-2 mb-6 text-sm text-[var(--color-ink)]/80">
                  {job.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] uppercase tracking-[0.08em] px-2 py-1 bg-[var(--color-void)] text-[var(--color-muted)] border border-[var(--color-edge)] rounded-[2px]"
                    >
                      {tech}
                    </span>
                  ))}
                  {job.link && (
                    <a
                      href={job.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.08em] px-2 py-1 bg-[var(--color-void)] text-[var(--color-trace)] border border-[var(--color-edge)] rounded-[2px] hover:border-[var(--color-trace)]/30 transition-colors"
                    >
                      {job.link.label} <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
