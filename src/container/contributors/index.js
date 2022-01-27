import React from "react";
import { Container } from "../ContainerElements";
import {
  Header,
  Title,
  Text,
  ImageContainer,
  Wrapper,
  Section,
  SectionText,
  Button,
} from "./ContributorsElements";
import { Members } from "../../images";

function Contributors() {
  return (
    <Wrapper>
      <Header>
        <Title>Contributed by real people</Title>
      </Header>
      <Text>
        WooCommerce is developer friendly, too. Built with a REST API,
        WooCommerce is scalable and can integrate with virtually any service.
      </Text>
      <ImageContainer>
        <img src={Members} alt="Contributors" />
      </ImageContainer>

      <Section>
        <SectionText>
          WooCommerce - the most customizable eCommerce platform for building
          your online business.
        </SectionText>
        <Button>Get Started</Button>
      </Section>
    </Wrapper>
  );
}

export default Contributors;
