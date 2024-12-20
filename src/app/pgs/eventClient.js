'use client'

import React from 'react';
import MainBlockTemplate from "@/components/core/MainBlockTemplate";
import BookNow from "@/components/ui/BookNow";
import clsx from "clsx";
import Weddings from "@/blocks/Weddings";
import EventsPackaj from "@/blocks/EventsPackaj";
import ImageChanger from "@/components/ui/ImageChanger";
import useMediaQuery from "@/hooks/useMediaQuery";
import Animation from "@/components/Animation";
import SelectDateSection from "@/components/SelectDateSection";
import {Autoplay} from "swiper/modules";
import EvBlock from "@/blocks/EvBlock";
import {v4 as uuidv4} from "uuid";
import {Swiper, SwiperSlide} from "swiper/react";

function EventCard(props) {
  const {title, color, children, classes, titleClass} = props || {}

  const colors = {
    'white': 'text-black bg-[#FAF5FF]',
    'gold': 'text-black bg-[#ABA3D2]',
  }

  return (
    <div
      className={clsx(colors[color], 'sm:p-[20px] h-full w-full flex flex-col  p-[16px]', classes, !classes ? '' : '')}>
      <div className={clsx(titleClass, 'md:text-[25px] font-bold text-[20px] sm:mb-[10px] mb-[7px]')}
           style={{lineHeight: 1.25}}>{title}</div>
      <div className={"text-[17px] font-light opacity-[.9]"}>{children}</div>
    </div>
  )
}

function CardM({img, title, text, time, date, subtext, dateLabel}) {
  return (
    <Animation className={"flex flex-col items-center"}>
      <div className={'bg-[#FAF5FF] xl:p-[30px] sm:p-[20px] md:min-h-[660px] p-[24px] text-black'}>
        <div className={'flex flex-col sm:items-center'}>
          <img src={img} alt="" className={'h-[277px] w-full object-cover mb-[24px]'}/>
          <div
            className={'sm:text-[25px] text-[20px] sm:mb-[18px] mb-[30px] font-bold text-center sm:mt-0 mt-[-60px] sm:text-black text-white'}>{title}</div>
          <div className={'sm:space-y-[18px] space-y-[10px]'}>
            <div className={'sm:text-center  sm:text-[17px] text-[14px]  leading-[1.4]'}>{text}</div>
            {date && (
              <div className={'sm:text-[17px] text-[14px] gap-[5px] mx-auto w-fit  sm:justify-center'}>
                <b className={'font-bold inline-block mr-[4px]'}>{dateLabel ? dateLabel : 'Date:'}</b>
                {date}
              </div>
            )}
            {time && (
              <div className={'sm:text-[17px] text-[14px] gap-[5px] flex items-center sm:justify-center'}>
                <b className={'font-bold'}>Time:</b>
                <div>{time}</div>
              </div>
            )}
            {subtext && (
              <div className={'sm:text-[17px] text-[14px] gap-[5px] flex items-center sm:justify-center'}>
                <b className={'font-bold'}>Pre-Fix Menu: </b>
                <div>{subtext}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <a href="#"
           className={"uppercase sm:mt-[36px] rounded-full border border-[#5747A6] text-[#5747A6] font-bold mt-[20px] bg-[#FAF5FF] text-black   h-[43px] text-[18px] px-[30px] w-[140px] flex items-center justify-center text-center"}>register</a>
      </div>
    </Animation>
  )
}

function EventsPage() {
  const isTable = useMediaQuery(false, '(max-width: 1340px)')

  return (
    <div className={"event"}>
      <MainBlockTemplate
        title={'Events'}
        titleClass={'font-croisan'}
        video={'/ev/events.mp4'}
        videoWebM={'/ev/events.webm'}
        mobileGif={'/ev/events.gif'}
      >
        <a data-testid="linkElement" href="?sbe_internalLink" target="_self"
           className={"mt-[36px] Y3Mib0 bg-[#ABA3D2] border border-[#5747A6] text-[#5747A6] text-black   h-[50px] text-[18px] font-bold px-[30px] rounded-full flex items-center justify-center text-center max-w-full"}>
          SEND REQUEST
        </a>
      </MainBlockTemplate>

      <div className={'bg-[#ABA3D2]  md:py-[120px] pt-[80px] pb-[50px]'}>
        <h3
          className={'font-croisan sm:text-[50px] !leading-[1.2] text-[40px] text-center lg:mb-[75px] mb-[25px] text-black'}>Our
          Events</h3>

        <div className={'container'}>
          <div className={" grid lg:grid-cols-3 lg:max-w-full max-w-[600px] xl:gap-[60px] gap-[20px]"}>
            <CardM
              img={'/event/evv3.jpg'}
              title={'Christmas Dinner'}
              text={'Welcome to the annual Christmas Dinner at Iris Hotel Boston! Indulge in traditional Christmas dishes prepared by our talented chefs while enjoying the warm and cozy atmosphere of our hotel.'}
              time={'2:00-6:00 PM'}
              date={''}
              subtext={'$45.00 Per Person Optional'}
            />
            <CardM
              img={'/event/evv1.jpg'}
              title={'Life Music'}
              text={'Welcome to an exciting night of Live Music\n' +
                'with Chris! Get ready to groove to the soulful sounds of Chris as he takes the stage and entertains the crowd with his incredible talent. '}
              date={'Live Music will take place on Friday Nights'}

              dateLabel={'Date and Time: '}
            />
            <CardM
              img={'/event/evv2.jpg'}
              title={'Wine Tasting'}
              dateLabel={'Date and Time: '}
              text={'Don\'t miss out on this special event - reserve your spot today! We invite you to enjoy a complimentary wine tasting featuring a curated selection of six fine Italian wines, paired with delicious aperitivo snacks crafted by our chefs. '}
              date={'Stay tuned for updates on  our upcoming wine-tasting events! Dates and times will be announced soon. Sign up for our newsletter to be the first to know.'}
            />
          </div>
        </div>
      </div>

      <div className={'bg-[#FAF5FF] lg:pt-[140px] lg:pb-[70px] pb-[40px] pt-[90px]'}>
        <div className={'container text-[#100F0D]'}>
          <div className={'flex justify-between md:text-left text-center mx-auto'}>
            <div className={"max-w-[638px] mx-auto md:text-center sm:pt-[32px]"}>
              <Animation>
                <h4
                  className={" text-[#100F0D] font-croisan sm:text-[60px] !leading-[1.2] text-[40px] sm:text-center  mb-[10px] "}>Host
                  Your Event <br/>at Petal Restaurant</h4>
              </Animation>
              <Animation>
                <p className={"md:mb-[30px] mb-0 mt-[20px]"}>Whether it's an intimate gathering, a grand wedding reception, or
                  a
                  corporate
                  event, Petal Restaurant
                  offers
                  a beautiful and versatile space for your special occasion. With the capacity to host up to 50 guests,
                  we
                  provide an elegant setting and exceptional service to make your event unforgettable</p>
              </Animation>

              <div className={"justify-center md:flex hidden"}>
                <BookNow color={'purple'} hoverColor={'purple'}/>
              </div>
            </div>


          </div>
          <div className={''}>

            <Swiper
              modules={[Autoplay]}
              className={"!mb-[0px] md:mt-[50px] mt-[30px] md:!overflow-hidden !overflow-visible"}
              loop={true}
              autoplayspeed={400}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                700: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
              }}
            >

              {[1, 2, 3].map((item, index) => (
                <SwiperSlide key={uuidv4()}>
                  <div className="slide-content">
                    <img src={`/event/ev${item}.jpg`} className={'object-cover w-full h-full'} alt=""/>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className={'bg-[#ABA3D2] lg:pt-[190px] pt-[90px]'}>
        <div className="container">
          <div className={clsx('grid gap-[20px] md:grid-cols-2')}>
            <div className={"md:block hidden"}>
              {/*{!isTable && (*/}
              {/*  <ImageChanger*/}
              {/*    swiperClass={'h-[343px]'}*/}
              {/*    slideClass={'h-full w-full'}*/}
              {/*    swiperSlideClass={'h-full w-full'}*/}
              {/*    imgTemplate={'/pric/pric{**}.jpg'}*/}
              {/*    classes={'h-full w-full object-cover'}*/}
              {/*  />*/}
              {/*)}*/}
              <img src="/event/incl_1.jpg" className={"border border-1 border-black w-full h-full object-cover"}
                   alt=""/>
            </div>
            <div>

              <Animation>
                <h2 className={'text-black md:text-left text-center mb-[30px] font-croisan sm:text-[50px] !leading-[1.2] text-[40px]'}>
                  Included Services
                </h2>
              </Animation>

              <div className={""}>
                <div className={"grid grid-cols-2 md:gap-x-[20px] md:gap-y-[11px] gap-[12px]"}>
                  <div
                    className={"bg-[#FAF5FF] text-black order-1 md:text-[25px] text-[20px] py-[30px] px-[20px] text-center leading-[1.1] flex items-center justify-center"}>Spa
                    Access
                  </div>
                  <div
                    className={"bg-[#FAF5FF] text-black md:text-[25px] text-[20px] md:order-2 order-6 md:col-span-1 col-span-2 py-[30px] px-[20px] text-center leading-[1.1] flex items-center justify-center"}>Room
                    upgrades for the bride and groom
                  </div>
                  <div
                    className={"bg-[#FAF5FF] text-black order-3 md:text-[25px] text-[20px] py-[30px] px-[20px] text-center leading-[1.1] flex items-center justify-center"}>Vendor
                    Coordination
                  </div>
                  <div
                    className={"bg-[#FAF5FF] text-black order-4 md:text-[25px] text-[20px] py-[30px] px-[20px] text-center leading-[1.1] flex items-center justify-center"}>Complimentary
                    Perks
                  </div>
                  <div
                    className={"bg-[#FAF5FF] text-black order-5  md:text-[25px] text-[20px] py-[30px] px-[20px] text-center leading-[1.1] flex items-center justify-center"}>Restaurant
                    Bookings
                  </div>
                </div>

                <img src="/event/incl_2.jpg" className={"md:hidden mt-[30px] border border-1 border-black w-full h-full object-cover"}
                     alt=""/>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className={'bg-[#ABA3D2] pt-[40px] pb-[120px]'}>
      <div className="container">
          <div className={clsx('gap-[20px] grid md:grid-cols-2')}>

            <div>
              <h4 className={'text-black md:text-left text-center mb-[30px] font-croisan sm:text-[50px] !leading-[1.2] text-[40px]'}>Additional
                Services:</h4>

              <div className={"grid grid-cols-2 md:pr-[51px] md:gap-[13px] gap-[12px]"}>
                <EventCard color={'white'} title={'Live Music:'}>
                  <p className={'md:text-[18px] text-[14px] font-medium leading-tight'}>Available for weekend
                    evenings</p>
                </EventCard>
                <EventCard color={'white'} title={'Custom Menu:'}>
                  {/*<p className={'md:text-[16px] text-[14px] font-medium opacity-70 mt-[10px] mb-[9px]'}>(12:00 PM - 3:00 PM)</p>*/}
                  <p className={'md:text-[18px] text-[14px] font-medium leading-tight'}>Tailored to your preferences,
                    with final
                    approval by our
                    chef, Igor</p>
                </EventCard>
                <EventCard color={'white'} title={'Decorators: '}>
                  <p className={'md:text-[18px] text-[14px] font-medium leading-tight'}>Available at an additional
                    charge</p>
                </EventCard>
                <EventCard color={'white'} title={'Customized Catering:'}>
                  <p className={'md:text-[18px] text-[14px] font-medium leading-tight'}>
                    Our chef can create à la carte, buffet, or pre-fixed menus tailored to your event
                  </p>
                </EventCard>

              </div>
            </div>
            <div className={""}>
              <img src="/event/incl_2.jpg"
                   className={'border md:block hidden border-1 border-black w-full h-full object-cover'}
                   alt=""/>
              <img src="/event/incl_1.jpg"
                   className={'border md:hidden border-1 border-black w-full h-full object-cover'}
                   alt=""/>
            </div>
          </div>
      </div>
      </div>


      <div className={'bg-[#FAF5FF] text-black lg:py-[100px] text-[#D1B31C] py-[85px]'}>
        <div className="container">
          <div className="max-w-[370px] mx-auto text-center lg:mb-[50px] mb-[30px]">
            <Animation>
              <h4 className={'mb-[10px] font-croisan  sm:text-[50px] !leading-[1.3] text-[40px]'}>Catering</h4>
            </Animation>
            <Animation>
              <p>Tailored to your preferences, with final approval by our chef, Igor</p>
            </Animation>
          </div>
        </div>
        <div className={clsx(' grid-cols-3 gap-[20px] lg:px-0 px-[15px]', isTable ? '' : 'grid')}>
          {!isTable && (
            <Animation className={'h-full'}>
              <img src="/catering/catering1.jpg" className={"w-full h-[334px] object-cover"} alt=""/>
            </Animation>
          )}
          <Animation className={'h-full'}>
            <img src="/catering/catering2.jpg" className={"w-full lg:h-[334px] h-[334px] object-cover"} alt=""/>
          </Animation>

          {!isTable && (
            <Animation className={'h-full'}>
              <img src="/catering/catering3.jpg" className={"w-full h-[334px] object-cover"} alt=""/>
            </Animation>
          )}
        </div>
      </div>


      <Weddings/>

      <EventsPackaj/>

      <EvBlock/>


      <SelectDateSection/>
    </div>
  );
}

export default EventsPage;