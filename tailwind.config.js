/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fcf8f0',
        linen: '#f3ecdf',
        ink: '#211f1c',
        steel: '#50616d',
        herb: '#40735b',
        basil: '#2f5d49',
        tomato: '#c9513e',
        saffron: '#d59b2d',
        butter: '#f4d78d',
        tile: '#e3edf0',
        receipt: '#fffdf7',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(34, 31, 28, 0.10)',
        card: '0 10px 26px rgba(34, 31, 28, 0.08)',
        nav: '0 -16px 38px rgba(34, 31, 28, 0.10)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
