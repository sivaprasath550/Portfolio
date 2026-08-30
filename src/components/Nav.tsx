'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'opensource', label: 'Open Source' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    const sectionElements = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    sectionElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <nav aria-label="Main Navigation" className="fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-md bg-[var(--color-void)]/70">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="font-mono font-semibold text-[var(--color-trace)]">SP</div>
          
          <div className="hidden md:flex items-center gap-6">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="relative text-sm text-[var(--color-ink)] hover:text-[var(--color-trace)] transition-colors py-2"
                onClick={() => setActiveSection(section.id)}
              >
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-[var(--color-trace)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="Siva_Prasath_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 border border-[var(--color-trace)] text-[var(--color-trace)] px-4 py-1.5 rounded-[4px] text-sm hover:bg-[var(--color-trace)]/10 transition-colors"
            >
              Résumé ↓
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-[var(--color-ink)]"
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-[var(--color-void)] flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-5 right-6 text-[var(--color-ink)]"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setActiveSection(section.id);
                  }}
                  className="text-2xl font-semibold text-[var(--color-ink)] hover:text-[var(--color-trace)] transition-colors"
                >
                  {section.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download="Siva_Prasath_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 border border-[var(--color-trace)] text-[var(--color-trace)] px-6 py-2 rounded-[4px] text-lg hover:bg-[var(--color-trace)]/10 transition-colors"
              >
                Résumé ↓
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
