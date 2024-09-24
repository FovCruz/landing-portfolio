import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaEye, FaFileDownload } from 'react-icons/fa';
import '../styles/SocialIcons.css';

const SocialIcons = () => {
  const [showCV, setShowCV] = useState(false);

  const toggleCVModal = () => {
    setShowCV(!showCV); // Mostrar/ocultar el modal del CV
  };

  return (
    <>
      {/* Contenedor de íconos en la izquierda */}
      <div className="social-icons left">
        <ul>
          {/* Icono de GitHub */}
          <li>
            <a href="https://github.com/FovCruz" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
              <span className="tooltip">GitHub</span>
            </a>
          </li>

          {/* Icono de LinkedIn */}
          <li>
            <a href="https://www.linkedin.com/in/fabian-osvaldo-cruz/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
              <span className="tooltip">LinkedIn</span>
            </a>
          </li>

          {/* Icono de Gmail */}
          <li>
            <a href="mailto:fov.cruz@gmail.com" aria-label="Enviar Correo">
              <FaEnvelope />
              <span className="tooltip">Enviar Correo</span>
            </a>
          </li>

          {/* Icono de descargar CV en formato ATS */}
          <li>
            <a href={`${process.env.PUBLIC_URL}/CV_Fabian_Valencia_formato_ATS_.docx`} download aria-label="Descargar CV ATS">
              <FaFileDownload />
              <span className="tooltip">Descargar CV ATS</span>
            </a>
          </li>

          {/* Icono de ver CV online (abre el modal) */}
          <li>
            <a href="#!" onClick={toggleCVModal} aria-label="Ver CV Online">
              <FaEye />
              <span className="tooltip">Ver CV Online</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Modal para ver el CV online */}
      {showCV && (
        <div className="fixed inset-0 bg-opacity-100 flex items-center justify-center z-40" onClick={toggleCVModal}>
          <div className="relative w-full h-3/4 max-w-4xl max-h-full bg-white dark:bg-gray-900 p-1 rounded-md shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={toggleCVModal}
            >
              X
            </button>
            <iframe
              src={`${process.env.PUBLIC_URL}/CV-Fabian-Valencia-C-09-2024-mod09-3.pdf`}
              className="w-full h-full"
              style={{ minHeight: '5vh' }}
              title="CV Online"
            />
          </div>
        </div>
      )}

      {/* Contenedor de íconos en la derecha (Correo en vertical) */}
      <div className="social-icons right">
        <div className="email-vertical">
          <a href="mailto:fov.cruz@gmail.com">fov.cruz@gmail.com</a>
        </div>
      </div>
    </>
  );
};

export default SocialIcons;
