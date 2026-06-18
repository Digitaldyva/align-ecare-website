import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap', weight: ['400', '500'] });

export const metadata: Metadata = {
  title: 'Align eCare | Canadian Healthcare Administrative Execution Infrastructure',
  description:
    'Align eCare executes the downstream administrative work that steals physician time — forms, callbacks, billing, referrals — with physician approval at every step. Built in New Brunswick for Canadian healthcare.',
  keywords: [
    'Canadian healthcare administration',
    'physician administrative burden',
    'DTC T2201 form automation',
    'billing code optimization Canada',
    'pharmacy callback reduction',
    'PIPEDA healthcare software',
    'New Brunswick health technology',
    'clinical workflow execution',
    'Align eCare',
  ],
  authors: [{ name: 'Karolyn Law', url: 'https://alignecare.ca' }],
  openGraph: {
    title: 'Align eCare | Less Desk Work. More Patient Care.',
    description: 'Canadian healthcare administrative execution infrastructure. Not a scribe. The execution layer that finishes the work.',
    url: 'https://alignecare.ca',
    siteName: 'Align eCare',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Align eCare', description: 'Less desk work. More patient care.' },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://alignecare.ca' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="bg-linen text-charcoal antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
