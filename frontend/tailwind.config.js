/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      textShadow: {
        'glow': '0 0 8px #fff, 0 0 10px #fff',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
