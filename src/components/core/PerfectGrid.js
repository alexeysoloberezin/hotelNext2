import React from 'react';
import clsx from "clsx";
import Image from "../ui/Image";
import Zoom from "react-medium-image-zoom";

function PerfectGrid({imgTemplate, hideMob}) {
  const grid = [1, 1, 1, 1, 1]

  const indexClasses = [
    'order-1 md:order-1',
    'order-3 md:order-2 row-span-2 col-span-2 md:col-span-1 md:max-h-fit md:h-[580px] md:max-h-[345px]',
    'order-4 md:order-3',
    'order-2 md:order-4',
    'order-5 md:order-5',
  ]

  const h = [
    'md:h-[195px] lg:h-[330px] h-full w-full',
    'md:h-[406px] lg:h-[683px] sm:h-full h-[330px] w-full ',
    'md:h-[195px] lg:h-[330px] h-full w-full',
    'md:h-[195px] lg:h-[330px] h-full w-full',
    'md:h-[195px] lg:h-[330px] h-full w-full',
  ]
  return (
    <div className={
      clsx("lg:grid-cols-3 grid-cols-2 md:gap-[22px] gap-[15px]", {
        'md:grid hidden' :hideMob,
        'grid': !hideMob
      })
    }>
      {grid.map((el, index) => (
        <div key={index} className={indexClasses[index]}>
          <Zoom>
            <Image
              noWebp={true}
              animationClass={clsx('', h[index])}
              className={clsx("w-full h-full object-cover",
              )} src={imgTemplate.replace('{**}', index + 1)} alt="bar-img"/>
          </Zoom>
        </div>
      ))}
    </div>
  );
}

export default PerfectGrid;