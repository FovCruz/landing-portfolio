import React, { useState, useEffect } from 'react';
import '../styles/Accordion.css';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Gestor TI Regional INE (Proyecto Censo 2024)",
      company: "INE - Instituto Nacional de Estadísticas, Valparaíso.",
      dates: "Enero 2024 - Agosto 2024",
      locationType: "Híbrido",
      description: (
        <>
          <p>
            Encargado de gestionar los accesos, permisos, incidentes y solicitudes de usuarios en los distintos locales provinciales, utilizando plataformas de Helpdesk para la generación de requerimientos, cumpliendo los acuerdos <span className="text-light">SLA</span> establecidos por la institución bajo las prácticas <span className="text-light">ITIL</span>, asegurando la gestión de los servicios TI mediante registros, implementación, análisis y documentación.
          </p>
          <br />
        </>
      ),
    },
    {
      title: "Prestador de Servicios Programador Jr.",
      company: "Taller Digital, Providencia, Santiago.",
      dates: "Agosto 2022 - Febrero 2024",
      locationType: "Híbrido",
      description: (
        <>
          <p>
            Colaboración en equipo para el desarrollo de sitios web dinámicos y responsivos utilizando <span className="text-light">WordPress</span> y <span className="text-light">PHP</span> para la creación y modificación de templates con campos personalizados mediante la conexión a los servidores por FTP o SSH.
          </p>
          <br />
          <p>
            Desarrollo de newsletters utilizando <span className="text-light">HTML</span> puro, pruebas y envíos a través de SendGrid; Administración de sitios para clientes como <a href="https://www.agrosuper.cl/newsletter/" target="_blank" rel="noopener noreferrer" className="text-light underline link-hover">Agrosuper</a>, <a href="https://www.defensorianinez.cl/" target="_blank" rel="noopener noreferrer" className="text-light underline link-hover">Defensoría de la Niñez</a>, y otros.
          </p>
          <br />
        </>
      ),
    },
    {
      title: "Administración de sistemas de información",
      company: "C & C CONSULTORES",
      dates: "Marzo 2021 - Abril 2022",
      locationType: "Remoto",
      description: (
        <>
          <p>
            Encargado de la creación de usuarios y correos corporativos en <span className="text-light">Mailrelay</span>, administración de Moodle, y configuraciones de hosting en <span className="text-light">cPanel</span>.
          </p>
          <br />
        </>
      ),
    },
    {
      title: "Operaciones TI (N1)",
      company: "ZEKE integradores de sistemas",
      dates: "Febrero 2019 - Julio 2020",
      locationType: "Híbrido",
      description: (
        <>
          <p>
            Monitoreo 24/7 de servicios en <span className="text-light">Nagios</span>, gestión de incidentes y requerimientos en <span className="text-light">GLPI</span>, y uso de <span className="text-light">Oracle SQL Developer</span> y <span className="text-light">Putty</span> para administración de bases de datos y servidores.
          </p>
          <br />
        </>
      ),
    },
    {
      title: "Administrador Zonal (OTEC)",
      company: "CENTRO DE ESTUDIOS ANDRÉS BELLO",
      dates: "Enero 2017 - Noviembre 2018",
      locationType: "Presencial",
      description: (
        <>
          <p>
            Gestión y administración de intranet, carga de datos en REUF (SENCE), y coordinación de relatores y remuneraciones en los cursos de capacitación.
          </p>
          <br />
        </>
      ),
    },
  ];

  const [selectedExperience, setSelectedExperience] = useState(null);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [animatedButton, setAnimatedButton] = useState(null);
  const [mouseOver, setMouseOver] = useState(false);

  const handleSelectExperience = (index) => {
    setSelectedExperience(experiences[index]);
    setActiveButtonIndex(index);
    setAnimatedButton(null);
  };

  const handleResetExperience = () => {
    setSelectedExperience(null);
    setActiveButtonIndex(null);
  };

  useEffect(() => {
    if (!mouseOver) {
      const randomIndex = Math.floor(Math.random() * experiences.length);
      setAnimatedButton(randomIndex);

      const interval = setInterval(() => {
        const newRandomIndex = Math.floor(Math.random() * experiences.length);
        setAnimatedButton(newRandomIndex);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [mouseOver, experiences.length]);

  return (
    <section id="experiencia" className="section bg-gray-200 dark:bg-gray-700">
      <div className="section-content" onMouseLeave={handleResetExperience}>
        <h2 className="section-title dark:text-white">Experiencias laborales</h2>
        <hr className="section-title dark:text-white" />

        <div className="flex flex-col md:flex-row h-full">
          {/* Columna izquierda con la línea de tiempo y botones */}
          <div className="experience-left w-full md:w-[45%] bg-gray-200 dark:bg-gray-700 p-6 overflow-y-auto flex relative"
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}>
            {/* Línea de tiempo a la izquierda */}
            <ol className="timeline-container border-l-2 border-primary dark:border-primary-500">
              {experiences.map((exp, index) => (
                <li key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                </li>
              ))}
            </ol>

            {/* Botones de experiencia */}
            <div className="accordion-grid ml-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`boton-global title mb-4 p-3 rounded-lg cursor-pointer ${selectedExperience === exp ? 'active' : ''} ${!mouseOver && animatedButton === index ? 'bounce' : ''
                    }`}
                  onClick={() => handleSelectExperience(index)}
                >
                  {exp.title}
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha con scroll si el contenido es largo */}
          <div className="experience-right w-full md:w-[75%] bg-white dark:bg-gray-800 p-6 h-[400px] max-h-[400px] overflow-y-auto flex flex-col fixed-bg transition-opacity duration-500 rounded-lg shadow-lg">
            {selectedExperience ? (
              <div className="experience-detail text-left opacity-0 animate-fade-in">
                {/* Parte fija */}
                <div className="experience-header">
                  <h3 className="text-2xl font-semibold mb-4 dark:text-white break-words">{selectedExperience.title}</h3>
                  <hr className="hr-primary" />
                  <p className="text-lg dark:text-gray-300 mb-2">
                    <strong>Empresa:</strong> {selectedExperience.company}
                  </p>
                  <p className="text-lg dark:text-gray-300 flex justify-between">
                    <span><strong>Fecha:</strong> {selectedExperience.dates}</span>
                    <span className="badge bg-transparent text-[#ffddcc] px-3 rounded-full border-2 border-[#ffddcc]">{selectedExperience.locationType}</span>
                  </p>
                </div>

                {/* Parte que puede hacer scroll */}
                <div className="experience-description">
                  <p className="dark:text-gray-300">{selectedExperience.description}</p>
                </div>
              </div>
            ) : (
              <div className="experience-image-placeholder rounded-lg overflow-hidden">
                <img src={`${process.env.PUBLIC_URL}/exp_imagen.png`} alt="Placeholder" className="w-full h-auto rounded-lg" /></div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
