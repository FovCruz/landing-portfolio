import React, { useState, useEffect } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(isDark ? 'dark' : 'light');

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-10 transition-colors duration-300">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          {/* GIF a la izquierda del logo */}
          <img
            src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif"
            width="22"
            alt="GIF"
            className="mr-2"
          />
          <div className="text-xl font-bold" style={{ color: theme === 'light' ? '#000000' : '#ffddcc' }}>
            Fabián Valencia
          </div>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#inicio" className={`hover:border-b-2 border-[#ffddcc] transition-colors duration-300 ${theme === 'light' ? 'text-black' : 'text-[#ffddcc]'}`}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#proyectos" className={`hover:border-b-2 border-[#ffddcc] transition-colors duration-300 ${theme === 'light' ? 'text-black' : 'text-[#ffddcc]'}`}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#experiencia" className={`hover:border-b-2 border-[#ffddcc] transition-colors duration-300 ${theme === 'light' ? 'text-black' : 'text-[#ffddcc]'}`}>
              Experiencia
            </a>
          </li>
          <li>
            <a href="#conocimientos" className={`hover:border-b-2 border-[#ffddcc] transition-colors duration-300 ${theme === 'light' ? 'text-black' : 'text-[#ffddcc]'}`}>
              Conocimientos & Herramientas
            </a>
          </li>
          <li>
            <a href="#sobremi" className={`hover:border-b-2 border-[#ffddcc] transition-colors duration-300 ${theme === 'light' ? 'text-black' : 'text-[#ffddcc]'}`}>
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#contacto" className={`hover:border-b-2 border-[#ffddcc] transition-colors duration-300 ${theme === 'light' ? 'text-black' : 'text-[#ffddcc]'}`}>
              Contacto
            </a>
          </li>
        </ul>
        <button onClick={toggleTheme} className={`text-2xl focus:outline-none transition-colors duration-300 ${theme === 'light' ? 'text-black' : 'text-[#ffddcc]'}`}>
          {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
