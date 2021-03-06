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
      grid7: '#848484',
      grid8: '#7E868D',
      grid10: '#696969',
      grid12: '#EF595A',
      grid16: '#03DE73'
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      grid1: '#8E2333',
      grid2: '#E82333',
      grid3: '#A0A0A0',
      grid4: '#626262',
      grid5: '#EBEBEB',
      grid6: '#EAC4C4',
      grid9: '#F8F8F8',
      grid13: '#ECECEC',
      grid15: '#00000067',
      grid16: '#03DE73',
      grid17: '#FEF0E2',
      error: '#FCEDED',
      facebook: '#4080ff'
    }),
    borderColor: theme => ({
      ...theme('colors'),
      grid5: '#EBEBEB',
      grid11: '#FF5A5A',
      grid14: '#DCDDDE',
      'error-border': '#DD0000'
    }),
    fontSize: {
      ...defaultTheme.fontSize,
      '10px': '.625rem',
      '22px': '1.375rem',
      '42px': '2.625rem'
    },
    boxShadow: {
      box1: '0px 3px 6px #00000029',
      box2: '0px 3px 3px #00000029',
      box3: '1px 3px 6px #00000014'
    },
    minWidth: {
      100: '80px',
      168: '168px',
      300: '350px'
    },
    zIndex: {
      1: '1',
      10: '10',
      20: '20',
      30: '30'
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
    extend: {
      borderWidth: ['hover']
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms')
  ]
}
