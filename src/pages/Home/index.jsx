import React from "react";
import Features from "../../layouts/Features/index";
import Header from "../../layouts/Header/index";
import Footer from "../../layouts/Footer/index";
import BgSvg from "../../assets/home/bg-pattern-footer.svg";
import { Container, BgContainer, BgImage } from "./HomeElements";

function Home() {
  return (
    <Container>
      <Header image btn/>
      <Features />
      <Footer />
      <BgContainer>
        <BgImage src={BgSvg} />
      </BgContainer>
    </Container>
  );
}

export default Home;
