import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import KnowledgeToolsSection from './components/KnowledgeToolsSection';
import AboutMeSection from './components/AboutMeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    let currentSection = 0;

    const handleScroll = (e) => {
      e.preventDefault();

      if (e.deltaY > 0) {
        if (currentSection < sections.length - 1) currentSection++;
      } else {
        if (currentSection > 0) currentSection--;
      }

      sections[currentSection].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <div className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
      <Navbar toggleTheme={toggleTheme} />
      <main>
        <HomeSection />
        <ProjectsSection />
        <ExperienceSection />
        <KnowledgeToolsSection />
        <AboutMeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
