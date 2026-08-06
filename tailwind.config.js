/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fondoweb': '#071226',
        'letrablanca': '#F4F4F4',
        'fondobtnmenu' : '#456173',
        'colorborder' : '#2D4B73',
        'naranjo' : '#F29422',
        'azulbrillante' : '#88E8F2',
        'custom-gray': '#313131',
        'linkoff': '#808080'
      },
      spacing:{
        '106':'106px',
        '55' : '55px',
        '18' : '18px',
        '41' : '41px',
        '7px' : '7px',
        '500' : '500px',
        '94' : '94px',
      },
      fontFamily: {
        Oswald: ['Oswald','sans-serif'],
        Inter: ['Inter','sans-serif'],
      },
      fontSize: {
        'titulopagina' : '28px',
        'h1pagina' : '111px',
      },
    },
  },
  plugins: [],
}
