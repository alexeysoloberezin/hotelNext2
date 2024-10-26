'use client'

import React, {createContext, useContext, useState} from 'react';
import SkipperWidget from "@/components/core/WidgetBooking";

const BookingContext = createContext(null);

function BookingProvider({children}) {
  const [state, setState] = useState('initial value');

  const initSkipper = (val) => {
    debugger
  }

  return (
    <BookingContext.Provider value={{ state, setState }}>
      <SkipperWidget onInitSkipper={initSkipper}/>
      {children}
    </BookingContext.Provider>
  );
}

export const useBookingContext = () => useContext(BookingContext);

export default BookingProvider;