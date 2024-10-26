import React from 'react';
import Button from "./Button";
import clsx from "clsx";
import {handleScroll} from "../../utils/handleScroll";

function BtnContacts({loading, color = 'red', classes, type = 'link'}) {
  function handleClickSubmit(e){
    if(type === 'link'){
      handleScroll(e, 'contacts')
    }
  }

  return (
    <div className={clsx("flex lg:flex-row flex-col items-center justify-center  gap-[10px] mx-auto", classes)}>
      <Button label={loading ? 'Loading...' : 'оставить заявку'} onClick={handleClickSubmit} color={color} disabled={loading} className={"mobFull mobSm"} type={'submit'} />
      <div className={"text-[36px] lg:block hidden"}>&</div>
      <a href="tel:8003207095" className={clsx("tag mobFull mobSm", color)}>800-320-7095</a>
    </div>
  );
}


export default BtnContacts;