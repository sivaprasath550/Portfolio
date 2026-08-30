'use client';

import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="max-w-7xl mx-auto px-6 py-24">
      <ScrollReveal>
        <h2 id="about-heading" className="sr-only">About</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6 max-w-[55ch] text-[var(--color-ink)] leading-[1.65]">
            <p>
              Second-year ECE student at SRMIST, working mostly on the backend — Node/NestJS services, Postgres, Redis queues, and the container plumbing underneath them.
            </p>
            <p>
              The hardware side hasn&apos;t gone anywhere. I spend part of my week in a research lab building an ESP32-based syringe injection system with sensor fusion and an ML control loop, which is a useful reminder that latency is a physical thing.
            </p>
            <p>
              Recently that&apos;s meant reading other people&apos;s type layers closely enough to find a bug in Supabase&apos;s query builder, and shipping the fix.
            </p>
          </div>
          <div>
            <div className="flex flex-col">
              {[
                { label: 'FOCUS', value: 'Backend systems, distributed queues, Edge AI' },
                { label: 'CURRENTLY', value: 'AI interview platform (NestJS + BullMQ)' },
                { label: 'RESEARCH', value: 'AI-integrated IoT healthcare, under Dr. Nithya V' },
                { label: 'GRADUATING', value: 'May 2028 · 4 semesters after internship' },
                { label: 'AVAILABILITY', value: 'SDE internships, open source' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 border-b border-[var(--color-edge)] gap-1">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-muted)]">{item.label}</span>
                  <span className="font-mono text-sm text-[var(--color-ink)] sm:text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
