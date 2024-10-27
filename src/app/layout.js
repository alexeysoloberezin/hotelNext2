'use client'

import "./globals.css";
import "./styles/index.scss"
import 'swiper/css';
import Footer from "@/components/core/Footer";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import BookingProvider from "@/context/BookingProvider/BookingProvider";
import Loader from "@/components/core/Loader";
import LoadChatScript from "@/components/core/LoadChatScript";
import Script from "next/script";
import Head from "next/head";

export default function RootLayout({children}) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Установить длительность анимации
      once: true, // Запускать анимацию только один раз
    });
  }, []);

  return (
    <html lang="en">
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
        console.log('window.initSkipper', window.initSkipper, window, window._initSkipper)
        // window.restartSkipperWidget()

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
    <body
      className={`antialiased`}
    >
    <BookingProvider>
      {children}
      <Footer/>
      <Loader/>
      <LoadChatScript />
    </BookingProvider>
    </body>
    </html>
  );
}
