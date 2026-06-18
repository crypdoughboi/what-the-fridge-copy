/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Soft tan canvas with cream surfaces.
        paper: '#E9E1CE',
        surface: '#FAF5E8',
        ink: '#1E3A2A',
        'ink-soft': '#4C5A46',
        muted: '#8A8870',
        line: '#DCD1B6',
        accent: '#2C5733',
        'accent-soft': '#DEE7D2',
        sage: '#819378',
        'sage-soft': '#D6DED0',
        amber: '#9A6A24',
        // Logo-derived accent colors, used sparingly (icons, small details).
        forest: '#1F3D2B',
        'forest-deep': '#162E20',
        'forest-soft': '#2C5036',
        cream: '#F4EDDB',
        terracotta: '#C24E2C',
        mustard: '#D99A2B',
        olive: '#6E7F49',
        leaf: '#3E6140',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(20,40,28,0.05), 0 1px 3px rgba(20,40,28,0.07)',
        md: '0 6px 16px rgba(20,40,28,0.08), 0 2px 6px rgba(20,40,28,0.05)',
        hero: '0 18px 40px rgba(10,24,16,0.32)',
      },
      fontFamily: {
        lazydog: ['"Lazydog"', 'ui-rounded', 'cursive'],
        brand: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        serif: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '12px',
        md: '16px',
        lg: '20px',
        pill: '999px',
      },
    },
  },
  plugins: [],
};
