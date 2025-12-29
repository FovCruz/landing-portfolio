import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import KnowledgeToolsSection from './components/KnowledgeToolsSection';
import AboutMeSection from './components/AboutMeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackgroundWrapper from './components/BackgroundWrapper';
import SocialIcons from './components/SocialIcons'; // Importa el componente de íconos sociales
                                      

import { useTranslation } from 'react-i18next';
import './i18n';
import './styles/globales.css';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || 'medium');
  const { i18n } = useTranslation();
  const [currentSection, setCurrentSection] = useState(0);
  let startY = null;

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        setCurrentSection((prevSection) => Math.min(prevSection + 1, 5));
      } else {
        setCurrentSection((prevSection) => Math.max(prevSection - 1, 0));
      }
    };

    const handleTouchStart = (event) => {
      startY = event.touches[0].clientY;
    };

    const handleTouchMove = (event) => {
      if (!startY) return;
      const endY = event.touches[0].clientY;
      const deltaY = startY - endY;

      if (deltaY > 50) {
        // Desplazarse hacia abajo
        setCurrentSection((prevSection) => Math.min(prevSection + 1, 5));
      } else if (deltaY < -50) {
        // Desplazarse hacia arriba
        setCurrentSection((prevSection) => Math.max(prevSection - 1, 0));
      }

      startY = null;
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    if (sections[currentSection]) {
      sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentSection]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const changeFontSize = () => {
    const newSize = fontSize === 'small' ? 'medium' : fontSize === 'medium' ? 'large' : 'small';
    setFontSize(newSize);
    localStorage.setItem('fontSize', newSize);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = fontSize === 'small' ? '12px' : fontSize === 'large' ? '16px' : '14px';
  }, [fontSize]);

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  return (
    <BackgroundWrapper>
      <SocialIcons />

      <Navbar toggleTheme={toggleTheme} changeFontSize={changeFontSize} changeLanguage={changeLanguage} />

      <main className="relative z-10">
        <HomeSection className="section" />
        <ExperienceSection className="section" />
        <ProjectsSection className="section" />
        <KnowledgeToolsSection className="section" />
        <AboutMeSection className="section" />
        <ContactSection className="section" />
      </main>

      <Footer />
    </BackgroundWrapper>
  );
};

export default App;
