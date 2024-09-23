import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Importa el hook de traducción

const ContactSection = () => {
  const { t } = useTranslation(); // Hook para las traducciones

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar el envío del formulario
    setFormStatus(t('contact.formStatusSuccess'));
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  // Clases comunes para textos y botones
  const commonTextClasses = 'dark:text-[#ffddcc] text-gray-900';
  const commonButtonClasses = 'font-light font-normal py-2 px-2 sm:px-3 md:px-4 lg:px-5 rounded-lg border transition-all duration-300';
  const buttonHoverClasses = 'dark:hover:bg-[#ffddcc] dark:hover:text-gray-900 hover:bg-gray-900 hover:text-white';

  return (
    <section id="contacto" className="section body-font relative text-gray-400" aria-labelledby="contacto-title">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 id="contacto-title" className={`title-font mb-4 text-2xl font-medium text-white sm:text-3xl ${commonTextClasses}`}>
            {t('contact.title')} {/* Título traducido */}
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
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
                    className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                    placeholder={t('contact.formName')} // Nombre traducido
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all 
                      peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                      peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                  >
                    {t('contact.formName')} {/* Label traducido */}
                  </label>
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                    placeholder={t('contact.formEmail')} // Correo traducido
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all 
                      peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                      peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                  >
                    {t('contact.formEmail')} {/* Label traducido */}
                  </label>
                </div>
              </div>
              <div className="mt-4 w-full p-2">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                    placeholder={t('contact.formMessage')} // Mensaje traducido
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all 
                      peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                      peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                  >
                    {t('contact.formMessage')} {/* Label traducido */}
                  </label>
                </div>
              </div>
              <div className="w-full p-2 flex justify-center">
                <button
                  type="submit"
                  className={`${commonButtonClasses} dark:border-[#ffddcc] border-gray-900 dark:text-[#ffddcc] text-gray-900 ${buttonHoverClasses} text-center`}
                >
                  {t('contact.formSubmit')} {/* Botón traducido */}
                </button>
              </div>

              {formStatus && (
                <div className="w-full p-2 text-center text-green-500">
                  {formStatus}
                </div>
              )}
            </form>

            {/* Pie de página */}
            <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
              <a href="mailto:fov.cruz@gmail.com" className="text-indigo-400 hover:underline">
                fov.cruz@gmail.com
              </a>
              <span className="inline-flex">
                <a href="https://facebook.com/tu_perfil" className="text-gray-500 hover:text-white mx-2" aria-label="Facebook">
                  <FaFacebookF className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/tu_usuario" className="text-gray-500 hover:text-white mx-2" aria-label="Twitter">
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a href="https://instagram.com/tu_usuario" className="text-gray-500 hover:text-white mx-2" aria-label="Instagram">
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/in/tu_usuario" className="text-gray-500 hover:text-white mx-2" aria-label="LinkedIn">
                  <FaLinkedinIn className="h-5 w-5" />
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
