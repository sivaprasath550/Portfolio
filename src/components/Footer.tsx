'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      const timeString = formatter.format(new Date());
      setTime(`${timeString} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-[var(--color-edge)]">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="font-mono text-xs text-[var(--color-muted)]">
          Built with Next.js and a lot of Redis. © 2026 Siva Prasath K.
        </div>
        <div className="font-mono text-xs text-[var(--color-muted)]">
          {time || '...'}
        </div>
      </div>
    </footer>
  );
}
