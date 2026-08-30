'use client';

import ScrollReveal from '@/components/ScrollReveal';
import { supabaseContribution } from '@/content/opensource';
import { ArrowUpRight } from 'lucide-react';

const data = supabaseContribution;

export default function OpenSource() {
  return (
    <section id="opensource" aria-labelledby="opensource-heading" className="bg-[var(--color-panel)] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-muted)] mb-3">
            CH.02 / OPEN SOURCE
          </div>

          <div className="mb-12">
            <h2
              id="opensource-heading"
              className="font-display font-bold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--color-ink)] flex flex-wrap items-baseline gap-4"
            >
              {data.repo}
              <span className="font-mono text-xs text-[var(--color-muted)] font-normal tracking-normal">
                {data.stars} stars · {data.language}
              </span>
            </h2>
            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href={data.prUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.08em] px-3 py-1.5 border border-[var(--color-edge)] rounded-[2px] text-[var(--color-trace)] hover:border-[var(--color-trace)]/30 transition-colors"
              >
                PR {data.prNumber} <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={data.issueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.08em] px-3 py-1.5 border border-[var(--color-edge)] rounded-[2px] text-[var(--color-trace)] hover:border-[var(--color-trace)]/30 transition-colors"
              >
                Issue {data.issueNumber} <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Three-beat: Found → Proved → Shipped */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-trace)] mb-3">
                FOUND
              </div>
              <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
                {data.phases.found}
              </p>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-trace)] mb-3">
                PROVED
              </div>
              <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
                {data.phases.proved}
              </p>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-trace)] mb-3">
                SUBMITTED
              </div>
              <p className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
                {data.phases.shipped}
              </p>
            </div>
          </div>

          {/* Diff block */}
          <div className="bg-[var(--color-void)] border border-[var(--color-edge)] rounded-[4px] p-4 mt-8 max-w-md">
            <pre className="font-mono text-sm overflow-x-auto">
              <code className="block text-red-400/70">- {data.diff.removed}</code>
              <code className="block text-[var(--color-trace)]">+ {data.diff.added}</code>
            </pre>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
