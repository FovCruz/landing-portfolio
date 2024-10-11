import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaReact, FaCode, FaDatabase, FaTools, FaBook } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import '../styles/conocimientos.css';
import Slider from 'react-infinite-logo-slider';

const KnowledgeSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <SectionWrapper id="conocimientos" title={t('knowledge.title')}>
      <p className="section-description text-left text-gray-700 dark:text-gray-300 mt-5">
        {t('knowledge.description')}
        <span className="font-bold"> React</span>,
        <span className="font-bold"> MongoDB</span>,
        <span className="font-bold"> Node.js</span>.
      </p>

      <div className="tab_container w-full">
        {/* Tabs */}
        {['tab1', 'tab2', 'tab3', 'tab4', 'tab5'].map((tab, index) => {
          const tabLabels = ['Front-end', 'Back-end', 'Tecnologías', 'Educación', 'Otros'];
          const tabIcons = [<FaReact />, <FaCode />, <FaDatabase />, <FaBook />, <FaTools />];

          return (
            <React.Fragment key={tab}>
              <input id={tab} type="radio" name="tabs" checked={activeTab === tab} onChange={() => handleTabChange(tab)} />
              <label
                htmlFor={tab}
                className={`cursor-pointer p-4 flex items-center justify-center
                  ${activeTab === tab ? 'bg-gray-800 text-[#ffa11c]' : 'bg-[#f8d7c7]'}
                  hover:bg-gray-800 transition-all duration-300`}
              >
                <span className="mr-2">{tabIcons[index]}</span>
                <span className="hidden sm:inline">{tabLabels[index]}</span>
              </label>
            </React.Fragment>
          );
        })}

        {/* Contenido de Front-end */}
        <section id="content1" className={`tab-content ${activeTab === 'tab1' ? 'show' : ''} fixed-height`}>
          <div className="grid grid-cols-2 gap-4 tech-items sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {['html5', 'css', 'javascript-1', 'react', 'Bootstrap(2)', 'sass', 'tailwindcss'].map((icon, index) => (
              <div key={index} className="flex items-center mb-4 tech-item">
                <img src={`${process.env.PUBLIC_URL}/iconos/${icon}.svg`} alt={icon} className="w-8 h-8 sm:w-6 sm:h-6 mr-2" />
                <span className="text-sm md:text-base">{icon.charAt(0).toUpperCase() + icon.slice(1)}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contenido de Back-end */}
        <section id="content2" className={`tab-content ${activeTab === 'tab2' ? 'show' : ''} fixed-height`}>
          <div className="grid grid-cols-2 gap-4 tech-items sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {['mongodb-icon-2', 'mysql', 'postgresql', 'php', 'microsoft-sql-server-1'].map((icon, index) => (
              <div key={index} className="flex items-center mb-4 tech-item">
                <img src={`${process.env.PUBLIC_URL}/iconos/${icon}.svg`} alt={icon} className="w-8 h-8 sm:w-6 sm:h-6 mr-2" />
                <span className="text-sm md:text-base">{icon.charAt(0).toUpperCase() + icon.slice(1).replace(/-/g, ' ')}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contenido de Tecnologías */}
        <section id="content3" className={`tab-content ${activeTab === 'tab3' ? 'show' : ''} fixed-height`}>
          <div className="grid grid-cols-2 gap-4 tech-items sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {[
              'Anaconda',
              'aws',
              'docker',
              'vscode',
              'cloudflare',
              'DBeaver',
              'digitalocean',
              'eclipse',
              'figma',
              'FileZilla'
            ].map((icon, index) => (
              <div key={index} className="flex items-center mb-4 tech-item">
                <img src={`${process.env.PUBLIC_URL}/iconos/${icon}.svg`} alt={icon} className="w-8 h-8 sm:w-6 sm:h-6 mr-2" />
                <span className="text-sm md:text-base">{icon.charAt(0).toUpperCase() + icon.slice(1)}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contenido de Educación */}
        <section id="content4" className={`tab-content ${activeTab === 'tab4' ? 'show' : ''} fixed-height w-full`}>
          {/* Tabla de educación */}
          <div className="overflow-x-auto">
            <table className="w-full text-gray-800 dark:text-[#fdc] text-left rounded-sm">
              <thead>
                <tr className="bg-gray-900 text-[#ffa11c]">
                  <th className="p-4 font-medium">Título</th>
                  <th className="p-4 font-medium">Institución</th>
                  <th className="p-4 font-medium hidden md:table-cell">Estado</th>
                  <th className="p-4 font-medium hidden md:table-cell">Duración</th>
                  <th className="p-4 font-medium">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="p-4">Ingeniería en Computación e Informática</td>
                  <td className="p-4">Duoc UC</td>
                  <td className="p-4 hidden md:table-cell">Titulado</td>
                  <td className="p-4 hidden md:table-cell">4,5 años</td>
                  <td className="p-4">
                    <div className="flex justify-center">
                      <a
                        href="#"
                        className="inline-block w-32 text-center bg-[#ffa11c] text-gray-800 font-medium py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#fdc] hover:text-gray-900"
                      >
                        Ver
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4">Fullstack Developer Python</td>
                  <td className="p-4">Desafío Latam</td>
                  <td className="p-4 hidden md:table-cell">Egresado (Certificado)</td>
                  <td className="p-4 hidden md:table-cell">7 Meses</td>
                  <td className="p-4">
                    <div className="flex justify-center">
                      <a
                        href="#"
                        className="inline-block w-32 text-center bg-[#ffa11c] text-gray-800 font-medium py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#fdc] hover:text-gray-900"
                      >
                        Ver
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Bases de Datos en la Nube con Azure</td>
                  <td className="p-4">Código Facilito</td>
                  <td className="p-4 hidden md:table-cell">En Proceso</td>
                  <td className="p-4 hidden md:table-cell">3 Meses</td>
                  <td className="p-4">
                    <div className="flex justify-center">
                      <a
                        href="https://codigofacilito.com/bootcamps/"
                        className="inline-block w-32 text-center bg-[#ffa11c] text-gray-800 font-medium py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#fdc] hover:text-gray-900"
                      >
                        Ir al curso
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Contenido de Otros */}
        <section id="content5" className={`tab-content ${activeTab === 'tab5' ? 'show' : ''} fixed-height`}>
          {/* Otros contenidos aquí */}
        </section>
      </div>

      {/* Icon Slider */}
      <div className="fade-effect show" style={{ zIndex: 3, position: 'relative' }}>
        <Slider
          pauseOnHover={false} // El slider no se detendrá al pasar el mouse sobre él.
          speed={10} // Ajusta la velocidad del slider (puedes ajustar según prefieras).
          infiniteLoop={true} // Asegura que el loop sea infinito sin detenerse.
          duration={300} // Si existe esta propiedad, especifica la duración en milisegundos
        >
          <img src={`${process.env.PUBLIC_URL}/iconos/Anaconda.svg`} alt="Icon 1" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/aws.svg`} alt="Icon 2" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/mysql.svg`} alt="Icon 3" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/docker.svg`} alt="Icon 4" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/vscode.svg`} alt="Icon 5" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/Bootstrap(2).svg`} alt="Icon 6" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/cloudflare.svg`} alt="Icon 7" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/css.svg`} alt="Icon 8" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/DBeaver.svg`} alt="Icon 9" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/digitalocean.svg`} alt="Icon 10" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/eclipse.svg`} alt="Icon 12" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/figma.svg`} alt="Icon 13" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/FileZilla.svg`} alt="Icon 14" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/git.svg`} alt="Icon 17" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/GitHub.svg`} alt="Icon 18" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/Google Cloud.svg`} alt="Icon 19" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/Google_Colaboratory.svg`} alt="Icon 20" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/html5.svg`} alt="Icon 21" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/javascript-1.svg`} alt="Icon 22" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/Jupyter.svg`} alt="Icon 23" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/linux.svg`} alt="Icon 24" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/microsoft.svg`} alt="Icon 25" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/microsoft-sql-server-1.svg`} alt="Icon 26" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/mongodb-icon-2.svg`} alt="Icon 27" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/npm.svg`} alt="Icon 28" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/php.svg`} alt="Icon 29" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/postgresql.svg`} alt="Icon 30" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/postman.svg`} alt="Icon 32" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/Powershell.svg`} alt="Icon 33" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/pycharm.svg`} alt="Icon 34" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/python(1).svg`} alt="Icon 35" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/react.svg`} alt="Icon 36" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/sass.svg`} alt="Icon 37" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/Slack.svg`} alt="Icon 38" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/SQL Developer.svg`} alt="Icon 39" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/SQLite(1).svg`} alt="Icon 40" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/sublimetext.svg`} alt="Icon 41" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/tailwindcss.svg`} alt="Icon 42" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/Trello.svg`} alt="Icon 43" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/visual-studio.svg`} alt="Icon 44" className="slider-icon" />
          <img src={`${process.env.PUBLIC_URL}/iconos/wordpress.svg`} alt="Icon 45" className="slider-icon" />

        </Slider>
      </div>
    </SectionWrapper>
  );
};

export default KnowledgeSection;
