import Script from 'next/script';
import Head from 'next/head';
import React, { useEffect } from 'react';

const SkipperWidget = ({ onInitSkipper }) => {
  const handleSkipperLoad = () => {
    const initInterval = setInterval(() => {
      console.log('window.initSkipper', window.initSkipper)
      if (window.initSkipper) {
        clearInterval(initInterval);

        window.initSkipper({
          hotelId: "IRIS_HOTEL_BROOKLINE",
          target: "skipper-target",
          isDynamic: true,
          targetIds: ["placeholder-id"],
          targetClasses: ["placeholder-class"],
          fallbackUrl: "",
          style: {
            primaryFont: { family: "questrial, sans-serif", transform: "uppercase" },
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

        onInitSkipper && onInitSkipper();
      }
    }, 500);
  };

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://widget.skipperhospitality.com/style.css"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://widget.skipperhospitality.com/site-base.css"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://cash-api.skipperhospitality.com"
        />
      </Head>

      <Script
        src="https://widget.skipperhospitality.com/cash-sdk.umd.js"
        type="module"
        strategy="afterInteractive"
        onLoad={handleSkipperLoad}
      />

      <div id="skipper-target"></div>
    </>
  );
};

export default SkipperWidget;
