const tailwindcss = require('tailwindcss')
const { fontFamily} = require('tailwindcss/defaultTheme')


module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'none', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        'sans': ['Montserrat']
        
      },
    },
  },
  variants: {
    extend: {
      typgraphy: ["dark"],
    },
  },
  plugins: [
    require('autoprefixer'),
    require('tailwindcss'),
  ],
}