import React from 'react';

const CustomButton = ({ link, onClick, children, ariaLabel, isSectionButton = false, isBuzzActive = false }) => {
  // Clases comunes para botones, con diseño similar a los contenedores
  const commonButtonClasses = 'font-light py-1.5 px-3 sm:py-2 sm:px-4 border rounded-lg transition-all duration-500 bg-[#f17e04] text-white';

  // Clases personalizadas para hover, borde y color en modo oscuro y claro
  const buttonHoverClasses = `
    hover:bg-gray-900 dark:hover:bg-[#f17e04] 
    hover:text-white dark:hover:text-gray-900 
    box-shadow-[0_8px_24px_rgba(31,41,55,0.2)] dark:box-shadow-[0_8px_24px_rgba(255,221,204,0.2)]
  `;

  // Clases para el efecto buzz o cuando se selecciona un botón
  const activeBuzzClasses = isBuzzActive ? 'bg-gray-900 text-white dark:bg-[#ffddcc] dark:text-gray-900' : '';

  // Clases que aplican cuando el hover o buzz están activos
  const illuminationHoverClass = isSectionButton ? 'boton-iluminacion-hover' : '';

  // Clases finales combinando los estilos
  const buttonClasses = `
    ${commonButtonClasses} 
    border-[1px] border-gray-900 dark:border-[#ffddcc] 
    text-gray-900 text-gray-600 dark:text-[#ffddcc] 
    ${buttonHoverClasses} 
    ${illuminationHoverClass}
    ${activeBuzzClasses}
    text-center
  `;

  if (link) {
    // Si se proporciona un enlace, renderizamos un <a>
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  } else {
    // Si no, renderizamos un <button>
    return (
      <button
        onClick={onClick}
        className={buttonClasses}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }
};






export default CustomButton;