import React, {useEffect, useRef, useState} from 'react';
import SectionHeader from "../components/ui/SectionHeader";
import clsx from "clsx";
import Image from "../components/ui/Image";
import Animation from '../components/Animation';

function FacialItem({imgTemplate, title, price, time, text, index}) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [text, isOpen]);

  return (
    <Animation
      delay={index * 0.1 + 's'}
    >
      <div className={"md:min-h-[420px] cursor-pointer min-h-[390px] p-[20px]  relative flex flex-col justify-center align-center"} onClick={() => setIsOpen(!isOpen)}>
        <img src={imgTemplate.replace('{**}', index)} className={"absolute top-0 left-0 w-full h-full object-cover"}/>
        <div className={"relative z-10 flex flex-col items-center justify-center"}>
          <div className={"flex items-end mb-[5px] font2"}>
            <span className={"text-[50px]"} style={{lineHeight: 1}}>{price} /</span>
            <h4 className={"ml-[15px]"}>{time}</h4>
          </div>
          <h4 className={"my-[10px] mb-[5px] uppercase"}>
            {title}
          </h4>
          <div
            ref={contentRef}
            className={clsx("overflow-hidden transition-all lg:text-[18px] text-[16px] text-center duration-500")}
            style={{height: isOpen ? `${contentHeight}px` : '0px', opacity: !isOpen ? '0' : '1'}}
          >
            {text}
          </div>
        </div>
      </div>
    </Animation>
  )
}

function Facials(props) {
  const arr2 = [
    {
      text: `Deep tissue massage uses firm pressure
and slow strokes to relieve chronic tension,
stiffness, and pain, break up scar tissue,
and improve circulation and range of
motion. It’s ideal for addressing chronic
pain, muscle injuries, and postural issues`,
      title: "Deep Tissue",
      price: "$170",
      time: "50min"
    },
    {
      text: `Experience a serene journey of relaxation with our soothing message combined with hot stone therapy. This treatment blends traditional message techniques with the calming effects of heated stones. It will soothe your muscles, calm your mind, and restore your overall well-being, leaving you feeling revitalized and harmonized.`,
      title: "Tranquil Escape",
      price: "$175",
      time: "60min"
    }
  ]
  const arr = [
    {
      text: `Experience the transformative power of our
Stress Recovery Facial. Emerge feeling
refreshed, renewed, and ready to face the
world with calm and confidence. Treat
yourself to this indulgent escape and
discover the true meaning of relaxation`,
      title: 'Stress Recovery Facial',
      price: '$180',
      time: ' 50min'
    },
    {
      text: `Our Classic Facial not only treats the
surface of your skin but also penetrates
deeply, targeting impurities and promoting
cellular regeneration. Whether you struggle
with dryness, congestion, or dullness, this
comprehensive treatment addresses your
concerns, leaving you with a luminous glow
that radiates from within`,
      title: 'Classique Iris Facial',
      price: '$195',
      time: '50min'
    },
    {
      text: `Discover the reformative effects of our
Microdermabrasion Facial as your skin
undergoes a remarkable journey of renewal
and regeneration. With each session, you notice visible improvements in texture,
tone, and overall radiance, restoring your
confidence and revealing the best version
of yourself.`,
      title: 'HydroDermabrasion',
      price: '$210 ',
      time: '50min'
    },
    {
      text: `Dermaplaning smooths, softens, and
brightens the skin. It reveals healthy skin
beneath dead cell layers and enhances the
absorption of skincare products, while also
preparing the skin for additional
procedures`,
      title: 'Dermaplaning',
      price: '$95 ',
      time: '30min'
    },
    {
      text: `Revitalize your skin with our targeted
techniques and premium skincare products,
designed to address puffiness, dullness,
and dehydration caused by jet lag. In just
30 minutes, you emerge with a luminous
glow and a renewed sense of well-being,
ready to embrace your next adventure with
confidence and vitality`,
      title: '30min',
      price: '$95',
      time: '30min'
    }
  ]

  const grid = 'grid lg:grid-cols-3 md:grid-cols-2 gap-[20px]'
  return (
    <div className={"lg:py-[100px] py-[50px] bg-[#710000]"}>
      <div className="container">
        <SectionHeader
          text={'We offer a variety of facial services to suit your individual skin care needs. Our estheticians use only the finest Bioelements products based on trace minerals, essential oils, and plant extracts'}
          color={'white'}
          bigMob={true}
          title={'Facials'}
          classText={"max-w-[640px] text-center"}
          wrapperClassName={"justify-center"}
          isCenter={true}
        />

        <div className={clsx(grid, 'md:mb-[165px] mb-[60px]')}>
          {arr.map((el, index) => (
            <FacialItem
              key={el.title}
              text={el.text}
              title={el.title}
              time={el.time}
              price={el.price}
              imgTemplate={"/facials_{**}.png"}
              index={index + 1}
            />
          ))}
          <div
            data-aos="fade-up" data-aos-delay="1000"
            className={"bg-dark flex flex-col text-center justify-center gap-[10px] min-h-[390px]"}>
            <div className={"text-[50px] font2"} style={{lineHeight: 1}}>$30</div>
            <h4 className={"uppercase"}>Add-on mask</h4>
            <div className={"text-[50px] font2 mt-[15px]"} style={{lineHeight: 1}}>$60</div>
            <h4 className={"uppercase"}>Dermaplaning</h4>
          </div>
        </div>

        <SectionHeader
          text={'Procedure that combines classic massage techniques with spa therapy elements, aimed at deep relaxation and rejuvenation of both body and mind'}
          color={'white'}
          bigMob={true}
          title={'Massages'}
          classText={"max-w-[640px] text-center"}
          wrapperClassName={"justify-center"}
          isCenter={true}
        />

        <div className={clsx(grid)}>
          {arr2.map((el, index) => (
            <FacialItem
              key={el.title}
              text={el.text}
              title={el.title}
              time={el.time}
              price={el.price}
              imgTemplate={"/massage_{**}.png"}
              index={index + 1}
            />
          ))}
          <Animation
            data-aos="fade-up" data-aos-delay="1000"
            className={"bg-dark flex flex-col text-center justify-center gap-[10px] min-h-[390px]"}>
            <div className={"text-[35px] font2"} style={{lineHeight: 1}}>Refresh your <br/> senses</div>
          </Animation>
        </div>
      </div>
    </div>
  );
}

export default Facials;
