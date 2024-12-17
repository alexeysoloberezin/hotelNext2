import React, from 'react';
import clsx from "clsx";
import MainBlock from "../blocks/MainBlock";
import AboutUs from "../blocks/AboutUs";
import Accommodation from "../blocks/Accommodation";
import BgImageBlock from "../blocks/BgImageBlock";
import Bar from "../blocks/Bar";
import Spa from "../blocks/Spa";
import Contacts from "../blocks/Contacts";
import Facilities from "../blocks/Facilities";

export const metadata = {
  title: "Iris Hotel Boston - Luxury Rooms, 24/7 Services, Restaurant, Bar & Spa",
  description: "Whether you\\'re traveling for business or a romantic getaway, experience the elegance of comfort at Iris Hotel Boston, nestled in the safest neighborhood of Boston-Brookline. Enjoy 120 luxurious apartments, a restaurant, bar, and spa. Located at 30 Webster St, Brookline, MA 02446. Open 24/7. Check-in at 3:00 PM, check-out at 11:00 AM. Find us on Google Maps.",
};

function Home() {

  return (
    <div className={clsx(' relative  flex flex-col homePage')}>
      <MainBlock />

      <img src="" alt=""/>

      <div style={{minHeight: '80vh'}}>
        <Accommodation/>
      </div>

      <div style={{minHeight: '100vh'}}>
        <>

          <AboutUs/>

          <BgImageBlock bg={'/bg1.jpg'} href={'/restaurant'} topImg={'/petalLogo.png'}>
            <h1 data-aos={'fade-up'} data-aos-delay={'0'}>Petal Restaurant</h1>
            <p data-aos={'fade-up'} data-aos-delay={'150'} className={"max-w-[578px] mt-[20px]"}>Indulge in breakfast or
              dinner in our elegantly adorned
              restaurant, featuring a selection of healthy cuisine,
              all while marveling at the ceiling painted by the renowned Italian artist, Giovanni De Cunto. </p>
          </BgImageBlock>
          <Bar/>
          <Facilities/>

          <Spa/>
          <Contacts/>
        </>
      </div>
    </div>
  );
}

export default Home;