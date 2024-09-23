import React from 'react';

const SectionWrapper = ({ id, title, children }) => {
  return (
    <section id={id} className="section py-12" aria-labelledby={`${id}-title`}>
      <div className="section-content max-w-6xl lg:px-8 py-8">
        <h1 id={`${id}-title`} className="title-font text-2xl font-medium dark:text-[#ffddcc] sm:text-3xl text-left">
          {title}
        </h1>
        <hr className="border-1 border-gray-900 dark:border-[#ffddcc] my-2" />
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
