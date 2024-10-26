'use client';

import React from 'react';
import clsx from "clsx";

function Tags({number, title, color}) {
  return (
    <div className={'flex gap-[10px]'}>
      <div className={clsx('tag mobSm', color)}>{number}</div>
      <div className={clsx('tag mobSm', color)}>{title}</div>
    </div>
  );
}

export default Tags;