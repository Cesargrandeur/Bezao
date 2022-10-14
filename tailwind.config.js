/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '300px',
      'md' : '650px',
      'lg': '700px'
    },

    colors: {
      "onion": '#DA3743',
      "white": "#FFFFFF",

    },
    extend: {
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
        Raleway: ['Inter', 'sans-serif'],
      },
    },
  },

  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [],
}