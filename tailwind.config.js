/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm cream surfaces for inner screens.
        paper: '#EFE6CE',
        surface: '#FBF5E6',
        ink: '#1E3A2A',
        'ink-soft': '#4C5A46',
        muted: '#8A8870',
        line: '#E0D6BB',
        accent: '#2C5733',
        'accent-soft': '#DEE7D2',
        sage: '#819378',
        'sage-soft': '#D6DED0',
        amber: '#9A6A24',
        // Forest canvas + warm tile palette from the home redesign.
        forest: '#1F3D2B',
        'forest-deep': '#162E20',
        'forest-soft': '#2C5036',
        cream: '#F1E7CD',
        terracotta: '#C24E2C',
        mustard: '#E0A12E',
        olive: '#647A3B',
        leaf: '#3E6140',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(20,40,28,0.05), 0 1px 3px rgba(20,40,28,0.07)',
        md: '0 6px 16px rgba(20,40,28,0.08), 0 2px 6px rgba(20,40,28,0.05)',
        hero: '0 18px 40px rgba(10,24,16,0.32)',
      },
      fontFamily: {
        brand: ['"Fraunces"', '"Bricolage Grotesque"', 'ui-serif', 'Georgia', 'serif'],
        serif: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
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
