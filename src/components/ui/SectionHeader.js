'use client';

import React from 'react';
import Button from "./Button";
import clsx from "clsx";
import Arrow from "../icon/Arrow";
import Image from "./Image";
import Animation from '../Animation';
import Zoom from "react-medium-image-zoom";

function SectionHeader({
                         title,
                         text,
                         btnHref,
                         wrapperClassName,
                         isCenter,
                         bigMob,
                         color = 'black',
                         mobImage,
                         classText
                       }) {
  const colors = {
    'black': {
      'text': 'text-black',
      'btn': 'white'
    },
    'white': {
      'text': 'text-white',
      'btn': 'white',
      'btnHover': 'white-2',
    }
  }
  return (
    <div className={clsx(' md:mb-[50px] mb-[30px]', colors[color].text)}>
      <Animation>
        <h2 className={clsx("text-nowrap md:min-w-[34%] text-center mb-[15px]", {'bigMob': bigMob})}>{title}</h2>
      </Animation>

      <div className={clsx("flex md:items-center md:flex-row flex-col  gap-[20px]", wrapperClassName)}>
        <Animation delay={'.2s'}>
          <p className={clsx(classText)}>{text}</p>
        </Animation>
        {mobImage &&
          <Image src={mobImage} noWebp={true} alt="" className={"max-h-[600px] min-h-[340px] object-cover md:hidden"}/>
        }
        {btnHref
          ? <a href={btnHref} className={"md:mx-0 lg:mt-0 mt-[30px] mx-auto"}>
            <Button
              delay={'400'}
              label={'see more'}
              className={"group"}
              color={colors[color].btn}
              hoverColor={colors[color].btnHover}
            >
              <Arrow classes={"group-hover:fill-white fill-black"}/>
            </Button>
          </a>
          : isCenter ? <div></div> : <div className={"w-[350px] xl:block hidden"}></div>
        }
      </div>

    </div>
  );
}

export default SectionHeader;