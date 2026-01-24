/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#E0F2FE', // sky blue light
          DEFAULT: '#0EA5E9', // sky blue
          dark: '#0369A1',
        },
        secondary: {
          light: '#F0FDF4', // mint green light
          DEFAULT: '#22C55E', // mint green
          dark: '#15803D',
        },
        accent: {
          coral: '#FB7185',
          purple: '#A855F7',
        },
        background: {
          soft: '#F8FAFC',
        }
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },

  plugins: [],
}

