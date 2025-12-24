// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer
      className="bg-gray-300 dark:bg-gray-800 text-center py-4"
      role="contentinfo"
    >
      <div className="flex flex-col items-center gap-2 text-sm">
        <p className="text-gray-600 dark:text-gray-400">
          Hecho con <span className="text-red-500">♥</span> en React + Tailwind CSS
        </p>
        <p className="text-gray-700 dark:text-gray-300 font-medium">
          © 2024 Fabián Valencia
        </p>
      </div>
    </footer>
  );
};

export default Footer;
