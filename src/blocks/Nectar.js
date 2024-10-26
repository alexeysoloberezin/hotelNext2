'use client'

import React from 'react';
import Image from "../components/ui/Image";
import image from "../components/ui/Image";
import clsx from "clsx";
import SwiperImages from "./SwiperImages";
import {SwiperSlide} from "swiper/react";
import Animation from '../components/Animation';

function Card({title, text, img, txtClass}) {
  return (
    <div
      className={"relative md:min-h-[565px] md:h-auto min-h-[400px] h-[98vw] max-h-[500px] overflow-hidden flex flex-col items-center px-[50px] py-[60px]"}>
      <img
        src={img}  alt={title}
        className={"absolute fullImg bottom-0 left-0"}
      />
      <div className={"relative z-10 text-white text-center"}>
        <div className={"text-[24px] mb-[15px]"}>{title}</div>
        <div className={clsx(txtClass)}>{text}</div>
      </div>
    </div>
  )
}

function Nectar(props) {
  const arr = [1, 2, 3]
  return (
    <div className="lg:pt-[100px] pt-[50px] lg:pb-0 pb-[40px] mb-[-20px] bg-gold text-black">
      <div className="container">
        <Animation
          className={"text-center lg:text-[50px] md:text-[40px] text-[30px]  leading-[1.1] max-w-[910px] md:mb-[70px] mb-[30px] mx-auto"}>Welcome
          to Nectar — the heart of Iris Hotel Boston, where sophistication meets comfort
        </Animation>

        
        <Animation>
        <SwiperImages showMy={true}>
          <SwiperSlide>
            <div className="slide-content">
              <Card
                title={'Our bar offers '}
                text={'a wide variety of drinks to satisfy even the most discerning guests'}
                img={'/nectar1.jpg'}
                txtClass={'max-w-[195px]'}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <Card
                title={'Start your morning'}
                text={'with a perfectly brewed coffee or enjoy a fragrant tea at any time of the day'}
                img={'/nectar2.jpg'}
                txtClass={'max-w-[312px]'}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <Card
                title={' In the evening'}
                text={'unwind in our relaxed atmosphere with exclusive cocktails and a carefully curated wine selection'}
                img={'/nectar3.jpg'}
                txtClass={'max-w-[253px]'}
              />
            </div>
          </SwiperSlide>
          
        </SwiperImages>
        </Animation>
      
      </div>

    </div>);
}

export default Nectar;