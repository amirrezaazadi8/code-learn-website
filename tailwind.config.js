/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/style.css", "./src/app.js"],
  theme: {
    extend: {
      colors: {
        'regal-white': '#f1f1f1',
        'midnight':'#003543'
      }
    },
  },
  plugins: [],
}

