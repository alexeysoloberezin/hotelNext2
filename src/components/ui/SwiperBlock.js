'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "./Image";

function AccommodationItem({title, subtitle, price, img}){
  return (
    <div className={"text-black"}>
      <Image
        src={img}
        alt="AccommodationImage"
        className={"w-full aspect-square object-cover"}
        dataAos={"fade-up"} delay={"0"}
      />
      <h4 className={"mt-[10px] mb-[5px] font2 uppercase"}>{title}</h4>
      {/*<p className={"mb-[20px] lg:block hidden"} data-aos="fade-up" data-aos-delay="300">{subtitle}</p>*/}
      {/*<p data-aos="fade-up" data-aos-delay="450" className={'lg:block hidden'}>from <b>{price}</b> / night</p>*/}
    </div>
  )
}

function Slider({ slidesData }) {
  return (
    <div className={"relative"}>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplaySpeed={400}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
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
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <AccommodationItem
                price={slide.price}
                title={slide.title}
                img={slide.img}
                subtitle={slide.subtitle}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
