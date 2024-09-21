import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Accordion.css';

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
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [bounceIndex, setBounceIndex] = useState(null);
  const [showImage, setShowImage] = useState(true);
  const [isMouseOverButtons, setIsMouseOverButtons] = useState(false);

  const handleSelectExperience = (index) => {
    setSelectedExperience(experiences[index]);
    setActiveButtonIndex(index);
    setBounceIndex(null);
    setShowImage(false);
  };

  const handleMouseLeaveContainer = () => {
    setShowImage(true);
    setSelectedExperience(null);
    setActiveButtonIndex(null);
  };

  const handleMouseEnterButtons = () => {
    setIsMouseOverButtons(true);
    setBounceIndex(null);
  };

  const handleMouseLeaveButtons = () => {
    setIsMouseOverButtons(false);
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

  return (
    <section
      id="experiencia"
      className="section min-h-screen flex items-center justify-center text-center relative dark:bg-dark-900 py-12"
      onMouseLeave={handleMouseLeaveContainer}
    >
      <div className="section-content max-w-6xl mx-auto px-4 lg:px-8 py-12">
        <h1 className={`mb-4 text-2xl font-medium dark:text-[#ffddcc] sm:text-3xl text-gray-900 text-left `}>
          {t('experience.title')}
        </h1>

        <hr className="border-1 border-gray-900 dark:border-[#ffddcc] my-4 mb-8" />

        <div className="flex flex-col md:flex-row w-full">
          <div
            className="w-full md:w-[45%] p-6 overflow-y-auto flex relative"
            onMouseEnter={handleMouseEnterButtons}
            onMouseLeave={handleMouseLeaveButtons}
          >
            <ol className="timeline-container border-l-2  dark:border-[#ffddcc]">
              {experiences.map((exp, index) => (
                <li key={index} className="timeline-item">
                  <div className={`timeline-marker ${activeButtonIndex === index ? 'bg-[#ffddcc]' : 'bg-gray-400'}`}></div>
                </li>
              ))}
            </ol>

            <div className="accordion-grid ml-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`text-left border-gray-900 mb-3 font-normal py-2 px-2 sm:px-3 md:px-4 lg:px-5 rounded-lg border transition-all duration-300 dark:border-[#ffddcc] dark:hover:bg-[#ffddcc] dark:hover:text-gray-900 hover:bg-gray-900 hover:text-[#ffddcc] ${(activeButtonIndex === index || bounceIndex === index) ? 'dark:bg-[#ffddcc] dark:text-gray-900 bg-gray-900 text-[#ffddcc]' : ''} ${bounceIndex === index ? 'animate-buzz' : ''}`}
                  onClick={() => handleSelectExperience(index)}
                  style={{ width: '100%', minHeight: '60px', cursor: 'pointer' }}
                >
                  {exp.title}
                </div>
              ))}
            </div>
          </div>

          <div
            className="experience-right w-full md:w-[55%] p-6 border border-gray-900 dark:border-[#ffddcc] rounded-lg shadow-lg flex flex-col justify-center items-center"
            style={{ height: '400px' }}
          >
            {selectedExperience ? (
              <div className="experience-detail text-left overflow-y-auto h-full">
                <h3 className="text-2xl font-semibold mb-4 dark:text-[#ffddcc] text-gray-900">
                  {selectedExperience.title}
                </h3>
                <p className="text-lg dark:text-[#ffddcc] mb-2">
                  <strong>{t('experience.companyLabel')}:</strong> {selectedExperience.company}
                </p>
                <p className="text-lg dark:text-[#ffddcc] mb-2">
                  <strong>{t('experience.datesLabel')}:</strong> {selectedExperience.dates}
                </p>
                <div className="mt-4 dark:text-[#ffddcc]">
                  {selectedExperience.description}
                </div>
              </div>
            ) : (
              showImage && (
                <div className="experience-image-placeholder rounded-lg overflow-hidden">
                  <img
                    src={`${process.env.PUBLIC_URL}/exp_new.gif`}
                    alt="Placeholder"
                    className="w-auto h-auto object-cover"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
