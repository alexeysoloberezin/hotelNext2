'use client';

import React from 'react';
// import InputMask from "react-input-mask"
import clsx from "clsx";

function Input({placeholder,label, value, error, onChange, name, mask}) {
  return (
    <label className={clsx("border-b  border-1 border-black  relative pb-[5px]")}>
      {error
        ? <span className={"text-red font-medium"} style={{fontSize: '12px'}}>{error}</span>
        : null}

      {/*{mask ?*/}
      {/*  <InputMask*/}
      {/*    mask={mask}*/}
      {/*    value={value}*/}
      {/*    onChange={onChange}*/}
      {/*    name={name}*/}
      {/*    placeholder={placeholder}*/}
      {/*    style={{color: 'var(--black)', outline: 'none', border: 'none', height: '28px',background: 'transparent', width: '100%'}}*/}
      {/*  />*/}
      {/*  :*/}
        <input
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          style={{color: 'var(--black)', outline: 'none', border: 'none',height: '28px', background: 'transparent', width: '100%'}}
        />
      {/*}*/}
    </label>
  );
}

export default Input;
