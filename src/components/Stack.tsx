'use client';

import { skillCategories } from '@/content/skills';
import ScrollReveal from './ScrollReveal';

export default function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-heading" className="max-w-7xl mx-auto px-6 py-24">
      <ScrollReveal>
        <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-muted)] mb-2">
          CH.04 / STACK
        </div>
        <h2 id="stack-heading" className="font-[family-name:var(--font-display)] font-bold text-2xl md:text-[2.5rem] tracking-[-0.02em] text-[var(--color-ink)] mb-16">
          Stack
        </h2>

        <div className="flex flex-col">
          {skillCategories.map((category, index) => (
            <div key={category.label} className={`py-8 ${index !== skillCategories.length - 1 ? 'border-b border-[var(--color-edge)]' : ''}`}>
              <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-muted)] mb-4">
                {category.label}
              </h3>
              <div className="leading-loose">
                {category.items.map((item, itemIndex) => (
                  <span key={item} className="inline-flex items-center">
                    <span className="font-mono text-sm text-[var(--color-ink)] transition-colors hover:text-[var(--color-trace)] relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[var(--color-trace)] after:w-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-[180ms] cursor-default">
                      {item}
                    </span>
                    {itemIndex !== category.items.length - 1 && (
                      <span className="mx-2 text-[var(--color-muted)]">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
