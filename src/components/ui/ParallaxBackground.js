'use client';

import React, { useEffect, useState } from 'react';
import clsx from "clsx";

const ParallaxBackground = ({ bgImage, className, children }) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={clsx(className)}
      style={{
        background: `url(${bgImage}) center/cover no-repeat`,
        backgroundPositionY: `${offsetY * 0.5}px`,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxBackground;
