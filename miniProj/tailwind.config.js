/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: { 
      keyframes: {
        thankyou: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '50%': { opacity: '0.5', transform: 'scale(1.1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        thankyou: 'thankyou 2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}

