/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'hoverColor':'#43ff64d9',
        'black-rgba':'rgba(0,0,0,0.2)'
        
      }
    },
    screens:{
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px)
  
      'lg': {'max': '1099px'},
      // => @media (max-width: 1023px)
  
      'md': {'max': '900px'},
      // => @media (max-width: 767px)
  
      'sm': {'max': '746px'},
      // => @media (max-width: 639px)
      'lit':{'max': '456px'}
    },
  },
  plugins: [],
}