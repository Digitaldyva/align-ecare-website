export type ResourceCategory =
  | 'All'
  | 'Clinical Workflow'
  | 'Billing & Revenue'
  | 'Forms & Compliance'
  | 'Provincial Policy'
  | 'Pharmacy'
  | 'Burnout & Wellness';

export const resourceCategories: ResourceCategory[] = [
  'All',
  'Clinical Workflow',
  'Billing & Revenue',
  'Forms & Compliance',
  'Provincial Policy',
  'Pharmacy',
  'Burnout & Wellness',
];

export const resources = [
  {
    type: 'White Paper',
    category: 'Forms & Compliance' as ResourceCategory,
    title: 'How to Automate Federal Disability (T2201) and Third-Party Medical Forms',
    stat: '60%+ of Canadian physicians spend 21\u201330 min per DTC form',
    readTime: '8 min read',
    href: '/papers/automating-dtc-t2201-medical-forms',
    cta: 'Read Paper',
  },
  {
    type: 'Financial Analysis',
    category: 'Billing & Revenue' as ResourceCategory,
    title: 'Point-of-Care Billing Code Optimization: Recovering Missed Premium Revenues in Family Medicine',
    stat: '7% billing leak = $26,810/year per NB physician',
    readTime: '10 min read',
    href: '/papers/billing-code-optimization-family-medicine',
    cta: 'Read Paper',
  },
  {
    type: 'Clinical Blog',
    category: 'Pharmacy' as ResourceCategory,
    title: 'Eliminating Pharmacy Clarification Callbacks: The Hidden 15-Hour Annual Time Drain',
    stat: '9.1 minutes average per callback \u2014 90% eliminated with digital attestation',
    readTime: '6 min read',
    href: '/blog/pharmacy-callback-interruptions-physician-workflow',
    cta: 'Read Article',
  },
  {
    type: 'Clinical Blog',
    category: 'Burnout & Wellness' as ResourceCategory,
    title: 'Pajama Time Is Not Inevitable: Reclaiming After-Hours Administrative Work',
    stat: '3+ hours of nightly unpaid admin work reported by physicians who chart at home',
    readTime: '5 min read',
    href: '/blog/eliminating-pajama-time-physician-administrative-burden',
    cta: 'Read Article',
  },
  {
    type: 'Policy Paper',
    category: 'Provincial Policy' as ResourceCategory,
    title: "160,000 Unattached Patients: How Administrative Capacity Is the Hidden Variable in New Brunswick\u2019s Healthcare Crisis",
    stat: '300 physicians \u00d7 3hrs/day = capacity for 150,000\u2013225,000 additional patients annually',
    readTime: '12 min read',
    href: '/papers/new-brunswick-unattached-patients-administrative-capacity',
    cta: 'Read Paper',
  },
];
