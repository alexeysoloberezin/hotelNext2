import React from 'react';
import FaqItem from "../ui/FaqItem";
import Tags from "../ui/Tags";

function FaqBlock({data}) {
  return (
    <div id={'faq'} className={"relative container"}>
      <div className={"relative"}>
        <div className={"flex mb-[30px] md:items-center sm:flex-row flex-col justify-between relative z-5 md:gap-[30px] gap-[10px]"}>
          <Tags title={'faq'} color={'white'} number={'04'}/>
          <h4  className={"md:w-[875px]  md:text-left sm:text-center"}>мы постарались ответить <br className={"md:block hidden"}/> на самые важные <span className={"text-red"}>вопросы</span></h4>
        </div>
        <img src="/faqImg.png" className={"md:mt-[-220px] sm:mt-[-130px] mt-[-90px] sm:mb-[-80px] mb-[-50px] mx-auto"} alt="Чекбокс"/>

        <div className={"flex flex-col gap-[10px] faqBox"}>
          {data.map((el, index) => (
            <FaqItem
              key={index}
              title={el.title}
              text={el.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqBlock;