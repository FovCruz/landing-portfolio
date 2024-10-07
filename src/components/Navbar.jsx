import React, { useState, useEffect, useCallback, useRef } from 'react';
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
import '../styles/navbar.css';

const Navbar = ({ toggleTheme, changeFontSize, changeLanguage }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem('i18nextLng') || 'es');
  const menuRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false); // Cerrar el menú móvil
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false); // Cerrar el menú móvil si se hace clic fuera de él
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

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
    <>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-lg z-40"></div>}
      
      <nav
        className={`fixed w-full z-50 bg-gray-900 shadow-md transition-colors duration-300 ${scrolling ? 'shadow-lg' : ''}`}
        aria-label="Navegación principal"
      >
        <div className="w-full px-2 flex justify-between items-center py-2">
          {/* Logo completamente a la izquierda */}
          <div className="flex items-center justify-start">
            <img
              src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif"
              width="22"
              alt="Icono animado"
              className="mr-2 hidden lg:block"
            />
            <img
              src={`${process.env.PUBLIC_URL}/logo.svg`}
              alt="Logo de F.Cruz"
              className="w-36"
              style={{ marginLeft: '0' }} // Asegúrate de que no tenga margen
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

          {/* Iconos en desktop (esquina derecha) */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={changeFontSize}
              className="text-[#ffddcc] hover:text-white text-2xl"
              aria-label="Cambiar tamaño de fuente"
            >
              <MdTextFields />
            </button>

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

            <button
              onClick={toggleThemeHandler}
              className="text-2xl text-[#ffddcc] focus:outline-none transition-colors duration-300"
              aria-label="Alternar tema claro/oscuro"
            >
              {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
            </button>
          </div>

          {/* Menú hamburguesa para móvil */}
          <button
            onClick={toggleMenu}
            className="text-3xl lg:hidden text-[#ffddcc] focus:outline-none transition duration-300"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>

          {/* Menú desplegable para móvil */}
          {isOpen && (
            <div
              ref={menuRef}
              className="absolute top-16 left-0 w-full bg-gray-900/90 backdrop-blur-md text-[#ffddcc] flex flex-col border-t border-b border-[#ffddcc29] z-50"
            >
              <div className="flex flex-row justify-between p-4">
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
    </>
  );
};

export default Navbar;