/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0f7ff',
          100: '#b3ebff',
          200: '#80dfff',
          300: '#4dd3ff',
          400: '#26c9ff',
          500: '#00aeef',
          600: '#0A95C9',
          700: '#0072bc',
          800: '#015891',
          900: '#014166',
        },
        secondary: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        }
      },
      fontFamily: {
        sans: ['Raleway', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'slide-in-left': 'slideInLeft 1s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
