import React from "react";
import {
  CardContainer,
  Heading,
  Pricing,
  SubHeading,
  Subtext,
  Anchor,
  Btn,
  BtnText,
} from "./CardsElements";

function Cards({
  heading,
  pricing,
  subheading,
  subtext_1,
  subtext_2,
  subtext_3,
  btn_text,
}) {
  return (
    <>
      <CardContainer>
        <Heading>{heading}</Heading>
        <Pricing>{pricing}</Pricing>
        <SubHeading>{subheading}</SubHeading>
        <Subtext>{subtext_1}</Subtext>
        <Subtext>{subtext_2}</Subtext>
        <Subtext className="last">{subtext_3}</Subtext>
        <Anchor>
          <Btn>
            <BtnText>{btn_text}</BtnText>
          </Btn>
        </Anchor>
      </CardContainer>
    </>
  );
}

export default Cards;
