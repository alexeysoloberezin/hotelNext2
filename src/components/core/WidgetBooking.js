'use client';

import React, {useEffect} from 'react';

const SkipperWidget = ({onInitSkipper}) => {
  let script1 = null;
  let link1 = null;
  let link2 = null;
  let link3 = null;

  useEffect(() => {
    setTimeout(() => {
      script1 = document.createElement("script");
      script1.src = "https://widget.skipperhospitality.com/cash-sdk.umd.js";
      script1.async = true;
      script1.type = "module";
      document.head.appendChild(script1);
  
      link1 = document.createElement("link");
      link1.rel = "preload";
      link1.href = "https://widget.skipperhospitality.com/style.css";
      link1.as = "style";
      link1.crossOrigin = "anonymous";
      document.head.appendChild(link1);
  
      link2 = document.createElement("link");
      link2.rel = "preload";
      link2.href = "https://widget.skipperhospitality.com/site-base.css";
      link2.as = "style";
      link2.crossOrigin = "anonymous";
      document.head.appendChild(link2);
  
      link3 = document.createElement("link");
      link3.rel = "preconnect";
      link3.href = "https://cash-api.skipperhospitality.com";
      document.head.appendChild(link3);
  
      script1.onload = () => {
        if (window.initSkipper) {
          window.initSkipper({
            hotelId: "IRIS_HOTEL_BROOKLINE",
            target: "skipper-target",
            isDynamic: true,
            targetIds: ["placeholder-id"],
            targetClasses: ["placeholder-class"],
            fallbackUrl: "",
            style: {
              primaryFont: {
                family: "questrial, sans-serif",
                transform: "uppercase"
              },
              secondaryFont: "questrial, sans-serif",
              primaryColor: "#644FF5",
              accentColor: "#CCBFB3",
              primaryFontColor: "#211A52",
              accentFontColor: "#fff",
              placeholderFontColor: "#fff",
              secondaryFontColor: "#5C4A53",
              primaryBackgroundColor: "#fff",
              primaryBorderColor: "#433E6B",
              secondaryBackgroundColor: "#fff",
              inactiveOpacity: 0.5,
              disabledOpacity: 0.3,
              highlightOpacity: 0.1,
              stateOpacity: 0.4
            }
          });

          onInitSkipper()
        }
      };
    }, 0)

    return () => {
      script1 && document.head.removeChild(script1);
      link1 && document.head.removeChild(link1);
      link2 && document.head.removeChild(link2);
      link3 && document.head.removeChild(link3);
    };
  }, []);


    return (
      <div>
        <div id="skipper-target"></div>
      </div>
    );
  }
;

export default SkipperWidget;
