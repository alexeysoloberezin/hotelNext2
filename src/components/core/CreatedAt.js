'use client';

import React from 'react';

function CreatedAt(props) {
  return (
    <a href={'https://offthegridlab.com/'} target={'_blank'} className={"flex link items-end md:gap-[15px] gap-[5px]"}>
      <span className={"md:text-[18px] text-[14px]"}>Design by</span>
      <div className={"font2 md:text-[24px] text-[20px] md:mb-[3px] mb-[1px]"}>
        Offthegridlab
      </div>
    </a>
  );
}

export default CreatedAt;