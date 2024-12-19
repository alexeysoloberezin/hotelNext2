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
    { title: "Wedding Package", content: "The wedding package includes a beautiful venue for both the ceremony and reception, along with a customized catering menu and drink options. Additional features include elegant floral arrangements, table settings, and professional photography services. Options for a DJ, officiant, and hair/makeup services can also be added" },
    { title: "Proposal Package", content: "Celebrate your proposal with a romantic, private setup featuring drinks, flowers, and personal touches. Includes a private dinner and champagne toast." },
    { title: "Sports Package", content: `<ol><li>Tailgate parties</li><li>Fan gear</li><li>Post-event celebration</li></ol>` },
  ];


  const accordionItems_two = [
    { title: "Corporate Package", content: `<ol><li>Custom meeting setups</li><li>Catering options</li><li>Breakout rooms</li></ol>` },
    { title: "Birthday Package", content: `<ol><li>Themed decor options</li><li>Custom menus</li></ol>` },
    { title: "Holiday Packages:", subtitle: "(Christmas, New Year’s, etc.)", content: `<ol><li>Festive themes and decorations</li><li>Special drink and food offerings</li></ol>` },
  ];

  const arr = [1, 1, 1, 1, 1, 1];
  const imgTemplate = '/ev/ev{**}.jpg';

  return (
    <div className={"bg-[#fff] lg:py-[70px] py-[100px] text-black"}>
      <div className="container">
        <div className={""}>
          <Animation>
            <h4 className={"mb-[35px] font-croisan text-center sm:text-[50px] !leading-[1.3] text-[40px] "}>
              Special Event <br /> Packages
            </h4>
          </Animation>
        </div>
        <div>
          <div className={"mb-[24px] text-[17px] mx-auto text-center max-w-[296px]"}>We offer a variety of tailored packages for all
            occasions:
          </div>
        </div>
        <div className={"lg:grid olLists xl:grid-cols-[1fr_550px_1fr] lg:grid-cols-[1fr_380px_1fr] gap-[40px]"}>
          {/* Первый аккордеон */}
          <div>
            <div className="">
              {accordionItems.map((item, index) => (
                <div
                  key={index}
                  className={`text-[#000] border-b border-[#000] mb-[30px] ${activeIndexAccordionOne === index ? "active" : ""}`}
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
                        fill="#000"
                      />
                    </svg>
                  </div>
                  {activeIndexAccordionOne === index && (
                    <div className="accordion-content pb-4 text-[15px]" dangerouslySetInnerHTML={{__html: item.content}}>
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
              autoplayspeed={400}
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
            <div className="">
              {accordionItems_two.map((item, index) => (
                <div
                  key={index}
                  className={`text-[#000] border-b border-[#000] mb-[30px] ${activeIndexAccordionTwo === index ? "active" : ""}`}
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
                        fill="#000"
                      />
                    </svg>
                  </div>
                  {activeIndexAccordionTwo === index && (
                    <div className="accordion-content pb-4 text-[15px]"
                         dangerouslySetInnerHTML={{__html: item.content}}>
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
