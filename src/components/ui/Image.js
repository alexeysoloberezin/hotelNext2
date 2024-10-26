'use client'

import React, {useState, useEffect, useRef} from 'react';
import Animation from '../Animation';

// Функция для замены расширения файла на .webp
const getWebpSrc = (src) => {
  return src.replace(/\.(png|jpg|jpeg)$/, '.webp');
};

const Image = ({
                 src,
                 alt,
                 dataAos,
                 animationClass,
                 noWebp = false,
                 isBg = false,
                 delay,
                 className,
                 ...props
               }) => {


  return (
    <img
      className={className}
      data-aos={dataAos}
      data-aos-delay={delay}
      src={src}
      alt={alt}
    />
  );
};

export default Image;
