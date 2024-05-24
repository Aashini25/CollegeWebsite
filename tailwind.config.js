/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange: "#EF7D00",
      yellow: "#FFBA00",
      red: "#BA1717",
      brown: "#BA4717",
      blue: "#234E84",
      purple: "#421193",
      white: "#FFF6EA",
      white1: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        Montserrat: ["sans-serif"],
      },
    },
  },
  plugins: [],
};
