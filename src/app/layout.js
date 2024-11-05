import "./globals.css";
import "./styles/index.scss"
import 'swiper/css';
import 'react-medium-image-zoom/dist/styles.css'
import Footer from "@/components/core/Footer";
import LoadChatScript from "@/components/core/LoadChatScript";
import Aos from "@/components/Aos";
import WidgetBooking from "@/components/core/WidgetBooking";

export default function RootLayout({children}) {

  return (
    <html lang="ru">
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
