'use client'


import React from 'react';
import {Autoplay, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "../components/ui/Image";
import Animation from "../components/Animation";

function EventsPackaj(props) {
  const arr = [1, 1, 1, 1, 1, 1]
  const imgTemplate = '/ev/ev{**}.jpg'
  return (
    <div className={"bg-[#5747A6] lg:py-[200px]  py-[100px]"}>
      <div className="container">
        <div className={"lg:grid lg:grid-cols-[1fr_750px] gap-[30px]"}>
          <div className={""}>
            <Animation>
              <h2 className={"mb-[35px] bigMob"}>Special Event <br/> Packages</h2>
            </Animation>
            <Animation>
              <p className={"max-w-[324px]"}>We offer a variety of tailored packages for all occasions:</p>
            </Animation>
            <Animation>
              <div className={'space-y-[20px] mt-[30px]'}>
                <p>1. Wedding Package</p>
                <p>2. Proposal Package</p>
                <p>3. Sports Package</p>
                <p>4. Corporate Package</p>
                <p>5. Birthday Package</p>
                <p>6. Holiday Packages: <br/>
                  (Christmas, New Year’s, etc.) <span className={"md:inline block italic font-light"}>– Coming soon!</span></p>
              </div>
            </Animation>
          </div>

          <div className={"eventsPackaj lg:mt-0 mt-[40px]"}>
            <Swiper
              modules={[Autoplay, Pagination]}
              className={"!mb-[0px] md:h-[492px] h-[282px] md:!overflow-hidden !overflow-visible"}
              loop={true}
              autoplaySpeed={400}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true, // Буллеты будут кликабельны
                el: '.custom-pagination',
              }}
              slidesPerView={1}
              spaceBetween={20}
            >

              {arr.map((item, index) => (
                <SwiperSlide key={'ev_'+index}>
                  <div className="slide-content">
                    <img
                      className={"imgsFull md:h-[492px] h-[282px] w-full object-cover"}
                      src={imgTemplate.replace('{**}', index + 1)}
                      alt=""/>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-pagination mt-[10px]"></div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default EventsPackaj;