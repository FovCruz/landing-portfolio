import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectsSection = () => {
  const projects = [
    {
      name: "Sistema de gestión de usuarios IPTV",
      description: "Un sistema CRUD para gestionar usuarios de una plataforma IPTV, con alertas por fecha de expiración.",
      technologies: ["Django", "PostgreSQL", "Bootstrap"],
      githubLink: "https://github.com/FovCruz/gestion-clientes.git",
      siteLink: "https://vthome.cl",
      images: [`${process.env.PUBLIC_URL}/vthome.jpg`, "vthome2.jpg"], // Múltiples imágenes
    },
    {
      name: "Landing page para Taller Digital",
      description: "Desarrollo de una landing page responsiva utilizando Wordpress, PHP y Bootstrap.",
      technologies: ["PHP", "Bootstrap", "WordPress"],
      githubLink: null,
      siteLink: "https://www.defensorianinez.cl/informe-anual-2023/",
      images: [`${process.env.PUBLIC_URL}/def_ninez.jpg`, "cta_publica.jpg"], // Múltiples imágenes
    },
    {
      name: "Dashboard de ventas",
      description: "Un dashboard para visualizar ventas y análisis de datos en tiempo real.",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: null,
      siteLink: "https://vthome.cl/dashboard",
      images: ["https://via.placeholder.com/400x300", `${process.env.PUBLIC_URL}/vthome.jpg`], // Múltiples imágenes
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0); // Nuevo estado para el slider de imágenes

  // Manejar el cambio de imágenes del carrusel
  const handlePrevImageClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? projects[currentProject].images.length - 1 : prevImage - 1
    );
  };

  const handleNextImageClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === projects[currentProject].images.length - 1 ? 0 : prevImage + 1
    );
  };

  // Manejar el cambio de proyectos
  const handlePrevClick = () => {
    setCurrentProject((prevProject) =>
      prevProject === 0 ? projects.length - 1 : prevProject - 1
    );
    setCurrentImage(0); // Reiniciar el slider de imágenes al cambiar de proyecto
  };

  const handleNextClick = () => {
    setCurrentProject((prevProject) =>
      prevProject === projects.length - 1 ? 0 : prevProject + 1
    );
    setCurrentImage(0); // Reiniciar el slider de imágenes al cambiar de proyecto
  };

  return (
    <section id="proyectos" className="h-screen bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-center">
      <div className="max-w-7xl mx-auto relative w-full">
        <h2 className="text-3xl font-bold mb-10 mt-10 dark:text-white">Mis Proyectos</h2>

        <div className="overflow-hidden h-full">
          <div
            className="whitespace-nowrap transition-transform duration-500 h-full"
            style={{ transform: `translateX(-${currentProject * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="inline-block w-full h-full">
                <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 p-10 rounded-lg shadow-md h-full">
                  {/* Contenedor de imagenes con slider */}
                  <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg h-[353px]"> 
                    <img
                      src={project.images[currentImage]} // Mostrar la imagen actual
                      alt={project.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                    />
                    {/* Botones para navegar entre imágenes */}
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImageClick}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-500 dark:bg-gray-600 text-white px-3 py-2 rounded-full focus:outline-none"
                        >
                          ◀
                        </button>
                        <button
                          onClick={handleNextImageClick}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-500 dark:bg-gray-600 text-white px-3 py-2 rounded-full focus:outline-none"
                        >
                          ▶
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Información del proyecto */}
                  <div className="w-full md:w-1/2 pl-6 text-left">
                    <h3 className="text-2xl font-semibold mb-5 dark:text-white break-words">
                      {project.name}
                    </h3>
                    <p className="mb-5 dark:text-gray-300 break-words">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap justify-start space-x-2 mb-5 mt-10">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded text-sm ${
                            tech === "Django"
                              ? "bg-green-500 text-white"
                              : tech === "PostgreSQL"
                              ? "bg-blue-500 text-white"
                              : tech === "Bootstrap"
                              ? "bg-purple-500 text-white"
                              : "bg-gray-300 dark:bg-gray-600"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Mostrar botones condicionalmente */}
                    <div className="flex space-x-4 mt-10">
                      {project.siteLink && (
                        <a
                          href={project.siteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
                        >
                          Ver Sitio
                        </a>
                      )}

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
                        >
                          <FaGithub className="mr-2" /> Ver en GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botones para navegar entre los proyectos */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePrevClick}
            className="accordion-item title bg-gray-500 dark:bg-gray-600 text-white px-6 py-4 rounded-md cursor-pointer hover:bg-gray-600 dark:hover:bg-gray-700"
          >
            ◀ Proyecto Anterior
          </button>
          <button
            onClick={handleNextClick}
            className="accordion-item title bg-gray-500 dark:bg-gray-600 text-white px-6 py-4 rounded-md cursor-pointer hover:bg-gray-600 dark:hover:bg-gray-700"
          >
            Siguiente Proyecto ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
