import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SectionWrapper from './SectionWrapper'; // Usamos el SectionWrapper para mantener la consistencia
// import '../styles/Accordion.css';

const ExperienceSection = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t('experience.ineTitle'),
      company: t('experience.ineCompany'),
      dates: t('experience.ineDates'),
      locationType: t('experience.hybrid'),
      description: (
        <>
          {t('experience.ineDescription')} <span className="text-light">SLA</span> {t('experience.and')} <span className="text-light">ITIL</span>.
        </>
      ),
    },
    {
      title: t('experience.tallerTitle'),
      company: t('experience.tallerCompany'),
      dates: t('experience.tallerDates'),
      locationType: t('experience.hybrid'),
      description: (
        <>
          {t('experience.tallerDescription')} <span className="text-light">WordPress</span> y <span className="text-light">PHP</span>.
        </>
      ),
    },
    {
      title: t('experience.ccTitle'),
      company: t('experience.ccCompany'),
      dates: t('experience.ccDates'),
      locationType: t('experience.remote'),
      description: (
        <>
          {t('experience.ccDescription')} <span className="text-light">Mailrelay</span>, {t('experience.and')} <span className="text-light">cPanel</span>.
        </>
      ),
    },
    {
      title: t('experience.zekeTitle'),
      company: t('experience.zekeCompany'),
      dates: t('experience.zekeDates'),
      locationType: t('experience.hybrid'),
      description: (
        <>
          {t('experience.zekeDescription')} <span className="text-light">Nagios</span>, <span className="text-light">GLPI</span>, <span className="text-light">Oracle SQL Developer</span> {t('experience.and')} <span className="text-light">Putty</span>.
        </>
      ),
    },
    {
      title: t('experience.andresBelloTitle'),
      company: t('experience.andresBelloCompany'),
      dates: t('experience.andresBelloDates'),
      locationType: t('experience.presencial'),
      description: (
        <>
          {t('experience.andresBelloDescription')}
        </>
      ),
    },
  ];

  const [selectedExperience, setSelectedExperience] = useState(null);
  const [hoveredExperience, setHoveredExperience] = useState(null);
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [bounceIndex, setBounceIndex] = useState(null);
  const [showImage, setShowImage] = useState(true);
  const [isMouseOverButtons, setIsMouseOverButtons] = useState(false);

  const handleSelectExperience = (index) => {
    setSelectedExperience(experiences[index]);
    setActiveButtonIndex(index);
    setBounceIndex(null);
    setShowImage(false);
    setHoveredExperience(null);
  };

  const handleMouseLeaveContainer = () => {
    setShowImage(true);
    setSelectedExperience(null);
    setActiveButtonIndex(null);
    setHoveredExperience(null);
  };

  const handleMouseEnterButtons = () => {
    setIsMouseOverButtons(true);
    setBounceIndex(null);
  };

  const handleMouseLeaveButtons = () => {
    setIsMouseOverButtons(false);
    if (!selectedExperience) {
      const randomIndex = Math.floor(Math.random() * experiences.length);
      setBounceIndex(randomIndex);
    }
  };

  const handleHoverExperience = (index) => {
    if (!selectedExperience) {
      setHoveredExperience(experiences[index]);
    }
  };

  const handleMouseLeaveExperience = () => {
    setHoveredExperience(null);
  };

  useEffect(() => {
    if (!selectedExperience && !isMouseOverButtons && showImage) {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * experiences.length);
        setBounceIndex(randomIndex);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [selectedExperience, experiences.length, showImage, isMouseOverButtons]);

  const displayedExperience = hoveredExperience || selectedExperience;

  return (
    <SectionWrapper id="experiencia" title={t('experience.title')}>
      <p className="text-left text-gray-700 dark:text-gray-300 my-5">
        {t('experience.intro')} {/* Descripción traducida */}
      </p>
      <div className="flex flex-col md:flex-row w-full h-full justify-center items-center" onMouseLeave={handleMouseLeaveContainer}>
        <div
          className="w-full md:w-[45%] p-6 overflow-y-auto flex relative"
          onMouseEnter={handleMouseEnterButtons}
          onMouseLeave={handleMouseLeaveButtons}
        >
          <ol className="timeline-container border-l-2 border-gray-900 dark:border-[#ffddcc]">
            {experiences.map((exp, index) => (
              <li key={index} className="timeline-item">
                <div className={`timeline-marker ${activeButtonIndex === index ? 'bg-primary-text' : 'bg-primary-text'} ${bounceIndex === index ? 'bg-[#ff7800]' : ''}`}></div>
              </li>
            ))}
          </ol>

          <div className="accordion-grid mobile-margin">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`
                  text-left 
                  font-light
                  border border-gray-400 dark:border-secondary 
                  dark:text-gray-400 
                  mb-3 py-4 px-2 sm:px-3 md:px-4 lg:px-5 
                  rounded-lg 
                  transition-all duration-300 
                  cursor-pointer
                  ${activeButtonIndex === index || bounceIndex === index ? 'bg-[#f17e04] dark:bg-[#f17e04] text-white ' : 'bg-transparent text-gray-900 dark:bg-transparent dark:text-white'}
                  ${bounceIndex === index ? 'animate-buzz bg-gray-900 text-white dark:bg-[#ffddcc] dark:text-gray-900' : ''} 
                  hover:bg-gray-900 hover:text-white dark:hover:bg-[#ffddcc] dark:hover:text-gray-900`}
                onClick={() => handleSelectExperience(index)}
                onMouseEnter={() => handleHoverExperience(index)}
                onMouseLeave={handleMouseLeaveExperience}
              >
                {exp.title}
              </div>
            ))}
          </div>
        </div>

        <div
          className="experience-right w-full md:w-[70%] p-0 rounded-lg flex justify-center"
          style={{ height: '310px' }}
        >
          {displayedExperience ? (
            <div className="experience-detail text-left overflow-y-auto h-full p-4 dark:text-gray-300">
              <h3 className="text-2xl font-semibold mb-2">
                {displayedExperience.title}
              </h3>
              <p className="text-lg mb-2">
                <strong>{t('experience.companyLabel')}:</strong> {displayedExperience.company}
              </p>
              <p className="text-lg mb-2">
                <strong>{t('experience.datesLabel')}:</strong> {displayedExperience.dates}
              </p>
              <hr className="my-4 border-gray-400" />
              <div className="mt-4">
                {displayedExperience.description}
              </div>
            </div>
          ) : (
            showImage && (
              <div className="experience-image-placeholder rounded-lg max-w-[33rem] mx-auto">
                <img
                  src={`${process.env.PUBLIC_URL}/exp_new.gif`}
                  alt="Placeholder"
                  className="w-full h-full object-contain"
                />
              </div>
            )
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;