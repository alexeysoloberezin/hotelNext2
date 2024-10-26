import React from 'react';

function Card({title, text, image}) {
  return (
    <div style={{background: `url('${image}') center/cover no-repeat`}} className={"lg:min-h-[394px] min-h-[350px] rounded-base p-[20px] all-text-white flex flex-col"}>
      <h4 className={"mb-[10px] mt-auto "}>{title}</h4>
      <p style={{lineHeight: '120%'}} className={"lg:text-base text-sm"}>{text}</p>
    </div>
  );
}

export default Card;