import React from 'react';
import SectionHeader from "../components/ui/SectionHeader";
import Slider from "../components/ui/SwiperBlock";
import BookNow from "../components/ui/BookNow";
import {accommodationData} from "../data/accod";


function Accommodation(props) {
  const accommodations = accommodationData('accommodation');

  return (
    <div className={"bg-gold lg:py-[100px] py-[50px]"}>
      <div className={"container"}>
        <SectionHeader
          text={'Our exquisite hotel rooms at Iris Hotel redefine \n' +
            'the concept of hospitality, offering a fusion \n' +
            'of convenience, luxury, and style. Each room \n' +
            'is meticulously designed to provide you with \n' +
            'a memorable and indulgent stay'}
          btnHref={'/accommodation'}
          color={'black'}
          title={'Accommodation'}
        />

        <Slider slidesData={accommodations}/>

        <div className={"mt-[80px] mx-auto flex justify-center"}>
          <BookNow
            color={"white"}
          />
        </div>
      </div>
    </div>
  );
}

export default Accommodation;