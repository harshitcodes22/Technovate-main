/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abc: ["Inter Tight", "sans-serif"],
        xyz: ["Libre Baskerville", "serif"],
        anta: ["Anta", "sans-serif"],
        ubuntu: ["ubuntu"],
        miami: ["Madimi One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
