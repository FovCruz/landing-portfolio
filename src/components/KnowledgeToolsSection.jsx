import React from 'react';
import Slider from 'react-infinite-logo-slider';
import './conocimientos.css';

const KnowledgeSection = () => {
  const icons = [
    { src: `${process.env.PUBLIC_URL}/iconos/php.svg`, alt: 'php' },
    { src: `${process.env.PUBLIC_URL}/iconos/django-community.svg`, alt: 'django' },
    { src: `${process.env.PUBLIC_URL}/iconos/html5.svg`, alt: 'HTML5' },
    { src: `${process.env.PUBLIC_URL}/iconos/css.svg`, alt: 'CSS3' },
    { src: `${process.env.PUBLIC_URL}/iconos/Bootstrap(2).svg`, alt: 'Bootstrap' },
    { src: `${process.env.PUBLIC_URL}/iconos/cloudflare.svg`, alt: 'cloudflare' },
    { src: `${process.env.PUBLIC_URL}/iconos/eclipse.svg`, alt: 'eclipse' },
    { src: `${process.env.PUBLIC_URL}/iconos/figma.svg`, alt: 'figma' },
    { src: `${process.env.PUBLIC_URL}/iconos/FileZilla.svg`, alt: 'FileZilla' },
    { src: `${process.env.PUBLIC_URL}/iconos/mongodb-icon-2.svg`, alt: 'mongodb' },
    { src: `${process.env.PUBLIC_URL}/iconos/react.svg`, alt: 'React' },
    { src: `${process.env.PUBLIC_URL}/iconos/sass.svg`, alt: 'sass' },
    { src: `${process.env.PUBLIC_URL}/iconos/Slack.svg`, alt: 'Slack' },
    { src: `${process.env.PUBLIC_URL}/iconos/SQLite(1).svg`, alt: 'SQLite' },
    { src: `${process.env.PUBLIC_URL}/iconos/pycharm.svg`, alt: 'pycharm' },
    { src: `${process.env.PUBLIC_URL}/iconos/python(1).svg`, alt: 'python' },
    { src: `${process.env.PUBLIC_URL}/iconos/Powershell.svg`, alt: 'Powershell' },
    { src: `${process.env.PUBLIC_URL}/iconos/PostgresSQL.svg`, alt: 'postgresql' },
    { src: `${process.env.PUBLIC_URL}/iconos/npm.svg`, alt: 'npm' },
    { src: `${process.env.PUBLIC_URL}/iconos/mysql.svg`, alt: 'MySQL' },
    { src: `${process.env.PUBLIC_URL}/iconos/Google_Colaboratory.svg`, alt: 'Google_Colaboratory' },
    { src: `${process.env.PUBLIC_URL}/iconos/javascript-1.svg`, alt: 'JavaScript' },
    { src: `${process.env.PUBLIC_URL}/iconos/Jupyter.svg`, alt: 'Jupyter' },
    { src: `${process.env.PUBLIC_URL}/iconos/linux.svg`, alt: 'Linux' },
    { src: `${process.env.PUBLIC_URL}/iconos/vscode.svg`, alt: 'VSCode' },
    { src: `${process.env.PUBLIC_URL}/iconos/microsoft.svg`, alt: 'microsoft' },
    { src: `${process.env.PUBLIC_URL}/iconos/wordpress.svg`, alt: 'WordPress' },
    { src: `${process.env.PUBLIC_URL}/iconos/visual-studio.svg`, alt: 'vs' },
    { src: `${process.env.PUBLIC_URL}/iconos/tailwindcss.svg`, alt: 'TailwindCSS' },
    { src: `${process.env.PUBLIC_URL}/iconos/microsoft-sql-server-1.svg`, alt: 'sqlserver' },
    { src: `${process.env.PUBLIC_URL}/iconos/sublimetext.svg`, alt: 'sublimetext' },
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
    <section id="conocimientos" className="section bg-gray-200 dark:bg-gray-700">
      <div className="section-content">
        <h2 className="section-title dark:text-white">Tecnologías & Herramientas</h2>
        <hr />
        <p className="section-description text-lg text-gray-700 dark:text-gray-300 mb-10;">
          Lenguajes, herramientas y utilizados con mayor o menor frecuencia en distintos proyectos laborales, personales y educacionales.
          Actualmente estoy enfocado en el aprendizaje continuo de <span className="text-light">React</span>, 
          <span className="text-light"> MongoDB</span>, <span className="text-light">Node</span>, y 
          <span className="text-light"> Tailwind</span>.
        </p>
        <div className="mb-8 fade-effect">
          <Slider
            width="100px"
            duration={50}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
          >
            {icons.slice(0, icons.length / 2).map((icon, index) => (
              <Slider.Slide key={index}>
                <img src={icon.src} alt={icon.alt} className="w-20 h-20" />
              </Slider.Slide>
            ))}
          </Slider>
        </div>

        <div className="fade-effect">
          <Slider
            width="100px"
            duration={30}
            toRight={false}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
          >
            {icons.slice(icons.length / 2).map((icon, index) => (
              <Slider.Slide key={index}>
                <img src={icon.src} alt={icon.alt} className="w-20 h-20" />
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
