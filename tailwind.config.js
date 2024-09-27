/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Activar el modo oscuro con la clase 'dark'
  theme: {
    extend: {
      colors: {
        primary: '#e1c4b7', // Color personalizado
        'custom-brown': '#80664d', // Color personalizado
        dark: '#1a202c', // Color de fondo para modo oscuro
        light: '#f9f9f9', // Color de fondo para modo claro
        'dark-text': '#ffa600', // Color del texto en modo oscuro
        'light-text': '#374151', // Color del texto en modo claro
        secondary: '#ffddcc', // Color secundario
      },
    },
  },
  plugins: [],
};
