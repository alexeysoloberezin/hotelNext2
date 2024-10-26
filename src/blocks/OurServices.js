'use client'

import React from 'react';
import Image from "../components/ui/Image";
import Animation from "../components/Animation";

function Item({title, children, img}){
  return (
    <div className={"flex lg:flex-col flex-col-reverse"}>
      <Image src={img} alt={'Our Service Img'} className={'aspect-square md:aspect-auto md:h-[282px] md:w-full object-cover'} noWebp={true} ></Image>
      <Animation delay={'.2s'} className={'text-[34px] lg:mt-[32px] mb-[20px] lg:order-none order-3'}>{title}</Animation>
      <Animation delay={'.4s'} className={"lg:mb-0 mb-[30px]"}>{children}</Animation>
    </div>
  )
}

function OurServices(props) {
  return (
    <div className={"bg-dark text-white lg:py-[100px] py-[50px]"}>
      <div className="container">
        <Animation className={'text-[50px] leading-snug font2 '}>Amenities</Animation>
        <div className={"grid lg:grid-cols-3 lg:gap-[20px] gap-[55px] md:mt-[50px] mt-[30px]"}>
          <Item
            img={'/ourServices1.jpg'}
            title={'Bar Nectar'}
          >
            Enjoy exquisite dishes and a variety of drinks  at our restaurant and bar, Nectar, where each morning begins with aromatic coffee and tea</Item>
          <Item
            img={'/ourServices2.jpg'}
            title={'Spa'}
          >
            Indulge in relaxation at our spa,<br/> offering a wide range of facial <br/>and body treatments
          </Item>
          <Item
            img={'/ourServices3.jpg'}
            title={'Petal Restaurant'}
          >
            Indulge in relaxation at our spa, offering  a wide range of facial and body treatments
          </Item>
          <Item
            img={'/ourServices4.jpg'}
            title={'Fitness Center'}
          >
            Stay active during your stay with our fully equipped gym, featuring everything you need for a great workout
          </Item>
          <Item
            img={'/ourServices5.jpg'}
            title={'Board room'}
          >
            We also offer a board room, perfect for formal meetings and presentations
          </Item>
          <Item
            img={'/ourServices6.jpg'}
            title={'Business Center'}
          >
            For those who need to stay productive, our business lounge provides a quiet space to work on your computer and hold private meetings.
          </Item>
        </div>
      </div>
    </div>
  );
}

export default OurServices;