import React from 'react';
import clsx from "clsx";

function ImageBLock({bgColor = 'bg-white', img, classes, smMob}) {
  return (
    <div className={clsx(' flex items-center justify-center shrink-0 rounded-base rotate-[-13deg]',
      bgColor, classes,
      {
        'lg:w-[120px] w-[70px] lg:h-[120px] h-[70px]': smMob,
        'w-[120px]  h-[120px]': !smMob
      }
    )}>
      <img src={img} className={"rotate-[13deg]  shrink-0 w-fit h-fit object-contain"} alt="Картинка"/>
    </div>
  );
}

export default ImageBLock;