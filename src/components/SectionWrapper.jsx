import React from 'react';

const SectionWrapper = ({ id, title, children }) => {
  return (
    <section id={id} className="section py-14 md:py-12" aria-labelledby={`${id}-title`}>
      <div className="section-content max-w-6xl lg:px-8 sm:py-10 lg:py-16">
        <h2 id={`${id}-title`} className="title-font text-2xl font-medium dark:text-secondary sm:text-3xl text-left">
          {title}
        </h2>
        <hr className="border-1 border-gray-900 dark:border-secondary my-2" />
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;