const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    gradientColorStops: theme => ({
      ...theme('colors'),
      grid1: '#8E2333',
      grid2: '#E82333'
    }),
    textColor: theme => ({
      ...theme('colors'),
      grid1: '#8E2333',
      grid2: '#E82333',
      grid5: '#EBEBEB',
      grid7: '#848484'
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      grid1: '#8E2333',
      grid2: '#E82333',
      grid3: '#A0A0A0',
      grid4: '#626262',
      grid5: '#EBEBEB',
      grid6: '#EAC4C4'
    }),
    borderColor: theme => ({
      ...theme('colors'),
      grid5: '#EBEBEB'
    }),
    fontSize: {
      ...defaultTheme.fontSize,
      '10px': '.625rem',
      '42px': '2.625rem'
    },
    boxShadow: {
      box1: '0px 3px 6px #00000029',
      box2: '0px 3px 3px #00000029'
    },
    minWidth: {
      100: '80px',
      300: '350px'
    },
    extend: {
      backgroundImage: theme => ({
      }),
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
