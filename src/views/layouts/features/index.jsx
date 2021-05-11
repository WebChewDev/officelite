import React from "react";
import Cards from "../../components/Cards/index";
import { FeaturesContainer } from "./FeaturesElements";
import {
  heading,
  pricing,
  subheading,
  subtext1,
  subtext2,
  subtext3,
  btn,
} from "./content";

function Features() {
  return (
    <FeaturesContainer>
      <Cards
        heading={heading[0]}
        pricing={pricing[0]}
        subheading={subheading[0]}
        subtext_1={subtext1[0]}
        subtext_2={subtext2[0]}
        subtext_3={subtext3[0]}
        btn_text={btn}
        buttonType="secondary"
      />
      <Cards
        heading={heading[1]}
        pricing={pricing[1]}
        subheading={subheading[1]}
        subtext_1={subtext1[1]}
        subtext_2={subtext2[1]}
        subtext_3={subtext3[1]}
        btn_text={btn}
        buttonType="contrast"
        subTextType ="dark"
        pricingType ="dark"
        headingType ="dark"
      />
      <Cards
        heading={heading[2]}
        pricing={pricing[2]}
        subheading={subheading[2]}
        subtext_1={subtext1[2]}
        subtext_2={subtext2[2]}
        subtext_3={subtext3[2]}
        btn_text={btn}
        buttonType="secondary"
      />
    </FeaturesContainer>
  );
}

export default Features;
