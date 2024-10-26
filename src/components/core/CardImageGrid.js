import React from 'react';
import clsx from "clsx";
import Animation from "../Animation";

function CardImage({img, title,text, link, linkText,classes }) {
  return (
    <Animation animationClass={'w-full h-full'}>
      <div className={clsx({
          "h-full": !classes
        },
        "flex flex-col min-h-[250px] md:aspect-auto aspect-square w-full justify-end px-[20px] py-[15px]",
        classes)} style={{background: `url(${img}) center/cover no-repeat`}}>
        <div className={"text-[24px] mb-[15px]"}>{title}</div>
        <div>
          {text}
          {link &&
            <a href={link} className={"underline pl-[2px] hover:no-underline underline-offset-2"}>[{linkText}]</a>
          }
        </div>
      </div>
    </Animation>
  )
}

function CardImageGrid({title, text, data}) {
  return (
    <div className={"bg-[#0E4840] lg:py-[100px] py-[50px]"}>
      <div className="container">
        <div className={"grid lg:grid-cols-[33%_55%] mb-[50px]"}>
          <div className={'text-[50px] leading-snug font2 '}>{title}</div>
          <div className={"pt-[8px] max-w-[466px]"}>{text}
          </div>
        </div>
        <div className={"md:grid flex flex-col   lg:grid-cols-3 md:grid-cols-2  gap-[20px]"}>
          <div className={"flex flex-col gap-[20px]"}>
            <CardImage
              classes={'h-[283px]'}
              {...data[0]}
            />
            <CardImage
              classes={'h-[319px]'}
              {...data[1]}
            />
          </div>
          <div className={""}>
            <CardImage
              {...data[2]}
            />
          </div>
          <div className={"flex lg:flex-col md:flex-row flex-col lg:col-span-1 col-span-2 gap-[20px]"}>
            <CardImage
              classes={'h-[283px]'}
              {...data[3]}
            />
            <CardImage
              classes={'h-[283px] lg:h-[319px]'}
              {...data[4]}
            />
          </div>
        </div>
        <div className={"grid lg:grid-cols-3 gap-[20px] mt-[20px]"}>
          <CardImage
            classes={'h-[319px]'}
            {...data[5]}
          />
          <CardImage
            classes={'h-[319px]'}
            {...data[6]}
          />
          <CardImage
            classes={'h-[319px]'}
            {...data[7]}
          />
        </div>
      </div>
    </div>
  );
}

export default CardImageGrid;