import React from 'react';
import { FaReact, FaPython, FaAws, FaDatabase } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SectionWrapper from './SectionWrapper'; // Usamos el wrapper para la estructura común
import imgPersonal from '../assets/img_personal.png';

const AboutMeSection = () => {
  const { t } = useTranslation(); // Hook para la traducción

  return (
    <SectionWrapper id="sobremi" title={t('aboutMe.title')}>
      <div className="about-container flex flex-col lg:flex-row items-center justify-between mt-8 lg:mt-12">

        {/* Imagen personal con efecto de halo */}
        <div className="about-image-container w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full border-4 border-transparent shadow-lg flex items-center justify-center halo-effect">
          <img
            src={imgPersonal}
            alt={t('aboutMe.photoAlt')}
            className="w-full h-full object-cover rounded-full"
            loading="lazy"
          />
        </div>

        {/* Texto y habilidades */}
        <div className="about-text-container w-full lg:w-[70%] mt-8 lg:mt-0 text-gray-700 dark:text-gray-300 text-left lg:text-left lg:pl-8">
          {t('aboutMe.description1').split('<br/>').map((paragraph, index) => (
            <p key={index} className="mb-4 text-justify">{paragraph}</p>
          ))}

          {/* Íconos de habilidades */}
          <div className="skills-container flex flex-wrap justify-start gap-6 mt-6">
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