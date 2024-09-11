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
      images: [`${process.env.PUBLIC_URL}/vthome.jpg`, "vthome2.jpg"],
    },
    {
      name: "Landing page para Taller Digital",
      description: "Desarrollo de una landing page responsiva utilizando Wordpress, PHP y Bootstrap.",
      technologies: ["PHP", "Bootstrap", "WordPress"],
      githubLink: null,
      siteLink: "https://www.defensorianinez.cl/informe-anual-2023/",
      images: [`${process.env.PUBLIC_URL}/def_ninez.jpg`, "cta_publica.jpg"],
    },
    {
      name: "Dashboard de ventas",
      description: "Un dashboard para visualizar ventas y análisis de datos en tiempo real.",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: null,
      siteLink: "https://vthome.cl/dashboard",
      images: ["https://via.placeholder.com/400x300", `${process.env.PUBLIC_URL}/vthome.jpg`],
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

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
    <section id="proyectos" className="section bg-gray-200 dark:bg-gray-700">
      <div className="section-content">
        <h2 className="section-title dark:text-white">Proyectos</h2>
        <hr />
        <div className="overflow-hidden h-full">
          <div
            className="whitespace-nowrap transition-transform duration-500 h-full"
            style={{ transform: `translateX(-${currentProject * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="inline-block w-full h-full">
                <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 p-10 rounded-lg shadow-md h-full">
                  <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg h-[353px]">
                    <img
                      src={project.images[currentImage]}
                      alt={project.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                    />
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImageClick}
                          className="accordion-item absolute left-1 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-full focus:outline-none"
                        >
                          ◀
                        </button>
                        <button
                          onClick={handleNextImageClick}
                          className="accordion-item absolute right-1 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-full focus:outline-none"
                        >
                          ▶
                        </button>
                      </>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 pl-6 text-left">
                    <h3 className="text-2xl font-semibold mb-5 dark:text-white break-words">
                      {project.name}
                    </h3>
                    <p className="mb-5 dark:text-gray-300 break-words">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap justify-start space-x-2 mb-5 mt-10">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 rounded text-sm bg-gray-300 dark:bg-gray-600">
                          {tech}
                        </span>
                      ))}
                    </div>

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

        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePrevClick}
            className="accordion-item title px-6 py-4 rounded-md cursor-pointer"
          >
            ◀ Proyecto Anterior
          </button>
          <button
            onClick={handleNextClick}
            className="accordion-item title px-6 py-4 rounded-md cursor-pointer"
          >
            Siguiente Proyecto ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
