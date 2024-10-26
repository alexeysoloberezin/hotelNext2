'use client';

import React, {useEffect, useState} from 'react';
import {handleScroll} from "@/utils/handleScroll";
import clsx from 'clsx'
import Arrow from "../icon/Arrow";
import useMediaQuery from "@/hooks/useMediaQuery";
import BookNow from "@/components/ui/BookNow";

const Header = ({transparent}) => {
  const [isActiveBurger, setIsActiveBurger] = useState(false)
  const isNotATable = useMediaQuery(false, '(min-width: 1340px)')
  const [readyImages, setReadyImages] = useState(false)
  const [activeLink, setActiveLink] = useState(null)
  const [isAnimate, setIsAnimate] = useState(false)

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

  const handleClickLink = (e, to) => {
    handleScroll(e, to)
    setIsActiveBurger(false)
  }

  useEffect(() => {
    if (isActiveBurger) {
      setIsAnimate(true)
      setReadyImages(true)
      document.querySelector('html').classList.add('blocked')
    } else {
      setIsAnimate(false)
      document.querySelector('html').classList.remove('blocked')
    }
  }, [isActiveBurger])

  useEffect(() => {
    setTimeout(() => {
      setReadyImages(true)
    }, 1500)
  }, []);

  return (
    <header
      className={clsx("rounded-base custom transition-colors py-[20px] absolute top-0 left-0 z-50 w-full", {'text-black': isActiveBurger})}
    >

      <div className={'container flex items-center justify-between w-full relative z-50'}>
        <a href={"tel:+18575766900"} className={"transition-colors md:block hidden"}>
          +1 857 576-6900
        </a>
        <a href={'/'} className={"relative w-[125px] h-[60px]"}>
          <img className={clsx({
            'md:w-[154px] md:h-[82px]': isActiveBurger,
            'md:w-[165px] md:h-[71px]': !isActiveBurger
          }, "w-[90px] object-contain absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]")}
               src={!isActiveBurger ? '/logo.png' : '/logoBlack.png'} alt=""/>
        </a>

        <div className={"min-w-[142px]"}>
          <div className={clsx("menu-burger link", {
            'active': isActiveBurger
          })} onClick={(e) => setIsActiveBurger(!isActiveBurger)}>
            <span>MENU</span>
          </div>
        </div>
      </div>

      <div
        className={clsx("mobMenu fixed top-0 h-screen w-screen left-0 bg-gold transition-all duration-500", {
          'opacity-100': isActiveBurger,
          'opacity-0 translate-y-[-110vh]': !isActiveBurger,
        })}>
        <div className={"container h-full flex flex-col xl:items-start items-center relative"}>
          <a href={"tel:+18575766900"} className={"transition-colors md:hidden mb-[50px] underline"}>
            +1 857 576-6900
          </a>
          <ul className={"flex flex-col  xl:items-start items-center gap-[20px] mb-[20px] lg:grow w-fit"}>
            {navItems.map((item, index) => (
              <li 
                onMouseEnter={() => setActiveLink(index)}
                onMouseLeave={() => setActiveLink(false)}
                key={index}
                className={clsx("2xl:text-[50px] md:text-[40px] text-[32px] opacity-0 mobMenu-link group 2xl:hover:text-[100px] xl:hover:text-[65px]  text-black transition-all duration-500 leading-tight font2 origin-left w-fit", {
                  'isAnimate': isActiveBurger,
                })}>
                <a className={`flex items-center ${item.className}`} href={item.to} data-testid={item.dataTestid} target={item.target}>
                  {item.name}
                  <Arrow
                    classes={"fill-black xl:block hidden group-hover:scale-100 group-hover:delay-[400ms] scale-0 transition-all duration-500  origin-left translate-y-[9px] ml-[40px]"}
                    width={'75'} height={'13'}/>
                </a>
              </li>
            ))}

            {!!isNotATable && (
              navItems.map((el, index) => (
                // <Image
                //   className={clsx('fixed w-[520px] pointer-events-none object-cover h-full top-0 right-0 z-10 delay-300 transition-all duration-700', {
                //     'opacity-0': activeLink !== index,
                //     'opacity-100': activeLink === index,
                //   })}
                //   src={el.img}
                //   alt={"nav img"}
                // />
                <picture  className={clsx('fixed w-[520px] pointer-events-none object-cover h-full top-0 right-0 z-10 delay-300 transition-all duration-700', {
                      'opacity-0': activeLink !== index,
                    })}>
                  <source srcSet={el.img + '.webp'} type="image/webp"/>
                  <img
                   className={clsx('fixed w-[520px] pointer-events-none object-cover h-full top-0 right-0 z-10 delay-300 transition-all duration-700', {
                    'opacity-0': activeLink !== index,
                  })}
                    src={el.img + '.png'} // Ленивая загрузка
                    alt={'NavImage'}
                  />
                </picture>
              ))
            )}
        </ul>

        <div
          className={"flex md:w-full pt-[15px] justify-between md:flex-row flex-col-reverse  xl:text-left text-center md:items-end items-center  relative z-[20]"}>
          <div className={"mobMenu_txt"}>
            30 Webster St <br/>
            Brookline, MA 02446<br/>
            United States of America
            </div>
            <div className={"md:mb-0 mb-[30px] mobMenu_btn"}>
              <BookNow
                color={"white"} noAnimate={true}
              />
            </div>
          </div>


        </div>
      </div>
    </header>
  );
};

export default Header;
