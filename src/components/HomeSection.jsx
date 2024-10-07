import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomButton from './CustomButton';
import '../styles/globales.css'; // Archivo de estilos globales

const HomeSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="inicio"
      className="section pt-28 md:py-12 min-h-screen flex flex-col items-center justify-center text-center relative transition-colors duration-300 px-4"
    >
      <div className="max-w-6xl lg:px-8 sm:py-10 lg:py-16 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="relative h-64 w-64 sm:h-52 sm:w-52 lg:h-80 lg:w-80 xl:h-96 xl:w-96 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full w-full border-[10px] border-gray-400 rounded-full"
            style={{ zIndex: -1 }}
          ></div>
          <img
            src={`${process.env.PUBLIC_URL}/img_personal.png`}
            alt={t('home.photoAlt')}
            className="h-full w-full rounded-full object-cover relative"
          />
        </div>

        <div className="flex flex-col w-full lg:w-[65%] text-center lg:text-left lg:pl-8 items-center lg:items-start">
          <h2 className="text-2xl font-medium mb-2 dark:text-secondary sm:text-3xl">
            {t('home.greeting')} <span role="img" aria-label="hand-wave" className="wave">👋🏻</span> {t('home.iAm')}
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            {t('home.name')}
          </h1>
          <hr className="border-1 my-2 w-full lg:w-auto border-gray-900 dark:border-secondary" />
          <p className="text-center lg:text-left text-gray-700 dark:text-gray-300 mb-4">
            {t('home.description')}
          </p>
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