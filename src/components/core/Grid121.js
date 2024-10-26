import React from 'react';
import clsx from "clsx";
import Image from "../ui/Image";

function Grid121({imgTemplate, hideMob}) {
  const grid = [1, 1, 1, 1]

  return (
    <div className={
      clsx("md:grid-cols-3  lg:gap-[22px]  gap-[15px]", {
        'md:grid hidden': hideMob,
        'grid': !hideMob
      })
    }>
      <div className={"flex flex-col"}>
        <h2>At Nectar</h2>
        <p className={"my-[25px] "}>everyone will find something to their taste, whether it’s warm conversations over a
          cup of espresso or
          unforgettable evenings with friends enjoying a signature cocktail. </p>
        <Image
          dataAos={"fade-up"} delay={1 * 250 + ''}
          noWebp={true}
          className={clsx("w-full h-full object-cover ")}
          animationClass={"w-full h-full"}
          src={imgTemplate.replace('{**}', 1)} alt="bar-img"/>
      </div>
      <div className={"md:block hidden"}>
        <Image
          dataAos={"fade-up"} delay={2 * 250 + ''}
          noWebp={true}
          animationClass={"w-full h-full"}
          className={clsx("w-full  h-full object-cover")}
          src={imgTemplate.replace('{**}', 2)} alt="bar-img"/>
      </div>
      <div className={"md:flex flex-col hidden gap-[20px]"}>
        <Image
          dataAos={"fade-up"} delay={3 * 250 + ''}
          noWebp={true}
          animationClass={"w-full h-full"}
          className={clsx("w-full  h-full object-cover")}
          src={imgTemplate.replace('{**}', 3)} alt="bar-img"/>
        <Image
          dataAos={"fade-up"} delay={4 * 250 + ''}
          noWebp={true}
          animationClass={"w-full h-full"}
          className={clsx("w-full  h-full object-cover")}
          src={imgTemplate.replace('{**}', 4)} alt="bar-img"/>
      </div>
    </div>
  );
}

export default Grid121;