import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  MdMenu, MdClose, MdHome, MdWork, MdPerson, MdMail,
  MdBusinessCenter, MdTextFields, MdLightMode, MdDarkMode
} from 'react-icons/md';
import { FaCode } from 'react-icons/fa';
import '../styles/navbar.css';

const Navbar = ({ toggleTheme, changeFontSize, changeLanguage }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Ahora sí es mutable
  const [language, setLanguage] = useState(localStorage.getItem('i18nextLng') || 'es');

  const menuRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleThemeHandler = useCallback(() => {
    toggleTheme();
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }, [toggleTheme]);

  // Handler que actualiza el state local del navbar
  const toggleLanguageHandler = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    changeLanguage(newLang);
    setLanguage(newLang); // actualiza el navbar
    localStorage.setItem('i18nextLng', newLang);
  };

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-lg z-40"></div>}

      <nav className={`fixed w-full z-50 bg-gray-900 shadow-md transition duration-300 ${scrolling ? 'shadow-lg' : ''}`}>
        <div className="w-full px-2 flex justify-between items-center py-2">

          {/* LOGO */}
          <div className="flex items-center">
            <img src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif" width="22" alt="Icono animado" className="mr-2 hidden lg:block"/>
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Logo de F.Cruz" className="w-36"/>
          </div>

          {/* LINKS DESKTOP */}
          <ul className="hidden lg:flex space-x-6 mx-auto text-[#ffddcc]">
            <li><a href="#inicio" className="nav-link"><MdHome className="inline mr-1"/>{language === 'es' ? 'Inicio' : 'Home'}</a></li>
            <li><a href="#proyectos" className="nav-link"><MdWork className="inline mr-1"/>{language === 'es' ? 'Proyectos' : 'Projects'}</a></li>
            <li><a href="#experiencia" className="nav-link"><MdBusinessCenter className="inline mr-1"/>{language === 'es' ? 'Experiencia' : 'Experience'}</a></li>
            <li><a href="#conocimientos" className="nav-link"><FaCode className="inline mr-1"/>{language === 'es' ? 'Conocimientos' : 'Knowledge'}</a></li>
            <li><a href="#sobremi" className="nav-link"><MdPerson className="inline mr-1"/>{language === 'es' ? 'Sobre mí' : 'About Me'}</a></li>
            <li><a href="#contacto" className="nav-link"><MdMail className="inline mr-1"/>{language === 'es' ? 'Contacto' : 'Contact'}</a></li>
          </ul>

          {/* BOTONES DESKTOP */}
          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={changeFontSize} className="text-[#ffddcc] hover:text-white text-2xl"><MdTextFields/></button>

            {/* Botón de idioma */}
            <button onClick={toggleLanguageHandler} className="text-[#ffddcc] hover:text-white">
              <img
                src={`${import.meta.env.BASE_URL}iconos/${language === 'es' ? 'flag_uk.svg' : 'flag_es.svg'}`}
                alt={language === 'es' ? 'ES' : 'EN'}
                className="w-6 h-6"
              />
            </button>

            <button onClick={toggleThemeHandler} className="text-2xl text-[#ffddcc]">
              {theme === 'light' ? <MdDarkMode/> : <MdLightMode/>}
            </button>
          </div>

          {/* BOTÓN MOBILE */}
          <button onClick={() => setIsOpen(prev => !prev)} className="text-3xl lg:hidden text-[#ffddcc]">
            {isOpen ? <MdClose/> : <MdMenu/>}
          </button>

          {/* MENÚ MOBILE */}
          {isOpen && (
            <div ref={menuRef} className="absolute top-16 left-0 w-full bg-gray-900/90 backdrop-blur-md text-[#ffddcc] flex flex-col border-t border-b z-50">
              <div className="flex justify-between p-4">
                <ul className="flex flex-col items-start space-y-4">
                  <li><a href="#inicio" onClick={() => setIsOpen(false)} className="nav-link"><MdHome className="inline mr-1"/>{language === 'es' ? 'Inicio' : 'Home'}</a></li>
                  <li><a href="#proyectos" onClick={() => setIsOpen(false)} className="nav-link"><MdWork className="inline mr-1"/>{language === 'es' ? 'Proyectos' : 'Projects'}</a></li>
                  <li><a href="#experiencia" onClick={() => setIsOpen(false)} className="nav-link"><MdBusinessCenter className="inline mr-1"/>{language === 'es' ? 'Experiencia' : 'Experience'}</a></li>
                  <li><a href="#conocimientos" onClick={() => setIsOpen(false)} className="nav-link"><FaCode className="inline mr-1"/>{language === 'es' ? 'Conocimientos' : 'Knowledge'}</a></li>
                  <li><a href="#sobremi" onClick={() => setIsOpen(false)} className="nav-link"><MdPerson className="inline mr-1"/>{language === 'es' ? 'Sobre mí' : 'About Me'}</a></li>
                  <li><a href="#contacto" onClick={() => setIsOpen(false)} className="nav-link"><MdMail className="inline mr-1"/>{language === 'es' ? 'Contacto' : 'Contact'}</a></li>
                </ul>

                <div className="flex flex-col items-end space-y-6">
                  <button onClick={toggleThemeHandler} className="text-2xl"><MdDarkMode/></button>

                  {/* Botón idioma mobile corregido */}
                  <button onClick={toggleLanguageHandler}><img src={`${import.meta.env.BASE_URL}iconos/${language === 'es' ? 'flag_es.svg' : 'flag_uk.svg'}`} className="w-6 h-6"/></button>

                  <button onClick={changeFontSize} className="text-2xl"><MdTextFields/></button>
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
