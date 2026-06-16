/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#223420',
        surface: '#2C3F28',
        ink: '#ECE6CF',
        'ink-soft': '#C3C1A8',
        muted: '#939C82',
        line: '#3A5034',
        accent: '#AAC592',
        'accent-soft': '#33462C',
        sage: '#8FA383',
        'sage-soft': '#3C5640',
        amber: '#D3AA5A',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.18), 0 1px 3px rgba(0,0,0,0.24)',
        md: '0 8px 20px rgba(0,0,0,0.28), 0 2px 6px rgba(0,0,0,0.22)',
      },
      fontFamily: {
        brand: ['"Sora"', '"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', '"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Hanken Grotesk"', '"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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
