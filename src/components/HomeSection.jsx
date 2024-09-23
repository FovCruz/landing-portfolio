import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import CustomButton from './CustomButton'; // Importamos el botón personalizado
import '../styles/home.css';

const HomeSection = () => {
  const [showCV, setShowCV] = useState(false);
  const { t } = useTranslation();

  const toggleCV = () => {
    setShowCV(!showCV); // Mostrar/ocultar el CV
  };

  // Componente del borde animado con imagen
  const CardAnimatedBorderGradient = () => (
    <div className='animate-comet-shadow relative h-60 w-60 sm:h-40 sm:w-40 lg:h-56 lg:w-56 xl:h-64 xl:w-80 overflow-hidden rounded-full border p-[2px]'>
      <span className='absolute inset-0 animate-spin' />
      {/* Imagen personal */}
      <img
        src={`${process.env.PUBLIC_URL}/img_personal.jpeg`} // Ruta de la imagen personal
        alt={t('home.photoAlt')} // Texto alternativo
        className='inline-flex h-full w-full items-center justify-center rounded-full text-sm font-medium'
      />
    </div>
  );

  return (
    <section
      id="inicio"
      className="section min-h-screen flex items-center justify-center text-center relative transition-colors duration-300"
    >
      <div className="relative flex flex-col lg:flex-row w-full max-w-6xl mx-auto px-4 lg:px-8 py-12 items-start justify-between">

        {/* Imagen con borde animado */}
        <CardAnimatedBorderGradient />

        <div className="flex flex-col w-full text-left lg:pl-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4 dark:text-[#ffddcc] text-gray-900">
            Fabián Valencia Cruz
          </h1>
          <hr className="border-1 border-slate-950 dark:border-[#ffddcc]" />

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 max-w-3xl dark:text-[#ffddcc] text-gray-900">
            {t('home.intro')}
          </p>

          {/* Redes sociales */}
          <div className="flex space-x-6 mb-6">
            <a href="https://www.linkedin.com/in/fabian-osvaldo-cruz/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl sm:text-4xl dark:text-[#ffddcc] text-gray-900 hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/FovCruz" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl sm:text-4xl dark:text-[#ffddcc] text-gray-900 hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:fov.cruz@gmail.com" className="flex items-center text-lg">
              <FaEnvelope className="text-3xl dark:text-[#ffddcc] text-gray-900" />
              <span className="ml-2 dark:text-[#ffddcc] text-gray-900">fov.cruz@gmail.com</span>
            </a>
          </div>

          {/* Botones para CV */}
          <div className="flex flex-wrap justify-start gap-2 sm:gap-4">
            <CustomButton onClick={toggleCV} ariaLabel={t('home.viewCV')} 
              isSectionButton={true}>
              {t('home.viewCV')}
            </CustomButton>
            <CustomButton
              link={`${process.env.PUBLIC_URL}/CV-Fabian-Valencia-C-09-2024-mod09-3.pdf`}
              ariaLabel={t('home.downloadCV')}
              isSectionButton={true}
            >
              {t('home.downloadCV')}
            </CustomButton>
            <CustomButton
              link={`${process.env.PUBLIC_URL}/CV_Fabian_Valencia_formato_ATS_.docx`}
              ariaLabel={t('home.downloadATS')}
              isSectionButton={true}
            >
              {t('home.downloadATS')}
            </CustomButton>
          </div>
        </div>
      </div>

      {/* Visor de PDF */}
      {showCV && (
        <div className="fixed inset-0 bg-opacity-100 flex items-center justify-center z-40" onClick={toggleCV}>
          <div className="relative w-full h-3/4 max-w-4xl max-h-full p-1 rounded-md shadow-lg">
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
    </section>
  );
};

export default HomeSection;
