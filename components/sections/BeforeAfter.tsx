import SectionEyebrow from '@/components/ui/SectionEyebrow';

const beforeItems = [
  { time: '7:45 AM', label: 'Morning Chaos', desc: '52 faxes overnight. Inbox flooded.', lost: '52 min' },
  { time: '8:15 AM', label: 'Chart Hunting', desc: "Labs missing. Specialist never sent results.", lost: '8 min' },
  { time: '9:30 AM', label: 'Pharmacy Callback', desc: "Dose unclear, special auth missing. Interrupt patient.", lost: '12 min' },
  { time: '11:00 AM', label: 'Referral Hunt', desc: 'Wrong form. Fax back. Find correct form. Fax again.', lost: '22 min' },
  { time: '5:00 PM', label: 'After-Hours Begins', desc: '18 charts, billing codes abandoned, DTC forms waiting.', lost: '94 min' },
  { time: '6:41 PM', label: 'Still Not Done', desc: 'DTC forms, insurance paperwork, chart notes. Unpaid.', lost: '3h 16m stolen' },
];

const afterItems = [
  { time: '7:45 AM', label: 'Ready Briefing', desc: 'Schedule pre-loaded with labs, outstanding items, flags.', gained: '52 min back' },
  { time: '8:15 AM', label: 'Connected Intelligence', desc: 'Specialist replies, medication changes surfaced automatically.', gained: 'Context ready' },
  { time: '9:30 AM', label: 'eRx Pre-validated', desc: 'Dose, auth, allergies, interactions checked before transmission.', gained: '28 min back' },
  { time: '11:00 AM', label: 'Referral Prepared', desc: 'Correct form, chart summary, labs, attachments — physician reviews.', gained: '22 min back' },
  { time: '5:00 PM', label: 'Billing Optimized', desc: 'Premium codes flagged at point-of-care. Documentation ready.', gained: '94 min back' },
  { time: '5:45 PM', label: 'Day Complete', desc: 'Leave at 5:45. Admin done. No pajama time.', gained: '3h+ returned' },
];

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-cream" aria-labelledby="before-after-headline">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionEyebrow>Dr. Sarah’s Day</SectionEyebrow>
          <h2 id="before-after-headline" className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
            The same physician. A different life.
          </h2>
          <p className="text-muted-text text-base">
            Without Align eCare vs. with Align eCare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Before */}
          <div className="rounded-3xl border border-red-100 bg-red-50/30 p-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <p className="font-mono text-[11px] uppercase tracking-widest text-red-500 font-medium">Without Align eCare</p>
            </div>
            <div className="space-y-4">
              {beforeItems.map((item) => (
                <div key={item.time} className="flex gap-4">
                  <div className="flex-shrink-0 w-16">
                    <p className="font-mono text-[10px] text-muted-text">{item.time}</p>
                  </div>
                  <div className="flex-1 pb-4 border-b border-red-100 last:border-0">
                    <p className="text-sm font-semibold text-charcoal mb-0.5">{item.label}</p>
                    <p className="text-xs text-muted-text leading-relaxed">{item.desc}</p>
                    <span className="inline-block mt-1.5 px-2 py-0.5 bg-red-100 text-red-600 rounded font-mono text-[10px]">
                      {item.lost}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="rounded-3xl border border-sage/30 bg-sage/10 p-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-sage-deep" />
              <p className="font-mono text-[11px] uppercase tracking-widest text-sage-deep font-medium">With Align eCare</p>
            </div>
            <div className="space-y-4">
              {afterItems.map((item) => (
                <div key={item.time} className="flex gap-4">
                  <div className="flex-shrink-0 w-16">
                    <p className="font-mono text-[10px] text-muted-text">{item.time}</p>
                  </div>
                  <div className="flex-1 pb-4 border-b border-sage/20 last:border-0">
                    <p className="text-sm font-semibold text-charcoal mb-0.5">{item.label}</p>
                    <p className="text-xs text-muted-text leading-relaxed">{item.desc}</p>
                    <span className="inline-block mt-1.5 px-2 py-0.5 bg-sage/20 text-sage-deep rounded font-mono text-[10px]">
                      {item.gained}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
