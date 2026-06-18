import clsx from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'ice' | 'sage' | 'charcoal' | 'cream';
  className?: string;
}

export default function Badge({ children, variant = 'ice', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest font-medium border',
        variant === 'ice' && 'bg-icy-blue/20 text-icy-blue-deep border-icy-blue/30',
        variant === 'sage' && 'bg-sage/20 text-sage-deep border-sage/30',
        variant === 'charcoal' && 'bg-charcoal/10 text-charcoal border-charcoal/20',
        variant === 'cream' && 'bg-cream text-charcoal-soft border-border-soft',
        className
      )}
    >
      {children}
    </span>
  );
}
