import React from "react";
import { Container } from "../ContainerElements";
import {
  UpperContainer,
  LowerContainer,
  Wrapper,
  Section,
  Text,
  IconContainer,
  Divider,
  Compartment,
  Title,
  Links,
  Link,
  SectionContainer,
  LogoContainer,
  LogoDesign,
  CheckCircle,
  SportsSoccer,
  LockReset,
} from "./FooterElements";
import Logo from "../../components/header/Logo";

function Footer() {
  return (
    <Wrapper>
      <UpperContainer>
        <SectionContainer>
          <Section>
            <IconContainer>
              {" "}
              <CheckCircle />
            </IconContainer>

            <Text> 30 day money back guarantee</Text>
          </Section>
          <Section>
            <IconContainer>
              {" "}
              <SportsSoccer />
            </IconContainer>

            <Text> Support teams across the world</Text>
          </Section>

          <Section>
            <IconContainer>
              {" "}
              <LockReset />
            </IconContainer>

            <Text> Safe & Secure online payment </Text>
          </Section>
        </SectionContainer>
        <LogoContainer>
          <LogoDesign>
            <p>TSHIRT</p>
            <p>Design</p>
          </LogoDesign>
        </LogoContainer>
      </UpperContainer>
      <Divider />
      <LowerContainer>
        <Compartment>
          <Title>WHO WE ARE</Title>
          <Links>
            <Link>About</Link>
            <Link>Team</Link>
            <Link>Work With Us</Link>
          </Links>
        </Compartment>
        <Compartment>
          <Title>WooCommerce</Title>
          <Links>
            <Link>Features</Link>
            <Link>Payments</Link>
            <Link>Marketing</Link>
            <Link>Shipping</Link>
            <Link>Email Newsletter</Link>
          </Links>
        </Compartment>
        <Compartment>
          <Title>Other Products</Title>
          <Links>
            <Link>Storefront</Link>
            <Link>WooSlider</Link>
            <Link>Sensei</Link>
          </Links>
        </Compartment>
        <Compartment>
          <Title>Support</Title>
          <Links>
            <Link>Documentation</Link>
            <Link>Customization</Link>
            <Link>Support Policy</Link>
            <Link>Contact</Link>
            <Link>Privacy Notice</Link>
          </Links>
        </Compartment>
      </LowerContainer>
    </Wrapper>
  );
}

export default Footer;
