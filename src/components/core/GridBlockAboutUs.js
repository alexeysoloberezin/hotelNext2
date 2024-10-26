'use client';

import React from 'react';
import clsx from "clsx";
import Animation from '../Animation';
import Zoom from "react-medium-image-zoom";

function GridBlockAboutUs({data, imgTemplate, type = 'type1', hideMob}) {
  const classes = {
    'type1': {
      '1': 'md:h-[220px] lg:h-[314px]',
      '2': 'md:h-[154px] lg:h-[220px]',
      '3': 'md:h-[413px] lg:h-[590px]',
    },
  }

  const textClass = "mt-[5px] font2 md:text-left md:mx-0 mx-auto max-w-[230px] md:max-w-fit text-center text-[24px] uppercase md:normal-case"

  return (
    <div className={clsx('text-black md:grid-cols-[29%_1fr_29%] gap-[20px]', {
      'md:grid hidden': hideMob,
      'grid': !hideMob
    })}>
      <div className={"flex flex-col gap-[20px]"}>
        <Animation>
          <img className={clsx(classes[type]['1'], "w-full object-cover")} src={imgTemplate.replace('{**}', 1)}
               alt=""/>
          {data[0] && <h4 className={clsx(textClass)}>{data[0]}</h4>}
        </Animation>
        <Animation delay={'.2s'}>
          <a href={'/spa'}>
            <img className={clsx(classes[type]['2'], "w-full object-cover")} src={imgTemplate.replace('{**}', 2)}
                 alt=""/>
            {data[1] && <h4 className={clsx(textClass)}>{data[1]}</h4>}
          </a>
        </Animation>
      </div>
      <Animation className={"flex flex-col gap-[20px]"} delay={'.4s'}>
          <img className={clsx(classes[type]['3'], "w-full object-cover")} src={imgTemplate.replace('{**}', 3)}
               alt=""/>
          {data[2] && <h4 className={clsx(textClass)}>{data[2]}</h4>}
      </Animation>
      <div className={"flex flex-col gap-[20px]"}>
        <Animation delay={'.5s'}>
          <a href={'/restaurant'}>
            <img className={clsx(classes[type]['2'], "w-full object-cover")} src={imgTemplate.replace('{**}', 4)}
                 alt=""/>
            {data[3] && <h4 className={clsx(textClass)}>{data[3]}</h4>}
          </a>
        </Animation>
        <Animation delay={'.8s'}>
          <a href={'/bar'}>
            <img className={clsx(classes[type]['1'], "w-full object-cover")} src={imgTemplate.replace('{**}', 5)}
                 alt=""/>
            {data[4] && <h4 className={clsx(textClass)}>{data[4]}</h4>}
          </a>
        </Animation>
      </div>
    </div>
  );
}

export default GridBlockAboutUs;
