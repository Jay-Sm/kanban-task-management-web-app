/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-dark": "#20212c",
        "background-light": "#f4f7fd",
      }
    },
  },
  plugins: [],
};
