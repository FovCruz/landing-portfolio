import React from 'react';

const CustomButton = ({ link, onClick, children, ariaLabel, isSectionButton = false }) => {
  // Clases comunes para botones
  const commonButtonClasses = 'font-light py-1.5 px-3 sm:py-2 sm:px-4 rounded-full border-2 transition-all duration-500';
  
  // Clases personalizadas para el hover
  const buttonHoverClasses = 'dark:hover:bg-[#ffddcc] dark:hover:text-gray-900 hover:bg-gray-900 hover:text-white';
  const illuminationHoverClass = isSectionButton ? 'boton-iluminacion-hover' : ''; // Solo aplicamos la clase si es un botón de sección
  const buttonClasses = `${commonButtonClasses} dark:border-[#ffddcc] border-gray-900 dark:text-[#ffddcc] text-gray-900 ${buttonHoverClasses} ${illuminationHoverClass} text-center`;

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
