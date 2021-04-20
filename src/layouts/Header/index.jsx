import React from "react";
import logo from "../../assets/shared/logo.svg";
import heroImage from "../../assets/home/illustration-charts.svg";
import Button from "../../components/Button/index";
import { heading, subheading, cta_btn } from "./content";

import {
  HeaderContainer,
  HeroImage,
  Logo,
  BrandLogo,
  Image,
  CallToAction,
  Heading,
  SubText,
  Anchor,
} from "./HeaderElements";

function Header() {
  return (
    <HeaderContainer>
      <Logo to="/">
        <BrandLogo src={logo} />
      </Logo>

      <HeroImage>
        <Image src={heroImage} />
      </HeroImage>

      <CallToAction>
        <Heading>{heading}</Heading>
        <SubText>{subheading}</SubText>

        <Anchor to="/">
          <Button text={cta_btn} />
        </Anchor>
      </CallToAction>
    </HeaderContainer>
  );
}

export default Header;
