/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#ECE6D6',
        surface: '#FBF8F0',
        ink: '#21301B',
        'ink-soft': '#535A47',
        muted: '#8B8A78',
        line: '#DDD4C0',
        accent: '#2F5131',
        'accent-soft': '#E2EAD8',
        sage: '#819378',
        'sage-soft': '#D6DED0',
        amber: '#9A6A24',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(34,52,32,0.05), 0 1px 3px rgba(34,52,32,0.07)',
        md: '0 6px 16px rgba(34,52,32,0.08), 0 2px 6px rgba(34,52,32,0.05)',
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
