'use client';

import React from 'react';
import clsx from "clsx";
import Animation from '../Animation';

function Button({
                  children,
                  type,
                  disabled,
                  noAnimate,
                  label,
                  onClick,
                  className,
                  delay = '0',
                  hoverColor,
                  color = 'purple',
                  full,
                  size = 'def'
                }) {
  const colors = {
    'purple': 'bg-purple text-black ',
    'white': 'bg-white text-black ',
    'black': "bg-black text-white",
    'red': "bg-red text-white border border-red border-1"
  }
  const hoverColors = {
    'purple': 'hover:bg-purpleDarken',
    'white': 'hover:border-white hover:bg-transparent',
    'white-2': 'hover:bg-dark hover:border-white hover:text-white',
    'black': "hover:bg-white hover:text-black hover:border-black",
    'red': "hover:bg-dark hover:border-red",
  }

  return (
    <button
      data-aos={'fade-up'} data-aos-delay={delay}
      disabled={disabled} onClick={onClick} type={type} className={
      clsx(
        " px-[20px] py-[10px] flex-nowrap uppercase border-1 border border-transparent rounded-[50px] flex items-center gap-[10px]  transition-all  text-nowrap",
        colors[color],
        hoverColors[hoverColor || color],
        className,
        {
          "w-full": full,
          "w-fit": !full
        }
      )}>
      {label}
      {children}
    </button>
  );
}

export default Button;