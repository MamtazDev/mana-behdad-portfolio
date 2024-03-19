/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        tools:
          "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
