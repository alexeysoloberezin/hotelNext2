import React from 'react';
import MainBlockTemplate from "@/components/core/MainBlockTemplate";
import AboutBlock from "@/blocks/AboutBlock";
import NonPerfectGrid from "@/components/core/NonPerfectGrid";
import OurServices from "@/blocks/OurServices";
import CardImageGrid from "@/components/core/CardImageGrid";
import BgImage from "@/blocks/BgImage";
import Animation from "@/components/Animation";
import ContactUs from "@/blocks/ContactUs";


export const metadata = {
  title: "About Us | IRIS HOTEL Boston – Luxury Hotel in the Heart of Boston",
  description:
    "Discover IRIS HOTEL Boston, offering modern luxury with 119 apartments, elevators, a top-tier restaurant, a spa, and more. Experience comfort and elegance at the heart of Boston.",
  openGraph: {
    title: "About Us | IRIS HOTEL Boston – Luxury Hotel in the Heart of Boston",
    description:
      "Discover IRIS HOTEL Boston, offering modern luxury with 119 apartments, elevators, a top-tier restaurant, a spa, and more. Experience comfort and elegance at the heart of Boston.",
    url: "https://your-hotel-site.com/about",
    type: "website",
  },
};

function AboutUs() {
  return (
    <>
      <MainBlockTemplate
        title={'About Us'}
        image={'/aboutBg.jpg'}
      >
      </MainBlockTemplate>

      <AboutBlock imgTemplate={'/aboutImg{**}.jpg'}></AboutBlock>

      <div className={"bg-purple lg:py-[100px] py-[50px] text-black"}>
        <div className="container">
          <div className={"grid lg:grid-cols-[33%_55%] mb-[50px]"}>
            <Animation className={'text-[50px] leading-snug font2 '}>Our&nbsp;Hotel</Animation>
            <Animation className={"pt-[8px]"}>Iris Hotel Boston is ideally located in the picturesque neighborhood of
              Brookline, just minutes from
              the
              city’s main attractions. We offer 119 modern and elegant suites, equipped with all the amenities for your
              comfort.
            </Animation>
          </div>

          <NonPerfectGrid imgTemplate={'/our{**}.jpg'}/>
        </div>
      </div>

      <OurServices/>
      <CardImageGrid
        title={'Explore Boston'}
        text={'Our location is perfect for exploring Boston. Here are some places you might want to visit during your stay:'}
        data={[
          {
            img: "/explore1.jpg",
            title: 'Museum of Fine Arts',
            text: "One of the largest art museums in the United States, featuring collections from ancient to contemporary art.",
            link: "https://www.mfa.org/",
            linkText: "Visit the Museum of Fine Arts"
          },
          {
            img: "/explore2.jpg",
            title: 'Boston University and College',
            text: " Proximity to renowned educational institutions where you can enjoy architectural and cultural landmarks.",
            link: "https://www.bu.edu/",
            linkText: "Learn about Boston University"
          },
          {
            img: "/explore3.jpg",
            title: 'Faneuil Hall Marketplace',
            text: "A historic market and event center known for its street performers and lively atmosphere.",
            link: "https://www.faneuilhallmarketplace.com/",
            linkText: "Explore Faneuil Hall Marketplace"
          },
          {
            img: "/explore4.jpg",
            title: 'New England Aquarium',
            text: "An engaging destination for the whole family with marine life exhibits and interactive displays.",
            link: "https://www.neaq.org/",
            linkText: "Check out the New England Aquarium"
          },
          {
            img: "/explore5.jpg",
            title: 'The Boston Public Library',
            text: "One of the largest public libraries in the United States. The library building is one of the finest examples of neo-Renaissance architecture in America",
            link: "https://maps.app.goo.gl/Q2DKM77bbQEhtBbj7?g_st=com.google.maps.preview.copy",
            linkText: "Visitor The Boston Public Library"
          },
          {
            img: "/explore6.jpg",
            title: 'Coolidge Corner Theatre',
            text: "The Coolidge Corner Theater is a nonprofit independent film center and community cultural center in the Coolidge Corner neighborhood of Brooklyn",
            link: "https://www.google.com/maps/place/Coolidge+Corner+Theatre/@42.3426766,-71.1224952,17z/data=!3m1!4b1!4m6!3m5!1s0x89e379bfbf3bb16b:0xb1a8317019f31a71!8m2!3d42.3426766!4d-71.1224952!16s%2Fm%2F0cz840w?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D",
            linkText: "Visitor Coolidge Corner Theatre"
          },
          {
            img: "/explore7.jpg",
            title: 'View Boston',
            text: "View Boston is an observatory that offers views of the city from the top three levels of the iconic Prudential Tower",
            link: "https://www.google.com/maps?q=View+Boston,+800+Boylston+St+Floor+52,+Boston,+MA+02199&ftid=0x89e37b541b934729:0xfeeeb662fb79f2a2&entry=gps&lucs=,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTI5LjEuODA5MjAYACCenQoqWiw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICVVM%3D&g_st=com.google.maps.preview.copy",
            linkText: "Visitor View Boston"
          },
          {
            img: "/explore8.jpg",
            title: 'Fenway Park',
            text: "Baseball stadium near Kenmore Square in Boston, Massachusetts. The Boston Red Sox have played their home games at this stadium Fenway Park ",
            link: "https://www.google.com/maps?q=Fenway+Park,+4+Jersey+St,+Boston,+MA+02215&ftid=0x89e379f63f253f6f:0xa2800dcb647a5504&entry=gps&lucs=,94224825,94227247,94227248,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISDTYuMTI5LjEuODA5MjAYACCs3wEqWiw5NDIyNDgyNSw5NDIyNzI0Nyw5NDIyNzI0OCw0NzA3MTcwNCw0NzA2OTUwOCw5NDIxODY0MSw5NDIwMzAxOSw0NzA4NDMwNCw5NDIwODQ1OCw5NDIwODQ0N0ICVVM%3D&g_st=com.google.maps.preview.copy",
            linkText: "Visitor Fenway Park"
          },

        ]}
      />

      <BgImage img={'/phil.jpg'}>
        <Animation>
          <div className={"lg:text-[100px] text-[50px] font2 leading-[1.1] text-center"}>Our <br className={"md:hidden"}/> Philosophy</div>
          <div className={"max-w-[485px] mx-auto mt-[15px] text-center"}>At Iris Hotel Boston, we strive to create an atmosphere of comfort and relaxation. Our friendly and
            professional staff are ready to assist with any requests and make your stay as enjoyable as possible.
          </div>
        </Animation>
      </BgImage>

      <ContactUs />
    </>
  );
}

export default AboutUs;