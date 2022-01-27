import React from "react";
import { Container } from "../ContainerElements";
import {
  TestimonialContainer,
  TestimonialWrapper,
  Title,
  Header,
  ImageContainer,
  ImageWrapper,
  Box,
  Text,
} from "./TestimonialsElements";
import {
  Supporter1,
  Supporter2,
  Supporter3,
  Supporter4,
  Supporter5,
  Supporter6,
} from "../../images";

function Testimonials() {
  return (
    <TestimonialContainer>
      <TestimonialWrapper>
        <Header>
          <Title>
            Trusted by Agencies <br /> & Store Owners
          </Title>
        </Header>
        <Box>
          <Text>
            WooCommerce is developer friendly, too. Built with a REST API,
            WooCommerce is scalable and can integrate with virtually any
            service. WooCommerce is scalable and can integrate with virtually
            any service.
          </Text>
        </Box>
        <ImageContainer>
          <ImageWrapper>
            <img src={Supporter1} alt="Supporter" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={Supporter2} alt="Supporter" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={Supporter3} alt="Supporter" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={Supporter4} alt="Supporter" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={Supporter5} alt="Supporter" />
          </ImageWrapper>
          <ImageWrapper>
            <img src={Supporter6} alt="Supporter" />
          </ImageWrapper>
          {/* <img src={Supporter2} alt="Supporter" />
          <img src={Supporter3} alt="Supporter" />
          <img src={Supporter4} alt="Supporter" />
          <img src={Supporter5} alt="Supporter" />
          <img src={Supporter6} alt="Supporter" /> */}
        </ImageContainer>
      </TestimonialWrapper>
    </TestimonialContainer>
  );
}

export default Testimonials;
