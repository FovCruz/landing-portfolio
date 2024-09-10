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
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold" style={{ color: '#ffddcc' }}>Fabián Valencia</div>
        <ul className="flex space-x-6">
          <li>
            <a href="#inicio" className="hover:border-b-2 border-[#ffddcc] transition-colors duration-300" style={{ color: '#ffddcc' }}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#proyectos" className="hover:border-b-2 border-[#ffddcc] transition-colors duration-300" style={{ color: '#ffddcc' }}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#experiencia" className="hover:border-b-2 border-[#ffddcc] transition-colors duration-300" style={{ color: '#ffddcc' }}>
              Experiencia
            </a>
          </li>
          <li>
            <a href="#conocimientos" className="hover:border-b-2 border-[#ffddcc] transition-colors duration-300" style={{ color: '#ffddcc' }}>
              Conocimientos & Herramientas
            </a>
          </li>
          <li>
            <a href="#sobremi" className="hover:border-b-2 border-[#ffddcc] transition-colors duration-300" style={{ color: '#ffddcc' }}>
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:border-b-2 border-[#ffddcc] transition-colors duration-300" style={{ color: '#ffddcc' }}>
              Contacto
            </a>
          </li>
        </ul>
        <button onClick={toggleTheme} className="text-2xl focus:outline-none transition-colors duration-300" style={{ color: '#ffddcc' }}>
          {theme === 'light' ? <MdDarkMode className="text-[#ffddcc]" /> : <MdLightMode className="text-[#ffddcc]" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
