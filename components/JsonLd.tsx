export default function JsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Align eCare',
    url: 'https://alignecare.ca',
    logo: 'https://alignecare.ca/logo.png',
    description:
      'Canadian healthcare administrative execution infrastructure. Align eCare executes downstream admin work — forms, billing, referrals, pharmacy callbacks — with physician approval at every step.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fredericton',
      addressRegion: 'New Brunswick',
      addressCountry: 'CA',
    },
    contactPoint: { '@type': 'ContactPoint', email: 'media@alignecare.ca', contactType: 'Press' },
    sameAs: [],
  };

  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Align eCare',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    description:
      'Administrative execution infrastructure for Canadian healthcare. Automates DTC/T2201 forms, billing code optimization, pharmacy callback elimination, referral execution, and audit trail generation with physician supervision.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'CAD', description: 'Contact for pricing' },
    provider: { '@type': 'Organization', name: 'Align eCare' },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Align eCare',
    url: 'https://alignecare.ca',
    description: 'Less desk work. More patient care.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
