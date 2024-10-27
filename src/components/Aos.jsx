'use client'
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Aos(props) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({ duration: 800, once: true });
    }
  }, []);
  return (
    <div></div>
  );
}

export default Aos;