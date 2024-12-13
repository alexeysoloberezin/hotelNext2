'use client'
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Animation from "../components/Animation";

function AboutBlock({imgTemplate}) {
  const arr = [1,1,1,1,1,1]
  return (
    <div className={"bg-gold lg:py-[100px] py-[50px] text-black md:text-center"}>
      <div className="container">
        <Animation>
          <div className={'text-[50px] leading-snug font2 md:mb-[50px] mb-[30px]'}>Welcome to IRIS HOTEL Boston</div>
        </Animation>
        <Animation>
          <p className={"max-w-[552px] mx-auto"}>Your ideal choice for a comfortable and stylish stay in Boston, we take pride in providing our guests with an unforgettable experience through exceptional service and a unique atmosphere.</p>
        </Animation>

        <Swiper
          modules={[Autoplay]}
          className={"!mb-[0px] md:mt-[70px] mt-[50px] md:!overflow-hidden !overflow-visible"}
          loop={true}
          autoplayspeed={400}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            700: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            },
          }}
        >

          {arr.map((item, index) => (
            <SwiperSlide key={uuidv4()}>
              <div className="slide-content">
                <img
                  src={imgTemplate.replace('{**}', index + 1)}
                  alt={'12'}
                  className={"imgsFull"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default AboutBlock;