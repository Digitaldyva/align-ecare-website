'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import StatCard from '@/components/ui/StatCard';

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
    return () => clearTimeout(t);
  }, []);

  const trustChips = [
    'PIPEDA-Aligned',
    'Canadian Data Residency',
    'Human-in-the-Loop',
  ];

  return (
    <section
      className="relative min-h-screen bg-hero-subtle flex items-center pt-24 pb-16 overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-icy-blue mb-6">
            Canadian Healthcare Administrative Execution Infrastructure
          </p>

          <h1
            ref={headlineRef}
            id="hero-headline"
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 text-balance"
          >
            Canadian doctors are losing{' '}
            <span className="text-icy-blue">20 million hours</span>{' '}
            a year to unnecessary admin.
          </h1>

          <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
            Align eCare executes the downstream administrative work that steals physician time
            &mdash; forms, callbacks, billing friction, referrals, and more &mdash; with physician approval at every step.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-icy-blue-deep text-white font-semibold rounded-full hover:bg-dusty-blue transition-colors text-sm"
            >
              Book a Demo
            </Link>
            <Link
              href="/#how-it-works"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-colors text-sm"
            >
              See How It Works
            </Link>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-2" role="list" aria-label="Trust certifications">
            {trustChips.map((chip) => (
              <span
                key={chip}
                role="listitem"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/8 text-white/70 font-mono text-[10px] uppercase tracking-widest"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" aria-hidden="true" />
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Right: floating stat cards */}
        <div className="lg:col-span-5 flex flex-col gap-4" aria-label="Key statistics">
          <StatCard
            value="42.7M"
            label="Annual physician-admin hours in Canada"
            sub="CMA &#xb7; National burden"
            glass
          />
          <div className="grid grid-cols-2 gap-4">
            <StatCard value="~47%" label="Classified unnecessary" sub="CFIB" glass />
            <StatCard value="9,093" label="Physician-equivalents lost" sub="Modelled" glass />
          </div>
          <StatCard
            value="55.6M"
            label="Forgone patient visits annually"
            sub="CFIB framing"
            glass
          />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #FAF7F2)' }}
        aria-hidden="true"
      />
    </section>
  );
}
