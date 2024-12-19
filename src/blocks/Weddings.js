'use client'

import React from 'react';
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "../components/ui/Image";
import useMediaQuery from "../hooks/useMediaQuery";
import Animation from "../components/Animation";

function Weddings(props) {
  const arr = [1, 1, 1]
  const imgTemplate = '/wed/wed{**}.jpg'
  const isTable = useMediaQuery(false, '(max-width: 1024px)')

  return (
    <div className={"bg-purple lg:py-[100px] py-[50px] text-black"}>
      <div className="container text-center">
        <Animation>
          <h4 className={"mb-[30px] font-croisan sm:text-[50px] !leading-[1.3] text-[40px] "}>Weddings <br/>at Petal Restaurant</h4>
        </Animation>
        <div className={"max-w-[553px] mx-auto"}>
          <Animation>
            <p className={"mb-[40px]"}>
              Make your big day even more special with our exclusive wedding packages. Book 10 or more rooms at IRIS Boston Hotel, and receive a complimentary night in the luxurious Iris Suite (or standard rate if fewer rooms are booked).
            </p>
          </Animation>
          {isTable && (
            <Image
              src={imgTemplate.replace('{**}', 1)}
              noWebp={true}
              className={"imgsFull"}
            />
          )}
        </div>

        {!isTable && (
          <Swiper
            modules={[Autoplay]}
            className={"!mb-[0px] md:!overflow-hidden !overflow-visible"}
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
              <SwiperSlide key={'wed_' + index} className={"bg-black"}>
                <div className="slide-content bg-black">
                  <img  className={"border border-1 border-black"} src={imgTemplate.replace('{**}', index + 1)} alt=""/>
                </div>
              </SwiperSlide>
            ))}
            {arr.map((item, index) => (
              <SwiperSlide key={'wed_2_' + index} className={'bg-black'}>
                <div className="slide-content bg-black">
                  <img  className={"border border-1 border-black"} src={imgTemplate.replace('{**}', index + 1)} alt=""/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

      </div>
    </div>
  );
}

export default Weddings;