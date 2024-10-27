'use client';

import React from 'react';
import MainBlockTemplate from "@/components/core/MainBlockTemplate";
import Interior from "@/blocks/Interior";
import OurMenu from "@/blocks/OurMenu";
import BgImageBlock from "@/blocks/BgImageBlock";
import Button from "@/components/ui/Button";
import SwiperImages from "@/blocks/SwiperImages";
import Animation from '@/components/Animation';

function Restaurant() {
  const els = [1, 2, 3]
  return (
    <div>
      <MainBlockTemplate
        title={'Petal Restaurant'}
        video={'/bar.mp4'}
        mobileGif={'/bar.gif'}
      >
      </MainBlockTemplate>

      <div className={"bg-gold text-black lg:py-[100px] py-[50px]"}>
        <div className="container text-center">
          <Animation>
          <h2 className={" mx-auto"}>
            Petal Restaurant is more than just a dining experience; it's a journey of taste and artistry
          </h2>
          </Animation>

           <Animation>
            <SwiperImages countEls={4} imgTemplate={'/res{**}.jpg'}/>
           </Animation>

          <div className={"flex justify-center"}>
            <a href="https://www.opentable.com/restref/client/?restref=1344616&lang=en-US&ot_source=Restaurant%20website&corrid=3a42341d-55a0-458f-805a-b07032179a17">
              <Button label={'Reserve Now'} color={'purple'} hoverColor={"purple"}></Button>
            </a>
          </div>
        </div>
      </div>

      <Interior/>
      <OurMenu/>

      <BgImageBlock bg={'/bg1.jpg'} hideBtn={true}>
        <Animation> <img  src="/PetalBig.png" className={"md:w-[295px] w-[180px] mb-[20px]"} alt=""/></Animation>
        <Animation>
          <h2 data-aos="fade-up" data-aos-delay="200" className={"max-w-[910px] mx-auto"}>
            Join us at Petal, where flavor and art unite in perfect harmony
          </h2>
        </Animation>
        <Animation>
        <p data-aos="fade-up" data-aos-delay="400" className={"max-w-[578px] mt-[20px]"}>Our commitment to healthful
            cuisine and the unparalleled beauty of Giovanni De Cunto's masterpiece combine to create a dining experience
            that is as enriching as it is indulgent. </p>
        </Animation>
      </BgImageBlock>
    </div>

  );
}

export default Restaurant;