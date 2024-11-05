'use client'

import React from 'react';
import MainBlockTemplate from "@/components/core/MainBlockTemplate";
import Button from "@/components/ui/Button";
import GridEls from "@/blocks/GridEls";
import SpaRoom from "@/blocks/SpaRoom";
import Facials from "@/blocks/Facials";
import Contacts from "@/blocks/Contacts";
import useMediaQuery from "@/hooks/useMediaQuery";
import Animation from '@/components/Animation';

function Page() {
  const isMobile = useMediaQuery(false, '(max-width: 600px)');

  return (
    <div>
      <MainBlockTemplate
        title={'Spa Room'}
        image={'/spaMain.jpg'}
        description={'where design meets comfort'}
      >
        <div className={""}>
          <a target={'_blank'} href="https://na.spatime.com/wag02446/4840817/home">
            <Button color={'purple'} hoverColor={'purple'}>
              Book now
            </Button>
          </a>
        </div>
      </MainBlockTemplate>

      <div className={"bg-[#181818] md:pt-[100px] pt-[50px] overflow-hidden"}>
        <Animation>
          <div>
            <img className={"max-w-[110px] mx-auto mb-[30px]"} src="/irisSpa.png" alt=""/>
            <p className={"max-w-[893px] px-[30px] mx-auto text-center relative z-20"}>The soft sounds of music, the
              scent
              of essential oils, and comfortable relaxation areas enhance the perfect
              atmosphere, promoting deep relaxation and energy renewal. The spa center is a place where you can forget
              everyday worries, fully immerse yourself in a state of peace, and enjoy moments of true bliss</p>
          </div>


        </Animation>

        {!isMobile
          ? <img src="/spaImg.png"
                 className={"xl:h-auto h-[580px] relative left-1/2 translate-x-[-50%] md:ml-0 ml-[40px] md:mt-0 mt-[-40px]   origin-bottom w-fit xl:max-w-screen max-w-[1920px]"}
                 alt=""/>
          : <img src="/spaImg_mob.png" alt=""/>
        }
      </div>

      {/*<div>*/}
      {/*  <GridEls*/}
      {/*    title={'Our Service'}*/}
      {/*    cols={2}*/}
      {/*    classes={'max-w-[900px]  mx-auto'}*/}
      {/*    arr={[*/}
      {/*      {*/}
      {/*        title: 'Deep Tissue Massage',*/}
      {/*        text: 'Targets the deeper layers of muscle and connective tissue',*/}
      {/*        img: '/ourService_2.png'*/}
      {/*      },*/}
      {/*      {*/}
      {/*        title: 'Tranquil Escape',*/}
      {/*        text: 'The art of healing through the  use of plant-extracts.',*/}
      {/*        img: '/ourService_3.png'*/}
      {/*      }*/}
      {/*    ]}*/}
      {/*  />*/}
      {/*</div>*/}

      <SpaRoom />

      <Facials/>
      
      <div className={"bg-[#000] lg:py-[100px] py-[50px] px-[10px]"}>
        <div className="container relative min-h-[485px] flex flex-col justify-center bg-[#2D2626] md:p-[40px] p-[30px]">
          <div>
            <div className={"relative z-[15] md:mt-0 mt-[300px]"}>
              <img src="/emi.png" alt=""/>
              <div className={"lg:text-[40px] md:text-[30px] text-[22px] mt-[50px] font2 max-w-[800px] leading-snug font-normal"} style={{letterSpacing: 1.05}}>
                Experience the Extraordinary with <br className={"md:block hidden"}/>
                the Beyond Organic Eminence Skin Care.
              </div>
            </div>
            <div className={""}>
              <div className={"brrGrad"}></div>
              <img src="/brr2.png" className={"object-cover md:h-full h-[330px] absolute top-0 right-0  md:w-1/2 w-full"} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <Contacts/>
    </div>
  );
}

export default Page;