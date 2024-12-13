'use client'
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import clsx from "clsx";

function BaseGrids({title, imgTemplate, texts}) {
  return (
    <div className={"bg-gold lg:py-[100px] py-[50px] text-black"}>
      <div className="container">
        <div  data-aos={'fade-up'} data-aos-delay={'150'} className={"lg:mb-[50px] mb-[30px]"}>
          <h2 className={'bigMob   md:max-w-[234px] max-w-fit'}>{title}</h2>
        </div>
        <div className={"grid lg:grid-cols-3 gap-[20px]"}>
          {texts.map((text, i) => (
            <div key={uuidv4()} data-aos={'fade-up'} data-aos-delay={i * 100}>
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