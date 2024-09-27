import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomButton from './CustomButton';
import '../styles/globales.css'; // Mantenemos lo necesario

const HomeSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="inicio"
      className="section min-h-screen flex flex-col items-center justify-center text-center relative transition-colors duration-300 px-4"
    >
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto px-4 lg:px-8 py-12 items-center space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Contenedor de la imagen y el círculo */}
        <div className="relative h-64 w-64 sm:h-52 sm:w-52 lg:h-80 lg:w-80 xl:h-96 xl:w-96 rounded-full overflow-hidden">
          {/* Círculo detrás de la imagen */}
          <div
            className="absolute top-0 left-0 h-full w-full border-[10px] border-gray-400 rounded-full"
            style={{
              zIndex: -1, // Detrás de la imagen
            }}
          ></div>

          {/* Imagen redonda */}
          <img
            src={`${process.env.PUBLIC_URL}/img_personal.png`}
            alt={t('home.photoAlt')}
            className="h-full w-full rounded-full object-cover relative"
          />
        </div>

        <div className="flex flex-col w-full lg:w-[65%] text-center lg:text-left lg:pl-8 items-center lg:items-start">
          {/* Saludo con ícono de mano */}
          <h2 className="text-2xl font-thin mb-2">
            {t('home.greeting')} <span role="img" aria-label="hand-wave" className="wave">👋🏻</span> {t('home.iAm')}
          </h2>

          {/* Nombre/titulo */}
          <h1 className="text-2xl font-thin mb-2">
            <span className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{t('home.name')}</span>
          </h1>
          <hr className="border-1 my-2 w-full lg:w-auto" />

          {/* Descripción personalizada */}
          <p className="text-base sm:text-lg md:text-xl mb-10 max-w-3xl text-gray-700 dark:text-gray-300">
            {t('home.description')}
          </p>

          {/* Botón para descargar CV */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <CustomButton
              link={`${process.env.PUBLIC_URL}/CV-Fabian-Valencia-C-09-2024-mod09-3.pdf`}
              ariaLabel={t('home.downloadCV')}
              isSectionButton={true}
            >
              {t('home.downloadCV')}
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
