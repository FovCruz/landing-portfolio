import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import KnowledgeToolsSection from './components/KnowledgeToolsSection';
import AboutMeSection from './components/AboutMeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';
import './i18n';
import './styles/globales.css';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || 'medium');
  const { i18n } = useTranslation();
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        setCurrentSection((prevSection) => Math.min(prevSection + 1, 5));
      } else {
        setCurrentSection((prevSection) => Math.max(prevSection - 1, 0));
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
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
    root.style.fontSize = fontSize === 'small' ? '14px' : fontSize === 'large' ? '18px' : '16px';
  }, [fontSize]);

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  return (
    <div className="app bg-white dark:bg-gray-900  text-gray-900 dark:text-white">
      <Navbar toggleTheme={toggleTheme} changeFontSize={changeFontSize} changeLanguage={changeLanguage} />

      <main>
        <HomeSection className="section" />
        <ProjectsSection className="section" />
        <ExperienceSection className="section" />
        <KnowledgeToolsSection className="section" />
        <AboutMeSection className="section" />
        <ContactSection className="section" />
      </main>

      <Footer />
    </div>
  );
};

export default App;
