import React, {useEffect, useRef, useState} from 'react';
import clsx from "clsx";

function Loader(props) {
  const [start, setStart] = React.useState(false);
  const [end, setEnd] = React.useState(false);
  const [endFin, setEndFin] = React.useState(false);
  const [imageSrc, setImageSrc] = useState(''); // Начальное изображение

  useEffect(() => {

    const img = new Image();
    img.onload = () => {
      setImageSrc('/loaderLogo.png')
      StartAnimation()
    };
    img.src = '/loaderLogo.png';

  }, []);

  function StartAnimation (){
    setEnd(false)
    setEndFin(false)
    setStart(true);

    setTimeout(() => setEnd(true), 1000);
    setTimeout(() => {
      setEndFin(true)
    }, 1500);
  }

  return (
    <div>
      <div
        className={clsx("bg-purple fixed top-0 left-0 z-[100] flex flex-col items-center transition-all duration-500 justify-center h-screen w-screen", {
          'opacity-0 pointer-events-none': end
        })}
      >
        <img src={imageSrc} alt=""  fetchpriority="high" className="mb-4 "/>

        <div className={clsx("md:w-[372px] w-[320px] h-[6px] loader-bar-wrp rounded-full block overflow-hidden")}>
          <div className={clsx("loader-bar h-[6px] ", {
            'loader-bar-animate': start
          })}></div>
        </div>
      </div>
    </div>

  );
}

export default Loader;
