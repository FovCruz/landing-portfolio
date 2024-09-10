// src/components/ContactSection.jsx
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contacto" className="h-screen bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Contacto</h2>
        <p className="mb-4 dark:text-gray-300">Correo: fov.cruz@gmail.com</p>
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

export default ContactSection;
