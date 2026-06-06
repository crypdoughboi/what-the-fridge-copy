/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F2E9',
        surface: '#FFFFFF',
        ink: '#16150F',
        'ink-soft': '#4A4842',
        muted: '#8A877E',
        line: '#E7E1D4',
        accent: '#2E7D46',
        'accent-soft': '#E8F0E6',
        amber: '#9A6A24',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(20,18,10,0.04), 0 1px 3px rgba(20,18,10,0.06)',
        md: '0 6px 16px rgba(20,18,10,0.06), 0 2px 6px rgba(20,18,10,0.04)',
      },
      fontFamily: {
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
