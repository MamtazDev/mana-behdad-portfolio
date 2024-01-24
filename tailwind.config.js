/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        Oswald: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}