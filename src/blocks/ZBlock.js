
'use client'

import React from 'react';
import clsx from "clsx";
import Image from "../components/ui/Image";
import Animation from "../components/Animation";
import useMediaQuery from "../hooks/useMediaQuery";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Zoom from "react-medium-image-zoom";

function ZBlock({title, text1, text2, imgTemplate, children}) {
  const isMob = useMediaQuery(false, '(max-width: 660px)')
  const arr = [1,1,1]

  return (
    <div className={clsx("ZBlock lg:py-[100px] py-[50px] text-black bg-purple")}>
      <div className="container">
        <div className="md:grid grid-cols-3 gap-[20px]">
          <div className={"flex flex-col"}>
            <div data-aos={'fade-up'} data-aos-delay={'0'}>
              <h2 className={"bigMob"}>{title}</h2>
            </div>
            <div className={'grow flex  py-[20px]'}>
              <div data-aos={'fade-up'} data-aos-delay={'150'}>
                <span className={"xl:text-[18px] lg:text-[16px] md:text-[14px] lg:leading-tight leading-none"}>{text1}</span>
              </div>
            </div>
            {!isMob &&
              <Zoom><img
                data-aos={'fade-up'} data-aos-delay={'0'}
                className={clsx("w-full h-full object-cover",
                )} src={imgTemplate.replace('{**}', 1)} alt="accom-img"/></Zoom>


            }
          </div>
          <div>
            {!isMob &&
              <Zoom><img
                data-aos={'fade-up'} data-aos-delay={'0'}
                className={clsx("w-full h-full object-cover")}
                src={imgTemplate.replace('{**}', 2)} alt="accom-img"/></Zoom>


            }
            {isMob && (
              <Swiper
                modules={[Autoplay]}
                className={"!mb-[00px] mt-[20px] md:!overflow-hidden !overflow-visible"}
                loop={true}
                autoplaySpeed={400}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  700: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                }}
                slidesPerView={1}
                spaceBetween={10}
              >
                {arr.map((item, index) => (
                  <SwiperSlide key={index} >
                    <div className="slide-content">
                      <Image
                        src={imgTemplate.replace('{**}', index + 1)}
                        className={"aspect-square object-cover"}
                      />
                    </div>
                  </SwiperSlide>
                ))
                }
              </Swiper>
            )}
          </div>
          <div className={"lg:flex flex-col"}>
            {!isMob &&
              <Zoom><img
                data-aos={'fade-up'} data-aos-delay={'0'}
                className={clsx("w-full h-full object-cover",
                )} src={imgTemplate.replace('{**}', 3)} alt="accom-img"/></Zoom>


            }
            {text2 && (
              <div className={'grow flex  py-[20px]'}>
                <Animation>
                  <span
                    className={"xl:text-[18px]  lg:text-[16px] md:text-[13px] lg:leading-tight leading-none"}>{text2}</span>
                </Animation>
              </div>
            )}

            <Animation>
              {children}
            </Animation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZBlock;