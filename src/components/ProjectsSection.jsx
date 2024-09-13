import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/Accordion.css';
import '../styles/globales.css';

const ProjectsSection = () => {
  const projects = [
    {
      name: "Sistema de gestión de usuarios IPTV",
      description: "Un sistema CRUD para gestionar usuarios de una plataforma IPTV, con alertas por fecha de expiración.",
      technologies: ["Django", "PostgreSQL", "Bootstrap"],
      githubLink: "https://github.com/FovCruz/gestion-clientes.git",
      siteLink: "https://vthome.cl",
      images: [`${process.env.PUBLIC_URL}/vthome.jpg`, `${process.env.PUBLIC_URL}/vthome2.jpg`],
    },
    // Otros proyectos...
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === projects[currentProject].images.length - 1 ? 0 : prevImage + 1
      );
    }, 3000);

    return () => clearInterval(imageInterval);
  }, [currentProject, projects]);

  const handlePrevClick = () => {
    setCurrentProject((prevProject) =>
      prevProject === 0 ? projects.length - 1 : prevProject - 1
    );
    setCurrentImage(0);
  };

  const handleNextClick = () => {
    setCurrentProject((prevProject) =>
      prevProject === projects.length - 1 ? 0 : prevProject + 1
    );
    setCurrentImage(0);
  };

  return (
    <section className="section bg-gray-200 dark:bg-gray-700 py-12">
      <div className="section-content container mx-auto px-4">
        <h2 className="section-title dark:text-white">Proyectos</h2>
        <hr className="section-title dark:text-white" />

        {/* Contenedor de proyectos con borde */}
        <div className="flex flex-col md:flex-row items-center justify-between border-container bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md h-full">
          {/* Slider de imágenes con borde */}
          <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg h-[250px] md:h-[300px] lg:h-[350px] border-image">
            <img
              src={projects[currentProject].images[currentImage]}
              alt={projects[currentProject].name}
              className="w-full h-full object-cover object-center transition-transform duration-500"
            />
          </div>

          {/* Información del proyecto */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-6 text-left">
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">
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

            {/* Botones */}
            <div className="flex space-x-4">
              {projects[currentProject].siteLink && (
                <a href={projects[currentProject].siteLink} target="_blank" rel="noopener noreferrer" className="boton-global">
                  Ver Sitio
                </a>
              )}

              {projects[currentProject].githubLink && (
                <a href={projects[currentProject].githubLink} target="_blank" rel="noopener noreferrer" className="boton-global">
                  <FaGithub className="mr-2" /> Ver en GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Navegación entre proyectos */}
        <div className="flex justify-center mt-8 space-x-4">
          <button onClick={handlePrevClick} className="boton-global">
            ◀ Proyecto Anterior
          </button>
          <button onClick={handleNextClick} className="boton-global">
            Siguiente Proyecto ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
