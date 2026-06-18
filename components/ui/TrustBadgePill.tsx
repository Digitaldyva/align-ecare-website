'use client';
import clsx from 'clsx';

interface TrustBadgePillProps {
  label: string;
  description: string;
  index?: number;
}

export default function TrustBadgePill({ label, description, index = 0 }: TrustBadgePillProps) {
  return (
    <div
      className={clsx(
        'group flex flex-col gap-1.5 px-4 py-3.5 rounded-xl border border-border-soft',
        'bg-cream-card hover:shadow-soft transition-all duration-200 hover:-translate-y-0.5 cursor-default'
      )}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-icy-blue-deep flex-shrink-0" />
        <p className="text-sm font-semibold text-charcoal">{label}</p>
      </div>
      <p className="text-xs text-muted-text leading-relaxed pl-3.5">{description}</p>
    </div>
  );
}
