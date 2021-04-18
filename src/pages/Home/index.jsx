import React from "react";
import Features from "../../layouts/Features/index";
import Header from "../../layouts/Header/index";
import { HeaderContainer, BackgroundImage } from "./HomeElements";
import BgSvg from "../../assets/home/bg-pattern-header.svg";

function Home() {
  return (
    <HeaderContainer>
      {/* <BackgroundImage src={BgSvg} alt="Background" /> */}
      <Header />
      <Features />
    </HeaderContainer>
  );
}

export default Home;
