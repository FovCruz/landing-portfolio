import React, { useState } from 'react';
import { FaGithub, FaGlobe, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import SectionWrapper from './SectionWrapper';
import CustomButton from './CustomButton';
import '../styles/Accordion.css';
import '../styles/globales.css';

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      name: t('projects.iptvManagementSystem.name'),
      description: t('projects.iptvManagementSystem.description'),
      technologies: ['Django', 'PostgreSQL', 'Bootstrap'],
      githubLink: 'https://github.com/FovCruz/gestion-clientes.git',
      siteLink: 'https://vthome.cl',
      images: [`${process.env.PUBLIC_URL}/vthome.jpg`, `${process.env.PUBLIC_URL}/vthome2.jpg`],
    },
    {
      name: 'Informe Anual 2023',
      description: 'Sitio web creado en WordPress con templates personalizados por CFS con PHP para el Informe Anual 2023 de la Defensoría de la Niñez.',
      technologies: ['PHP', 'CSS', 'WordPress'],
      siteLink: 'https://www.defensorianinez.cl/informe-anual-2023/',
      images: [`${process.env.PUBLIC_URL}/cta_publica.jpg`, `${process.env.PUBLIC_URL}/cta_publica2.jpg`, `${process.env.PUBLIC_URL}/def_ninez.jpg`],
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentProject((prevProject) => (prevProject === 0 ? projects.length - 1 : prevProject - 1));
    setCurrentImage(0);
  };

  const handleNextClick = () => {
    setCurrentProject((prevProject) => (prevProject === projects.length - 1 ? 0 : prevProject + 1));
    setCurrentImage(0);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? projects[currentProject].images.length - 1 : prevImage - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage === projects[currentProject].images.length - 1 ? 0 : prevImage + 1));
  };

  const commonTextClasses = 'dark:text-[#ffddcc] text-gray-900';

  return (
    <SectionWrapper id="proyectos" title={t('projects.title')}>
      <div className="project-hover flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 p-3 shadow-md h-full relative transition-transform duration-500 ease-in-out rounded-lg border-[1px] dark:border-[#ffddcc] border-[#1f2937]">
        <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg h-[250px] md:h-[300px] lg:h-[400px] border-[1px] dark:border-[#ffddcc] border-[#1f2937] shadow-lg contenedor">
          <img src={projects[currentProject].images[currentImage]} alt={`Imagen del proyecto ${projects[currentProject].name}`} className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-90" loading="lazy" />

          <button className="absolute top-0 left-0 h-full w-10 flex items-center justify-center transition-all dark:text-[#ffddcc] text-gray-900" style={{ backdropFilter: 'blur(2px)', backgroundColor: 'rgba(31, 41, 55, 0.23)' }} onClick={handlePrevImage} aria-label="Imagen anterior">
            <FaArrowLeft className="text-2xl" />
          </button>
          <button className="absolute top-0 right-0 h-full w-10 flex items-center justify-center transition-all dark:text-[#ffddcc] text-gray-900" style={{ backdropFilter: 'blur(2px)', backgroundColor: 'rgba(31, 41, 55, 0.23)' }} onClick={handleNextImage} aria-label="Imagen siguiente">
            <FaArrowRight className="text-2xl" />
          </button>
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-6 text-left">
          <h3 className={`text-2xl font-semibold mb-4 ${commonTextClasses}`}>{projects[currentProject].name}</h3>
          <p className="mb-4 dark:text-gray-300">{projects[currentProject].description}</p>

          <div className="flex flex-wrap justify-start space-x-2 mb-4">
            {projects[currentProject].technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 rounded text-sm bg-gray-300 dark:bg-gray-600">{tech}</span>
            ))}
          </div>

          <div className="flex space-x-4">
            {projects[currentProject].siteLink && (
              <CustomButton link={projects[currentProject].siteLink} ariaLabel={`Ver sitio de ${projects[currentProject].name}`} isSectionButton={true}>
                <FaGlobe className="inline mr-2" /> {t('projects.viewSite')}
              </CustomButton>
            )}

            {projects[currentProject].githubLink && (
              <CustomButton link={projects[currentProject].githubLink} ariaLabel={`Ver en GitHub de ${projects[currentProject].name}`} isSectionButton={true}>
                <FaGithub className="inline mr-2" /> {t('projects.viewGitHub')}
              </CustomButton>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <CustomButton onClick={handlePrevClick} isSectionButton={true} ariaLabel="Proyecto anterior">
          <FaArrowLeft className="inline mr-2" /> {t('projects.previousProject')}
        </CustomButton>
        <CustomButton onClick={handleNextClick} isSectionButton={true} ariaLabel="Siguiente proyecto">
          {t('projects.nextProject')} <FaArrowRight className="inline ml-2" />
        </CustomButton>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
