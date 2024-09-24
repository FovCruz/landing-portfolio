import React from 'react';

const BackgroundWrapper = ({ children }) => (
  <div
    className="relative h-full w-full
      dark:bg-[radial-gradient(circle,_rgba(6,25,50,0.9036882331057423)_0%,_rgba(10,25,46,0.9485061602766106)_50%,_rgba(17,24,39,1)_100%)] 
    "
  >
    {children}
  </div>
);

export default BackgroundWrapper;
