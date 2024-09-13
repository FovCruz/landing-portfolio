/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Activar el modo oscuro
  theme: {
    extend: {
      colors: {
        primary: '#ffddcc', // Color personalizado
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'], // Fuente personalizada
      },
      borderColor: {
        'custom-brown': '#80664d', // Define tu color personalizado
    },

    },
  },
  plugins: [],
}
