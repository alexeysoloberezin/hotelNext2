import React, {useEffect, useRef} from 'react';
import MainBlockTemplate from "../components/core/MainBlockTemplate";
import BookNow from "../components/ui/BookNow";
import clsx from "clsx";
import Weddings from "../blocks/Weddings";
import EventsPackaj from "../blocks/EventsPackaj";
import ImageChanger from "../components/ui/ImageChanger";
import useMediaQuery from "../hooks/useMediaQuery";
import Animation from "../components/Animation";
import { Helmet } from "react-helmet-async";

function EventCard({title, color, children, classes, titleClass}) {
  const colors = {
    'white': 'text-black bg-white',
    'gold': 'text-black bg-gold',
  }

  return (
    <div className={clsx(colors[color], 'sm:p-[20px] p-[16px]', classes)}>
      <div className={clsx(titleClass, 'md:text-[25px] text-[20px] sm:mb-[10px] mb-[7px] font-medium')}
           style={{lineHeight: 1.15}}>{title}</div>
      <div>{children}</div>
    </div>
  )
}

function EventsPage(props) {
  const isTable = useMediaQuery(false, '(max-width: 1340px)')

  return (
    <div className={"event"}>
      <Helmet>
        <title></title>

        <meta name="description" content="" />
      </Helmet>

      <MainBlockTemplate
        title={'Events'}
        video={'/ev/events.mp4'}
        videoWebM={'/ev/events.webm'}
        mobileGif={'/ev/events.gif'}
      >
      </MainBlockTemplate>

      <div className={'lg:bg-dark bg-[#0E4840] lg:py-[200px] py-[90px]'}>
        <div className={'container '}>
          <div className={'flex justify-between'}>
            <div className={"lg:block hidden"}>
              <Animation> <img src="/event/ev1.jpg" className={'w-[264px] aspect-square'} alt=""/>
              </Animation>

            </div>
            <div className={"max-w-[638px] md:text-center sm:pt-[32px]"}>
              <Animation>
                <h2 className={"mb-[25px] bigMob"}>Host Your Event <br/>at Petal Restaurant</h2>
              </Animation>
              <Animation>
                <p className={"sm:mb-[30px]"}>Whether it's an intimate gathering, a grand wedding reception, or
                  a
                  corporate
                  event, Petal Restaurant
                  offers
                  a beautiful and versatile space for your special occasion. With the capacity to host up to 50 guests,
                  we
                  provide an elegant setting and exceptional service to make your event unforgettable</p>
              </Animation>

              <div className={"justify-center md:flex hidden"}>
                <BookNow color={'white'} hoverColor={'purple'}/>
              </div>
            </div>
            <div className={'lg:block hidden'}>
              <Animation>
                <img src="/event/ev2.jpg" className={'w-[269px] aspect-square mt-[-70px]'} alt=""/>
              </Animation>

            </div>
          </div>
          <div className={"md:flex justify-around  md:mt-[50px] mt-[20px] md:gap-[20px]"}>
            <Animation> <img src="/event/ev3.jpg" className={'lg:w-[292px] md:block hidden object-cover lg:h-[292px]'}
                             alt=""/>
            </Animation>

            <Animation> <img src="/event/ev4.jpg" className={'lg:w-[328px] w-full max-w-[400px] object-cover lg:h-[328px]'} alt=""/>
            </Animation>

          </div>
        </div>
      </div>

      <div className={'bg-gold lg:py-[190px] py-[90px]'}>
        <div className="container">
          <div className={clsx('grid gap-[20px]', !isTable ? 'grid-cols-2' : '')}>
            <div>

              <Animation>
                <h2 className={'text-black mb-[30px] bigMob'}>
                  Event <br className={"md:hidden block"}/> Packages & <br
                  className={"md:hidden block"}/> Pricing
                </h2>
              </Animation>

              <div className={"grid md:grid-cols-[2fr_1fr] md:gap-[20px] gap-[12px]"}>
                <div className={"grid grid-cols-2 md:gap-[20px] gap-[12px]"}>
                  <EventCard color={'white'} title={'Capacity: '}>
                    <p className={'md:text-[18px] text-[14px] font-medium '}>Up to 50 guests</p>
                  </EventCard>
                  <EventCard color={'white'} title={'Weekly Rates: '}>
                    <p className={'md:text-[18px] text-[14px] font-medium '}>$5,000</p>
                  </EventCard>
                  <EventCard color={'white'} title={'Cost per Guest: '} titleClass={'max-w-[128px]'}>
                    <p className={'md:text-[18px] text-[14px] font-medium '}>$150</p>
                  </EventCard>

                  <EventCard color={'white'} title={'Lunch Events:'}>
                    <p
                      className={'md:text-[16px] text-[13px] font-medium opacity-70 sm:mt-[10px] my-[4px] sm:mb-[9px]'}>(12:00
                      PM -
                      3:00 PM)</p>
                    <p className={'md:text-[18px] text-[14px] font-medium '}>Minimum $3,000</p>
                  </EventCard>
                </div>
                <div>
                  <div className={'p-[20px] bg-white text-black h-full flex sm:block gap-[20px]'}>
                    <div>
                      <div className={'md:text-[25px] text-[20px] sm:mb-[10px] mb-[4px] font-medium'}
                           style={{lineHeight: 1.1}}>Venue Rental:
                      </div>
                      <p
                        className={'md:text-[16px] text-[14px] font-medium opacity-70 sm:mt-[10px] mt-[3px] mb-[15px]'}>(Friday,
                        Saturday,
                        Sunday): </p>
                    </div>
                    <div className={"sm:w-fit w-[70%]"}>
                      <p className={'md:text-[18px] text-[14px] font-medium  sm:mb-[15px] mb-[3px]'}>$6,000 for
                        exclusive
                        use </p>
                      <p className={'md:text-[18px] text-[14px] font-medium '}>from 5:00 PM <br/>to 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {!isTable && (
                <ImageChanger
                  swiperClass={'h-[343px]'}
                  slideClass={'h-full w-full'}
                  swiperSlideClass={'h-full w-full'}
                  imgTemplate={'/pric/pric{**}.jpg'}
                  classes={'h-full w-full object-cover'}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={'bg-white lg:py-[200px] py-[90px]'}>
        <div className="container">
          <div className={clsx('gap-[20px]', !isTable ? 'grid-cols-2 grid' : 'flex flex-col-reverse')}>
            <div>
              <ImageChanger
                swiperClass={'h-[360px]'}
                slideClass={'h-full w-full'}
                swiperSlideClass={'h-full w-full'}
                imgTemplate={'/add/add{**}.jpg'}
                classes={'h-full w-full object-cover'}
              />
            </div>
            <div>
              <h2 className={'text-black mb-[30px] bigMob'}>Additional Services:</h2>
              <div className={"grid md:grid-cols-[2fr_1fr] md:gap-[20px] gap-[12px]"}>
                <div className={"grid grid-cols-2 md:gap-[20px] gap-[12px]"}>
                  <EventCard color={'gold'} title={'Live Music:'}>
                    <p className={'md:text-[18px] text-[14px] font-medium leading-tight'}>Available for weekend
                      evenings</p>
                  </EventCard>
                  <EventCard color={'gold'} title={'Decorators: '}>
                    <p className={'md:text-[18px] text-[14px] font-medium leading-tight'}>Available at an additional
                      charge</p>
                  </EventCard>
                  <EventCard color={'gold'} title={'Custom Menu:'} classes={'col-span-2 lg:max-w-[314px]'}>
                    {/*<p className={'md:text-[16px] text-[14px] font-medium opacity-70 mt-[10px] mb-[9px]'}>(12:00 PM - 3:00 PM)</p>*/}
                    <p className={'md:text-[18px] text-[14px] font-medium leading-tight'}>Tailored to your preferences,
                      with final
                      approval by our
                      chef, Igor</p>
                  </EventCard>
                </div>
                <div>
                  <EventCard color={'gold'} title={'Buffet or À la Carte: '} classes={'grid-rows-2 h-full'}>
                    <p className={'md:text-[18px] text-[14px] font-medium leading-tight md:mb-[15px]'}>Choose from our
                      flexible dining
                      options to suit
                      your event</p>
                  </EventCard>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className={'bg-dark lg:py-[100px] py-[50px]'}>
        <div className="container">
          <div className="max-w-[370px] mx-auto text-center lg:mb-[50px] mb-[30px]">
            <Animation>
              <h2 className={'mb-[30px] bigMob'}>Catering</h2>
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

      <div className={'md:bg-gold bg-purple lg:py-[200px] pt-[100px] pb-[50px] text-black'}>
        <div className={'container '}>
          <div className={'flex justify-between'}>
            <div>
              {!isTable && (
                <img src="/decor/decor1.jpg" className={'w-[267px] h-[236px] object-cover'} alt=""/>
              )}
            </div>
            <div className={"max-w-[500px] text-center lg:pt-[90px]"}>
              <Animation>
                <h2 className={"mb-[25px] bigMob"}>Decorations <br className={'md:hidden'}/> for your <br/> holiday</h2>
              </Animation>
              <Animation>
                <p className={"mb-[30px] max-w-[350px] mx-auto font-medium"}>
                  Our wedding packages include live music, a projector for special moments, and customizable lunch or
                  dinner receptions.
                </p>
              </Animation>
              {isTable && (
                <Animation>
                  <img src="/decor/decor1.jpg" className={'w-full h-auto object-cover'} alt=""/>
                </Animation>
              )}
            </div>
            <div>
              {!isTable && (
                <img src="/decor/decor2.jpg" className={'w-[310px] h-[313px] object-cover mt-[-70px]'} alt=""/>
              )}
            </div>
          </div>
          {!isTable && (
            <div className={"flex justify-around mt-[50px]"}>
              <img src="/decor/decor3.jpg" className={'w-[327px] object-cover h-[225px]'} alt=""/>
              <img src="/decor/decor4.jpg" className={'w-[418px] object-cover h-[276px] mt-[35px]'} alt=""/>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default EventsPage;