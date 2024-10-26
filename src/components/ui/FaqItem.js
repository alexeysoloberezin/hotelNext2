'use client'

import React, { useState, useRef, useEffect } from 'react';
import clsx from "clsx";

function FaqItem({ title, text, aos, delay, icon, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [text, children, isOpen]);

  return (
    <div className="faqItem " data-aos="fade-up" data-aos-delay={delay}>
      <div className="faqItem-head link flex gap-[70px] sm:items-center justify-between" onClick={() => setIsOpen(!isOpen)}>
        <div className={"flex items-center gap-3"}>
          <img src={icon} alt="" />
          {title}
        </div>
        <div className="shrink-0  rounded-lg">
          <div className={clsx('transition-all duration-500 faqItem-arrow relative', {
            'isOpen': isOpen,
          })}>
            <svg className={"absolute top-0 right-0"} width="45" height="16" viewBox="0 0 45 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M44.7071 8.70711C45.0976 8.31658 45.0976 7.68342 44.7071 7.29289L38.3431 0.928932C37.9526 0.538408 37.3195 0.538408 36.9289 0.928932C36.5384 1.31946 36.5384 1.95262 36.9289 2.34315L42.5858 8L36.9289 13.6569C36.5384 14.0474 36.5384 14.6805 36.9289 15.0711C37.3195 15.4616 37.9526 15.4616 38.3431 15.0711L44.7071 8.70711ZM0 9L44 9V7L0 7L0 9Z"
                fill="#EACFFF"/>
            </svg>
            <svg className={"absolute top-[7px] right-[-5px]"} width="16" height="45" viewBox="0 0 16 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.29289 44.7071C7.68342 45.0976 8.31658 45.0976 8.70711 44.7071L15.0711 38.3431C15.4616 37.9526 15.4616 37.3195 15.0711 36.9289C14.6805 36.5384 14.0474 36.5384 13.6569 36.9289L8 42.5858L2.34315 36.9289C1.95262 36.5384 1.31946 36.5384 0.928932 36.9289C0.538408 37.3195 0.538408 37.9526 0.928932 38.3431L7.29289 44.7071ZM7 0V44H9V0L7 0Z"
                fill="#EACFFF"/>
            </svg>

          </div>
        </div>
      </div>
      <div className={clsx("overflow-hidden transition-all duration-500", {
        "max-h-[0]": !isOpen,
        "max-h-[0] sm:max-h-[0]": !isOpen, // Adjust the max-height for closed state
      })} style={{maxHeight: isOpen ? contentHeight : 0}}>
        <div ref={contentRef} className="md:px-[20px] px-[10px] pt-[20px] md:pb-[40px] pb-[20px]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default FaqItem;
