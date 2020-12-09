const { boxShadow } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        ...boxShadow,
        special: '#00000033 0px 10px 30px -15px',
      },
      fontFamily: {
        translate: {
          '1/7': '14.2857143%',
        },
        augustina: ['"Agustina Regular"'],
      },
      colors: {
        // white
        primary: {
          50: '#ffffff',
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#ffffff',
          500: '#ffffff',
          600: '#e6e6e6',
          700: '#bfbfbf',
          800: '#999999',
          900: '#7d7d7d',
        },
        // gray-blue
        secondary: {
          50: '#f3f4f4',
          100: '#e8e8ea',
          200: '#c5c6c9',
          300: '#a2a4a9',
          400: '#5d6069',
          500: '#171c28',
          600: '#151924',
          700: '#11151e',
          800: '#0e1118',
          900: '#0b0e14',
        },
        // purple
        main: {
          50: '#f7f4f9',
          100: '#eee8f3',
          200: '#d5c6e2',
          300: '#bba3d1',
          400: '#885fae',
          500: '#551a8b',
          600: '#4d177d',
          700: '#401468',
          800: '#331053',
          900: '#2a0d44',
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
}
