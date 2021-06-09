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
        })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
