import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaFileDownload  } from 'react-icons/fa';
import { BsFiletypePdf } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';  // Importa SweetAlert2
import withReactContent from 'sweetalert2-react-content'; // Para usar React en los popups
// import '../styles/contact.css';

const ContactSection = () => {
  const { t } = useTranslation();
  const MySwal = withReactContent(Swal);  // Configurar SweetAlert2 para usar con React

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Función para validar el correo electrónico
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el formulario antes de enviar
    if (!formData.name) {
      MySwal.fire({
        title: 'Error',
        text: 'Por favor, ingresa tu nombre.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    if (!formData.email) {
      MySwal.fire({
        title: 'Error',
        text: 'Por favor, ingresa tu correo electrónico.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      MySwal.fire({
        title: 'Error',
        text: 'Por favor, ingresa un correo electrónico válido (ejemplo@dominio.com).',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    if (!formData.message) {
      MySwal.fire({
        title: 'Error',
        text: 'Por favor, ingresa un mensaje.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    // Detectar el tema del sitio (claro u oscuro)
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Crear un objeto que coincida con las variables del template en EmailJS
    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // Configura EmailJS
    emailjs.send('service_citpnab', 'template_qojtbji', emailParams, 'Wa5ifEqnS-Rath25z')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // Mostrar el popup con SweetAlert2
        MySwal.fire({
          title: '¡Muchas gracias por enviarme tu mensaje!',
          html: '<p>Responderé tan pronto como sea posible 😊</p><div class="emoji">😊</div>',  // El emoji con movimiento
          icon: 'success',
          showConfirmButton: false,
          timer: 5000,
          background: isDarkMode ? '#374151' : '#fff',  // bg-gray-700 (hex: #374151) para oscuro
          color: isDarkMode ? '#D1D5DB' : '#000',  // text-gray-300 (hex: #D1D5DB) para oscuro
        });
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.error('FAILED...', error);
        MySwal.fire({
          title: 'Error',
          text: 'Hubo un problema al enviar el mensaje. Intenta de nuevo más tarde.',
          icon: 'error',
          background: isDarkMode ? '#374151' : '#fff',  // bg-gray-700 para oscuro
          color: isDarkMode ? '#D1D5DB' : '#000',  // text-gray-300 para oscuro
        });
      });
  };

  // Clases comunes para textos y botones
  const commonTextClasses = 'dark:text-[#D1D5DB] text-gray-900';  // text-gray-300 en dark
  const commonButtonClasses = 'font-light font-normal py-2 px-2 sm:px-3 md:px-4 lg:px-5 rounded-lg border transition-all duration-300';
  const buttonHoverClasses = 'dark:hover:bg-[#ffddcc] dark:hover:text-gray-900 hover:bg-gray-900 hover:text-white';

  return (
    <section id="contacto" className="section body-font relative text-gray-400" aria-labelledby="contacto-title">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 id="contacto-title" className={`className="title-font text-2xl font-medium dark:text-secondary sm:text-3xl text-center mb-6 ${commonTextClasses}`}>
            {t('contact.title')} {/* Título traducido */}
          </h1>

          <p className="mx-auto text-base leading-relaxed lg:w-2/3 text-gray-700 dark:text-gray-300">
            {t('contact.description')} {/* Descripción traducida */}
          </p>
        </div>

        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <div className="-m-2 flex flex-wrap">
            {/* Formulario */}
            <form className="w-full flex flex-wrap" onSubmit={handleSubmit} noValidate>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="peer w-full rounded border border-gray-700 bg-transparent dark:bg-gray-800 py-1 px-3 text-base leading-8 text-gray-900 dark:text-gray-300 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-[#f8d7c7] focus:bg-transparent focus:ring-0"
                    placeholder={t('contact.formName')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-[#f8d7c7] transition-all 
                      peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                      peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#f8d7c7]"
                  >
                    {t('contact.formName')}
                  </label>
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="peer w-full rounded border border-gray-700 bg-transparent dark:bg-gray-800 py-1 px-3 text-base leading-8 text-gray-900 dark:text-gray-300 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-[#f8d7c7] focus:bg-transparent focus:ring-0"
                    placeholder={t('contact.formEmail')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-[#f8d7c7] transition-all 
                      peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                      peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#f8d7c7]"
                  >
                    {t('contact.formEmail')}
                  </label>
                </div>
              </div>
              <div className="mt-4 w-full p-2">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    className="peer h-32 w-full resize-none rounded border border-gray-700 bg-transparent dark:bg-gray-800 py-1 px-3 text-base leading-6 text-gray-900 dark:text-gray-300 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-[#f8d7c7] focus:bg-transparent focus:ring-0"
                    placeholder={t('contact.formMessage')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-[#f8d7c7] transition-all 
                      peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                      peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-[#f8d7c7]"
                  >
                    {t('contact.formMessage')}
                  </label>
                </div>
              </div>
              <div className="w-full p-2 flex justify-center">
                <button
                  type="submit"
                  className={`${commonButtonClasses} dark:border-[#ffddcc] border-gray-900 dark:text-[#ffddcc] text-gray-900 ${buttonHoverClasses} text-center`}
                >
                  {t('contact.formSubmit')}
                </button>
              </div>
            </form>

            <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
              <a href="mailto:fov.cruz@gmail.com" className="text-[#f8d7c7] hover:underline">
                fov.cruz@gmail.com
              </a>
              <span className="inline-flex">
                <a href="https://github.com/FovCruz" className="text-gray-500 hover:text-white mx-2" aria-label="Facebook">
                  <FaGithub className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/fabian-osvaldo-cruz/" className="text-gray-500 hover:text-white mx-2" aria-label="Twitter">
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
                <a href={`${process.env.PUBLIC_URL}/CV_Fabian_Valencia_formato_ATS_.docx`} className="text-gray-500 hover:text-white mx-2" download aria-label="Descargar CV ATS ">
                  <FaFileDownload className="h-5 w-5" />
                </a>
                <a href={`${process.env.PUBLIC_URL}/CV-Fabian-Valencia-C-09-2024-mod09-3.pdf`} className="text-gray-500 hover:text-white mx-2" download aria-label="Descargar CV ATS ">
                  <BsFiletypePdf className="h-5 w-5" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;