/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{html,js}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: "#21327a",
        whiteText: "#DEE2E6",
        logo: "#4285f4",
      },
    },
    fontFamily: {
      quicksand: ['Quicksand'],
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
