import React, { useState, useEffect } from 'react';
import './Accordion.css'; // Asegúrate de incluir los estilos

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Gestor TI Regional (Proyecto Censo Población y Vivienda)",
      company: "INE - Instituto Nacional de Estadísticas",
      dates: "Enero 2024 - Agosto 2024",
      description: `Encargado de gestionar los accesos, permisos, incidentes y solicitudes de usuarios en los distintos locales provinciales, utilizando plataformas de Helpdesk para la generación de requerimientos, cumpliendo los acuerdos SLA establecidos bajo las prácticas ITIL.`,
    },
    {
      title: "Prestador de Servicios Programador Jr.",
      company: "TALLER DIGITAL",
      dates: "Agosto 2022 - Febrero 2024",
      description: `Desarrollo de sitios web dinámicos utilizando WordPress y PHP. Creación de newsletters utilizando HTML puro y administración de sitios como Agrosuper, Defensoría de la Niñez, CNC, entre otros.`,
    },
    {
      title: "Administración de sistemas de información internos",
      company: "C & C CONSULTORES",
      dates: "Marzo 2021 - Abril 2022",
      description: `Encargado de la creación de usuarios, correos corporativos, administración del aula virtual en Moodle, y mantenimiento de bases de datos usando phpMyAdmin.`,
    },
    {
      title: "Operaciones TI, (N1)",
      company: "ZEKE integradores de sistemas",
      dates: "Febrero 2019 - Julio 2020",
      description: `Monitoreo de servicios 24/7 utilizando Nagios, gestión de SLA y requerimientos con GLPI, y soporte técnico utilizando Oracle SQL Developer y SSH.`,
    },
    {
      title: "Administrador Zonal (OTEC)",
      company: "CENTRO DE ESTUDIOS ANDRÉS BELLO",
      dates: "Enero 2017 - Noviembre 2018",
      description: `Administración y gestión de intranet de alumnos, cursos de capacitación, generación de informes y toma de decisiones relacionadas con la formación de alumnos.`,
    },
  ];

  const [selectedExperience, setSelectedExperience] = useState(null);
  const [fadeEffect, setFadeEffect] = useState(false);

  useEffect(() => {
    setFadeEffect(true);
    const timeoutId = setTimeout(() => {
      setFadeEffect(false);
    }, 500); // Duración del efecto de transición

    return () => clearTimeout(timeoutId);
  }, [selectedExperience]);

  const handleSelectExperience = (index) => {
    setSelectedExperience(experiences[index]);
  };

  return (
    <section id="experiencia" className="h-[80vh] flex justify-center items-center bg-gray-200 dark:bg-gray-700 text-center"> {/* Ajuste de altura a 80vh */}
      <div className="max-w-7xl mx-auto relative w-full h-full mt-36">
        <h2 className="text-3xl font-bold mb-14 dark:text-white text-center">Mis Experiencias</h2>

        <div className="flex h-full">
          {/* Columna izquierda: acordeón de experiencias */}
          <div className="experience-left w-[45%] bg-gray-200 dark:bg-gray-700 p-6 overflow-y-auto"> {/* Ancho al 45% */}
            <div className="accordion-grid">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="accordion-item title mb-4 p-3 bg-gray-300 dark:bg-gray-600 rounded-lg cursor-pointer"
                  onClick={() => handleSelectExperience(index)}
                >
                  {exp.title}
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha: detalles de la experiencia */}
          <div
            className={`experience-right w-[55%] bg-white dark:bg-gray-800 p-6 h-full flex items-center justify-center transition-opacity duration-500 fixed-bg`} /* Fondo fijo, ancho al 55% */
          >
            {selectedExperience ? (
              <div className={`experience-detail text-left transition-opacity duration-500 ${fadeEffect ? 'opacity-0' : 'opacity-100'}`}>
                <h3 className="text-2xl font-semibold mb-4 dark:text-white break-words">{selectedExperience.title}</h3>
                <p className="text-lg dark:text-gray-300 mb-2">
                  <strong>Empresa:</strong> {selectedExperience.company}
                </p>
                <p className="text-lg dark:text-gray-300 mb-4">
                  <strong>Fechas:</strong> {selectedExperience.dates}
                </p>
                <p className="dark:text-gray-300">{selectedExperience.description}</p>
              </div>
            ) : (
              <p className="dark:text-gray-300">Selecciona una experiencia para ver los detalles.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
