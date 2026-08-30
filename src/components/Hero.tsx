'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

function CountUp({ end, decimals = 0, duration = 0.8 }: { end: number; decimals?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const shouldReduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setValue(end);
      return;
    }

    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        setValue(easeOutQuad * end);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setValue(end);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration, shouldReduceMotion]);

  return <span ref={ref}>{value.toFixed(decimals)}</span>;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      duration: 0.5,
    },
  },
};

const metrics = [
  { label: 'MERGED PR · SUPABASE 35k★', value: null, text: 'Merged' },
  { label: 'CGPA', end: 9.485, decimals: 3, suffix: ' / 10' },
  { label: 'DSA SOLVED', end: 300, decimals: 0, suffix: '+' },
  { label: 'CODEFORCES', end: 1300, decimals: 0, suffix: '+' },
];

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center max-w-7xl mx-auto px-6 pt-20 pb-16 relative">
      <motion.div
        className="w-full lg:w-[60%]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="font-[family-name:var(--font-mono)] uppercase tracking-[0.12em] text-[11px] text-[var(--color-muted)] mb-6"
        >
          CHENNAI, IN · B.TECH ECE &apos;28 · SRMIST
        </motion.p>

        {/* Photo and H1 */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-full overflow-hidden border border-[var(--color-edge)] shadow-lg shadow-black/20">
            <Image 
              src="/headshot.jpg" 
              alt="Siva Prasath K" 
              width={112}
              height={112}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>
          <h1 className="font-[family-name:var(--font-display)] font-bold text-[clamp(2.75rem,7vw,5.5rem)] tracking-[-0.02em] text-[var(--color-ink)] leading-tight">
            Siva Prasath K
          </h1>
        </motion.div>

        {/* Subhead */}
        <motion.p
          variants={itemVariants}
          className="font-[family-name:var(--font-display)] text-lg md:text-xl font-semibold text-[var(--color-muted)] mb-10 max-w-2xl leading-relaxed"
        >
          Backend &amp; systems engineer. I build things that hold up under load — and the hardware underneath them.
        </motion.p>

        {/* Metric strip */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:flex md:flex-nowrap mb-10"
        >
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`p-4 md:px-6 md:py-0 flex flex-col ${
                i > 0 ? 'border-l border-[var(--color-edge)]' : ''
              } ${i >= 2 ? 'border-t md:border-t-0 border-[var(--color-edge)]' : ''}`}
            >
              <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--color-muted)] mb-1">
                {m.label}
              </span>
              <span className="text-lg font-[family-name:var(--font-mono)] font-semibold text-[var(--color-ink)]">
                {m.value === null ? (
                  m.text
                ) : (
                  <>
                    <CountUp end={m.end!} decimals={m.decimals} />
                    {m.suffix}
                  </>
                )}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 flex-wrap">
          <a
            href="#work"
            className="bg-[var(--color-trace)] text-[var(--color-void)] font-semibold px-6 py-3 rounded-[4px] hover:brightness-110 transition-all duration-200 text-sm"
          >
            View work
          </a>
          <a
            href="https://github.com/sivaprasath550"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--color-edge)] text-[var(--color-ink)] px-6 py-3 rounded-[4px] hover:border-[var(--color-trace)] transition-all duration-200 text-sm"
          >
            GitHub ↗
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 flex flex-col items-center">
        <div className="w-px h-[24px] bg-[var(--color-edge)] relative overflow-hidden">
          <motion.div
            className="w-[4px] h-[4px] bg-[var(--color-trace)] rounded-full absolute left-1/2 -translate-x-1/2"
            animate={{ y: [0, 20] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  );
}
