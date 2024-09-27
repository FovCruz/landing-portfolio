import React from 'react';
import { FaReact, FaPython, FaAws, FaDatabase } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SectionWrapper from './SectionWrapper'; // Usamos el wrapper para la estructura común
import '../styles/about.css'; // Archivo CSS específico de la sección

const AboutMeSection = () => {
  const { t } = useTranslation(); // Hook para la traducción

  return (
    <SectionWrapper id="sobremi" title={t('aboutMe.title')}>
      <div className="about-container flex flex-col lg:flex-row items-center justify-between">
        
        {/* Imagen personal con efecto de halo */}
        <div className="about-image-container relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full border-4 border-transparent shadow-lg flex items-center justify-center halo-effect">
          <img
            src={`${process.env.PUBLIC_URL}/img_personal.png`}
            alt={t('aboutMe.photoAlt')} // Traducción del alt
            className="w-full h-full object-cover rounded-full"
            loading="lazy"
          />
        </div>

        {/* Texto y habilidades */}
        <div className="about-text-container  lg:pl-8 w-full lg:w-1/2 mt-8 lg:mt-0">
          <p className="mb-6 text-gray-700">
            {t('aboutMe.description1')} {/* Descripción traducida */}
          </p>
          <p className="mb-6 text-gray-700">
            {t('aboutMe.description2')} {/* Segunda descripción */}
            <span className="highlight">React</span>, 
            <span className="highlight"> Django</span>, 
            <span className="highlight"> PostgreSQL</span>, {t('aboutMe.and')}
            <span className="highlight"> AWS</span>.
          </p>

          {/* Íconos de habilidades */}
          <div className="skills-container flex flex-wrap justify-start gap-6">
            <SkillIcon Icon={FaReact} label="React" />
            <SkillIcon Icon={FaPython} label="Python" />
            <SkillIcon Icon={FaAws} label="AWS" />
            <SkillIcon Icon={FaDatabase} label="PostgreSQL" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

/**
 * Componente reutilizable para representar cada habilidad con su ícono y etiqueta
 */
const SkillIcon = ({ Icon, label }) => (
  <div className="skill-icon group" role="img" aria-label={label}>
    <Icon className="text-5xl group-hover:scale-110 transition-transform" />
    <span className="skill-text mt-2 text-lg">{label}</span>
  </div>
);

export default AboutMeSection;
