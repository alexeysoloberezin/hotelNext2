import React from 'react';
import SectionHeader from "../components/ui/SectionHeader";
import PerfectGrid from "../components/core/PerfectGrid";

function SpaRoomEl({number, children, delay}) {
  return (
    <div
      data-aos="fade-up" data-aos-delay={delay}
      className={"flex flex-col items-center text-center"}>
      <div className={"text-[50px] font2 py-[10px]"} style={{lineHeight: 1.2}}>{number}</div>
      <h4>{children}</h4>
    </div>
  )
}

function SpaRoom(props) {
  return (
    <div className={"bg-dark lg:py-[100px] py-[50px]"}>
      {/*<div className={"grid lg:grid-cols-4 md:grid-cols-2 md:gap-[20px] gap-[50px] container pb-[150px]"}>*/}
      {/*  <SpaRoomEl delay={'150'} number={'4'} >Years <br/>of Experience </SpaRoomEl>*/}
      {/*  <SpaRoomEl delay={'350'} number={'20'} >Team <br/>Members</SpaRoomEl>*/}
      {/*  <SpaRoomEl delay={'500'} number={'80'} >Our <br/>Products</SpaRoomEl>*/}
      {/*  <SpaRoomEl delay={'650'} number={'2'} >Numbers <br/>of Salons</SpaRoomEl>*/}
      {/*</div>*/}
      <div className={"container"}>
        <SectionHeader
          text={'A cozy and relaxing space specially designed for maximum rest and rejuvenation. Music plays softly in the background, filling the space with the sounds of nature or soothing melodies that help release tension and immerse'}
          color={'white'}
          classText={"max-w-[640px] mx-auto text-center"}
          title={'Spa Room'}
          wrapperClassName={"justify-center"}
          isCenter={true}
        />
        <PerfectGrid
          imgTemplate={'/spaRoom_{**}.png'}
        />
      </div>
    </div>
  );
}

export default SpaRoom;