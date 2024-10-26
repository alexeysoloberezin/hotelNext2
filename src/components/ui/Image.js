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
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Остановить наблюдение после загрузки
        }
      },
      {
        root: null, // viewport
        rootMargin: '300px 0px', // Загрузка за 1,5 экрана до видимости
        threshold: 0 // Изображение будет загружено, когда хотя бы 1 пиксель его будет видно
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const srcWebp = getWebpSrc(src); // Получаем путь к изображению в формате WebP

  return (
    <Animation animationClass={animationClass}    fetchpriority="low">
      {!noWebp ? (
        <picture className={className} {...props}>
          {isVisible && <source srcSet={srcWebp} type="image/webp"/>}
          <img
            ref={imgRef}
            fetchpriority="low"
            className={className}
            data-aos={dataAos}
            data-aos-delay={delay}
            src={isVisible ? src : undefined} // Ленивая загрузка
            alt={alt}
          />
          </picture>
        ) : (
          <img
            ref={imgRef}
            fetchpriority="low"
            className={className}
            data-aos={dataAos}
            data-aos-delay={delay}
            src={isVisible ? src : undefined} // Ленивая загрузка
            alt={alt}
          />
        )}
    </Animation>
  );
};

export default Image;
