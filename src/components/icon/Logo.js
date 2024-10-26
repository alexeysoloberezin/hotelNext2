import React from 'react';

function Logo(props) {
  return (
    <div className={"sm:max-w-[123px] max-w-[90px]"}>
      <img  src={"/logo.svg"} alt={'Лого'}/>
    </div>
  );
}

export default Logo;