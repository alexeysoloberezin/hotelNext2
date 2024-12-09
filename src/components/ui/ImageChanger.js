'use client';

import React from 'react';
import {Autoplay, EffectFade} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import clsx from "clsx";

function ImageChanger({length = 3, imgTemplate, classes, slideClass, swiperClass, swiperSlideClass}) {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      className={clsx("!mb-[0px] md:!overflow-hidden !overflow-visible h-full", swiperClass)}
      loop={true}
      effect={'fade'}
      autoplayspeed={400}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
    >
      {Array(length).fill(1).map((item, index) => (
        <SwiperSlide key={index} className={clsx(swiperSlideClass)}>
          <div className={clsx('slide-content', slideClass)}>
            <img src={imgTemplate.replace('{**}', index + 1)}
                 className={clsx(classes)} alt=""/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageChanger;