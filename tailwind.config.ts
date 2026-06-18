import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        linen: '#FAF7F2',
        cream: '#F5F0E8',
        'cream-card': '#FDFAF5',
        'icy-blue': '#C8DDF0',
        'icy-blue-deep': '#5B8DB8',
        sage: '#A8BBA4',
        'sage-deep': '#6B8F65',
        'dusty-blue': '#7A9AB5',
        charcoal: '#2C3340',
        'charcoal-soft': '#3D4550',
        'muted-text': '#6B7280',
        'border-soft': '#E8E2D9',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #2C3340 0%, #3D4E60 50%, #2C3D4F 100%)',
        'hero-subtle': 'linear-gradient(160deg, #2C3340 0%, #354558 60%, #2C3E50 100%)',
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)',
        'soft-lg': '0 8px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
        'card': '4px 4px 12px rgba(0,0,0,0.06), -2px -2px 8px rgba(255,255,255,0.8)',
        'glass': '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
