import React, { useState, useEffect } from 'react';
import { FaGithub, FaGlobe, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SectionWrapper from './SectionWrapper';
import CustomButton from './CustomButton';

// Importar imágenes como assets (forma correcta en Vite)
import vthome1 from "../assets/vthome.jpg";
import vthome2 from "../assets/vthome2.jpg";
import cta1 from "../assets/cta_publica.jpg";
import cta2 from "../assets/cta_publica2.jpg";
import defNinez from "../assets/def_ninez.jpg";
import cyc1 from "../assets/cyc1.jpg";
import cyc2 from "../assets/cyc2.jpg";
import cyc3 from "../assets/cyc3.jpg";

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      name: t('projects.iptvManagementSystem.name'),
      description: t('projects.iptvManagementSystem.description'),
      technologies: ['Django', 'PostgreSQL', 'Bootstrap'],
      githubLink: 'https://github.com/FovCruz/gestion-clientes.git',
      siteLink: 'https://vthome.cl',
      images: [vthome1, vthome2],
    },
    {
      name: t('projects.defensoria.name'),
      description: t('projects.defensoria.description'),
      technologies: ['PHP', 'WordPress', 'CSS'],
      siteLink: 'https://www.defensorianinez.cl/informe-anual-2023/',
      images: [cta1, cta2, defNinez],
    },
    {
      name: 'OTEC C&C Consultores Website',
      description: 'Website for course management, redesigned with WordPress and dynamic PHP templates using CFS.',
      technologies: ['WordPress', 'PHP', 'CSS', 'cPanel'],
      siteLink: 'https://consultorescyc.cl',
      images: [cyc1, cyc2, cyc3],
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  // Rotación automática de imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === projects[currentProject].images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentProject, projects]);

  const handlePrevClick = () => {
    setCurrentProject(prev => (prev === 0 ? projects.length - 1 : prev - 1));
    setCurrentImage(0);
  };

  const handleNextClick = () => {
    setCurrentProject(prev => (prev === projects.length - 1 ? 0 : prev + 1));
    setCurrentImage(0);
  };

  const handlePrevImage = () => {
    setCurrentImage(prev => (prev === 0 ? projects[currentProject].images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage(prev => (prev === projects[currentProject].images.length - 1 ? 0 : prev + 1));
  };

  return (
    <SectionWrapper id="proyectos" title={t('projects.title')}>
      <div className="flex flex-col md:flex-row items-center justify-between py-3 h-full relative">
        
        {/* Carrusel de imágenes */}
        <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg h-[250px] md:h-[300px] lg:h-[400px] border-[1px] shadow-lg">
          <img
            src={projects[currentProject].images[currentImage]}
            alt={`Imagen del proyecto ${projects[currentProject].name}`}
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-95"
            loading="lazy"
          />

          {/* Controles del carrusel */}
          <button className="absolute top-0 left-0 h-full w-10 flex items-center justify-center" onClick={handlePrevImage} aria-label="Imagen anterior">
            <FaArrowLeft className="text-2xl text-gray-900 dark:text-[#ffddcc]" />
          </button>

          <button className="absolute top-0 right-0 h-full w-10 flex items-center justify-center" onClick={handleNextImage} aria-label="Imagen siguiente">
            <FaArrowRight className="text-2xl text-gray-900 dark:text-[#ffddcc]" />
          </button>
        </div>

        {/* Información del proyecto */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-6 text-left">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-[#ffddcc]">
            {projects[currentProject].name}
          </h3>

          <p className="text-justify mb-4 text-gray-700 dark:text-gray-300">
            {projects[currentProject].description}
          </p>

          {/* Tecnologías */}
          <div className="flex flex-wrap justify-start gap-2 mb-4">
            {projects[currentProject].technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 rounded-md text-sm border border-gray-400 dark:border-[#ffddcc50] text-gray-700 dark:text-[#ffddcc]">
                {tech}
              </span>
            ))}
          </div>

          {/* Botones */}
          <div className="flex space-x-4">
            {projects[currentProject].siteLink && (
              <CustomButton link={projects[currentProject].siteLink} ariaLabel={`Ver sitio ${projects[currentProject].name}`}>
                <FaGlobe className="inline mr-2" /> {t('projects.viewSite')}
              </CustomButton>
            )}

            {projects[currentProject].githubLink && (
              <CustomButton link={projects[currentProject].githubLink} ariaLabel={`Ver GitHub ${projects[currentProject].name}`}>
                <FaGithub className="inline mr-2" /> {t('projects.viewGitHub')}
              </CustomButton>
            )}
          </div>
        </div>
      </div>

      {/* Navegación entre proyectos */}
      <div className="flex justify-center mt-8 space-x-4">
        <CustomButton onClick={handlePrevClick} ariaLabel="Proyecto anterior">
          <FaArrowLeft className="inline mr-2" /> {t('projects.previousProject')}
        </CustomButton>

        <CustomButton onClick={handleNextClick} ariaLabel="Proyecto siguiente">
          {t('projects.nextProject')} <FaArrowRight className="inline ml-2" />
        </CustomButton>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
