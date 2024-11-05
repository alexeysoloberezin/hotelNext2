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
          <h4 className={"my-[10px] mb-[5px] text-center uppercase"}>
            {title}
          </h4>
          <div
            ref={contentRef}
            className={clsx("overflow-hidden transition-all lg:text-[18px] max-w-[650px] text-[16px] text-center duration-500")}
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
      text: `Our Classic Facial not only treats the surface 
of your skin but also penetrates deep within, targeting impurities and promoting cellular regeneration. Whether you struggle with dryness, congestion, or dullness, our comprehensive treatment addresses your concerns, leaving you with a luminous glow 
that radiates from within.`,
      title: 'Classique Iris Facial',
      price: '$195',
      time: '60min'
    },
    {
      text: `Experience the transformative power of our
Stress Recovery Facial and emerge feeling
refreshed, renewed, and ready to face the
world with calm and confidence demeanor. Treat yourself to this indulgent escape and
discover the true meaning of relaxation`,
      title: 'Stress Recovery Facial',
      price: '$180',
      time: '60min'
    },
    {
      text: `Experience the ultimate pick-me-up for your skin as our tailored techniques and premium skincare products target puffiness, dullness, 
and dehydration caused by jet lag. In just 30 minutes, you'll emerge with a luminous glow and a renewed sense of well-being, ready 
to take on your next adventure 
with confidence and vitality.`,
      title: 'Jet lag facial',
      price: '$95',
      time: '30min'
    },
  ]

  const grid = 'grid lg:grid-cols-3 md:grid-cols-2 gap-[20px]'
  return (
    <div className={"lg:py-[100px] py-[50px] bg-[#ABA3D2]"}>
      <div className="container">
        <div className={"md:mb-[150px] mb-[60px]"}>
          <h3 className={"lg:text-[50px] text-[35px] text-center font2 text-black lg:mb-[50px] mb-[30px]"}>Dermaplaning</h3>

          <FacialItem
            text={'This gentle exfoliation process removes dead skin cells and peach fuzz, enhancing product absorption and creating a flawless canvas for makeup. Ideal for all skin types, dermaplaning reveals a fresh, youthful complexion, reduces the appearance of fine lines, and promotes a more even skin tone. Enjoy instant results with minimal downtime—perfect for a quick refresh or special occasion.'}
            title={'Dermaplaning'}
            time={'30min'}
            price={'$95'}
            imgTemplate={"/dermap.jpg"}
            index={1}
          />
        </div>


        <h3 className={"lg:text-[50px] text-[35px] text-center text-black font2 lg:mb-[50px] mb-[30px]"}>Facials</h3>


        <div className={clsx(grid, 'md:mb-[150px] mb-[60px]')}>
          {arr.map((el, index) => (
            <FacialItem
              key={el.title}
              text={el.text}
              title={el.title}
              time={el.time}
              price={el.price}
              imgTemplate={"/fc_{**}.jpg"}
              index={index + 1}
            />
          ))}
        </div>


        <div className={"md:mb-[150px] mb-[60px]"}>
          <h3 className={"lg:text-[50px] text-[35px] text-center font2  text-black lg:mb-[50px] mb-[30px]"}>HydroDermabrasion</h3>
          <div className={""}>
            <FacialItem
              text={'Experience the transformative power of our HydroDermabrasion Facial as your skin undergoes a remarkable journey of renewal and regeneration. With each session, you\'ll notice a visible improvement in texture, tone, and overall radiance, restoring your confidence and revealing the best version of yourself.'}
              title={'HydroDermabrasion'}
              time={'50min'}
              price={'$210'}
              imgTemplate={"/fac_gr.jpg"}
              index={1}
            />
          </div>
        </div>


        <h3 className={"lg:text-[50px] text-[35px] text-center lg:mb-[50px] text-black font2 mb-[30px]"}>Massages</h3>

        <div className={clsx('md:grid-cols-2 grid gap-[20px]', 'md:mb-[150px] mb-[60px]')}>
          <FacialItem
            text={'Unlike a typical relaxation massage, which targets the surface layers, deep tissue massage employs firm pressure and slow strokes \n' +
              'to alleviate chronic tension, muscle stiffness, and areas of pain \n' +
              'or discomfort. This technique can help break up scar tissue, improve \n' +
              'blood circulation, and promote better range of motion. It\'s ideal for individuals dealing with chronic pain, muscle injuries, or postural issues.'}
            title={'Deep Tissue'}
            time={'60min'}
            price={'$170'}
            imgTemplate={"/fac_2.jpg"}
          />
          <FacialItem
            text={'Experience a serene journey of relaxation with our soothing message combined with stone therapy. This treatment blends traditional massage techniques with the calming effects of heated stones. It will soothe your muscles, calm your mind, and restore your overall well-being, leaving you feeling revitalized and harmonized.'}
            title={'Tranquil Escape'}
            time={'60min'}
            price={'$175'}
            imgTemplate={"/fac_3.jpg"}
          />

        </div>

        <h3 className={"lg:text-[50px] text-[35px] text-center text-black lg:mb-[50px] font2 mb-[30px]"}>Peels</h3>

        <div className={clsx('md:grid-cols-2 grid gap-[20px]', '')}>
          <FacialItem
            text={'Lactic peel is a gentle yet effective chemical exfoliation treatment that uses lactic acid, derived from milk, to rejuvenate the skin. Known for its hydrating properties, it helps to improve skin texture, reduce fine lines, and promote a brighter complexion. Ideal for all skin types, this treatment encourages cell turnover, enhances moisture retention, and diminishes the appearance of age spots and pigmentation. With minimal downtime, lactic peels are a popular choice for those seeking a youthful glow and smoother skin.'}
            title={'Anti-age lactic peel'}
            time={'30min'}
            price={'$85'}
            imgTemplate={"/fac_pel_1.jpg"}
          />
          <FacialItem
            text={'A salicylic peel is a chemical exfoliation treatment designed to target acne-prone skin. It contains salicylic acid, a beta hydroxy acid that penetrates deep into pores to dissolve excess oil and dead skin cells. This helps to unclog pores, reduce inflammation, and prevent breakouts. Ideal for those with oily or acne-prone skin, salicylic peels can improve skin texture, promote cell turnover, and enhance overall clarity, leaving the skin smoother and healthier.'}
            title={'Salicylic acid peel for acne skin'}
            time={'30min'}
            price={'$85'}
            imgTemplate={"/fac_pel_2.jpg"}
          />
        </div>
      </div>
    </div>
  );
}

export default Facials;
