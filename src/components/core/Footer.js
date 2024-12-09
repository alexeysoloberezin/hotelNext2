'use client';

import React from 'react';
import Form from "../../blocks/Form";

const Footer = () => {
  const navItems = [
    {
      to: '/accommodation',
      dataTestid: '',
      target: '',
      className: '',
      img: "/navImg2",
      name: "Accommodation",
    },
    {
      dataTestid: '',
      target: '',
      className: '',
      to: '/restaurant',
      img: "/navImg3",
      name: 'Petal Restaurant'
    },

    {
      dataTestid: '',
      target: '',
      className: '',
      to: "/bar",
      img: "/navImg4",
      name: "Nectar Bar"
    },

    {
      dataTestid: '',
      target: '',
      className: '',
      to: "/spa",
      img: "/navImg5",
      name: "Spa Room"
    },
    {
      dataTestid: '',
      target: '',
      className: '',
      to: '/about',
      img: "/navImg1",
      name: "About Us",
    },
  ];


  return (
    <footer className="bg-purple text-black pt-[90px] pb-[30px]">
      <div className="container">
        <div className={"mb-[40px] "}><img className={"w-[108px]"} src="/logoBlack.png" alt=""/></div>
        <div  className={"grid lg:grid-cols-3 lg:gap-[15px] gap-[50px] lg:min-h-[400px]"}>
          <div className={"flex flex-col gap-[20px]"}>
            <p>At IRIS HOTEL Boston, w </p>
            <a href="mailto:info@irishotelboston.com">info@irishotelboston.com</a>
            <a href="tel:+18575766900" className={"underline"}>+1 857 576-6900</a>
            <div className={"mt-auto"}>
              30 Webster St<br/>
              Brookline, MA 02446<br/>
              United States of America
            </div>
            <div className={"mt-[40px] lg:block hidden"}>@2024 Wagner Hospitality Management.<br/> All rights reserved.</div>
          </div>
          <div className={"flex flex-col justify-between"}>
            <ul className={"flex flex-col gap-[20px] mb-auto"}>
              {navItems.map((item, index) => (
                <li key={index + '_footerNav'}><a className={`uppercase ${item.className}`} data-testid={item.dataTestid} target={item.target} href={item.to}>{item.name}</a></li>
              ))}
            </ul>
            {/* <div className={"hidden"}>
              <CreatedAt />
            </div> */}
          </div>
          <div>
            <Form />
          </div>
        </div>
        <div className={"mt-[40px] lg:hidden flex justify-between items-end"}>
          {/* <CreatedAt/> */}
          <div className={''}>@2024 Wagner Hospitality Management.<br/> All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
