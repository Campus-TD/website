/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './index.html'
  ],
  theme: {
    extend: {},
    fontFamily: {
      quicksand: ['Quicksand'],
    },
    colors: {
      background: "#21327a",
      whiteText: "#DEE2E6",
      logo: "#4285f4",
    },
  },
  plugins: [],
}
