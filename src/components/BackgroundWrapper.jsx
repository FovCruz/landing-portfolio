import React from 'react';

const BackgroundWrapper = ({ children }) => (
  <div className="relative h-full w-full bg-cover bg-center bg-fixed dark:bg-dark-background bg-light-background">
    {children}
  </div>
);

export default BackgroundWrapper;
