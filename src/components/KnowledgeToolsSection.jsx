import React from 'react';
import { DiHtml5 } from 'react-icons/di'; // Importando el icono DiHtml5
import './conocimientos.css'; // Asegúrate de incluir los estilos


const KnowledgeSection = () => {
  // Usaremos el mismo icono 20 veces
  const row1Icons = new Array(10).fill(<DiHtml5 />); // 10 veces en la fila 1
  const row2Icons = new Array(10).fill(<DiHtml5 />); // 10 veces en la fila 2

  return (
    <section className="h-screen bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-center">
      <div className="max-w-7xl mx-auto relative w-full h-full mt-20">
        <h2 className="text-3xl font-bold mb-10 dark:text-white">Mis Conocimientos</h2>

        <div className="icon-carousel">
          {/* Fila 1 - Girando hacia la izquierda */}
          <div className="icon-row row-left">
            {row1Icons.map((icon, index) => (
              <div key={index} className="icon-container">
                {icon}
              </div>
            ))}
          </div>

          {/* Fila 2 - Girando hacia la derecha */}
          <div className="icon-row row-right">
            {row2Icons.map((icon, index) => (
              <div key={index} className="icon-container">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
