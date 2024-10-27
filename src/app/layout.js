import "./globals.css";
import "./styles/index.scss"
import 'swiper/css';
import Footer from "@/components/core/Footer";
import BookingProvider from "@/context/BookingProvider/BookingProvider";
import Loader from "@/components/core/Loader";
import LoadChatScript from "@/components/core/LoadChatScript";
import Script from "next/script";
import Head from "next/head";
import Aos from "@/components/Aos";
import WidgetBooking from "@/components/core/WidgetBooking";

export default function RootLayout({children}) {

  return (
    <html lang="en">
    <body
      className={`antialiased`}
    >
    <BookingProvider>
      {children}
      <Footer/>
      {/*<Loader/>*/}
      <Aos />
      <LoadChatScript />
      <WidgetBooking />
    </BookingProvider>
    </body>
    </html>
  );
}
