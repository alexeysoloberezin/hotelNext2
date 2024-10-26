import React from 'react';
import clsx from "clsx";
import Image from "../ui/Image";
import useMediaQuery from "../../hooks/useMediaQuery";

function NonPerfectGrid({imgTemplate}) {
  const isMob = useMediaQuery(false, '(max-width: 660px)')

  return (
    <div>
      {!isMob ? (
        <div className="grid grid-cols-3 gap-[20px] ">
          <div className={"flex flex-col gap-[20px]"}>
            <Image className={clsx("w-full h-full object-cover",
            )} animationClass={"w-full h-full"} src={imgTemplate.replace('{**}', 1)} noWebp={true} alt="accom-img"></Image>
            <Image className={clsx("w-full h-full object-cover",
            )} animationClass={"w-full h-full"} src={imgTemplate.replace('{**}', 2)} noWebp={true} alt="accom-img"></Image>
          </div>
          <div>
            <Image className={clsx("w-full h-full object-cover",
            )} animationClass={"w-full h-full"} src={imgTemplate.replace('{**}', 3)} noWebp={true} alt="accom-img"></Image>
          </div>
          <div className={"flex flex-col gap-[20px]"}>
            <Image animationClass={"w-full h-full"} className={clsx("w-full lg:h-[307px] h-[216px] object-cover",
            )} src={imgTemplate.replace('{**}', 4)} noWebp={true} alt="accom-img"></Image>
            <Image animationClass={"w-full h-full"} className={clsx("w-full lg:h-[271px] h-[190px] object-cover",
            )} src={imgTemplate.replace('{**}', 5)} noWebp={true} alt="accom-img"></Image>
          </div>
        </div>
      ): (
        <Image animationClass={"w-full h-full"} className={clsx("w-full h-full object-cover",
        )} src={imgTemplate.replace('{**}', 1)} noWebp={true} alt="accom-img"></Image>
      )}
    </div>
  );
}

export default NonPerfectGrid;