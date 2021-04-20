import React from "react";
import { FooterContainer } from "./FooterElements";
import LiveCountdown from "../../components/LiveCountdown/index";

function Footer() {
  return (
    <FooterContainer>
      <LiveCountdown />
    </FooterContainer>
  );
}

export default Footer;
