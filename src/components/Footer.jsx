// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 dark:bg-gray-900 text-center py-4"
      role="contentinfo"
    >
      <div className="flex flex-col items-center gap-2 text-sm">
        <p className="text-gray-300 dark:text-gray-300">
          Hecho con <span className="text-red-500">♥</span> en React + Tailwind CSS
        </p>
        <p className="text-gray-300 dark:text-gray-300 font-medium">
          ©2024 Fabián Valencia C. | <span id="busuanzi_value_site_pv">()</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
