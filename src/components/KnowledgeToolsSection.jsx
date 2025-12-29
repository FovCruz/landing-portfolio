import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaReact, FaCode, FaDatabase, FaTools, FaBook } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import '../styles/conocimientos.css';
import Marquee from "react-fast-marquee";

const KnowledgeSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

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
              <input
                id={tab}
                type="radio"
                name="tabs"
                checked={activeTab === tab}
                onChange={() => handleTabChange(tab)}
              />
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
            {['html5', 'css', 'javascript-1', 'react', 'Bootstrap(2)', 'sass', 'tailwindcss'].map((icon, i) => (
              <div key={i} className="flex items-center mb-4 tech-item">
                <img src={`${base}/iconos/${icon}.svg`} alt={icon} className="w-8 h-8 sm:w-6 sm:h-6 mr-2" />
                <span className="text-sm md:text-base">
                  {icon.charAt(0).toUpperCase() + icon.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Contenido de Back-end */}
        <section id="content2" className={`tab-content ${activeTab === 'tab2' ? 'show' : ''} fixed-height`}>
          <div className="grid grid-cols-2 gap-4 tech-items sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {['mongodb-icon-2', 'mysql', 'postgresql', 'php', 'microsoft-sql-server-1'].map((icon, i) => (
              <div key={i} className="flex items-center mb-4 tech-item">
                <img src={`${base}/iconos/${icon}.svg`} alt={icon} className="w-8 h-8 sm:w-6 sm:h-6 mr-2" />
                <span className="text-sm md:text-base">
                  {icon.charAt(0).toUpperCase() + icon.slice(1).replace(/-/g, ' ')}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Contenido de Tecnologías */}
        <section id="content3" className={`tab-content ${activeTab === 'tab3' ? 'show' : ''} fixed-height`}>
          <div className="grid grid-cols-2 gap-4 tech-items sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {[
              'Anaconda', 'aws', 'docker', 'vscode', 'cloudflare', 'DBeaver', 'digitalocean',
              'eclipse', 'figma', 'FileZilla'
            ].map((icon, i) => (
              <div key={i} className="flex items-center mb-4 tech-item">
                <img src={`${base}/iconos/${icon}.svg`} alt={icon} className="w-8 h-8 sm:w-6 sm:h-6 mr-2" />
                <span className="text-sm md:text-base">
                  {icon.charAt(0).toUpperCase() + icon.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Contenido de Educación */}
        <section id="content4" className={`tab-content ${activeTab === 'tab4' ? 'show' : ''} fixed-height w-full`}>
          <div className="overflow-x-auto dark:bg-gray-900">
            <table className="w-full text-gray-800 dark:text-[#fdc] text-left rounded-sm">
              <thead>
                <tr className="bg-gray-900 text-[#ffa11c] border-b-2 border-gray-400">
                  <th className="p-4 font-medium">Título</th>
                  <th className="p-4 font-medium">Institución</th>
                  <th className="p-4 font-medium hidden md:table-cell">Estado</th>
                  <th className="p-4 font-medium hidden md:table-cell">Duración</th>
                  <th className="p-4 font-medium md:table-cell text-center">Link</th>
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
                        Solicitar
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4">Full Stack Python Developer</td>
                  <td className="p-4">Desafío Latam</td>
                  <td className="p-4 hidden md:table-cell">Certificado</td>
                  <td className="p-4 hidden md:table-cell">7 meses</td>
                  <td className="p-4">
                    <div className="flex justify-center">
                      <a
                        href="https://www.acreditta.com/credential/57c58860-fd18-46b3-ad55-846a9d29057a?utm_source=copy&resource_type=badge&resource=57c58860-fd18-46b3-ad55-846a9d29057a"
                        target="_blank" className="inline-block w-32 text-center bg-[#ffa11c] text-gray-800 font-medium py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#fdc] hover:text-gray-900"
                      >
                        Ver
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4">Arquitectura Cloud</td>
                  <td className="p-4">Desafío Latam</td>
                  <td className="p-4 hidden md:table-cell">Certificado</td>
                  <td className="p-4 hidden md:table-cell">7 meses</td>
                  <td className="p-4">
                    <div className="flex justify-center">
                      <a
                        href="https://www.acreditta.com/credential/4d9bf17b-9f7b-42e9-9b7d-dea9ce54d98b?utm_source=copy&resource_type=badge&resource=4d9bf17b-9f7b-42e9-9b7d-dea9ce54d98b"
                        target="_blank" className=" inline-block w-32 text-center bg-[#ffa11c] text-gray-800 font-medium py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#fdc] hover:text-gray-900"
                      >
                        Ver
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Metodologías Ágiles</td>
                  <td className="p-4">Oracle-Alura Latam</td>
                  <td className="p-4 hidden md:table-cell">Certificado</td>
                  <td className="p-4 hidden md:table-cell">2 meses</td>
                  <td className="p-4">
                    <div className="flex justify-center">
                      <a
                        href="https://app.aluracursos.com/degree/certificate/674eeb31-7b47-494f-96ce-662b11ebbeda"
                        target="_blank" className=" inline-block w-32 text-center bg-[#ffa11c] text-gray-800 font-medium py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#fdc] hover:text-gray-900"
                      >
                        Ver
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

      {/* Slider de íconos */}
      <div className="show relative">
        <Marquee>
          {[
            'Anaconda.svg', 'aws.svg', 'mysql.svg', 'docker.svg', 'vscode.svg', 'Bootstrap(2).svg',
            'cloudflare.svg', 'css.svg', 'DBeaver.svg', 'digitalocean.svg', 'eclipse.svg', 'figma.svg',
            'FileZilla.svg', 'git.svg', 'GitHub.svg', 'Google_Colaboratory.svg', 'html5.svg',
            'javascript-1.svg', 'Jupyter.svg', 'linux.svg', 'microsoft.svg', 'microsoft-sql-server-1.svg',
            'mongodb-icon-2.svg', 'npm.svg', 'php.svg', 'postgresql.svg', 'postman.svg', 'Powershell.svg',
            'pycharm.svg', 'python(1).svg', 'react.svg', 'sass.svg', 'Slack.svg', 'SQL Developer.svg',
            'SQLite(1).svg', 'sublimetext.svg', 'tailwindcss.svg', 'Trello.svg', 'visual-studio.svg',
            'wordpress.svg'
          ].map((img, i) => (
            <img key={i} src={`${base}/iconos/${img}`} alt={`Icon ${i}`} className="slider-icon w-15 h-15" />
          ))}
        </Marquee>
      </div>
    </SectionWrapper>
  );
};

export default KnowledgeSection;
