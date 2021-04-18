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
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      10: '10px',
      14: '14px',
      42: '42px',
      20: '20px'
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
