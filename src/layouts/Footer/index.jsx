import React from "react";
import { FooterContainer, Wrapper, FooterBtn } from "./FooterElements";
import LiveCountdown from "../../components/LiveCountdown/index";
// container for live countdown
function Footer() {
  return (
    <FooterContainer>
      <Wrapper>
        <LiveCountdown noBtn={true} />
        <FooterBtn text="hello!" />
      </Wrapper>
    </FooterContainer>
  );
}

export default Footer;
