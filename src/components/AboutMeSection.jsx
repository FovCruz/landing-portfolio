import React from 'react';
import '../styles/about.css'; // CSS específico de la sección
import { FaReact, FaPython, FaAws, FaDatabase } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Importamos el hook para la traducción

const AboutMeSection = () => {
  const { t } = useTranslation(); // Hook para usar la función de traducción

  return (
    <section
      id="sobremi"
      className="about-section section h-screen bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-left"
      aria-labelledby="sobre-mi-title"
    >
      <div className="about-container max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-12">

        {/* Columna izquierda - Imagen con halo */}
        <div className="about-image-container relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full border-4 border-transparent shadow-lg flex items-center justify-center mb-8 lg:mb-0 halo-effect">
          <img 
            src={`${process.env.PUBLIC_URL}/img_personal.jpeg`} 
            alt={t('aboutMe.photoAlt')} // Traducción de "Foto de Fabián Valencia Cruz"
            className="w-full h-full object-cover rounded-full"
            loading="lazy"
          />
        </div>

        {/* Columna derecha - Texto y habilidades */}
        <div className="about-text-container lg:pl-8 w-full lg:w-1/2">
          <h1 className="title-font mb-4 text-2xl font-medium text-dark sm:text-3xl text-gray-900 dark:text-white">
            {t('aboutMe.title')} {/* Traducción de "Sobre mí" */}
          </h1>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {t('aboutMe.description1')} {/* Traducción del párrafo de introducción */}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            {t('aboutMe.description2')} {/* Traducción del segundo párrafo */}
            <span className="highlight">React</span>, 
            <span className="highlight"> Django</span>, <span className="highlight">PostgreSQL</span>, {t('aboutMe.and')} 
            <span className="highlight"> AWS</span>.
          </p>

          {/* Habilidades e Iconos */}
          <div className="skills-container flex flex-wrap justify-start gap-6">
            <div className="skill-icon group" role="img" aria-label="React">
              <FaReact className="text-5xl text-blue-400 group-hover:text-blue-300 transition-transform transform group-hover:scale-110" />
              <span className="skill-text">React</span>
            </div>
            <div className="skill-icon group" role="img" aria-label="Python">
              <FaPython className="text-5xl text-yellow-500 group-hover:text-yellow-400 transition-transform transform group-hover:scale-110" />
              <span className="skill-text">Python</span>
            </div>
            <div className="skill-icon group" role="img" aria-label="AWS">
              <FaAws className="text-5xl text-orange-500 group-hover:text-orange-400 transition-transform transform group-hover:scale-110" />
              <span className="skill-text">AWS</span>
            </div>
            <div className="skill-icon group" role="img" aria-label="PostgreSQL">
              <FaDatabase className="text-5xl text-purple-500 group-hover:text-purple-400 transition-transform transform group-hover:scale-110" />
              <span className="skill-text">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
