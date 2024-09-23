import React, { useState, useEffect, useCallback } from 'react';
import {
  MdLightMode,
  MdDarkMode,
  MdMenu,
  MdClose,
  MdHome,
  MdWork,
  MdPerson,
  MdMail,
  MdBusinessCenter,
  MdTextFields
} from 'react-icons/md';
import { FaCode } from 'react-icons/fa';
import '../styles/globales.css';

const Navbar = ({ toggleTheme, changeFontSize, changeLanguage }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem('i18nextLng') || 'es');

  // Efecto de scroll para añadir sombra
  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(isDark ? 'dark' : 'light');

    localStorage.setItem('theme', theme);

    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleThemeHandler = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-md bg-gray-900/80 transition-colors duration-300 ${
        scrolling ? 'shadow-lg' : ''
      }`}
      aria-label="Navegación principal"
    >
      <div className="w-full px-6 flex justify-between items-center py-1">
        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <a href="#inicio" className="flex items-center">
            <img
              src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif"
              width="22"
              alt="Icono animado"
              className="mr-2"
            />
            <img
              src={`${process.env.PUBLIC_URL}/logo.svg`}
              alt="Logo de F.Cruz"
              className="logo-personalizado text-[#ffddcc] hover:text-[#ffeed4]"
              style={{ fontFamily: 'Cormorant, serif' }}
            />
          </a>
        </div>

        {/* Menú para desktop (links centrados) */}
        <ul className="hidden lg:flex space-x-6 items-center justify-center mx-auto text-[#ffddcc]">
          <li>
            <a href="#inicio" className="nav-link">
              <MdHome className="inline mr-1" /> {language === 'es' ? 'Inicio' : 'Home'}
            </a>
          </li>
          <li>
            <a href="#proyectos" className="nav-link">
              <MdWork className="inline mr-1" /> {language === 'es' ? 'Proyectos' : 'Projects'}
            </a>
          </li>
          <li>
            <a href="#experiencia" className="nav-link">
              <MdBusinessCenter className="inline mr-1" /> {language === 'es' ? 'Experiencia' : 'Experience'}
            </a>
          </li>
          <li>
            <a href="#conocimientos" className="nav-link">
              <FaCode className="inline mr-1" /> {language === 'es' ? 'Conocimientos' : 'Knowledge'}
            </a>
          </li>
          <li>
            <a href="#sobremi" className="nav-link">
              <MdPerson className="inline mr-1" /> {language === 'es' ? 'Sobre mí' : 'About Me'}
            </a>
          </li>
          <li>
            <a href="#contacto" className="nav-link">
              <MdMail className="inline mr-1" /> {language === 'es' ? 'Contacto' : 'Contact'}
            </a>
          </li>
        </ul>

        {/* Iconos para desktop (esquina superior derecha) */}
        <div className="hidden lg:flex space-x-4 items-center">
          <button
            onClick={toggleThemeHandler}
            className="text-2xl text-[#ffddcc] hover:text-white focus:outline-none"
            aria-label="Alternar tema claro/oscuro"
          >
            {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
          </button>

          <button onClick={toggleLanguage} className="text-[#ffddcc] hover:text-white focus:outline-none">
            <img
              src={
                language === 'es'
                  ? `${process.env.PUBLIC_URL}/iconos/flag_es.svg`
                  : `${process.env.PUBLIC_URL}/iconos/flag_uk.svg`
              }
              alt={language === 'es' ? 'ES' : 'EN'}
              className="w-6 h-6 inline"
            />
          </button>

          <button
            onClick={changeFontSize}
            className="text-2xl text-[#ffddcc] hover:text-white focus:outline-none"
            aria-label="Cambiar tamaño de fuente"
          >
            <MdTextFields />
          </button>
        </div>

        {/* Menú hamburguesa y controles adicionales en mobile */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl text-[#ffddcc] border border-[#ffddcc] rounded-lg focus:outline-none transition duration-300"
            aria-label="Menú"
          >
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Menú desplegable móvil con íconos alineados a la derecha */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-900/90 backdrop-blur-md text-[#ffddcc] flex flex-col border-t border-b border-[#ffddcc29]">
            <div className="flex flex-row justify-between p-4">
              {/* Columna izquierda: links del menú */}
              <ul className="flex flex-col items-start space-y-4">
                <li>
                  <a href="#inicio" className="nav-link" onClick={toggleMenu}>
                    <MdHome className="inline mr-1" /> {language === 'es' ? 'Inicio' : 'Home'}
                  </a>
                </li>
                <li>
                  <a href="#proyectos" className="nav-link" onClick={toggleMenu}>
                    <MdWork className="inline mr-1" /> {language === 'es' ? 'Proyectos' : 'Projects'}
                  </a>
                </li>
                <li>
                  <a href="#experiencia" className="nav-link" onClick={toggleMenu}>
                    <MdBusinessCenter className="inline mr-1" /> {language === 'es' ? 'Experiencia' : 'Experience'}
                  </a>
                </li>
                <li>
                  <a href="#conocimientos" className="nav-link" onClick={toggleMenu}>
                    <FaCode className="inline mr-1" /> {language === 'es' ? 'Conocimientos' : 'Knowledge'}
                  </a>
                </li>
                <li>
                  <a href="#sobremi" className="nav-link" onClick={toggleMenu}>
                    <MdPerson className="inline mr-1" /> {language === 'es' ? 'Sobre mí' : 'About Me'}
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="nav-link" onClick={toggleMenu}>
                    <MdMail className="inline mr-1" /> {language === 'es' ? 'Contacto' : 'Contact'}
                  </a>
                </li>
              </ul>

              {/* Columna derecha: iconos de cambios */}
              <div className="flex flex-col items-end space-y-6 pr-2">
                <button
                  onClick={toggleThemeHandler}
                  className="text-2xl text-[#ffddcc] hover:text-white focus:outline-none"
                  aria-label="Alternar tema claro/oscuro"
                >
                  {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
                </button>

                <button onClick={toggleLanguage} className="text-[#ffddcc] hover:text-white focus:outline-none">
                  <img
                    src={
                      language === 'es'
                        ? `${process.env.PUBLIC_URL}/iconos/flag_es.svg`
                        : `${process.env.PUBLIC_URL}/iconos/flag_uk.svg`
                    }
                    alt={language === 'es' ? 'ES' : 'EN'}
                    className="w-6 h-6 inline"
                  />
                </button>

                <button
                  onClick={changeFontSize}
                  className="text-2xl text-[#ffddcc] hover:text-white focus:outline-none"
                  aria-label="Cambiar tamaño de fuente"
                >
                  <MdTextFields />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
