'use client';
import { useState } from 'react';
import clsx from 'clsx';

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border-soft last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-charcoal group-hover:text-icy-blue-deep transition-colors">{question}</span>
        <span
          className={clsx(
            'flex-shrink-0 w-6 h-6 rounded-full border border-border-soft flex items-center justify-center text-muted-text transition-all duration-200',
            open && 'bg-icy-blue/20 border-icy-blue/40 rotate-45'
          )}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className={clsx(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <p className="text-sm text-charcoal-soft leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
