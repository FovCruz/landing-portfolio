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
    setIsOpen(prevState => !prevState);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  return (
    <nav
      className={`fixed w-full z-50 bg-gray-900 shadow-md transition-colors duration-300 ${scrolling ? 'shadow-lg' : ''}`}
      aria-label="Navegación principal"
    >
      <div className="w-full px-6 flex justify-between items-center py-1">
        <div className="flex items-center">
          <img
            src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif"
            width="22"
            alt="Icono animado"
            className="mr-1"
          />
          <img
            src={`${process.env.PUBLIC_URL}/logo.svg`}
            alt="Logo de F.Cruz"
            className="logo-personalizado"
          />
        </div>

        {/* Menú en desktop */}
        <ul className="hidden lg:flex space-x-6 items-center justify-center mx-auto transition-all duration-500 text-[#ffddcc]">
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

        {/* Controles adicionales */}
        <div className="flex items-center space-x-4">
          {/* Cambiar tamaño de fuente */}
          <button
            onClick={changeFontSize}
            className="text-[#ffddcc] hover:text-white text-2xl"
            aria-label="Cambiar tamaño de fuente"
          >
            <MdTextFields />
          </button>

          {/* Cambiar idioma */}
          <button onClick={toggleLanguage} className="text-[#ffddcc] hover:text-white">
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

          {/* Cambiar tema */}
          <button
            onClick={toggleThemeHandler}
            className="text-2xl text-[#ffddcc] focus:outline-none transition-colors duration-300"
            aria-label="Alternar tema claro/oscuro"
          >
            {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
          </button>

          {/* Menú hamburguesa para móvil */}
          <button
            onClick={toggleMenu}
            className="text-3xl lg:hidden text-[#ffddcc] focus:outline-none transition duration-300"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Menú desplegable para móvil */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-4 py-6 lg:hidden transition-all duration-500 ease-in-out">
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
