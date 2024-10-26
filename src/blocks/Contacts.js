'use client'
import React from 'react';
import FaqItem from "../components/ui/FaqItem";
import clsx from "clsx";

function ContactsBlock() {
  return (
    <>
      <h2 className={"mb-[20px]"}>Getting here</h2>
      <p className={"mb-[20px]"}>30 Webster St, Brookline, MA 02446, United States</p>
      <a href="tel:+18575766900" className={"mb-[50px] block underline"}>+18575766900</a>
    </>
  )
}

function ContactsSubtitle({img, title, imgClass, text}) {
  return (
    <div>
      <div className={"flex gap-[15px]"}>
        <div>
          <img src={img} className={clsx(imgClass || 'max-w-[20px] mt-[5px]')} alt=""/>
        </div>
        <div>
          <h4>{title}</h4>
          {text
            ? <div className={"mt-[15px] max-w-[210px]"}>{text}</div>
            : null
          }
        </div>
      </div>

    </div>
  )
}

function Contacts({showHotelInfo}) {
  return (
    <div className={"bg-dark lg:py-[100px] py-[50px]"}>
      {showHotelInfo
        && <div className="container md:pb-[170px] pb-[100px]">
          <h2 className={"md:mb-[50px] mb-[20px]"}>Hotel Information</h2>
          <div className={"flex md:flex-row flex-col justify-between md:gap-[30px] gap-[20px]"}>
            <div className={"flex flex-col md:gap-[15px] gap-[20px]"}>
              <ContactsSubtitle img={'/timer.png'} title={'Check in is 4 pm'}/>
              <ContactsSubtitle img={'/timer.png'} title={'Check out is 11 am'}/>
            </div>
            <div>
              <ContactsSubtitle img={'/pet.png'} title={'Pets Policy'} text={'Only official guide dogs are allowed'}/>
            </div>
            <div>
              <ContactsSubtitle img={'/icon_faq1.png'} title={'Parking'} text={'Daily: $60'}/>
            </div>
          </div>
        </div>
      }

      <div className="container flex lg:flex-row flex-col-reverse lg:gap-[90px] gap-[20px]">
        <div className={"lg:w-[35%] shrink-0"}>
          <div data-aos="fade-up" className={"lg:block hidden"}>
            <ContactsBlock/>
          </div>

          <FaqItem
            delay={'150'}
            title={'Parking'}
            icon={'/icon_faq1.png'}
          >
            <div className={"flex flex-col md:gap-[10px] gap-[5px]"}>
              Enjoy the convenience of on-site valet parking at Iris Hotel Boston. For just $60 per day, you can rest
              easy knowing your vehicle is secure and easily accessible throughout your stay.
            </div>
          </FaqItem>

          <FaqItem
            delay={'300'}
            title={'Boston Logan International Airport'}
            icon={'/icon_faq2.png'}
          >
            <div className={"flex flex-col md:gap-[10px] gap-[5px]"}>
              <p>Distance from Property: 7.9 Miles</p>
              <div>Phone Number: <a className={"underline"} href="tel:+18002356426">+1 800-235-6426</a></div>
              <a href="https://www.massport.com/logan-airport" className={"underline"}>Visit Website</a>

              <div className={"mt-[20px]"}>Alternate Airport Transportation:</div>
              <div>MBTA- Green Lind C- Train, Coolidge corner; fee: 2.00 USD (one way)</div>
            </div>
          </FaqItem>

          {/*<FaqItem*/}
          {/*  delay={'450'}*/}
          {/*  title={'T.F. Green Airport'}*/}
          {/*  icon={'/icon_faq2.png'}*/}
          {/*>*/}
          {/*  <div className={"flex flex-col md:gap-[10px] gap-[5px]"}>*/}
          {/*    <p>Distance from Property: 58.2 Miles</p>*/}
          {/*    <div>Phone Number: <a className={"underline"} href="tel:+18882687222">+1 888-268-7222</a></div>*/}
          {/*    <a href="#" className={"underline"}>Visit Website</a>*/}

          {/*    <div className={"mt-[20px]"}>Alternate Airport Transportation:</div>*/}
          {/*    <div>Hello Limo; fee: 100.00 USD (one way); reservation required</div>*/}
          {/*  </div>*/}
          {/*</FaqItem>*/}

          {/*<FaqItem*/}
          {/*  delay={'600'}*/}
          {/*  title={'Manchester-Boston Regional Airport'}*/}
          {/*  icon={'/icon_faq2.png'}*/}
          {/*>*/}
          {/*  <div className={"flex flex-col md:gap-[10px] gap-[5px]"}>*/}
          {/*    <p>Distance from Property: 55.6 Miles</p>*/}
          {/*    <div>Phone Number: <a className={"underline"} href="tel:+16036246556">+1 603-624-6556</a></div>*/}
          {/*    <a href="#" className={"underline"}>Visit Website</a>*/}

          {/*    <div className={"mt-[20px]"}>Alternate Airport Transportation:</div>*/}
          {/*    <div>Hello Limo; fee: 100.00 USD (one way); reservation required</div>*/}
          {/*  </div>*/}
          {/*</FaqItem>*/}

          <FaqItem
            delay={"750"}
            title={'Other Transportation'}
            icon={'/icon_faq3.png'}
          >
            <div className={"flex flex-col md:gap-[10px] gap-[5px]"}>
              <b className={"mt-[20px] mb-[15px]"}>Nearby:</b>

              <b>Bus Station:</b>

              <a href="http://www.mbta.com/schedules_and_maps/rail/lines/stations/?stopId=191" className={"underline"}>South
                Station</a>
              <a
                href="http://www.mbta.com/schedules_and_maps/rail/lines/stations/?stopId=13&lat=42.347153&lng=-71.075769"
                className={"underline"}>Back Bay Station</a>
              <b className={"mt-[20px] "}>Subway Station:</b>

              <a href="http://www.mbta.com/schedules_and_maps/subway/" className={"underline"}>Greenline-Coolidge Corner
                1 block</a>

              <b className={"mt-[20px]"}>Train Station:</b>

              <a
                href="http://www.mbta.com/schedules_and_maps/rail/lines/stations/?stopId=13&lat=42.347153&lng=-71.075769"
                className={"underline"}> Back Bay Train Station</a>
              <a href="http://www.mbta.com/schedules_and_maps/rail/lines/stations/?stopId=191" className={"underline"}>South
                Station Train Station</a>
            </div>
          </FaqItem>
        </div>
        <div className={"w-full"} data-aos="fade-up" data-aos-delay="800">
          <div className={"lg:hidden"}>
            <ContactsBlock/>
          </div>

          <iframe
            className={"aspect-video w-full lg:min-h-[550px] md:min-h-[400px] min-h-[250px]"}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.074592970278!2d-71.122327!3d42.340933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379be3ec50ab1%3A0x24633e9bd497a8b!2sIris%20Hotel%20Boston!5e0!3m2!1sen!2sus!4v1724361826199!5m2!1sen!2sus"
            allowFullScreen=""
            title={'map'}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacts;