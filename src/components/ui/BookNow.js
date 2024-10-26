'use client';

import React from 'react';
import Button from "./Button";

function BookNow({color, hoverColor, noAnimate}) {
  return (
    <div>
      <a data-testid="linkElement" href="?sbe_internalLink" target="_self" className="Y3Mib0">
        <Button label={'Book Now'} color={color} noAnimate={noAnimate} hoverColor={hoverColor}/>
      </a>
    </div>
  );
}

export default BookNow;