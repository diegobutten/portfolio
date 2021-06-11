const colors = require('tailwindcss/colors')

module.exports = {
  // purge: [],
  purge: {
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	backgroundImage: theme => ({
        'computer-img': "url('image/computer.jpg')",
      }),
      colors : {
        orange: colors.orange,
        teal: colors.teal,
        cyan: colors.cyan,
      },
      scale: ['hover'],
      translate: ['hover'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
