'use client'

import React from 'react';
import Image from "../components/ui/Image";
import clsx from "clsx";
import Animation from "../components/Animation";

function BaseGrids({title, imgTemplate, texts}) {
  return (
    <div className={"bg-gold lg:py-[100px] py-[50px] text-black"}>
      <div className="container">
        <div  data-aos={'fade-up'} data-aos-delay={'150'} className={"lg:mb-[50px] mb-[30px]"}>
          <h2 className={'bigMob   md:max-w-[234px] max-w-fit'}>{title}</h2>
        </div>
        <div className={"grid lg:grid-cols-3 gap-[20px]"}>
          {texts.map((text, i) => (
            <div  data-aos={'fade-up'} data-aos-delay={i * 100}>
              <img className={clsx("w-full aspect-square object-cover",
              )} src={imgTemplate.replace('{**}', i + 1)}  alt="accom-img"></img>
              <p className={"mt-[20px]"}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BaseGrids;