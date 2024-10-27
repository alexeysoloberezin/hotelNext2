'use client'

import Script from 'next/script';
import Head from 'next/head';
import React, { useEffect } from 'react';

const SkipperWidget = ({ onInitSkipper }) => {
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
        strategy="afterInteractive"
        id={'skipper-init-script'}
        type="module"
        onLoad={() => {
          if (window._initSkipper) {
            window._initSkipper({
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
          }
        }}
      />

      <div id="skipper-target"></div>
    </>
  );
};

export default SkipperWidget;
