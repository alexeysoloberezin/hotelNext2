import React from 'react';
import Image from "../components/ui/Image";
import clsx from "clsx";
import Animation from "../components/Animation";

function BaseGrids({title, imgTemplate, texts}) {
  return (
    <div className={"bg-gold lg:py-[100px] py-[50px] text-black"}>
      <div className="container">
        <Animation className={"lg:mb-[50px] mb-[30px]"}>
          <h2 className={'bigMob   md:max-w-[234px] max-w-fit'}>{title}</h2>
        </Animation>
        <div className={"grid lg:grid-cols-3 gap-[20px]"}>
          {texts.map((text, i) => (
            <div>
              <Image className={clsx("w-full h-full object-cover",
              )} src={imgTemplate.replace('{**}', i + 1)} noWebp={true} alt="accom-img"></Image>
              <p className={"mt-[20px]"}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BaseGrids;