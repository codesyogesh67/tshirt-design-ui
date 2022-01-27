import React from "react";
import {
  Container,
  Header,
  Title,
  Body,
  Section,
  ImageContainer,
  ImageContainer2,
  ImageContainer3,
  SectionTitle,
  SectionText,
  SectionLink,
} from "./AttractionsElements";

import { Start, Community, Customize } from "../../images";
function Attractions() {
  return (
    <Container>
      <Header>
        <Title>Your eCommerce made simple</Title>
      </Header>
      <Body>
        <Section>
          <ImageContainer>
            <img src={Start} alt="Start" />
          </ImageContainer>
          <SectionTitle>All You Need to Start</SectionTitle>
          <SectionText>
            Add WooCommerce plugin to any WordPress site and set up a new store
            in minutes.
          </SectionText>
          <SectionLink>Start your design</SectionLink>
        </Section>

        <Section>
          <ImageContainer2>
            <img src={Customize} alt="Customize" />
          </ImageContainer2>
          <SectionTitle>Customize and Extend</SectionTitle>
          <SectionText>
            Add WooCommerce plugin to any WordPress site and set up a new store
            in minutes.
          </SectionText>
          <SectionLink>Browse Designs</SectionLink>
        </Section>

        <Section>
          <ImageContainer3>
            <img src={Community} alt="Join" />
          </ImageContainer3>
          <SectionTitle>Active Community</SectionTitle>
          <SectionText>
            Add WooCommerce plugin to any WordPress site and set up a new store
            in minutes.
          </SectionText>
          <SectionLink>Join Community</SectionLink>
        </Section>
      </Body>
    </Container>
  );
}

export default Attractions;
