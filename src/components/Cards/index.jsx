import React from "react";

import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonContrast,
} from "../Button/index";
import {
  CardContainer,
  Heading,
  HeadingDark,
  Pricing,
  PricingDark,
  SubHeading,
  SubText,
  SubTextDark,
  Anchor,
} from "./CardsElements";

function Cards({
  heading,
  pricing,
  subheading,
  subtext_1,
  subtext_2,
  subtext_3,
  subTextType,
  btn_text,
  buttonType,
  headingType,
  pricingType,
}) {
  // button styles
  let button;
  if (buttonType === "primary") {
    button = <ButtonPrimary text={btn_text} />;
  } else if (buttonType === "secondary") {
    button = <ButtonSecondary text={btn_text} />;
  } else if (buttonType === "contrast") {
    button = <ButtonContrast text={btn_text} />;
  }

  // subtext styles
  let subText;
  if (subTextType === "dark") {
    subText = (
      <>
        <SubTextDark>{subtext_1}</SubTextDark>
        <SubTextDark>{subtext_2}</SubTextDark>
        <SubTextDark>{subtext_3}</SubTextDark>
      </>
    );
  } else {
    subText = (
      <>
        <SubText>{subtext_1}</SubText>
        <SubText>{subtext_2}</SubText>
        <SubText>{subtext_3}</SubText>
      </>
    );
  }

  return (
    <>
      <CardContainer>
        {/* Heading */}
        {headingType === 'dark' ? (
          <HeadingDark>{heading}</HeadingDark>
        ) : (
          <Heading>{heading}</Heading>
        )}
        {/* Pricing */}
        {pricingType === 'dark' ? (
          <PricingDark>{pricing}</PricingDark>
        ) : (
          <Pricing>{pricing}</Pricing>
        )}
        <SubHeading>{subheading}</SubHeading>
        {subText}
        <Anchor>{button}</Anchor>
      </CardContainer>
    </>
  );
}

export default Cards;
