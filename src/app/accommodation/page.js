import React from 'react';
import MainBlockTemplate from "@/components/core/MainBlockTemplate";
import ZBlock from "@/blocks/ZBlock";
import BookNow from "@/components/ui/BookNow";
import Accommodation2 from "@/blocks/Accommodation2";
import BlockT from "@/blocks/BlockT";
import BgImage from "@/blocks/BgImage";
import Animation from "@/components/Animation";
import GridC from "@/blocks/GridC";
import BaseGrids from "@/blocks/BaseGrids";

export const metadata = {
  title: "Accommodation | IRIS HOTEL Boston – Luxury Apartments & Suites",
  description:
    "Explore our premium accommodations at IRIS HOTEL Boston, featuring 119 luxurious apartments and suites with modern amenities and elevator access, perfect for both leisure and business stays.",
  openGraph: {
    title: "Accommodation | IRIS HOTEL Boston – Luxury Apartments & Suites",
    description:
      "Explore our premium accommodations at IRIS HOTEL Boston, featuring 119 luxurious apartments and suites with modern amenities and elevator access, perfect for both leisure and business stays.",
    url: "https://your-hotel-site.com/accommodation",
    type: "website",
  },
};

function Accommodation() {
  return (
    <div>
      <MainBlockTemplate
        title={'Accommodation'}
        image={'/acodd.jpg'}
        description={'Indulge in Unmatched Comfort and Luxury at Iris Hotel'}
      >
      </MainBlockTemplate>

      <ZBlock
        title={'Guest Rooms'}
        imgTemplate={'/accom{**}.jpg'}
        text1={'Our exquisite hotel rooms at Iris Hotel redefine  the concept of hospitality, offering a fusion  of convenience, luxury, and style. Each room  is meticulously designed to provide you with  a memorable and indulgent stay.'}
        text2={'As you step into your sanctuary, you\'ll immediately notice the attention to detail. Every room features a fully equipped kitchenette, allowing you the flexibility to prepare your own meals or snacks whenever you desire. The kitchenette is stocked with all the essentials you need for a comfortable stay.'}
      >
        <BookNow color={"white"}/>
      </ZBlock>

      <Accommodation2/>

      <BlockT
        title={'But it\'s the little touches that set Iris Hotel apart'}
        imgTemplate={'/apart{**}.jpg'}
      >
        <p className={"mb-[25px]"}>Our exclusive bath amenities by Salvatore Ferragamo elevate your bathing experience
          to a new level of indulgence, ensuring you feel pampered from head to toe.</p>
        <p>What sets us apart even further is that Iris Hotel is the sole destination in the United States to offer
          these exclusive Salvatore Ferragamo amenities, making your stay with us truly exceptional.</p>
      </BlockT>
      <ZBlock
        title={'Iris Suite'}
        imgTemplate={'/suite{**}.jpg'}
        text1={'Our accommodations offer a range of options, including our exquisite Iris Suite, complete with  a Jacuzzi and a fireplace, making it the perfect choice for honeymooners and couples celebrating their special day'}
        text2={''}
      >
        <div className="mt-[20px]">
          <BookNow  color={"white"} hoverColor={""}/>
        </div>
      </ZBlock>

      <BlockT
        title={'Room with Kitchenettes'}
        imgTemplate={'/roomKitchen{**}.jpg'}
      >
        All our guest rooms feature a The hotel will provide guests with air-conditioned rooms offering a desk, a coffee
        machine, a fridge, a microwave, a safety deposit box, a flat-screen TV and a private bathroom with a shower. All
        guest rooms include a closet
      </BlockT>

      <BgImage img={'/bg5.jpg'}>
        <div
          data-aos={'fade-up'} data-aos-delay={'150'}
          className={"md:text-[30px] text-[18px] md:max-w-[771px] max-w-[205px] text-center leading-normal max-w-[771px]"}>
          Sink into our plush, luxuriously appointed bedding, which promises a restful night's sleep like no other.
          Wrap yourself in the sumptuous bathrobes and slip into the soft slippers provided for your ultimate
          relaxation.
        </div>
      </BgImage>

      <GridC
        title={'Awaken your senses'}
        imgTemplate={'/awaken{**}.jpg'}
        text1={'Awaken your senses with the convenience of  a Nespresso coffee maker, allowing you to savor a perfect cup of coffee or espresso at your leisure. Stay connected and entertained with  a Smart TV, providing access to a world  of entertainment and information.'}>
      </GridC>

      <BaseGrids imgTemplate={'/take{**}.jpg'} title={'Taking care of you'} texts={[
        'At Iris Hotel, we are dedicated to providing you with a memorable and unparalleled experience',
        'Our rooms are designed to exceed your expectations, ensuring that your stay is not just comfortable, but truly extraordinary',
        'Whether you\'re here for business  or leisure, Iris Hotel is your haven  of luxury, style, and convenience'
      ]}>
      </BaseGrids>
    </div>

  );
}

export default Accommodation;