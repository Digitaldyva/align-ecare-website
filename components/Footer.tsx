import Link from 'next/link';

const footerLinks = {
  Product: [
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Solutions', href: '/#solutions' },
    { label: 'Trust & Compliance', href: '/#trust' },
    { label: 'Proof', href: '/#proof' },
  ],
  'By Role': [
    { label: 'Family Physicians', href: '/for-family-physicians' },
    { label: 'Specialists', href: '/for-specialists' },
    { label: 'Clinic Admins', href: '/for-clinic-admins' },
    { label: 'Health System Leaders', href: '/for-health-system-leaders' },
  ],
  Resources: [
    { label: 'Research Hub', href: '/resources' },
    { label: 'Press & Media', href: '/press' },
    { label: 'DTC / T2201 Forms', href: '/papers/automating-dtc-t2201-medical-forms' },
    { label: 'Billing Optimization', href: '/papers/billing-code-optimization-family-medicine' },
  ],
  Company: [
    { label: 'About', href: '/#founder' },
    { label: 'Press Kit', href: '/press#press-kit' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Contact', href: '/#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 pt-16 pb-8" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-lg font-semibold text-white mb-1">
              Align <span className="text-icy-blue">eCare</span>
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-icy-blue/60 mb-4">Fredericton, NB &#xb7; Canada</p>
            <p className="text-xs leading-relaxed text-white/50">
              Administrative execution infrastructure for Canadian healthcare.
            </p>
            <p className="text-xs mt-4 text-white/40 italic">Less desk work. More patient care.</p>
          </div>
          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-3">{section}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Align eCare Inc. All rights reserved.</p>
          <p>Built in New Brunswick &#xb7; PIPEDA-Aligned &#xb7; Canadian Data Residency</p>
          <p>
            <a href="mailto:media@alignecare.ca" className="hover:text-white/60 transition-colors">
              media@alignecare.ca
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
