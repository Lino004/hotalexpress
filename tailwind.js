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
      grid2: '#E82333'
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      grid1: '#8E2333',
      grid2: '#E82333',
      grid3: '#A0A0A0',
      grid4: '#626262'
    }),
    boxShadow: {
      box1: '0px 3px 6px #00000029',
      box2: '0px 3px 3px #00000029'
    },
    extend: {
      backgroundImage: theme => ({
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
