import React from 'react';

export default function SectionDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full relative h-[7px] ${className}`}>
      <div className="absolute top-1/2 -translate-y-1/2 left-[24px] right-0 h-[1px] bg-gradient-to-r from-[var(--color-edge)] to-transparent" />
      <div 
        className="absolute left-0 top-0 bottom-0 w-[24px]"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, var(--color-edge) 0px, var(--color-edge) 1px, transparent 1px, transparent 4px)'
        }}
      />
    </div>
  );
}
