import React from 'react';
import Image from "../components/ui/Image";
import clsx from "clsx";

function BarMenu(props) {

  const coffee = [
    "1. Espresso",
    "6. Flat White",
    "2. Latte",
    "7. Caramel Macchiato",
    "3. Cappuccino",
    "8. Cold Brew",
    "4. Americano",
    "9. Vanilla Iced Latte",
    "5. Mocha"

  ]

  const lemonades = [
    "1. Classic Lemonade",
    "2. Mint and Cucumber Lemonade",
    "3. Berry and Rosemary Lemonade",
    "4. Ginger and Honey Lemonade",
    "5. Watermelon Lemonade"
  ]

  const subtitle = 'lg:text-[32px] md:text-[27px] text-[22px] mt-[35px] mb-[25px]'
  const grid = 'grid grid-cols-2 gap-y-[10px] gap-x-[5px]'
  return (
    <div className={"bg-dark lg:py-[100px] py-[50px]"}>
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_24%_24%_15%] md:grid-cols-[1fr_30%_19%] gap-[20px]">
          <div className={""}>
            <h2>Our bar menu</h2>
            <div className={clsx(subtitle)}>Coffee Selections:</div>
            <div className={clsx(grid)}>
              {coffee.map((el, index) => (
                <div key={el}>{el}</div>
              ))}
            </div>
            <div className={clsx(subtitle)}>Lemonades:</div>
            <div className={clsx('grid gap-[10px]')}>
              {lemonades.map((el, index) => (
                <div key={el}>{el}</div>
              ))}
            </div>
          </div>
          <div className={"lg:grid hidden grid-rows-2 gap-[20px]"}>
            <Image noWebp={true} className={"w-full object-cover h-[260px]"} src={'/menuBar1.png'}/>
            <Image noWebp={true} className={"w-full object-cover h-[260px]"} src={'/menuBar2.png'}/>
          </div>
          <div className={""}>
            <Image noWebp={true} className={"w-full object-cover h-[540px]"} src={'/menuBar3.png'}/>
          </div>
          <div className={"md:grid hidden  grid-rows-2 gap-[20px]"}>
            <Image noWebp={true} className={"w-full object-cover h-[260px]"} src={'/menuBar4.png'}/>
            <Image noWebp={true} className={"w-full object-cover h-[260px]"} src={'/menuBar5.png'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarMenu;