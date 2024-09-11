import React, { useState, useEffect } from 'react';
import './Accordion.css'; // Asegúrate de que los estilos estén en el archivo CSS.

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Gestor TI Regional INE (Proyecto Censo 2024)",
      company: "INE - Instituto Nacional de Estadísticas, Valparaíso.",
      dates: "Enero 2024 - Agosto 2024",
      locationType: "Híbrido", // Badge
      description: (
        <>
          <p>
            Encargado de gestionar los accesos, permisos, incidentes y solicitudes de usuarios en los distintos locales
            provinciales, utilizando plataformas de Helpdesk para la generación de requerimientos, cumpliendo los
            acuerdos <span className="text-light">SLA</span> establecidos por la institución bajo las prácticas <span className="text-light">ITIL</span> asegurando la gestión de los servicios
            TI mediante registros, implementación, análisis y documentación.
          </p>
          <br />
        </>
      )
    },
    {
      title: "Prestador de Servicios Programador Jr.",
      company: "Taller Digital, Providencia, Santiago. ",
      dates: "Agosto 2022 - Febrero 2024",
      locationType: "Híbrido", // Badge
      description: (
        <>
          <p>
            Colaboración en equipo para el desarrollo de sitios web dinámicos y
            responsivos utilizando <span className="text-light">WordPress</span> y
            <span className="text-light"> PHP</span> para la creación y modificación
            de templates con campos personalizados mediante la conexión a los
            servidores por FTP o SSH.
          </p>
          <br />
          <p>
            Desarrollo de newsletters utilizando{" "}
            <span className="text-light">HTML</span> puro, realizando pruebas y
            envíos a través de SendGrid; Responsable de la administración de sitios <a href="https://www.agrosuper.cl/newsletter/" target="_blank" rel="noopener noreferrer" className="text-light underline link-hover">Agrosuper (Noticias/Newsletter)
            </a>
            ,{" "}
            <a
              href="https://www.defensorianinez.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light underline link-hover"
            >
              Defensoría de la Niñez
            </a>
            ,{" "}
            <a
              href="https://www.cnc.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light underline link-hover"
            >
              CNC
            </a>
            ,{" "}
            <a
              href="https://promobility.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light underline link-hover"
            >
              Promobility
            </a>
            ,{" "}
            <a
              href="https://www.ucco.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light underline link-hover"
            >
              UCCO
            </a>
            ,{" "}
            <a
              href="https://www.defensorianinez.cl/informe-anual-2023/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light underline link-hover"
            >
              Informe Anual
            </a>
            , entre otros. Migración y configuración de correos desde Amazon
            Webmail a Workspace.
          </p>
          <br />
          <p>
            Se utilizó <span className="text-light">Figma</span>, Google Suite,{" "}
            <span className="text-light">FileZilla</span>, Breeze y{" "}
            <span className="text-light">Zoho</span> para optimizar el flujo de
            trabajo y la colaboración en equipo en la gestión de proyectos, a su vez,
            se utilizaron tecnologías como{" "}
            <span className="text-light">HTML</span>,{" "}
            <span className="text-light">CSS</span>,{" "}
            <span className="text-light">SASS</span>,{" "}
            <span className="text-light">PHP</span>,{" "}
            <span className="text-light">JS</span> y framework{" "}
            <span className="text-light">Bootstrap</span> para el desarrollo de
            sitios web dinámicos.
          </p>
        </>
      )
    },
    {
      title: "Administración de sistemas de información",
      company: "C & C CONSULTORES",
      dates: "Marzo 2021 - Abril 2022",
      locationType: "Remoto", // Badge
      description: (
        <>
          <p>
            Encargado de la creación de usuarios y correos corporativos en <span className="text-light">Mailrelay</span>; Administrar aula virtual
            <span className="text-light">(Moodle)</span> para la realización de cursos; configuraciones del hosting en <span className="text-light">cPanel</span>; Informar a gerencia sobre
            los avances en el área TI; Mantención y BKP de <span className="text-light">BBDD</span> con <span className="text-light">phpMyAdmin</span>; Creación del sitio web
            cycconsultores.cl; entrevistar y seleccionar a nuevos postulantes de práctica.
          </p>
          <br />
        </>
      )
    },
    {
      title: "Operaciones TI, (N1)",
      company: "ZEKE integradores de sistemas",
      dates: "Febrero 2019 - Julio 2020",
      locationType: "Híbrido", // Badge
      description: (
        <>
          <p>
            Monitoreo 24/7 de servicios en <span className="text-light">Nagios</span>; Informes de estado del servicio; cumplimiento de acuerdos <span className="text-light">SLA</span>
            usando <span className="text-light">GLPI</span> para la gestión de requerimientos; Checklist; Helpdesk; Querys en <span className="text-light">BBDD</span> usando <span className="text-light">Oracle SQL Developer</span>
            en sentencias <span className="text-light">DML</span> y <span className="text-light">DDL</span>; Uso de <span className="text-light">Putty</span> para conexiones al servidor por <span className="text-light">SSH</span>.
          </p>
          <br />
        </>
      )
    },
    {
      title: "Administrador Zonal (OTEC)",
      company: "CENTRO DE ESTUDIOS ANDRÉS BELLO",
      dates: "Enero 2017 - Noviembre 2018",
      locationType: "Presencial", // Badge
      description: (
        <>
          <p>
            Administración y gestión de intranet de alumnos, cursos de capacitación, Informes de cumplimientos
            <span className="text-light">KPI´s</span>a gerencia, convenios con organismos educacionales, toma de decisiones, registro e incidencia de
            alumnos, carga de datos a plataforma <span className="text-light">REUF (SENCE)</span>, relaciones públicas (privados, estatales y
            sindicatos), coordinación de relatores, remuneraciones, planificaciones y prácticas laborales.
          </p>
          <br />
        </>
      )
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
      <div
        className="section-content"
        onMouseLeave={handleResetExperience}
      >
        <h2 className="section-title dark:text-white">Experiencias laborales</h2>
        <hr className="section-title dark:text-white" />

        <div className="flex h-full">
          {/* Columna izquierda con la línea de tiempo y botones */}
          <div
            className="experience-left w-[45%] bg-gray-200 dark:bg-gray-700 p-6 overflow-y-auto flex relative"
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
          >
            {/* Línea de tiempo a la izquierda */}
            <ol className="timeline-container border-l-2 border-primary dark:border-primary-500">
              {experiences.map((exp, index) => (
                <li key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                </li>
              ))}
            </ol>

            {/* Botones originales de la experiencia */}
            <div className="accordion-grid ml-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`accordion-item title mb-4 p-3 rounded-lg cursor-pointer ${selectedExperience === exp ? 'active' : ''} ${!mouseOver && animatedButton === index ? 'bounce' : ''
                    }`}
                  onClick={() => handleSelectExperience(index)}
                >
                  {exp.title}
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha con scroll si el contenido es muy largo */}
          <div
            className="experience-right w-[75%] bg-white dark:bg-gray-800 p-6 h-[400px] max-h-[400px] overflow-y-auto flex flex-col fixed-bg transition-opacity duration-500"
          >
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

                {/* Parte que hace scroll */}
                <div className="experience-description">
                  <p className="dark:text-gray-300">{selectedExperience.description}</p>
                </div>
              </div>
            ) : (
              <div className="experience-image-placeholder">
                <img src="/exp_imagen.png" alt="Placeholder" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
