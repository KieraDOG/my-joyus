/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        '2xl': '28px',
      },
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif']
    },
    colors: {
      white: {
        100: '#FFFFFF',
      },
      black: {
        100: '#21272A'
      },
      base: {
        800: '#2D3648',
      },
      grey: {
        100: '#969AA4',
      },
      blue: {
        200: '#72B2D9',
      },
      orange: {
        100: '#F64849',
        200: '#FF7D61',
      },
    },
    lineHeight: {
      tight: '1.2',
      snug: '1.4',
    }
  },
  plugins: [],
}
