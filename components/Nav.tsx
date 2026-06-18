'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { navLinks } from '@/lib/data/navLinks';
import clsx from 'clsx';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass-light shadow-soft py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className={clsx('text-lg font-semibold tracking-tight transition-colors', scrolled ? 'text-charcoal' : 'text-white')}>
            Align{' '}
            <span className="text-icy-blue-deep">eCare</span>
          </span>
          <span className={clsx('font-mono text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded border transition-colors',
            scrolled ? 'border-icy-blue-deep/40 text-icy-blue-deep' : 'border-icy-blue/40 text-icy-blue'
          )}>
            CA
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'text-sm font-medium transition-colors hover:text-icy-blue-deep',
                scrolled ? 'text-charcoal-soft' : 'text-white/80'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#contact"
            className="text-sm font-medium px-4 py-2 rounded-full bg-icy-blue-deep text-white hover:bg-dusty-blue transition-colors"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={clsx('block w-5 h-px my-1 transition-all', scrolled ? 'bg-charcoal' : 'bg-white')} />
          <span className={clsx('block w-5 h-px my-1 transition-all', scrolled ? 'bg-charcoal' : 'bg-white')} />
          <span className={clsx('block w-5 h-px my-1 transition-all', scrolled ? 'bg-charcoal' : 'bg-white')} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-light border-t border-border-soft px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-charcoal-soft font-medium py-1 hover:text-icy-blue-deep"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="block text-sm font-semibold text-icy-blue-deep py-1"
          >
            Book a Demo →
          </Link>
        </div>
      )}
    </header>
  );
}
