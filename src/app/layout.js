import "./globals.css";
import "./styles/index.scss"
import 'swiper/css';
import 'react-medium-image-zoom/dist/styles.css'
import Footer from "@/components/core/Footer";
import LoadChatScript from "@/components/core/LoadChatScript";
import Aos from "@/components/Aos";
import WidgetBooking from "@/components/core/WidgetBooking";
import Script from "next/script";

export default function RootLayout({children}) {

  return (
    <html lang="ru">
    <head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-3SJ2N91Y8T"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3SJ2N91Y8T');
          `}
      </Script>
    </head>
    <body
      className={`antialiased`}
    >
    <div className="app" id={'app'}>
      {children}
      <Footer/>
      {/*<Loader/>*/}
      <Aos/>
      <LoadChatScript/>
      <WidgetBooking/>
    </div>
    </body>
    </html>
  );
}
