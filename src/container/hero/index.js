import React from "react";
import { Container } from "../ContainerElements";
import { Header, Banner } from "../../components";
import { HeroContainer } from "./HeroElements";

function Hero() {
  return (
    <HeroContainer>
      <Header />
      <Banner />
    </HeroContainer>
  );
}

export default Hero;
