/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Activar el modo oscuro
  theme: {
    extend: {
      colors: {
        primary: '#e1c4b7', // Color personalizado
        'custom-brown': '#80664d', // Color personalizado
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Fuente principal
      },
    },
  },
  plugins: [],
};
