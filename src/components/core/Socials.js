import React from 'react';
import clsx from "clsx";

function Socials({classes}) {
  const classNames = 'sm:w-[48px] w-[38px] h-[38px] sm:h-[48px] '
  return (
    <div className={clsx("flex items-center gap-[10px]", classes)}>
      <a href="#"> <img className={clsx(classNames)} src={'/WhatsApp.png'} alt={'icon'}/></a>
      <a href="#"> <img className={clsx(classNames)} src={'/Telegram_white.png'} alt={'icon'}/></a>
      <a href="#"> <img className={clsx(classNames)} src={'/Google.png'} alt={'icon'}/></a>
      <a href="#"><img className={clsx(classNames)} src={'/Mail_white.png'} alt={'icon'}/></a>
      <a href="#"> <img className={clsx(classNames)} src={'/Phone_white.png'} alt={'icon'}/></a>
    </div>
  );
}

export default Socials;