import React from 'react';
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "../components/ui/Image";
import useMediaQuery from "../hooks/useMediaQuery";
import Animation from "../components/Animation";

function Weddings(props) {
  const arr = [1, 1, 1]
  const imgTemplate = '/wed/wed{**}.jpg'
  const isTable = useMediaQuery(false, '(max-width: 1024px)')

  return (
    <div className={"bg-purple lg:py-[100px] py-[50px] text-black"}>
      <div className="container">
        <Animation>
          <h2 className={"mb-[30px] bigMob"}>Weddings <br/>at Petal Restaurant</h2>
        </Animation>
        <div className={"grid lg:grid-cols-3 gap-[30px] mb-[50px]"}>
        <div>
          <Animation>
            <p className={"mb-[40px]"}>
              Make your big day even more special with our exclusive wedding packages. Book 10 or more rooms at IRIS
              Boston Hotel, and receive a complimentary night in the luxurious Iris Suite (or standard rate if fewer
              rooms
              are booked).
            </p>
          </Animation>
          {isTable && (
            <Image
              src={imgTemplate.replace('{**}', 1)}
              noWebp={true}
              className={"imgsFull"}
            />
          )}
        </div>
          <div>
            <Animation>
              <p className={"mb-[40px]"}>
                Our wedding packages include live music, a projector for special moments, and customizable lunch or
                dinner
                receptions.
              </p>
            </Animation>

            {isTable && (
              <Image
                src={imgTemplate.replace('{**}', 2)}
                noWebp={true}
                className={"imgsFull"}
              />
            )}
          </div>
          <div>
            <Animation>
              <p className={"mb-[40px]"}>
                <b>Please note:</b> We do not allow decorations on the walls, but our expert team of decorators,
                florists,
                and
                wedding planners will ensure every detail is picture-perfect.
              </p>
            </Animation>
            {isTable && (
              <Image
                src={imgTemplate.replace('{**}', 3)}
                noWebp={true}
                className={"imgsFull"}
              />
            )}
          </div>
        </div>

        {!isTable && (
          <Swiper
            modules={[Autoplay]}
            className={"!mb-[0px] md:!overflow-hidden !overflow-visible"}
            loop={true}
            autoplaySpeed={400}
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

            {arr.map((item, index) => (
              <SwiperSlide key={'wed_' + index}>
                <div className="slide-content">
                  <Image
                    src={imgTemplate.replace('{**}', index + 1)}
                    noWebp={true}
                    className={"imgsFull"}
                  />
                </div>
              </SwiperSlide>
            ))}
            {arr.map((item, index) => (
              <SwiperSlide key={'wed_2_' + index}>
                <div className="slide-content">
                  <Image
                    src={imgTemplate.replace('{**}', index + 1)}
                    noWebp={true}
                    className={"imgsFull"}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

      </div>
    </div>
  );
}

export default Weddings;