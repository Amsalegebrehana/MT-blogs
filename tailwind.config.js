module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
 // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'img': "url('/src/assets/logo.png')"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}