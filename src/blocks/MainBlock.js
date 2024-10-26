import React from 'react';
import Button from "../components/ui/Button";
import MainBlockTemplate from "../components/core/MainBlockTemplate";
import BookNow from "../components/ui/BookNow";
import clsx from 'clsx';

function MainBlock({skipperIsReady, onInitSkipper}) {
  return (
    <MainBlockTemplate
      title={'Iris Hotel Boston'}
      video={'/examples/videoplayback.mp4'}
      videoWebM={'/examples/videoplayback.webm'}
      mobileGif={'/IMG_4931.gif'}
      preview={{
        mob: '/mainPreview_mob.jpg',
        desc: '/mainPreview.jpg'
      }}
      description={' where design meets comfort'}
    >
      <div className={clsx('duration-300 transition',{'opacity-0': !skipperIsReady})}><BookNow /></div>
    </MainBlockTemplate>
  );
}

export default MainBlock;