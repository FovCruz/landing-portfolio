import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Importamos el hook de traducción
import '../styles/home.css';

const HomeSection = () => {
  const [showCV, setShowCV] = useState(false);
  const { t } = useTranslation(); // Hook para usar la función de traducción

  const toggleCV = () => {
    setShowCV(!showCV); // Mostrar/ocultar el CV
  };

  // Componente del borde animado
  const CardAnimatedBorderGradient = () => (
    <div className='animate-comet-shadow relative h-60 w-60 sm:h-40 sm:w-40 lg:h-56 lg:w-56 xl:h-64 xl:w-80 overflow-hidden rounded-full border border-gray-800 p-[3px] backdrop-blur-3xl'>
      <span className='absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <img
        src={`${process.env.PUBLIC_URL}/img_personal.jpeg`}
        alt={t('home.photoAlt')} // Traducción del texto alternativo de la imagen
        className='inline-flex h-full w-full items-center justify-center rounded-full bg-gray-950 text-sm font-medium text-gray-50 backdrop-blur-3xl'
      />
    </div>
  );

  const commonTextClasses = 'dark:text-[#ffddcc] text-gray-900';
  const commonButtonClasses = 'font-light py-1.5 px-3 sm:py-2 sm:px-4 rounded-full border-2 transition-all duration-500';
  const buttonHoverClasses = 'dark:hover:bg-[#ffddcc] dark:hover:text-gray-900 hover:bg-gray-900 hover:text-white';

  return (
    <section
      id="inicio"
      className="section min-h-screen flex items-center justify-center text-center relative transition-colors duration-300 bg-white dark:bg-gray-900"
    >
      <div className="relative flex flex-col lg:flex-row w-full max-w-6xl mx-auto px-4 lg:px-8 py-12 items-start justify-between">
        {/* Imagen con borde animado */}
        <CardAnimatedBorderGradient />

        <div className="flex flex-col w-full text-left lg:pl-8">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 ${commonTextClasses}`}>
            Fabián Valencia Cruz
          </h1>
          <hr className="border-1 border-slate-950 dark:border-[#ffddcc]" />

          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-6 max-w-3xl ${commonTextClasses}`}>
            {t('home.intro')} {/* Traducción del párrafo introductorio */}
          </p>

          {/* Redes sociales */}
          <div className="flex space-x-6 mb-6">
            <a href="https://www.linkedin.com/in/fabian-osvaldo-cruz/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={`text-3xl sm:text-4xl ${commonTextClasses} hover:scale-110 transition-transform`} />
            </a>
            <a href="https://github.com/FovCruz" target="_blank" rel="noopener noreferrer">
              <FaGithub className={`text-3xl sm:text-4xl ${commonTextClasses} hover:scale-110 transition-transform`} />
            </a>
            <a href="mailto:fov.cruz@gmail.com" className="flex items-center text-lg">
              <FaEnvelope className={`text-3xl ${commonTextClasses}`} />
              <span className={`ml-2 ${commonTextClasses}`}>fov.cruz@gmail.com</span>
            </a>
          </div>

          {/* Botones para CV */}
          <div className="flex flex-wrap justify-start gap-2 sm:gap-4">
            <button
              onClick={toggleCV}
              className={`${commonButtonClasses} dark:border-[#ffddcc] border-gray-900 dark:text-[#ffddcc] text-gray-900 ${buttonHoverClasses}`}
            >
              {t('home.viewCV')} {/* Traducción del texto del botón para ver el CV */}
            </button>
            <a
              href={`${process.env.PUBLIC_URL}/CV-Fabian-Valencia-C-09-2024-mod09-3.pdf`}
              download
              className={`${commonButtonClasses} dark:border-[#ffddcc] border-gray-900 dark:text-[#ffddcc] text-gray-900 ${buttonHoverClasses}`}
            >
              {t('home.downloadCV')} {/* Traducción del texto del botón para descargar el CV */}
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/CV_Fabian_Valencia_formato_ATS_.docx`}
              download
              className={`${commonButtonClasses} dark:border-[#ffddcc] border-gray-900 dark:text-[#ffddcc] text-gray-900 ${buttonHoverClasses}`}
            >
              {t('home.downloadATS')} {/* Traducción del texto del botón para descargar el CV en formato ATS */}
            </a>
          </div>
        </div>
      </div>

      {/* Visor de PDF */}
      {showCV && (
        <div className="fixed inset-0 bg-opacity-100 flex items-center justify-center z-40" onClick={toggleCV}>
          <div className="relative w-full h-3/4 max-w-4xl max-h-full bg-white dark:bg-gray-900 p-1 rounded-md shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-500 dark:text-[#ffddcc] hover:text-black dark:hover:text-white"
              onClick={toggleCV}
            >
              X
            </button>
            <iframe
              src={`${process.env.PUBLIC_URL}/CV-Fabian-Valencia-C-09-2024-mod09-3.pdf`}
              className="w-full h-full"
              style={{ minHeight: '5vh' }}
              title={t('home.viewCVOnline')}
            />
          </div>
        </div>
      )}

      {/* Ícono de Scroll Down */}
      <div className="scroll-icon">
        <div className="scroll-arrow"></div>
        <div className="scroll-arrow delay"></div>
      </div>
    </section>
  );
};

export default HomeSection;
