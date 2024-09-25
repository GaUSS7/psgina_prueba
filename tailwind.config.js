/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html" , "./build/js/*.js"],
  theme: {
    extend: {
      screens: {
        //esto es para que haga el calculo de la medidas del alto y del ancho. NO LO ENTIEDNO. NO TOCAR
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)'} ,
        'tallscreen': { 'raw': '(min-aspect-ratio: 13/20)'} ,
      },
      Keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)'},
          '80%': { transform: 'scaleY(1.2)'},
          '100%': { transform: 'scaleY(1)'},
        },
      },
      animation : {
        'open-menu' : 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

