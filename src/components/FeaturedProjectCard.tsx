'use client';

import { motion } from 'framer-motion';
import { FeaturedProject } from '@/content/projects';

const InterviewSvg = () => (
  <svg viewBox="0 0 400 200" className="w-full max-w-[320px] h-auto" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      d="M100 100 L170 100 M230 100 L300 100"
      stroke="var(--color-trace)"
      strokeWidth="2"
      fill="none"
    />
    <rect x="40" y="70" width="60" height="60" rx="4" fill="var(--color-void)" stroke="var(--color-edge)" strokeWidth="1" />
    <text x="70" y="104" textAnchor="middle" fill="var(--color-muted)" fontSize="10" fontFamily="monospace">REQUEST</text>
    
    <rect x="170" y="70" width="60" height="60" rx="4" fill="var(--color-void)" stroke="var(--color-edge)" strokeWidth="1" />
    <text x="200" y="104" textAnchor="middle" fill="var(--color-muted)" fontSize="10" fontFamily="monospace">QUEUE</text>
    
    <rect x="300" y="70" width="60" height="60" rx="4" fill="var(--color-void)" stroke="var(--color-edge)" strokeWidth="1" />
    <text x="330" y="104" textAnchor="middle" fill="var(--color-muted)" fontSize="10" fontFamily="monospace">SANDBOX</text>
  </svg>
);

const RoadGuardSvg = () => {
  const dots = [
    { cx: 80, cy: 60, delay: 0.2 },
    { cx: 140, cy: 120, delay: 0.4 },
    { cx: 220, cy: 80, delay: 0.6 },
    { cx: 280, cy: 150, delay: 0.8 },
    { cx: 320, cy: 60, delay: 1.0 },
  ];

  return (
    <svg viewBox="0 0 400 200" className="w-full max-w-[320px] h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Grid Lines */}
      {Array.from({ length: 5 }).map((_, i) => (
        <line key={`h-${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} stroke="var(--color-edge)" strokeWidth="1" />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="200" stroke="var(--color-edge)" strokeWidth="1" />
      ))}
      
      {/* Hazard Dots */}
      {dots.map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r="4"
          fill="var(--color-trace)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: dot.delay, type: "spring" }}
          viewport={{ once: true }}
        />
      ))}
    </svg>
  );
};

export default function FeaturedProjectCard({ project, index }: { project: FeaturedProject; index: number }) {
  const isInterview = project.id === 'interview-platform';
  
  return (
    <div className="border border-[var(--color-edge)] rounded-[4px] bg-[var(--color-panel)] overflow-hidden relative group">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/[0.06] to-transparent z-10" />
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        <div className={`relative bg-[var(--color-void)] flex items-center justify-center p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-[var(--color-edge)] overflow-hidden ${index % 2 !== 0 ? 'lg:order-2 lg:border-r-0 lg:border-l' : ''}`}>
          {isInterview ? <InterviewSvg /> : <RoadGuardSvg />}
        </div>
        
        <div className="p-8 flex flex-col justify-center">
          <h3 className="font-[family-name:var(--font-display)] font-bold text-xl md:text-2xl text-[var(--color-ink)]">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-[0.12em] mt-1">
            {project.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {project.stack.map(tech => (
              <span key={tech} className="font-mono text-[11px] uppercase tracking-[0.08em] px-2 py-1 bg-[var(--color-void)] text-[var(--color-muted)] border border-[var(--color-edge)] rounded-[2px]">
                {tech}
              </span>
            ))}
          </div>
          
          <ul className="list-disc list-inside text-sm text-[var(--color-ink)]/80 leading-relaxed mt-4 space-y-2">
            {project.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {project.metrics.map(metric => (
              <span key={metric} className="font-mono text-[11px] uppercase tracking-[0.08em] px-2.5 py-1 border border-[var(--color-trace)]/20 text-[var(--color-trace)] rounded-[2px]">
                {metric}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
