/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#16BDE7",
          white: "#FFFFFF",
          black: "#000000",
        },
      },
      fontFamily: {
        display: ["'Jacques Francois Shadow'", "cursive", "serif"],
        sans: ["'Jacques Francois'", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
