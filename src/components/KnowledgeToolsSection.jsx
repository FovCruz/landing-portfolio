import React from 'react';
import Slider from 'react-infinite-logo-slider';
import './conocimientos.css'; // Asegúrate de incluir los estilos


const KnowledgeSection = () => {
  const icons = [
    { src: '/iconos/php.svg', alt: 'php' },
    { src: '/iconos/django-community.svg', alt: 'django' },
    { src: '/iconos/html5.svg', alt: 'HTML5' },
    { src: '/iconos/css.svg', alt: 'CSS3' },
    { src: '/iconos/bootstrap(2).svg', alt: 'Bootstrap' },
    { src: '/iconos/cloudflare.svg', alt: 'cloudflare' },
    { src: '/iconos/eclipse.svg', alt: 'eclipse' },
    { src: '/iconos/figma.svg', alt: 'figma' },
    { src: '/iconos/FileZilla.svg', alt: 'FileZilla' },
    { src: '/iconos/mongodb-icon-2.svg', alt: 'mongodb' },
    { src: '/iconos/react.svg', alt: 'React' },
    { src: '/iconos/sass.svg', alt: 'sass' },
    { src: '/iconos/Slack.svg', alt: 'Slack' },
    { src: '/iconos/SQLite(1).svg', alt: 'SQLite' },
    { src: '/iconos/pycharm.svg', alt: 'pycharm' },
    { src: '/iconos/python(1).svg', alt: 'python' },
    { src: '/iconos/Powershell.svg', alt: 'Powershell' },
    { src: '/iconos/PostgresSQL.svg', alt: 'postgresql' },
    { src: '/iconos/npm.svg', alt: 'npm' },
    { src: '/iconos/mysql.svg', alt: 'MySQL' },
    { src: '/iconos/Google_Colaboratory.svg', alt: 'Google_Colaboratory' },
    { src: '/iconos/javascript-1.svg', alt: 'JavaScript' },
    { src: '/iconos/Jupyter.svg', alt: 'Jupyter' },
    { src: '/iconos/linux.svg', alt: 'Linux' },
    { src: '/iconos/vscode.svg', alt: 'VSCode' },
    { src: '/iconos/microsoft.svg', alt: 'microsoft' },
    { src: '/iconos/wordpress.svg', alt: 'WordPress' },
    { src: '/iconos/visual-studio.svg', alt: 'vs' },
    { src: '/iconos/tailwindcss.svg', alt: 'TailwindCSS' },
    { src: '/iconos/microsoft-sql-server-1.svg', alt: 'sqlserver' },
    { src: '/iconos/sublimetext.svg', alt: 'sublimetext' },
    { src: '/iconos/git.svg', alt: 'Git' },
    { src: '/iconos/github.svg', alt: 'GitHub' },
    { src: '/iconos/Figma.svg', alt: 'Figma' },
    { src: '/iconos/Trello.svg', alt: 'Trello' },
    { src: '/iconos/aws.svg', alt: 'AWS' },
    { src: '/iconos/SQL Developer.svg', alt: 'SQL Developer' },
    { src: '/iconos/DBeaver.svg', alt: 'DBeaver' },
    { src: '/iconos/Anaconda.svg', alt: 'Anaconda' },
  ];

  return (
    <section id="conocimientos" className="h-screen bg-gray-200 dark:bg-gray-700 flex justify-center items-center text-center">
      <div className="max-w-7xl mx-auto relative w-full fade-effect">
        {/* Título centrado */}
        <h2 className="text-3xl font-bold mb-20 mt-10 dark:text-white">Mis Conocimientos</h2>

        {/* Fila 1 - Deslizando hacia la izquierda */}
        <div className="mb-8 fade-effect">
          <Slider
            width="100px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
          >
            {icons.slice(0, icons.length / 2).map((icon, index) => (
              <Slider.Slide key={index}>
                <img src={icon.src} alt={icon.alt} className="w-20 h-20" /> {/* Ajuste del tamaño */}
              </Slider.Slide>
            ))}
          </Slider>
        </div>

        {/* Fila 2 - Deslizando hacia la derecha */}
        <div className="fade-effect">
          <Slider
            width="100px"
            duration={40}
            toRight={false} // Deslizando hacia la derecha
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

