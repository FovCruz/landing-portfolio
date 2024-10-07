import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaReact, FaCode, FaDatabase, FaTools, FaBook } from 'react-icons/fa'; // Importando los íconos relevantes
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
        <span className="font-bold"> Node</span>.
      </p>

      {/* Diseño adaptado a tabs responsivos */}
      <div className="tab_container w-full">
        <input id="tab1" type="radio" name="tabs" checked={activeTab === 'tab1'} onChange={() => handleTabChange('tab1')} />
        <label htmlFor="tab1" className={`cursor-pointer p-4 flex items-center justify-center
          ${activeTab === 'tab1' ? 'bg-white text-[#ffa11c]' : 'bg-gray-800 text-gray-600'}
          ${activeTab !== 'tab1' ? 'hover:bg-gray-700' : ''}`}>
          <FaReact className="mr-2" />
          <span className="hidden sm:inline">{t('Front-end')}</span>
        </label>

        <input id="tab2" type="radio" name="tabs" checked={activeTab === 'tab2'} onChange={() => handleTabChange('tab2')} />
        <label htmlFor="tab2" className={`cursor-pointer p-4 flex items-center justify-center
          ${activeTab === 'tab2' ? 'bg-white text-[#ffa11c]' : 'bg-gray-800 text-gray-600'}
          ${activeTab !== 'tab2' ? 'hover:bg-gray-700' : ''}`}>
          <FaCode className="mr-2" />
          <span className="hidden sm:inline">{t('Back-end')}</span>
        </label>

        <input id="tab3" type="radio" name="tabs" checked={activeTab === 'tab3'} onChange={() => handleTabChange('tab3')} />
        <label htmlFor="tab3" className={`cursor-pointer p-4 flex items-center justify-center
          ${activeTab === 'tab3' ? 'bg-white text-[#ffa11c]' : 'bg-gray-800 text-gray-600'}
          ${activeTab !== 'tab3' ? 'hover:bg-gray-700' : ''}`}>
          <FaDatabase className="mr-2" />
          <span className="hidden sm:inline">{t('Fullstack')}</span>
        </label>

        <input id="tab4" type="radio" name="tabs" checked={activeTab === 'tab4'} onChange={() => handleTabChange('tab4')} />
        <label htmlFor="tab4" className={`cursor-pointer p-4 flex items-center justify-center
          ${activeTab === 'tab4' ? 'bg-white text-[#ffa11c]' : 'bg-gray-800 text-gray-600'}
          ${activeTab !== 'tab4' ? 'hover:bg-gray-700' : ''}`}>
          <FaTools className="mr-2" />
          <span className="hidden sm:inline">{t('Herramientas')}</span>
        </label>

        <input id="tab5" type="radio" name="tabs" checked={activeTab === 'tab5'} onChange={() => handleTabChange('tab5')} />
        <label htmlFor="tab5" className={`cursor-pointer p-4 flex items-center justify-center
          ${activeTab === 'tab5' ? 'bg-white text-[#ffa11c]' : 'bg-gray-800 text-gray-600'}
          ${activeTab !== 'tab5' ? 'hover:bg-gray-700' : ''}`}>
          <FaBook className="mr-2" />
          <span className="hidden sm:inline">{t('Cursos & Talleres')}</span>
        </label>

        <section id="content1" className={`tab-content ${activeTab === 'tab1' ? 'show' : ''} fixed-height`}>
          <div className="columns-2 tech-items">
            <div className="flex items-center mb-4 tech-item">
              <img src={`${process.env.PUBLIC_URL}/iconos/react.svg`} alt="React" className="w-6 h-6 mr-2" />
              React
            </div>
            <div className="flex items-center mb-4 tech-item">
              <img src={`${process.env.PUBLIC_URL}/iconos/html5.svg`} alt="HTML5" className="w-6 h-6 mr-2" />
              HTML5
            </div>
            <div className="flex items-center mb-4 tech-item">
              <img src={`${process.env.PUBLIC_URL}/iconos/css.svg`} alt="CSS3" className="w-6 h-6 mr-2" />
              CSS3
            </div>
            <div className="flex items-center mb-4 tech-item">
              <img src={`${process.env.PUBLIC_URL}/iconos/tailwindcss.svg`} alt="TailwindCSS" className="w-6 h-6 mr-2" />
              TailwindCSS
            </div>
            <div className="flex items-center mb-4 tech-item">
              <img src={`${process.env.PUBLIC_URL}/iconos/Bootstrap(2).svg`} alt="Bootstrap" className="w-6 h-6 mr-2" />
              Bootstrap
            </div>
            <div className="flex items-center tech-item">
              <img src={`${process.env.PUBLIC_URL}/iconos/javascript-1.svg`} alt="JavaScript" className="w-6 h-6 mr-2" />
              JavaScript
            </div>
          </div>
        </section>

        <section id="content2" className={`tab-content ${activeTab === 'tab2' ? 'show' : ''} fixed-height`}>
          <div className="columns-2 tech-items">
            <div className="flex items-center mb-4 tech-item">
              <img src={`${process.env.PUBLIC_URL}/iconos/django-community.svg`} alt="Django" className="w-6 h-6 mr-2" />
              Django
            </div>
            <div className="flex items-center mb-4 tech-item">
              <img src={`${process.env.PUBLIC_URL}/iconos/python(1).svg`} alt="Python" className="w-6 h-6 mr-2" />
              Python
            </div>
            <div className="flex items-center mb-4 tech-item">
              <img src={`${process.env.PUBLIC_URL}/iconos/php.svg`} alt="PHP" className="w-6 h-6 mr-2" />
              PHP
            </div>
            <div className="flex items-center mb-4 tech-item">
              <img src={`${process.env.PUBLIC_URL}/iconos/PostgresSQL.svg`} alt="PostgreSQL" className="w-6 h-6 mr-2" />
              PostgreSQL
            </div>
            <div className="flex items-center tech-item">
              <img src={`${process.env.PUBLIC_URL}/iconos/mongodb-icon-2.svg`} alt="MongoDB" className="w-6 h-6 mr-2" />
              MongoDB
            </div>
          </div>
        </section>

        <section id="content3" className={`tab-content ${activeTab === 'tab3' ? 'show' : ''} fixed-height`}>
          <p>{t('Conocimientos Fullstack')}</p>
        </section>

        <section id="content4" className={`tab-content ${activeTab === 'tab4' ? 'show' : ''} fixed-height`}>
          <p>{t('Herramientas')}</p>
        </section>

        <section id="content5" className={`tab-content ${activeTab === 'tab5' ? 'show' : ''} fixed-height`}>
          <div>
            <div className="flex justify-between items-center mb-4 course-item">
              <span>Curso Fullstack Python</span>
              <button
                className="text-blue-600 hover:underline"
                onClick={() => window.open('https://www.ejemplo.com/certificado-react', "_blank")}
              >
                Ver certificado
              </button>
            </div>
            <div className="flex justify-between items-center mb-4 course-item">
              <span>Taller de Python para Web</span>
              <button
                className="text-blue-600 hover:underline"
                onClick={() => window.open('https://www.ejemplo.com/certificado-python', "_blank")}
              >
                Ver certificado
              </button>
            </div>
          </div>
        </section>
      </div>

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