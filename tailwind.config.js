/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/style.css", "./src/app.js"],
  theme: {
    extend: {
      colors: {
        'regal-white': '#f1f1f1',
        'midnight':'#003543'
      },
      screens: {
        'firstMax': { 'raw': '(max-width: 970px)' },
        'secondMax': { 'raw': '(max-width: 750px)' },
        // => @media (min-height: 800px) { ... }
      }
    },
  },
  plugins: [],
}

