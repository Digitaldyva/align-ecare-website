import clsx from 'clsx';

interface StatCardProps {
  value: string;
  label: string;
  sub?: string;
  glass?: boolean;
  className?: string;
}

export default function StatCard({ value, label, sub, glass, className }: StatCardProps) {
  return (
    <div
      className={clsx(
        'rounded-2xl px-6 py-5 flex flex-col gap-1',
        glass ? 'glass' : 'neumorphic border border-border-soft',
        className
      )}
    >
      <p className={clsx('text-3xl font-bold tracking-tight', glass ? 'text-white' : 'text-charcoal')}>{value}</p>
      <p className={clsx('text-sm font-medium', glass ? 'text-white/80' : 'text-charcoal-soft')}>{label}</p>
      {sub && <p className={clsx('font-mono text-[10px] uppercase tracking-wider', glass ? 'text-white/50' : 'text-muted-text')}>{sub}</p>}
    </div>
  );
}
