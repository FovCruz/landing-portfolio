// src/components/AboutMeSection.jsx
import React from 'react';

const AboutMeSection = () => {
  return (
    <section id="sobremi" className="h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Sobre mí</h2>
        <p className="dark:text-gray-300">Soy Ingeniero Informático titulado de Duoc UC, con experiencia en desarrollo web, administración de sistemas y gestión de usuarios.</p>
        <p className="dark:text-gray-300 mt-4">Me especializo en el uso de tecnologías como React, Django y PostgreSQL, y tengo interés en continuar desarrollando soluciones tecnológicas innovadoras.</p>
      </div>
    </section>
  );
};

export default AboutMeSection;
