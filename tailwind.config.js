/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#f4f7fd',
          dark: '#20212c'
        },
        borderColor: {
          DEFAULT: '#e5e7f0',
          dark: '#3e3f4e'
        },
        themeColor: {
          DEFAULT: '#ffffff',
          dark: '#2b2c37'
        }
      }
    }
  },
  plugins: []
}
