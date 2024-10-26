'use client'
import React from 'react';
import BgImageBlock from "./BgImageBlock";
import Animation from "../components/Animation";
import clsx from "clsx";

function Facilities(props) {
  const icons = [
    "Private Parking",
    "Free Wifi",
    "Fitness center",
    "Non-smoking rooms",
    "Room service",
    "Restaurant",
    "Coffee Maker in All Rooms",
    "Bar",
    "Breakfast",
    "Spa"
  ]

  return (
    <div>
      <div className={"lg:py-[60px] py-[50px] relative overflow-hidden bg-dark"} >
        <img
          src={'/faccilites.jpg'}
          className={"w-[100%]  h-full object-cover absolute top-0 left-1/2 translate-x-[-50%]"}
        />
        <div className={clsx("container h-full flex flex-col justify-center relative z-10 items-center md:min-h-[580px] min-h-[480px] gap-[20px]")}>
          <div data-aos={'fade-up'} data-aos-delay={'0'} className={"lg:mb-[50px] mb-[10px]"}>
            <div
              className={"text-[50px] leading-snug font2 text-center"}>Most popular facilities</div>
          </div>
          <div data-aos={'fade-up'} data-aos-delay={'150'}>
            <div className={"flex md:flex-row flex-col items-center flex-wrap justify-around gap-x-[60px] gap-y-[20px]"}>
              {icons.map((ic, index) => (
                <div className={"flex items-center gap-[15px]"}>
                  <img src={`/icons/ficon${index + 1}.svg`} alt={'icon'} key={ic}/>
                  <span className={"text-[22px]"}>{ic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;