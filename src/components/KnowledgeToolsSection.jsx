import React from 'react';
import Slider from 'react-infinite-logo-slider';
import { useTranslation } from 'react-i18next';
import SectionWrapper from './SectionWrapper'; // Usamos el wrapper para la estructura común
import '../styles/conocimientos.css'; // Archivo de estilos específicos

const KnowledgeSection = () => {
  const { t } = useTranslation(); // Hook para las traducciones

  // Lista de íconos de las tecnologías y herramientas
  const icons = [
    { src: `${process.env.PUBLIC_URL}/iconos/php.svg`, alt: 'PHP' },
    { src: `${process.env.PUBLIC_URL}/iconos/django-community.svg`, alt: 'Django' },
    { src: `${process.env.PUBLIC_URL}/iconos/html5.svg`, alt: 'HTML5' },
    { src: `${process.env.PUBLIC_URL}/iconos/css.svg`, alt: 'CSS3' },
    { src: `${process.env.PUBLIC_URL}/iconos/Bootstrap(2).svg`, alt: 'Bootstrap' },
    { src: `${process.env.PUBLIC_URL}/iconos/cloudflare.svg`, alt: 'Cloudflare' },
    { src: `${process.env.PUBLIC_URL}/iconos/eclipse.svg`, alt: 'Eclipse' },
    { src: `${process.env.PUBLIC_URL}/iconos/figma.svg`, alt: 'Figma' },
    { src: `${process.env.PUBLIC_URL}/iconos/FileZilla.svg`, alt: 'FileZilla' },
    { src: `${process.env.PUBLIC_URL}/iconos/mongodb-icon-2.svg`, alt: 'MongoDB' },
    { src: `${process.env.PUBLIC_URL}/iconos/react.svg`, alt: 'React' },
    { src: `${process.env.PUBLIC_URL}/iconos/sass.svg`, alt: 'Sass' },
    { src: `${process.env.PUBLIC_URL}/iconos/Slack.svg`, alt: 'Slack' },
    { src: `${process.env.PUBLIC_URL}/iconos/SQLite(1).svg`, alt: 'SQLite' },
    { src: `${process.env.PUBLIC_URL}/iconos/pycharm.svg`, alt: 'PyCharm' },
    { src: `${process.env.PUBLIC_URL}/iconos/python(1).svg`, alt: 'Python' },
    { src: `${process.env.PUBLIC_URL}/iconos/Powershell.svg`, alt: 'Powershell' },
    { src: `${process.env.PUBLIC_URL}/iconos/PostgresSQL.svg`, alt: 'PostgreSQL' },
    { src: `${process.env.PUBLIC_URL}/iconos/npm.svg`, alt: 'npm' },
    { src: `${process.env.PUBLIC_URL}/iconos/mysql.svg`, alt: 'MySQL' },
    { src: `${process.env.PUBLIC_URL}/iconos/Google_Colaboratory.svg`, alt: 'Google Colaboratory' },
    { src: `${process.env.PUBLIC_URL}/iconos/javascript-1.svg`, alt: 'JavaScript' },
    { src: `${process.env.PUBLIC_URL}/iconos/Jupyter.svg`, alt: 'Jupyter' },
    { src: `${process.env.PUBLIC_URL}/iconos/linux.svg`, alt: 'Linux' },
    { src: `${process.env.PUBLIC_URL}/iconos/vscode.svg`, alt: 'VSCode' },
    { src: `${process.env.PUBLIC_URL}/iconos/microsoft.svg`, alt: 'Microsoft' },
    { src: `${process.env.PUBLIC_URL}/iconos/wordpress.svg`, alt: 'WordPress' },
    { src: `${process.env.PUBLIC_URL}/iconos/visual-studio.svg`, alt: 'Visual Studio' },
    { src: `${process.env.PUBLIC_URL}/iconos/tailwindcss.svg`, alt: 'TailwindCSS' },
    { src: `${process.env.PUBLIC_URL}/iconos/microsoft-sql-server-1.svg`, alt: 'SQL Server' },
    { src: `${process.env.PUBLIC_URL}/iconos/sublimetext.svg`, alt: 'Sublime Text' },
    { src: `${process.env.PUBLIC_URL}/iconos/git.svg`, alt: 'Git' },
    { src: `${process.env.PUBLIC_URL}/iconos/github.svg`, alt: 'GitHub' },
    { src: `${process.env.PUBLIC_URL}/iconos/Figma.svg`, alt: 'Figma' },
    { src: `${process.env.PUBLIC_URL}/iconos/Trello.svg`, alt: 'Trello' },
    { src: `${process.env.PUBLIC_URL}/iconos/aws.svg`, alt: 'AWS' },
    { src: `${process.env.PUBLIC_URL}/iconos/SQL Developer.svg`, alt: 'SQL Developer' },
    { src: `${process.env.PUBLIC_URL}/iconos/DBeaver.svg`, alt: 'DBeaver' },
    { src: `${process.env.PUBLIC_URL}/iconos/Anaconda.svg`, alt: 'Anaconda' },
  ];

  return (
    <SectionWrapper id="conocimientos" title={t('knowledge.title')}>
      {/* Descripción traducida */}
      <p className="section-description text-lg text-gray-700 dark:text-gray-300 mb-10">
        {t('knowledge.description')} 
        <span className="font-bold"> React</span>, 
        <span className="font-bold"> MongoDB</span>, 
        <span className="font-bold"> Node</span>, 
        <span className="font-bold"> Tailwind</span>.
      </p>

      {/* Primer slider de iconos */}
      <div className="mb-8 fade-effect">
        <Slider width="100px" duration={50} pauseOnHover={true} blurBorders={false}>
          {icons.slice(0, Math.ceil(icons.length / 2)).map((icon, index) => (
            <Slider.Slide key={index}>
              <img src={icon.src} alt={icon.alt} className="w-20 h-20" loading="lazy" />
            </Slider.Slide>
          ))}
        </Slider>
      </div>

      {/* Segundo slider de iconos */}
      <div className="fade-effect">
        <Slider width="100px" duration={30} toRight={false} pauseOnHover={true} blurBorders={false}>
          {icons.slice(Math.ceil(icons.length / 2)).map((icon, index) => (
            <Slider.Slide key={index}>
              <img src={icon.src} alt={icon.alt} className="w-20 h-20" loading="lazy" />
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </SectionWrapper>
  );
};

export default KnowledgeSection;
