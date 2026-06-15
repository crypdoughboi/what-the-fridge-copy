/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F7F8',
        surface: '#FFFFFF',
        ink: '#111111',
        'ink-soft': '#474747',
        muted: '#808080',
        line: '#E6E6E7',
        accent: '#12805C',
        'accent-soft': '#E9F7F1',
        sage: '#7B8D82',
        'sage-soft': '#EDF4F0',
        amber: '#9B6500',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(17,17,17,0.05)',
        md: '0 8px 24px rgba(17,17,17,0.08)',
      },
      fontFamily: {
        brand: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '10px',
        pill: '999px',
      },
    },
  },
  plugins: [],
};
