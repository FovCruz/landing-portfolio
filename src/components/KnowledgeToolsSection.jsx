import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import certPython from '../assets/cert_python.webp';
import certArq from '../assets/cert_arq_cloud.webp';
import { FaReact, FaCode, FaDatabase, FaTools, FaBook, FaCertificate, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import '../styles/conocimientos.css';
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const KnowledgeSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  // Obtener certificaciones desde i18n (returnObjects para devolver objeto anidado)
  const certifications = t('knowledge.certifications.items', { returnObjects: true });

  // Slider / carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderContainerRef = useRef(null);
  const sliderRef = useRef(null);

  // Map de imágenes locales
  const imageMap = {
    'cert_python.webp': certPython,
    'cert_arq_cloud.webp': certArq
  };

  useEffect(() => {
    // Reset index if items change
    const count = Object.keys(certifications || {}).length;
    if (currentIndex >= count) setCurrentIndex(0);
  }, [certifications]);

  // For the transform-based carousel we simply set the index; the track transform will show the active slide
  const scrollToIndex = (i) => {
    const count = Object.keys(certifications || {}).length;
    if (count === 0) return;
    const newIndex = ((i % count) + count) % count; // normalize
    setCurrentIndex(newIndex);
    currentIndexRef.current = newIndex;
  };

  const autoplayRef = useRef(null);
  const currentIndexRef = useRef(0);

  const clearAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const startAutoplay = () => {
    clearAutoplay();
    const count = Object.keys(certifications || {}).length;
    if (count === 0) return;

    // Start interval immediately (transform-based carousel doesn't depend on DOM measuring)
    autoplayRef.current = setInterval(() => {
      const nextIdx = (currentIndexRef.current + 1) % count;
      scrollToIndex(nextIdx);
      // state and ref updated in scrollToIndex
    }, 10000);
  };

  useEffect(() => {
    const count = Object.keys(certifications || {}).length;
    if (count > 0) {
      // center first card and start autoplay
      scrollToIndex(0);
      setCurrentIndex(0);
      currentIndexRef.current = 0;
      startAutoplay();
    }

    return () => {
      clearAutoplay();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [certifications]);

  const prev = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();
    if (sliderRef.current && sliderRef.current.slickPrev) {
      sliderRef.current.slickPrev();
    } else {
      const last = Object.keys(certifications || {}).length - 1;
      const newIndex = currentIndexRef.current > 0 ? currentIndexRef.current - 1 : last;
      scrollToIndex(newIndex);
      setCurrentIndex(newIndex);
      currentIndexRef.current = newIndex;
    }
    startAutoplay();
  };

  const next = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();
    if (sliderRef.current && sliderRef.current.slickNext) {
      sliderRef.current.slickNext();
    } else {
      const last = Object.keys(certifications || {}).length - 1;
      const newIndex = currentIndexRef.current < last ? currentIndexRef.current + 1 : 0;
      scrollToIndex(newIndex);
      setCurrentIndex(newIndex);
      currentIndexRef.current = newIndex;
    }
    startAutoplay();
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
        {[
          { id: 'tab1', key: 'education', icon: <FaBook /> },
          { id: 'tab2', key: 'certifications', icon: <FaCertificate /> },
          { id: 'tab3', key: 'technologies', icon: <FaDatabase /> },
          { id: 'tab4', key: 'frontend', icon: <FaReact /> },
          { id: 'tab5', key: 'backend', icon: <FaCode /> }
        ].map((tab) => (
          <React.Fragment key={tab.id}>
            <input
              id={tab.id}
              type="radio"
              name="tabs"
              checked={activeTab === tab.id}
              onChange={() => handleTabChange(tab.id)}
            />
            <label
              htmlFor={tab.id}
              className={`cursor-pointer p-4 flex items-center justify-center
                ${activeTab === tab.id ? 'bg-gray-800 text-[#ffa11c]' : 'bg-[#f8d7c7]'}
                hover:bg-gray-800 transition-all duration-300`}
            >
              <span className="mr-2">{tab.icon}</span>
              <span className="hidden sm:inline">{t(`knowledge.tabs.${tab.key}`)}</span>
            </label>
          </React.Fragment>
        ))} 

        {/* Contenido de Educación */}
        <section id="content1" className={`tab-content ${activeTab === 'tab1' ? 'show' : ''} fixed-height w-full`}>
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
                        className="inline-flex items-center bg-[#ffa11c] text-gray-800 py-2 px-3 rounded hover:bg-[#fdc] transition"
                      >
                        Solicitar
                      </a>
                    </div>
                  </td>
                </tr>

                {/* Agrego filas de certificaciones en Educación*/}
                {Object.values(certifications).map((cert, idx) => (
                  <tr key={idx} className="border-b border-gray-700">
                    <td className="p-4">{cert.shortName}</td>
                    <td className="p-4">{cert.institution}</td>
                    <td className="p-4 hidden md:table-cell">Certificado</td>
                    <td className="p-4 hidden md:table-cell">{cert.duration}</td>
                    <td className="p-4">
                      <div className="flex justify-center">
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center bg-[#ffa11c] text-gray-800 py-2 px-3 rounded hover:bg-[#fdc] transition"
                        >
                          <FaExternalLinkAlt className="mr-2" /> Ver
                        </a>
                      </div>
                    </td>
                  </tr>
                ))} 
              </tbody>
            </table>
          </div>
        </section>

        {/* Contenido de Certificaciones - Slick carousel */}
        <section id="content2" className={`tab-content ${activeTab === 'tab2' ? 'show' : ''} fixed-height`}>
          <div className="w-full flex justify-center">
            <div className="w-full relative" ref={sliderContainerRef}>
              <button type="button" onClick={prev} aria-label="Anterior" className="cert-nav-button left absolute top-0 bottom-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 hover:shadow-lg transition" style={{ width: '48px' }}>
                <FaChevronLeft />
              </button>
              {/* Slider settings */}
              {(() => {
                const settings = {
                  dots: true,
                  infinite: true,
                  slidesToShow: 1, // show only one slide at a time (full width)
                  centerMode: false,
                  autoplay: true,
                  autoplaySpeed: 10000,
                  arrows: false, // we use custom vertical buttons
                  responsive: [
                    { breakpoint: 1400, settings: { slidesToShow: 1 } },
                    { breakpoint: 1024, settings: { slidesToShow: 1 } },
                    { breakpoint: 640, settings: { slidesToShow: 1 } }
                  ]
                };

                return (
                  <>
                    <div className="slider-inner"><Slider ref={sliderRef} {...settings}>
                    {Object.values(certifications).map((cert, i) => {
                      const imageSrc = imageMap[cert.image] || (cert.image ? `${base}/iconos/${cert.image}` : `${base}/iconos/cert-placeholder.svg`);
                      return (
                        <div key={i} className="cert-slide pt-1">
                            <div className="card w-full max-w-full bg-transparent overflow-hidden flex flex-col md:flex-row h-full" style={{ padding: '0%', boxShadow: 'none' }}>
                              <div className="w-full md:w-1/3 flex items-center justify-center bg-transparent p-1">
                                <img src={imageSrc} alt={cert.shortName} className="w-full h-auto object-contain" />
                              </div>
                              <div className="w-full md:w-2/3 p-10 md:pl-3 flex flex-col justify-start gap-2">
                                <div>
                                  <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-0">{cert.shortName}</h3>
                                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 mb-0">{cert.description}</p>
                                </div>
                                <div className="meta-and-action mt-1 flex items-center justify-between">
                                  <div className="meta-left">
                                    <p className="text-sm font-semibold mb-0">{cert.institution}</p>
                                    <p className="text-sm text-gray-500 mb-0">{cert.duration}</p>
                                  </div>
                                  <div className="action-btn">
                                    <a href={cert.link} target="_blank" rel="noreferrer" className="inline-flex items-center bg-[#ffa11c] text-gray-800 py-2 px-3 rounded hover:bg-[#fdc] transition">
                                      <FaExternalLinkAlt className="mr-2" /> {t('knowledge.certifications.viewCertificate')}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                      );
                    })}
                  </Slider></div>
                  <button type="button" onClick={next} aria-label="Siguiente" className="cert-nav-button right absolute top-0 bottom-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 hover:shadow-lg transition" style={{ width: '48px' }}>
                    <FaChevronRight />
                  </button>
                  </>
                );
              })()}
            </div>
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

        {/* Contenido de Front-end */}
        <section id="content4" className={`tab-content ${activeTab === 'tab4' ? 'show' : ''} fixed-height`}>
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
        <section id="content5" className={`tab-content ${activeTab === 'tab5' ? 'show' : ''} fixed-height`}>
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
