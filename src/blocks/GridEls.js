import React from 'react';
import Image from "../components/ui/Image";
import Animation from '../components/Animation';
import clsx from "clsx";

function GridElsItem({img, title, text, index}) {
  return (
    <Animation className={"text-center"} delay={index * .2 + 's'}>
      <Image src={img} className={"w-full h-auto aspect-square"} alt=""/>
      <div className={"text-[24px] mt-[35px] mb-[15px] uppercase"}>{title}</div>
      <div className={clsx({'max-w-[268px] mx-auto': index !== 0})}>{text}</div>
    </Animation>
  )
}

function GridEls({title, arr, cols, classes}) {
  return (
    <div className={clsx("bg-[#0E4840] lg:py-[100px] py-[50px]")}>
      <div className="container">
        <Animation>
        <h2 className={"text-center mb-[40px] bigMob"} >{title}</h2>
        </Animation>
        <div className={clsx(`grid md:grid-cols-${cols || 3} gap-[20px]`, classes)}>
          {arr.map(({img, title, text}, i) => (
            <GridElsItem key={i} img={img} title={title} text={text} index={i}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GridEls;