import React from 'react';
import clsx from "clsx";

function Arrow({classes = 'fill-black', width = '45', height = '8'}) {
  return (
    <svg className={clsx(classes, 'transition-all')} width={width} height={height} viewBox="0 0 45 8" fill="none">
      <path
        d="M44.3536 4.35355C44.5488 4.15829 44.5488 3.84171 44.3536 3.64645L41.1716 0.464466C40.9763 0.269204 40.6597 0.269204 40.4645 0.464466C40.2692 0.659728 40.2692 0.976311 40.4645 1.17157L43.2929 4L40.4645 6.82843C40.2692 7.02369 40.2692 7.34027 40.4645 7.53553C40.6597 7.7308 40.9763 7.7308 41.1716 7.53553L44.3536 4.35355ZM0 4.5L44 4.5V3.5L0 3.5L0 4.5Z"/>
    </svg>
  );
}

export default Arrow;