import React from "react";
import { Container } from "../../container/ContainerElements";
import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerText,
  BannerButton,
  BannerImageContainer,
} from "./BannerElements";
import { BannerImage } from "../../images";

function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerTitle>Building amazing T-Shirt Designs you want.</BannerTitle>
        <BannerText>
          WooCommerce is a customizable, open-source eCommerce platform built on
          WordPress. Get started quickly and make your way.
        </BannerText>
        <BannerButton>Start a New Design</BannerButton>
      </BannerContent>
      <BannerImageContainer>
        <img src={BannerImage} alt="Banner" />
      </BannerImageContainer>
    </BannerContainer>
  );
}

export default Banner;
