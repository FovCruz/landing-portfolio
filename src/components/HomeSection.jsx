import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomButton from './CustomButton';
import '../styles/globales.css'; // Archivo de estilos globales
import imgPersonal from '../assets/40509771.jpg';
import cvPdf from "../assets/Currículum-12-2025-act.pdf";



const HomeSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="inicio"
      className="section pt-28 md:py-12 min-h-screen flex flex-col items-center justify-center text-center relative transition-colors duration-300 px-4"
    >
      <div className="max-w-6xl lg:px-8 sm:py-10 lg:py-16 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="about-image-container w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full border-4 border-transparent shadow-lg flex items-center justify-center halo-effect">
          <img
            src={imgPersonal}
            alt={t('aboutMe.photoAlt')}
            className="w-full h-full object-cover rounded-full"
            loading="lazy"
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
          <p className="text-center text-justify text-gray-700 dark:text-gray-300 mb-4">
            {t('home.description')}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <CustomButton
              link="/Currículum-12-2025-act.pdf"
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