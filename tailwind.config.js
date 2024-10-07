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
        'dark-text': '#ffa600', // Color del texto en modo oscuro
        'light-text': '#374151', // Color del texto en modo claro
        secondary: '#ffddcc', // Color secundario
      },
      backgroundImage: {
        'light-background': "url('https://hougumlaw.com/wp-content/uploads/2016/05/light-website-backgrounds-light-color-background-images-light-color-background-images-for-website-1024x640.jpg')",
        'dark-background': "url('https://static-assets.bamgrid.com/product/disneyplus/images/background.dc67869b698f6c927aae59c68d9dda46.png')",
      },
    },
  },
  plugins: [],
};