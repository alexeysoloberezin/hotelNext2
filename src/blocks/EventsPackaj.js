'use client';

import React, { useState } from 'react';
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "../components/ui/Image";
import Animation from "../components/Animation";

function EventsPackaj(props) {
  // Состояния для управления каждым аккордеоном
  const [activeIndexAccordionOne, setActiveIndexAccordionOne] = useState(1);
  const [activeIndexAccordionTwo, setActiveIndexAccordionTwo] = useState(2);

  // Тогглер для первого аккордеона
  const toggleAccordionOne = (index) => {
    setActiveIndexAccordionOne(activeIndexAccordionOne === index ? null : index);
  };

  // Тогглер для второго аккордеона
  const toggleAccordionTwo = (index) => {
    setActiveIndexAccordionTwo(activeIndexAccordionTwo === index ? null : index);
  };

  const accordionItems = [
    { title: "Wedding Package", content: "Text of description: Lorem ipsum odor amet, consectetuer adipiscing elit. Felis quis donec semper, non fames et nostra et. Rhoncus nullam potenti, morbi vel arcu ante dapibus? " },
    { title: "Proposal Package", content: "Text of description: Lorem ipsum odor amet, consectetuer adipiscing elit. Felis quis donec semper, non fames et nostra et. Rhoncus nullam potenti, morbi vel arcu ante dapibus? " },
    { title: "Sports Package", content: "Text of description: Lorem ipsum odor amet, consectetuer adipiscing elit. Felis quis donec semper, non fames et nostra et. Rhoncus nullam potenti, morbi vel arcu ante dapibus? " },
  ];

  const accordionItems_two = [
    { title: "Corporate Package", content: "Text of description: Lorem ipsum odor amet, consectetuer adipiscing elit. Felis quis donec semper, non fames et nostra et. Rhoncus nullam potenti, morbi vel arcu ante dapibus? " },
    { title: "Birthday Package", content: "Text of description: Lorem ipsum odor amet, consectetuer adipiscing elit. Felis quis donec semper, non fames et nostra et. Rhoncus nullam potenti, morbi vel arcu ante dapibus? " },
    { title: "Holiday Packages:", subtitle: "(Christmas, New Year’s, etc.)", content: "Text of description: Lorem ipsum odor amet, consectetuer adipiscing elit. Felis quis donec semper, non fames et nostra et. Rhoncus nullam potenti, morbi vel arcu ante dapibus? " },
  ];

  const arr = [1, 1, 1, 1, 1, 1];
  const imgTemplate = '/ev/ev{**}.jpg';

  return (
    <div className={"bg-dark lg:py-[70px] py-[100px] text-[#D1B31C]"}>
      <div className="container">
        <div className={""}>
          <Animation>
            <h4 className={"mb-[35px] font-croisan text-center sm:text-[50px] !leading-[1.3] text-[40px] uppercase"}>
              Special Event <br /> Packages
            </h4>
          </Animation>
        </div>
        <div className={"lg:grid xl:grid-cols-[1fr_550px_1fr] lg:grid-cols-[1fr_380px_1fr] gap-[40px]"}>
          {/* Первый аккордеон */}
          <div>
            <div className={"mb-[24px] text-[17px] max-w-[296px]"}>We offer a variety of tailored packages for all occasions:</div>
            <div className="">
              {accordionItems.map((item, index) => (
                <div
                  key={index}
                  className={`text-[#D1B31C] border-b border-[#D1B31C] mb-[30px] ${activeIndexAccordionOne === index ? "active" : ""}`}
                >
                  <div
                    className="accordion-header flex items-center text-[18px] font-bold justify-between py-4 cursor-pointer"
                    onClick={() => toggleAccordionOne(index)}
                  >
                    <div>
                      <div>{item.title}</div>
                      {item.subtitle && (
                        <div>{item.subtitle}</div>
                      )}
                    </div>
                    <svg
                      className={"transition-all duration-500"}
                      style={{ transform: activeIndexAccordionOne === index ? 'rotate(180deg)' : '' }}
                      width="16"
                      height="9"
                      viewBox="0 0 16 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.00292969 8.18651C0.00292969 8.32236 0.0566365 8.46138 0.160891 8.56564C0.3694 8.77414 0.710596 8.77414 0.919105 8.56564L8.0558 1.42894L15.0882 8.46138C15.2967 8.66989 15.6379 8.66989 15.8464 8.46138C16.055 8.25287 16.055 7.91168 15.8464 7.70317L8.4349 0.288462C8.22639 0.0799528 7.8852 0.0799528 7.67669 0.288462L0.160891 7.80426C0.0534773 7.91167 0.00292969 8.04751 0.00292969 8.18651Z"
                        fill="#D1B31C"
                      />
                    </svg>
                  </div>
                  {activeIndexAccordionOne === index && (
                    <div className="accordion-content pb-4 text-[15px]">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Слайдер */}
          <div className={"eventsPackaj lg:mt-0 mt-[40px]"}>
            <Swiper
              modules={[Autoplay, Pagination]}
              className={"!mb-[0px] md:h-[380px] h-[282px] md:!overflow-hidden !overflow-visible"}
              loop={true}
              autoplaySpeed={400}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: '.custom-pagination',
              }}
              slidesPerView={1}
              spaceBetween={20}
            >
              {arr.map((item, index) => (
                <SwiperSlide key={'ev_' + index}>
                  <div className="slide-content">
                    <img
                      className={"imgsFull md:h-[492px] h-[282px] w-full object-cover"}
                      src={imgTemplate.replace('{**}', index + 1)}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-pagination mt-[10px]"></div>
          </div>

          {/* Второй аккордеон */}
          <div>
            <div className="md:mt-[83px] mt-[30px]">
              {accordionItems_two.map((item, index) => (
                <div
                  key={index}
                  className={`text-[#D1B31C] border-b border-[#D1B31C] mb-[30px] ${activeIndexAccordionTwo === index ? "active" : ""}`}
                >
                  <div
                    className="accordion-header flex items-center text-[18px] font-bold justify-between py-4 cursor-pointer"
                    onClick={() => toggleAccordionTwo(index)}
                  >
                    <div>
                      <div>{item.title}</div>
                      {item.subtitle && (
                        <div className={'font-normal'}>{item.subtitle}</div>
                      )}
                    </div>
                    <svg
                      className={"transition-all duration-500"}
                      style={{ transform: activeIndexAccordionTwo === index ? 'rotate(180deg)' : '' }}
                      width="16"
                      height="9"
                      viewBox="0 0 16 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.00292969 8.18651C0.00292969 8.32236 0.0566365 8.46138 0.160891 8.56564C0.3694 8.77414 0.710596 8.77414 0.919105 8.56564L8.0558 1.42894L15.0882 8.46138C15.2967 8.66989 15.6379 8.66989 15.8464 8.46138C16.055 8.25287 16.055 7.91168 15.8464 7.70317L8.4349 0.288462C8.22639 0.0799528 7.8852 0.0799528 7.67669 0.288462L0.160891 7.80426C0.0534773 7.91167 0.00292969 8.04751 0.00292969 8.18651Z"
                        fill="#D1B31C"
                      />
                    </svg>
                  </div>
                  {activeIndexAccordionTwo === index && (
                    <div className="accordion-content pb-4 text-[15px]">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsPackaj;
