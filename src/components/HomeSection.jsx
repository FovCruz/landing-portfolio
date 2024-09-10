// src/components/HomeSection.jsx
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const HomeSection = () => {
  return (
    <section id="inicio" className="h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-center">
      <div className="max-w-xl mx-auto">
        <img src="ruta-a-tu-imagen.jpg" alt="Fabián Valencia" className="rounded-full w-40 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Fabián Valencia Cruz</h1>
        <p className="text-lg mb-6 dark:text-gray-300">Ingeniero Informático con experiencia en gestión de TI, desarrollo web y soporte técnico.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/fabian-osvaldo-cruz/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 dark:text-blue-400 text-2xl hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com/FovCruz" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 dark:text-gray-100 text-2xl hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
