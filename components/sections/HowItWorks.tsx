import SectionEyebrow from '@/components/ui/SectionEyebrow';

const steps = [
  {
    step: '01',
    label: 'Capture',
    desc: 'Clinical intent is detected from the visit — chart context, documentation, and triggered downstream tasks.',
    mono: 'intent.capture()',
  },
  {
    step: '02',
    label: 'Interpret',
    desc: 'Patient chart history, labs, medications, and form requirements are cross-referenced in real time.',
    mono: 'context.map()',
  },
  {
    step: '03',
    label: 'Prepare',
    desc: 'Forms pre-populated, referral packets assembled, billing codes flagged, prescriptions pre-validated.',
    mono: 'work.prepare()',
  },
  {
    step: '04',
    label: 'Route',
    desc: 'Outputs staged for physician review. Nothing moves without explicit physician approval.',
    mono: 'output.stage()',
  },
  {
    step: '05',
    label: 'Physician Approves',
    desc: 'Physician reviews, edits if needed, and explicitly attests. Clinical authority stays with the physician.',
    mono: 'physician.attest()',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-linen" aria-labelledby="how-it-works-headline">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionEyebrow>How It Works</SectionEyebrow>
          <h2 id="how-it-works-headline" className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Five steps. One loop. Physician in control.
          </h2>
          <p className="text-muted-text text-base max-w-2xl mx-auto">
            Align eCare is not replacing physician judgment. It is eliminating the administrative steps that should never have required physician time.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-10 left-full w-full h-px bg-border-soft z-0"
                  style={{ width: 'calc(100% - 2rem)' }}
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 neumorphic border border-border-soft rounded-2xl p-5 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-full bg-icy-blue/20 text-icy-blue-deep font-bold text-sm flex items-center justify-center">
                    {s.step}
                  </span>
                </div>
                <p className="font-semibold text-charcoal text-sm mb-2">{s.label}</p>
                <p className="text-xs text-muted-text leading-relaxed mb-3">{s.desc}</p>
                <p className="font-mono text-[10px] text-icy-blue-deep/70">{s.mono}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/10 border border-sage/20 text-sm text-sage-deep font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-deep" aria-hidden="true" />
            Physician remains the sole clinical authority at every step
          </p>
        </div>
      </div>
    </section>
  );
}
