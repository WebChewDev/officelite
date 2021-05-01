import React from "react";
import logo from "../../assets/shared/logo.svg";
import heroImage from "../../assets/home/illustration-charts.svg";
import { ButtonCta } from "../../components/Button/index";
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

function Header({ image, btn }) {
  return (
    <HeaderContainer>
      <Logo to="/">
        <BrandLogo src={logo} />
      </Logo>

      {image ? (
        <HeroImage>
          <Image src={heroImage} />
        </HeroImage>
      ) : null}

      <CallToAction>
        <Heading>{heading}</Heading>
        <SubText>{subheading}</SubText>

        { btn? <Anchor to="/">
          <ButtonCta text={cta_btn} />
        </Anchor> : null}
      </CallToAction>
    </HeaderContainer>
  );
}

export default Header;
