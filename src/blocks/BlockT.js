'use client'

import React from 'react';
import Animation from "../components/Animation";
import Image from "../components/ui/Image";
import useMediaQuery from "../hooks/useMediaQuery";

function BlockT({title, children, imgTemplate}) {
  const isMob = useMediaQuery(false, '(max-width: 660px)')

  return (
    <div className={"bg-dark text-white lg:py-[100px] py-[50px]"}>
      <div className="container">
        <div className="lg:flex gap-[54px]">
          <div className={""}>
            <div data-aos={'fade-up'} data-aos-delay={'0'}>
              <h2 className={'font2'}>{title}</h2>
            </div>
            <div data-aos={'fade-up'} data-aos-delay={'150'} className={"xl:mt-[50px] mt-[25px]"}>
              <div
                className={"xl:text-[18px] lg:text-[16px] md:text-[14px] lg:leading-snug"}>
                {children}
              </div>
            </div>
          </div>
          {!isMob ? (
            <div className={"flex gap-[20px]  w-full lg:pt-0 md:pt-[30px]"}>
              <div className={"flex flex-col  xl:w-[333px] w-[250px] gap-[20px]"}>
                <img
                  data-aos={'fade-up'} data-aos-delay={'0'}
                  alt={"image"}
                  className={"h-full w-full object-cover"}
                  src={imgTemplate.replace('{**}', 1)}
                ></img>
                <img
                  data-aos={'fade-up'} data-aos-delay={'0'}
                  alt={"image"}
                  className={"h-full w-full object-cover"}
                  src={imgTemplate.replace('{**}', 2)}
                ></img>
              </div>
              <div>
                <img
                  data-aos={'fade-up'} data-aos-delay={'0'}
                  alt={"image"}
                  className={"h-full w-full object-cover"}
                  src={imgTemplate.replace('{**}', 3)}
                ></img>
              </div>
            </div>
          ) : (
            <img
              data-aos={'fade-up'} data-aos-delay={'0'}
              alt={"image"}
              className={"h-full w-full object-cover mt-[50px]"}
              src={imgTemplate.replace('{**}', 4)}
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlockT;