import React from 'react';
import Animation from "@/components/Animation";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

function EvBlock(props) {
  return (
    <div className={'md:bg-[#ABA3D2] bg-purple lg:pt-[150px] pt-[100px]  text-black'}>
      <div className={'container '}>
        <div className={'flex justify-between'}>
          <div className={"max-w-[600px] mx-auto text-center "}>
            <Animation>
              <h4 className={"mb-[25px] font-croisan text-center sm:text-[50px] !leading-[1.2] text-[40px] "}>Decorations For Your
                Holiday</h4>
            </Animation>
            <Animation>
              <p className={"mb-[50px] max-w-[350px] mx-auto font-medium"}>
                Our wedding packages include live music, a projector for special moments, and customizable lunch or
                dinner receptions.
              </p>
            </Animation>
          </div>
        </div>


      </div>
      <div className={"p-[15px]"}>
        <Swiper
          modules={[Autoplay]}
          className={"!mb-[0px] md:!overflow-hidden lg:h-[32vw] md:h-[50vw] h-[98vw]  !overflow-visible"}
          loop={true}
          autoplayspeed={400}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            660: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            950: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 10
            }
          }}
          slidesPerView={1}
          spaceBetween={10}
        >

          {[1,1,1,1].map((item, index) => (
            <SwiperSlide key={'wed_3_' + index}>
              <div className="slide-content h-full">
                <img src={`/decor/dc_${index + 1}.png`} className={'w-full h-full object-cover'} alt=""/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default EvBlock;