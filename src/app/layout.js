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

export default function RootLayout({children}) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Установить длительность анимации
      once: true, // Запускать анимацию только один раз
    });
  }, []);

  return (
    <html lang="en">
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
