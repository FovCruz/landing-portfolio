import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaFileDownload } from 'react-icons/fa';
import { BsFiletypePdf } from "react-icons/bs";
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ContactSection = () => {
  const { t } = useTranslation();
  const MySwal = withReactContent(Swal);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name) {
      MySwal.fire({ title: 'Error', text: 'Ingresa tu nombre', icon: 'error' });
      return;
    }
    if (!formData.email || !validateEmail(formData.email)) {
      MySwal.fire({ title: 'Error', text: 'Ingresa un email válido', icon: 'error' });
      return;
    }
    if (!formData.message) {
      MySwal.fire({ title: 'Error', text: 'Escribe un mensaje', icon: 'error' });
      return;
    }

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send('service_citpnab', 'template_qojtbji', emailParams, 'Wa5ifEqnS-Rath25z')
      .then(() => {
        MySwal.fire({
          title: '¡Muchas gracias por enviarme tu mensaje!',
          html: '<p>Responderé tan pronto como sea posible 😊</p>',
          icon: 'success',
          showConfirmButton: false,
          timer: 4000,
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        MySwal.fire({ title: 'Error', text: 'No se pudo enviar', icon: 'error' });
      });
  };

  return (
    <section id="contacto" className="body-font relative text-gray-400">
      <div className="container mx-auto px-5 py-24">

        <div className="mb-12 flex w-full flex-col text-center">
          <h1
            id="contacto-title"
            className="title-font text-2xl font-medium sm:text-3xl text-center mb-6 text-gray-900 dark:text-gray-300"
          >
            {t('contact.title')}
          </h1>

          <p className="mx-auto text-base leading-relaxed lg:w-2/3 text-gray-700 dark:text-gray-300">
            {t('contact.description')}
          </p>
        </div>

        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <form className="-m-2 flex flex-wrap w-full" onSubmit={handleSubmit} noValidate>

            <div className="w-1/2 p-2">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-gray-700 bg-transparent dark:bg-gray-800 py-1 px-3 text-gray-900 dark:text-gray-300"
                placeholder={t('contact.formName')}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-1/2 p-2">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded border border-gray-700 bg-transparent dark:bg-gray-800 py-1 px-3 text-gray-900 dark:text-gray-300"
                placeholder={t('contact.formEmail')}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full p-2 mt-4">
              <textarea
                id="message"
                name="message"
                className="h-32 w-full resize-none rounded border border-gray-700 bg-transparent dark:bg-gray-800 py-1 px-3 text-gray-900 dark:text-gray-300"
                placeholder={t('contact.formMessage')}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full p-2 flex justify-center">
              <button
                type="submit"
                className="py-2 px-4 rounded-lg border border-gray-900 dark:border-[#ffddcc] text-gray-900 dark:text-[#ffddcc] hover:bg-gray-900 hover:text-white"
              >
                {t('contact.formSubmit')}
              </button>
            </div>

          </form>

          {/* Footer contacto + links */}
          <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
            <a href="mailto:fov.cruz@gmail.com" className="text-[#f8d7c7] hover:underline text-gray-800 dark:text-gray-300">
              fov.cruz@gmail.com
            </a>

            <span className="inline-flex mt-4 gap-3 justify-center w-full">
              <a href="https://github.com/FovCruz" className="text-gray-300 hover:text-white" aria-label="GitHub">
                <FaGithub className="h-5 w-5" />
              </a>

              <a href="https://www.linkedin.com/in/fabian-osvaldo-cruz/" className="text-gray-300 hover:text-white" aria-label="LinkedIn">
                <FaLinkedinIn className="h-5 w-5" />
              </a>

              {/* Descarga CV PDF actualizado */}
              <a
                href={`${base}/assets/Currículum-12-2025-act.pdf`}
                className="text-gray-300 hover:text-white"
                download
                aria-label="Descargar CV PDF"
              >
                <FaFileDownload className="h-5 w-5" />
              </a>

              {/* CV directo desde assets en el proyecto */}
              <a
                href={`${base}/assets/Currículum-12-2025-act.pdf`}
                className="text-gray-300 hover:text-white"
                download
                aria-label="Descargar Currículum 2025"
              >
                <BsFiletypePdf className="h-5 w-5" />
              </a>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
