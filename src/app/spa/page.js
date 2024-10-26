import React from 'react';
import SpaClient from "@/app/spa/spaClient";

export const metadata = {
  title: "Spa Room | IRIS HOTEL Boston – Relaxation & Facial Treatments",
  description:
    "Indulge in relaxation at the Spa Room in IRIS HOTEL Boston. Treat yourself to a range of facial treatments and rejuvenating experiences in a serene environment.",
  openGraph: {
    title: "Spa Room | IRIS HOTEL Boston – Relaxation & Facial Treatments",
    description:
      "Indulge in relaxation at the Spa Room in IRIS HOTEL Boston. Treat yourself to a range of facial treatments and rejuvenating experiences in a serene environment.",
    url: "https://your-hotel-site.com/spa-room",
    type: "website",
  },
};

function Page(props) {

  return (
    <div>
      <SpaClient />
    </div>
  );
}

export default Page;