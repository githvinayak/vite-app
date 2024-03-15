/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors:{
        'primary': "#010851",
        "secondary": "#9a7af1",
        "tertialry": "#707070",
        "pink": "#ee9ae5",
      },
      boxShadow: {
        '3xl': '0 10px 50px 0px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}