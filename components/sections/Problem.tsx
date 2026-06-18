import SectionEyebrow from '@/components/ui/SectionEyebrow';

const painCards = [
  { icon: '📄', label: 'Forms', desc: 'DTC, EI, CPP Disability, sick notes, insurance paperwork' },
  { icon: '📞', label: 'Pharmacy Loops', desc: 'Renewals, dose clarifications, missing context, fax-backs' },
  { icon: '📨', label: 'Referral Friction', desc: 'Wrong forms, missing fields, returned referrals' },
  { icon: '🌙', label: 'After-Hours Burden', desc: 'Charting, billing, forms finished at home unpaid' },
  { icon: '📊', label: 'Billing Friction', desc: '7% average revenue leak from missed codes and modifiers' },
  { icon: '🔄', label: 'Duplicate Documentation', desc: 'Data entered multiple times across disconnected systems' },
];

const statStrip = [
  { value: '42.7M', label: 'admin hours', sub: 'annually in Canada' },
  { value: '47%', label: 'unnecessary', sub: 'of that burden' },
  { value: '19.8M', label: 'wasted hours', sub: 'that should not exist' },
  { value: '9,093', label: 'physician-equivalents', sub: 'lost to admin' },
  { value: '55.6M', label: 'patient visits', sub: 'forgone per year' },
];

export default function Problem() {
  return (
    <section id="solutions" className="py-24 bg-linen" aria-labelledby="problem-headline">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionEyebrow>The Problem</SectionEyebrow>
          <h2 id="problem-headline" className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Canada’s administrative crisis, by the numbers.
          </h2>
          <p className="text-muted-text max-w-2xl mx-auto text-base">
            Canadian physicians spend the equivalent of 9,000 full-time physician careers every year on administrative work.
            Nearly half is unnecessary.
          </p>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16" role="list" aria-label="Key statistics">
          {statStrip.map((s) => (
            <div
              key={s.value}
              role="listitem"
              className="neumorphic border border-border-soft rounded-2xl px-5 py-6 text-center"
            >
              <p className="text-3xl font-bold text-charcoal mb-1">{s.value}</p>
              <p className="text-sm font-medium text-charcoal-soft">{s.label}</p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted-text mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* What we remove */}
        <div className="mb-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-icy-blue-deep mb-6">What Align eCare removes</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {painCards.map((card) => (
              <div
                key={card.label}
                className="neumorphic border border-border-soft rounded-2xl p-5 hover:shadow-soft-lg transition-shadow"
              >
                <span className="text-2xl mb-3 block" aria-hidden="true">{card.icon}</span>
                <p className="font-semibold text-charcoal text-sm mb-1">{card.label}</p>
                <p className="text-xs text-muted-text leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
