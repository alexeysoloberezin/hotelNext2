'use client'


import React from 'react';
import clsx from "clsx";

function BgImage({children, img}) {
  return (
    <div className={"lg:py-[60px] py-[50px] relative overflow-hidden bg-dark"} >
      <img
        alt={''}
        src={img}
        className={"w-[100%]  h-full object-cover absolute top-0 left-1/2 translate-x-[-50%]"}
      />
      <div className={clsx("container h-full flex flex-col justify-center relative z-10 items-center md:min-h-[560px] min-h-[370px] gap-[20px]")}>
        {children}
      </div>
    </div>
  )
}

export default BgImage;