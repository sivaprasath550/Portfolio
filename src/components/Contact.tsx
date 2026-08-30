'use client';

import { useState } from 'react';
import { Copy, Check, Mail, Phone, Code2, Trophy, FileDown } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('sivaprasath6050@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const links = [
    { label: 'Email', href: 'mailto:sivaprasath6050@gmail.com', icon: Mail },
    { label: 'Phone', href: 'tel:+919443714501', icon: Phone },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/siva-prasath550', icon: FaLinkedin },
    { label: 'GitHub', href: 'https://github.com/sivaprasath550', icon: FaGithub },
    { label: 'LeetCode', href: 'https://leetcode.com/u/D754nf7hk1/', icon: Code2 },
    { label: 'Codeforces', href: 'https://codeforces.com/profile/siva_prasath', icon: Trophy },
    { label: 'Résumé', href: '/resume.pdf', icon: FileDown, isDownload: true },
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 id="contact-heading" className="font-display font-bold text-2xl md:text-3xl tracking-[-0.02em] text-[var(--color-ink)] max-w-sm">
            Open to SDE internships and interesting systems problems.
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 items-start content-start">
          {links.map((link, idx) => {
            const Icon = link.icon;
            
            if (link.label === 'Email') {
              return (
                <div key={idx} className="flex items-stretch border border-[var(--color-edge)] rounded-[4px] overflow-hidden group hover:border-[var(--color-trace)] transition-colors bg-[var(--color-panel)]">
                  <a href={link.href} className="flex items-center gap-2 px-4 py-3 text-[var(--color-ink)] group-hover:text-[var(--color-trace)] transition-colors">
                    <Icon size={18} />
                    <span className="font-mono text-sm">{link.label}</span>
                  </a>
                  <button onClick={handleCopy} className="px-4 py-3 border-l border-[var(--color-edge)] text-[var(--color-muted)] hover:text-[var(--color-trace)] hover:bg-[var(--color-trace)]/10 transition-colors" title="Copy email address">
                    {copied ? <Check size={16} className="text-[var(--color-trace)]" /> : <Copy size={16} />}
                  </button>
                </div>
              );
            }

            return (
              <a 
                key={idx} 
                href={link.href} 
                download={link.isDownload ? 'Siva_Prasath_Resume.pdf' : undefined} 
                target={link.href.startsWith('http') ? '_blank' : undefined} 
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} 
                className="flex items-center gap-2 px-4 py-3 bg-[var(--color-panel)] border border-[var(--color-edge)] rounded-[4px] text-[var(--color-ink)] hover:border-[var(--color-trace)] hover:text-[var(--color-trace)] transition-colors"
              >
                <Icon size={18} />
                <span className="font-mono text-sm">{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
