import React from 'react';
import MainBlockTemplate from "../components/core/MainBlockTemplate";
import Nectar from "../blocks/Nectar";
import Grid121 from "../components/core/Grid121";
import SectionHeader from "../components/ui/SectionHeader";
import BarMenu from "../blocks/BarMenu";
import BgImageBlock from "../blocks/BgImageBlock";
import { Helmet } from "react-helmet-async";

function Bar(props) {
  return (
    <div>
      <Helmet>
        <title>Nectar Bar | IRIS HOTEL Boston – Cocktails, Coffee & More</title>
        <meta property="og:title" content="Nectar Bar | IRIS HOTEL Boston – Cocktails, Coffee & More" />
        <meta  property="og:description" content="Unwind at Nectar Bar in IRIS HOTEL Boston, featuring an array of crafted cocktails, premium coffee, and teas. A perfect spot for socializing and relaxation." />
        <meta name="description" content="Unwind at Nectar Bar in IRIS HOTEL Boston, featuring an array of crafted cocktails, premium coffee, and teas. A perfect spot for socializing and relaxation." />
      </Helmet>

      <MainBlockTemplate
        title={'Nectar Bar'}
        image={'/barBg.jpg'}
        description={'A Lively Oasis of Flavors and Elegance'}
      >
      </MainBlockTemplate>

      <Nectar/>

      <div className={"bg-[#0E4840] text-white lg:py-[100px] py-[50px]"}>
        <div className="container">
          <Grid121
            imgTemplate={'nec{**}.png'}
          />
        </div>
      </div>

      <BarMenu />

      {/*<BgImageBlock*/}
      {/*  hideBtn={true}*/}
      {/*  noWebp={true}*/}
      {/*  bg={'/barBg2.jpg'}*/}
      {/*>*/}
      {/*  <h1>Each sip here </h1>*/}
      {/*  <div className={"max-w-[250px] mt-[15px]"}>is a little journey into the world of flavor and enjoyment.</div>*/}
      {/*</BgImageBlock>*/}
    </div>
  );
}

export default Bar;