import React from 'react';

function ContactUs(props) {
  return (
    <div className={"bg-gold lg:py-[100px] py-[50px] text-black"}>
      <div className="container">
        <div className={'text-[50px] leading-snug font2 md:mb-[50px] mb-[30px]'}>Contact Us</div>
        <div className={"flex flex-col-reverse md:flex-col"}>
          <iframe
            className={"w-full md:aspect-video aspect-square lg:min-h-[460px] md:min-h-[400px] min-h-[250px]"}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.074592970278!2d-71.122327!3d42.340933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379be3ec50ab1%3A0x24633e9bd497a8b!2sIris%20Hotel%20Boston!5e0!3m2!1sen!2sus!4v1724361826199!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          <div className={"grid lg:grid-cols-4 md:grid-cols-2 md:gap-[30px] gap-[15px] md:mt-[40px] mb-[40px]"}>
            <div>
              <b>Address:</b> 30 Webster St,<br/> Brookline, MA 02446
            </div>
            <div>
              <div><b>Check-in:</b> from 4:00 PM</div>
              <div><b>Check-out:</b> by 11:00 AM</div>
            </div>
            <div>
              <b>Phone:</b> <a href="tel:+18575766900">+1 857 576-6900</a>
            </div>
            <div>
              <b>Email:</b> <a href="mailto:info@irishotelboston.com">info@irishotelboston.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;