'use client'

import React, {useState, useEffect, useRef} from 'react';
import Animation from '../Animation';
import Zoom from "react-medium-image-zoom";

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
    <Zoom> <img
      className={className}
      data-aos={dataAos}
      data-aos-delay={delay}
      src={src}
      alt={alt}
    /></Zoom>
  );
};

export default Image;
