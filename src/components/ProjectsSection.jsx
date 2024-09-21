import React, { useState, useEffect } from 'react';
import { FaGithub, FaGlobe, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../styles/Accordion.css';
import '../styles/globales.css';

const ProjectsSection = () => {
  const { t } = useTranslation(); // Importa el hook de traducción

  // Proyectos con claves de traducción
  const projects = [
    {
      name: t("projects.iptvManagementSystem.name"),
      description: t("projects.iptvManagementSystem.description"),
      technologies: ["Django", "PostgreSQL", "Bootstrap"],
      githubLink: "https://github.com/FovCruz/gestion-clientes.git",
      siteLink: "https://vthome.cl",
      images: [
        `${process.env.PUBLIC_URL}/vthome.jpg`,
        `${process.env.PUBLIC_URL}/vthome2.jpg`
      ],
    },
    // Otros proyectos pueden ser añadidos aquí
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage(prevImage =>
        prevImage === projects[currentProject].images.length - 1 ? 0 : prevImage + 1
      );
    }, 3000);

    return () => clearInterval(imageInterval);
  }, [currentProject, projects]);

  const handlePrevClick = () => {
    setCurrentProject(prevProject =>
      prevProject === 0 ? projects.length - 1 : prevProject - 1
    );
    setCurrentImage(0);
  };

  const handleNextClick = () => {
    setCurrentProject(prevProject =>
      prevProject === projects.length - 1 ? 0 : prevProject + 1
    );
    setCurrentImage(0);
  };

  const handlePrevImage = () => {
    setCurrentImage(prevImage =>
      prevImage === 0 ? projects[currentProject].images.length - 1 : prevImage - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImage(prevImage =>
      prevImage === projects[currentProject].images.length - 1 ? 0 : prevImage + 1
    );
  };

  // Clases comunes para textos y botones
  const commonTextClasses = 'dark:text-[#ffddcc] text-gray-900';
  const commonButtonClasses = 'font-light font-normal py-2 px-2 sm:px-3 md:px-4 lg:px-5 rounded-lg border-2 transition-all duration-300';
  const buttonHoverClasses = 'dark:hover:bg-[#ffddcc] dark:hover:text-gray-900 hover:bg-gray-900 hover:text-white';

  return (
    <section id="proyectos" className="section bg-gray-200 dark:bg-gray-700 py-12" aria-labelledby="proyectos-title">
      <div className="section-content max-w-6xl mx-auto px-4 lg:px-8 py-12">
        <h1 className={`title-font mb-4 text-2xl font-medium ${commonTextClasses} sm:text-3xl`}>
          {t('projects.title')} {/* Título traducido */}
        </h1>

        {/* hr con ajuste de color basado en el tema */}
        <hr className="border-1 border-slate-950 dark:border-[#ffddcc]" />

        {/* Contenedor de proyectos con sombra y borde */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg border shadow-lg h-full relative">
          {/* Slider de imágenes con botones para deslizar */}
          <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg h-[250px] md:h-[300px] lg:h-[400px] border shadow-lg">
            <img
              src={projects[currentProject].images[currentImage]}
              alt={`Imagen del proyecto ${projects[currentProject].name}`}
              className="w-full h-full object-cover object-center transition-transform duration-500"
              loading="lazy"
            />

            {/* Botones para deslizar imágenes */}
            <button
              className="absolute top-0 left-0 h-full w-10 flex items-center justify-center transition-all dark:text-[#ffddcc] text-gray-900"
              style={{ backdropFilter: 'blur(2px)', backgroundColor: 'rgba(31, 41, 55, 0.23)' }}
              onClick={handlePrevImage}
              aria-label="Imagen anterior"
            >
              <FaArrowLeft className="text-2xl" />
            </button>
            <button
              className="absolute top-0 right-0 h-full w-10 flex items-center justify-center transition-all dark:text-[#ffddcc] text-gray-900"
              style={{ backdropFilter: 'blur(2px)', backgroundColor: 'rgba(31, 41, 55, 0.23)' }}
              onClick={handleNextImage}
              aria-label="Imagen siguiente"
            >
              <FaArrowRight className="text-2xl" />
            </button>
          </div>

          {/* Información del proyecto */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-6 text-left">
            <h3 className={`text-2xl font-semibold mb-4 ${commonTextClasses}`}>
              {projects[currentProject].name}
            </h3>
            <p className="mb-4 dark:text-gray-300">
              {projects[currentProject].description}
            </p>

            <div className="flex flex-wrap justify-start space-x-2 mb-4">
              {projects[currentProject].technologies.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 rounded text-sm bg-gray-300 dark:bg-gray-600">
                  {tech}
                </span>
              ))}
            </div>

            {/* Botones para "Ver Sitio" y "Ver en GitHub" */}
            <div className="flex space-x-4">
              {projects[currentProject].siteLink && (
                <a
                  href={projects[currentProject].siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${commonButtonClasses} dark:border-[#ffddcc] border-gray-900 dark:text-[#ffddcc] text-gray-900 ${buttonHoverClasses} text-center`}
                  aria-label={`Ver sitio de ${projects[currentProject].name}`}
                >
                  <FaGlobe className="inline mr-2" /> {t('projects.viewSite')} {/* Texto traducido */}
                </a>
              )}

              {projects[currentProject].githubLink && (
                <a
                  href={projects[currentProject].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${commonButtonClasses} dark:border-[#ffddcc] border-gray-900 dark:text-[#ffddcc] text-gray-900 ${buttonHoverClasses} text-center`}
                  aria-label={`Ver en GitHub de ${projects[currentProject].name}`}
                >
                  <FaGithub className="inline mr-2" /> {t('projects.viewGitHub')} {/* Texto traducido */}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Navegación entre proyectos */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePrevClick}
            className={`${commonButtonClasses} dark:border-[#ffddcc] border-gray-900 dark:text-[#ffddcc] text-gray-900 ${buttonHoverClasses} text-center`}
            aria-label="Proyecto anterior"
          >
            <FaArrowLeft className="inline mr-2" /> {t('projects.previousProject')} {/* Texto traducido */}
          </button>
          <button
            onClick={handleNextClick}
            className={`${commonButtonClasses} dark:border-[#ffddcc] border-gray-900 dark:text-[#ffddcc] text-gray-900 ${buttonHoverClasses} text-center`}
            aria-label="Siguiente proyecto"
          >
            {t('projects.nextProject')} <FaArrowRight className="inline ml-2" /> {/* Texto traducido */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
