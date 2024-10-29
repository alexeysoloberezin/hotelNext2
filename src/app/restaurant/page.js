import React from 'react';
import PageClient from "@/app/restaurant/pageClient";


export const metadata = {
  title: "Petal Restaurant | IRIS HOTEL Boston – Fine Dining & Events",
  description:
    "Experience exquisite dining at Petal Restaurant, offering gourmet dishes and event hosting services. Enjoy live music and customizable menus for special occasions.",
  openGraph: {
    title: "Petal Restaurant | IRIS HOTEL Boston – Fine Dining & Events",
    description:
      "Experience exquisite dining at Petal Restaurant, offering gourmet dishes and event hosting services. Enjoy live music and customizable menus for special occasions.",
  },
};

function Restaurant(props) {
  return (
    <PageClient />
  );
}

export default Restaurant;