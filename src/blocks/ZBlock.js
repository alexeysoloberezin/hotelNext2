
'use client'

import React from 'react';
import clsx from "clsx";
import Image from "../components/ui/Image";
import Animation from "../components/Animation";
import useMediaQuery from "../hooks/useMediaQuery";
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

function ZBlock({title, text1, text2, imgTemplate, children}) {
  const isMob = useMediaQuery(false, '(max-width: 660px)')
  const arr = [1,1,1]

  return (
    <div className={clsx("ZBlock lg:py-[100px] py-[50px] text-black bg-purple")}>
      <div className="container">
        <div className="md:grid grid-cols-3 gap-[20px]">
          <div className={"flex flex-col"}>
            <Animation>
              <h2 className={"bigMob"}>{title}</h2>
            </Animation>
            <div className={'grow flex  py-[20px]'}>
              <Animation>
                <span className={"xl:text-[18px] lg:text-[16px] md:text-[14px] lg:leading-tight leading-none"}>{text1}</span>
              </Animation>
            </div>
            {!isMob &&
              <Image
                className={clsx("w-full h-full object-cover",
                )} src={imgTemplate.replace('{**}', 1)} alt="accom-img"/>
            }
          </div>
          <div>
            {!isMob &&
              <Image
                className={clsx("w-full h-full object-cover")}
                animationClass={clsx("w-full h-full object-cover")}
                src={imgTemplate.replace('{**}', 2)} alt="accom-img"/>
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
              <Image
                className={clsx("w-full h-full object-cover",
                )} src={imgTemplate.replace('{**}', 3)} alt="accom-img"/>
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