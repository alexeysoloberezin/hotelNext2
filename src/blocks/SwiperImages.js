import React, {useEffect, useState} from 'react';
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "../components/ui/Image";
import 'swiper/css';

function SwiperImages({children,showMy = false, countEls, imgTemplate}) {
  const [arr, setArr] = useState([])

  useEffect(() => {
    const data = []
    for (let i = 1; i < countEls + 1; i++) {
      data.push(i)
    }
    setArr(data)
  }, [])

  return (
    <div >
      <Swiper
        modules={[Autoplay]}
        className={"!mb-[20px] mt-[50px] md:!overflow-hidden !overflow-visible"}
        loop={true}
        autoplayspeed={400}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1.05}
        spaceBetween={10}
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
        {showMy
          ? (
            children
          ) : (
            arr.map((item) => (
              <SwiperSlide key={item}>
                <div className="slide-content">
                  <Image
                    src={imgTemplate.replace('{**}', item)}
                    noWebp={true}
                    className={"imgsFull"}
                  />
                </div>
              </SwiperSlide>
            ))
          )}
      </Swiper>
    </div>
  );
}

export default SwiperImages;