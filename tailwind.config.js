/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'geomanist': ['Geomanist', 'sans-serif']
      },
    },
  },
  plugins: [],
}
