'use client'

import clsx from 'clsx';
import React, { useEffect } from 'react';
import useIsRender from '@/hooks/useIsRender';

function Animation({children, delay, className, animationClass}) {
    // const [isRender, ref] = useIsRender("50px 0px", 1.0);
    //
    // useEffect(() => {
    //
    // }, [])

  return (
    // <div ref={ref} className={clsx(className, animationClass)}>
    //     <div className={clsx("duration-1000 transition", animationClass,{"translate-y-[50px] opacity-0":!isRender})} style={{transitionDelay: isRender ? delay : 0}}>
    //         {children}
    //     </div>
    // </div>
    <div data-aos={'fade-up'}  className={clsx(className, animationClass)}>
      {children}
    </div>
  );
}

export default Animation;