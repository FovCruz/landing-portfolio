// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import KnowledgeToolsSection from './components/KnowledgeToolsSection';
import AboutMeSection from './components/AboutMeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
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
