import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-infinite-logo-slider';
import { useTranslation } from 'react-i18next';
import SectionWrapper from './SectionWrapper';
import '../styles/conocimientos.css'; // Archivo de estilos específicos

const KnowledgeSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(null); // Tab activa
  const [hoveredTab, setHoveredTab] = useState(null); // Tab al hacer hover
  const [showImage, setShowImage] = useState(true); // Mostrar imagen por defecto
  const tabsRef = useRef(null); // Referencia para los tabs
  const selectorRef = useRef(null); // Referencia para el selector

  // Definición de las pestañas
  const tabs = [
    { id: 0, title: t('Front-end'), content: renderFrontendTechnologies() },
    { id: 1, title: t('Back-end'), content: renderBackendTechnologies() },
    { id: 2, title: t('Fullstack'), content: t('Conocimientos Fullstack') },
    { id: 3, title: t('Herramientas'), content: t('Herramientas') },
    { id: 4, title: t('Cursos & Talleres'), content: renderCourses() }
  ];

  // Lista completa de íconos para el slider
  const icons = [
    { src: `${process.env.PUBLIC_URL}/iconos/php.svg`, alt: 'PHP' },
    { src: `${process.env.PUBLIC_URL}/iconos/django-community.svg`, alt: 'Django' },
    { src: `${process.env.PUBLIC_URL}/iconos/html5.svg`, alt: 'HTML5' },
    { src: `${process.env.PUBLIC_URL}/iconos/css.svg`, alt: 'CSS3' },
    { src: `${process.env.PUBLIC_URL}/iconos/Bootstrap(2).svg`, alt: 'Bootstrap' },
    { src: `${process.env.PUBLIC_URL}/iconos/mongodb-icon-2.svg`, alt: 'MongoDB' },
    { src: `${process.env.PUBLIC_URL}/iconos/react.svg`, alt: 'React' },
    { src: `${process.env.PUBLIC_URL}/iconos/javascript-1.svg`, alt: 'JavaScript' },
    { src: `${process.env.PUBLIC_URL}/iconos/python(1).svg`, alt: 'Python' },
  ];

  // Renderizado de las tecnologías Front-end
  function renderFrontendTechnologies() {
    return (
      <div className="columns-2 tech-items">
        <div className="flex items-center mb-4 tech-item"><img src={`${process.env.PUBLIC_URL}/iconos/react.svg`} alt="React" className="w-8 h-8 mr-2" /> React</div>
        <div className="flex items-center mb-4 tech-item"><img src={`${process.env.PUBLIC_URL}/iconos/html5.svg`} alt="HTML5" className="w-8 h-8 mr-2" /> HTML5</div>
        <div className="flex items-center mb-4 tech-item"><img src={`${process.env.PUBLIC_URL}/iconos/css.svg`} alt="CSS3" className="w-8 h-8 mr-2" /> CSS3</div>
        <div className="flex items-center mb-4 tech-item"><img src={`${process.env.PUBLIC_URL}/iconos/tailwindcss.svg`} alt="TailwindCSS" className="w-8 h-8 mr-2" /> TailwindCSS</div>
        <div className="flex items-center mb-4 tech-item"><img src={`${process.env.PUBLIC_URL}/iconos/Bootstrap(2).svg`} alt="Bootstrap" className="w-8 h-8 mr-2" /> Bootstrap</div>
        <div className="flex items-center tech-item"><img src={`${process.env.PUBLIC_URL}/iconos/javascript-1.svg`} alt="JavaScript" className="w-8 h-8 mr-2" /> JavaScript</div>
      </div>
    );
  }

  // Renderizado de las tecnologías Back-end
  function renderBackendTechnologies() {
    return (
      <div className="columns-2 tech-items">
        <div className="flex items-center mb-4 tech-item"><img src={`${process.env.PUBLIC_URL}/iconos/django-community.svg`} alt="Django" className="w-8 h-8 mr-2" /> Django</div>
        <div className="flex items-center mb-4 tech-item"><img src={`${process.env.PUBLIC_URL}/iconos/python(1).svg`} alt="Python" className="w-8 h-8 mr-2" /> Python</div>
        <div className="flex items-center mb-4 tech-item"><img src={`${process.env.PUBLIC_URL}/iconos/php.svg`} alt="PHP" className="w-8 h-8 mr-2" /> PHP</div>
        <div className="flex items-center mb-4 tech-item"><img src={`${process.env.PUBLIC_URL}/iconos/PostgresSQL.svg`} alt="PostgreSQL" className="w-8 h-8 mr-2" /> PostgreSQL</div>
        <div className="flex items-center tech-item"><img src={`${process.env.PUBLIC_URL}/iconos/mongodb-icon-2.svg`} alt="MongoDB" className="w-8 h-8 mr-2" /> MongoDB</div>
      </div>
    );
  }

  // Renderizado de los cursos y talleres
  function renderCourses() {
    const courses = [
      { name: "Curso de React Avanzado", url: "https://www.ejemplo.com/certificado-react" },
      { name: "Taller de Python para Web", url: "https://www.ejemplo.com/certificado-python" },
    ];

    return (
      <div>
        {courses.map((course, index) => (
          <div key={index} className="flex justify-between items-center mb-4 course-item">
            <span>{course.name}</span>
            <button
              className="text-blue-600 hover:underline"
              onClick={() => {
                setShowImage(false); // Ocultar imagen
              }}
            >
              Ver certificado
            </button>
          </div>
        ))}
      </div>
    );
  }

  // Manejo de hover y selección de tab
  const handleHoverTab = (index) => {
    setHoveredTab(index);
    setShowImage(false);
  };

  const handleSelectTab = (index) => {
    setActiveTab(index);
    setShowImage(false);
  };

  const handleMouseLeaveTabs = () => {
    // Resetea a la imagen por defecto al salir del área
    setHoveredTab(null);
    setActiveTab(null);
    setShowImage(true); // Volver a mostrar la imagen si no hay tab seleccionada
  };

  useEffect(() => {
    // Mover el selector al tab activo o hovered
    const moveSelector = (index) => {
      const activeTabElement = tabsRef.current.querySelectorAll('a')[index];
      const selector = selectorRef.current;

      if (activeTabElement && selector) {
        selector.style.left = `${activeTabElement.offsetLeft}px`;
        selector.style.width = `${activeTabElement.offsetWidth}px`;
      }
    };

    if (activeTab !== null) {
      moveSelector(activeTab);
    } else if (hoveredTab !== null) {
      moveSelector(hoveredTab);
    }
  }, [activeTab, hoveredTab]);

  return (
    <SectionWrapper id="conocimientos" title={t('knowledge.title')}>
      <p className="section-description text-left text-gray-700 dark:text-gray-300 mt-5">
        {t('knowledge.description')} 
        <span className="font-bold"> React</span>, 
        <span className="font-bold"> MongoDB</span>, 
        <span className="font-bold"> Node</span>, 
        <span className="font-bold"> Tailwind</span>.
      </p>

      {/* Tabs Navigation */}
      <div className="wrapper mb-10" onMouseLeave={handleMouseLeaveTabs}>
        <nav className="tabs dark:text-secondary dark:bg-dark bg-transparent" ref={tabsRef}>
          <div className="selector" ref={selectorRef}></div>
          {tabs.map((tab, index) => (
            <a
              href="#"
              key={tab.id}
              className={`tab-link ${activeTab === index ? 'active' : ''} ${hoveredTab === index ? 'hover' : ''}`}
              onMouseEnter={() => handleHoverTab(index)}
              onClick={(e) => {
                e.preventDefault();
                handleSelectTab(index);
              }}
            >
              {tab.title}
            </a>
          ))}
        </nav>

        {/* Contenedor dinámico con altura fija y scroll */}
        <div className="tabs__panel mt-4 p-4 bg-transparent dark:bg-transparent" style={{ height: '250px', overflowY: 'auto' }}>
          {showImage ? (
            <div className="experience-image-placeholder rounded-lg max-w-[20rem] mx-auto">
              <img
                src={`${process.env.PUBLIC_URL}/cert.png`}
                alt="Placeholder"
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="tabs__panel-content dark:text-secondary dark:bg-transparent">
              {tabs[activeTab !== null ? activeTab : hoveredTab]?.content}
            </div>
          )}
        </div>
      </div>

      {/* Slider de iconos */}
      <div className="fade-effect show" style={{ zIndex: 3, position: 'relative' }}>
        <Slider width="80px" duration={30} toRight={false} pauseOnHover={true} blurBorders={false}>
          {icons.map((icon, index) => (
            <Slider.Slide key={index}>
              <img src={icon.src} alt={icon.alt} className="w-16 h-16" loading="lazy" />
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </SectionWrapper>
  );
};

export default KnowledgeSection;
