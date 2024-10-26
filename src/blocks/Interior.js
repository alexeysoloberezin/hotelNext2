import React from 'react';
import SectionHeader from "../components/ui/SectionHeader";
import PerfectGrid from "../components/core/PerfectGrid";

function Interior(props) {
  return (
    <div className={"bg-purple lg:py-[100px] py-[50px]"}>
      <div className={"container"}>
        <SectionHeader
          text={'As you savor your meal, don\'t forget to cast your eyes upward and behold the masterpiece that graces our ceiling—a stunning mural hand-painted by the renowned Italian artist, Giovanni De Cunto. This breathtaking artwork infuses the restaurant with an air of sophistication and culture, creating a unique dining experience that transcends the ordinary.'}
          btnHref={'/bar'}
          color={'black'}
          mobImage={'/interior_2.png'}

          title={'Interior'}
        />
        <PerfectGrid
          hideMob={true}
          imgTemplate={'/interior_{**}.png'}
        />
      </div>
    </div>
  );
}

export default Interior;