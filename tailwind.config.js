/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: '0.875rem', // small
      base: '1rem', // body2
      lg: '1.125rem', // body1
      xl: '1.25rem', // h6
      '2xl': '1.5rem', // h5
      '3xl': '2rem', //h4
      '4xl': '3rem', // h3
      '5xl': '3.25rem', // h2
      '6xl': '4rem', // h1
      '7xl': '5rem', // h1
    },
    extend: {
      keyframes: (theme) => ({
        appear: {
          '0%': { opacity: 0, transform: 'translateY(-8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      }),

      colors: {
        darkGreen: '#001C06',
        lightGreen: '#3AF779',
        borderCream: '#FFD8C2',
        greenChip: 'rgba(248, 235, 191, 0.40)',
        creamChip: 'rgba(248, 235, 191, 0.40)',
        gray: '#9E9E9E',
        blueGreen: '#061C23',
      },
      borderWidth: {
        1: '1px',
      },
      fontFamily: {
        bold: ['bold', 'sans-serif'],
        light: ['light', 'sans-serif'],
        regular: ['regular', 'sans-serif'],
        medium: ['medium', 'sans-serif'],
      },
      gridColumn: {},
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        appear: 'appear 600ms ease-in-out forwards',
        'appear-100': 'appear 600ms  ease-in-out 100ms  forwards',
        'appear-300': 'appear 600ms  ease-in-out 300ms  forwards',
      },
      boxShadow: {
        card: 'rgba(247, 151, 79, 0.4) 0px 10px 50px', // remnove in production
      },
    },
  },
  plugins: [],
}
