import React from "react";

import {
  Container,
  ImageContainer,
  ImageContainer1,
  Section,
  SectionContainer,
  SectionContainer1,
  SectionTitle,
  SectionText,
  Button,
} from "./FeaturesElements";
import { Develop, GlobalCommunity } from "../../images";

function Features() {
  return (
    <Container>
      <SectionContainer>
        <ImageContainer>
          <img src={Develop} alt="Develop your skills" />
        </ImageContainer>
        <Section>
          <SectionTitle>
            Develop <br />
            Without Limits
          </SectionTitle>
          <SectionText>
            WooCommerce is developer friendly, too. Built with a REST API,
            WooCommerce is scalable and can integrate with virtually any
            service. Design a complex store from scratch, extend a store for a
            client, or simply add a single product to a WordPress site—your
            store, your way.
          </SectionText>
          <Button>Read the Documentation</Button>
        </Section>
      </SectionContainer>

      <SectionContainer1>
        <Section>
          <SectionTitle>
            Know your<br></br> Global Community
          </SectionTitle>
          <SectionText>
            WooCommerce is developer friendly, too. Built with a REST API,
            WooCommerce is scalable and can integrate with virtually any
            service. Design a complex store from scratch, extend a store for a
            client, or simply add a single product to a WordPress site—your
            store, your way.
          </SectionText>
          <Button>Read the Documentation</Button>
        </Section>
        <ImageContainer1>
          <img src={GlobalCommunity} alt="Global Community" />
        </ImageContainer1>
      </SectionContainer1>
    </Container>
  );
}

export default Features;
