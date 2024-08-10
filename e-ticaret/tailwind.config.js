/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Bu satır, src dizinindeki JS, TS, JSX, ve TSX dosyalarını tarar
  ],
  theme: {
    extend: {
      fontFamily: {
        iconic: ['Iconic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
