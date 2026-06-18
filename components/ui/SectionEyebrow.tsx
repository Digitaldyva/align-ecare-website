import clsx from 'clsx';

export default function SectionEyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={clsx('font-mono text-[11px] uppercase tracking-[0.2em] text-icy-blue-deep font-medium mb-3', className)}>
      {children}
    </p>
  );
}
