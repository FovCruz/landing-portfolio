import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaEye, FaFileDownload } from 'react-icons/fa';
import '../styles/SocialIcons.css';

const base = import.meta.env.BASE_URL; // funciona en Vite

const SocialIcons = () => {
  const [showCV, setShowCV] = useState(false);

  const toggleCVModal = () => {
    setShowCV(!showCV);
  };

  return (
    <>
      <div className="social-icons left text-gray-900 dark:text-gray-300">
        <ul>
          <li>
            <a href="https://github.com/FovCruz" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
              <span className="tooltip">GitHub</span>
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/fabian-osvaldo-cruz/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
              <span className="tooltip">LinkedIn</span>
            </a>
          </li>

          <li>
            <a href="mailto:fov.cruz@gmail.com" aria-label="Enviar Correo">
              <FaEnvelope />
              <span className="tooltip">Enviar Correo</span>
            </a>
          </li>

          {/* Descarga Currículum */}
          <li>
            <a href={`${base}Currículum-12-2025-act.pdf`} download aria-label="Descargar Currículum">
              <FaFileDownload />
              <span className="tooltip">Descargar Currículum</span>
            </a>
          </li>

          {/* Ver CV Online */}
          <li>
            <a href="#!" onClick={toggleCVModal} aria-label="Ver CV Online">
              <FaEye />
              <span className="tooltip">Ver CV Online</span>
            </a>
          </li>
        </ul>
      </div>

      {/* MODAL */}
      {showCV && (
        <div className="fixed inset-0 bg-opacity-100 flex items-center justify-center z-40" onClick={toggleCVModal}>
          <div className="relative w-full h-3/4 max-w-4xl bg-white dark:bg-gray-900 p-1 rounded-md shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={toggleCVModal}
            >
              X
            </button>
            <iframe
              src={`${base}CV-Fabian-Valencia-C-09-2024-mod09-3.pdf`}
              className="w-full h-full"
              title="CV Online"
            />
          </div>
        </div>
      )}

      {/* Correo vertical derecha */}
      <div className="social-icons right text-gray-900 dark:text-gray-300">
        <div className="email-vertical">
          <a href="mailto:fov.cruz@gmail.com">fov.cruz@gmail.com</a>
        </div>
      </div>
    </>
  );
};

export default SocialIcons;
