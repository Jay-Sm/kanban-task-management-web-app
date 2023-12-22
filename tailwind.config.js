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
        background2: {
          DEFAULT: '#ffffff',
          dark: '#2b2c37'
        },
        borderColor: {
          DEFAULT: '#e5e7f0',
          dark: '#3e3f4e'
        },
        themeColor: {
          DEFAULT: '#635fc7',
          hover: '#9995f3'
        },
        settingsBackground: {
          DEFAULT: '#e4ebfa',
          dark: '#20212c'
        },
        textColor: '#828fa3'
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans']
      }
    }
  },
  plugins: []
}
