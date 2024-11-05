import React from 'react';
import Image from "@/components/ui/Image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

function SpaRoomEl({number, children, delay}) {
  return (
    <div
      data-aos="fade-up" data-aos-delay={delay}
      className={"flex flex-col items-center text-center"}>
      <div className={"text-[50px] font2 py-[10px]"} style={{lineHeight: 1.2}}>{number}</div>
      <h4>{children}</h4>
    </div>
  )
}

function SpaRoom() {
  return (
    <div className={"bg-dark lg:py-[100px] py-[65px]"}>
      <div className={"container"}>
        <div className={"flex md:flex-row flex-col justify-between lg:mb-[80px] mb-[35px] lg:text-left text-center gap-[35px] md:items-end"}>
          <div className={"min-w-[340px]"} data-aos={'fade-up'} data-aos-delay={'0'}>
            <div className={'text-[50px] leading-tight font2 '}>
              Iris Spa Room
            </div>
          </div>
          <div data-aos={'fade-up'} data-aos-delay={'150'} className={"max-w-[820px]"}>
            <div className={"md:text-[18px]"}>
              A cozy and relaxing space specially designed for maximum rest and rejuvenation. Music plays softly in the
              background, filling the space with the sounds of nature or soothing melodies that help release tension and
              immerse
            </div>
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          className={"!mb-[20px] md:mt-[50px] mt-[15px]  md:!overflow-hidden !overflow-visible"}
          loop={true}
          autoplaySpeed={400}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            1024: {
              slidesPerView: 1.4,
              spaceBetween: 40
            },
          }}
        >
          {['/spaRoom_1.png', '/spaRoom_2.png'].map((item, index) => (
            <SwiperSlide key={index} className={"lg:h-[530px] h-[235px]"}>
              <div className="slide-content lg:h-[530px] h-[235px]">
                <img
                  alt={''}
                  src={item}
                  className={"w-full h-full object-cover"}
                />
              </div>
            </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
    </div>
  );
}

export default SpaRoom;