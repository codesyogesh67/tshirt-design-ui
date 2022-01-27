import styled from "styled-components";
import { Rectangle } from "../../images";

export const Container = styled.div`
  background-image: url(${Rectangle});
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const SectionContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SectionContainer = styled(SectionContainerStyle)`
  padding-left: 20vw;

  @media screen and (max-width: 1050px) {
    padding-left: 10vw;
  }
  @media screen and (max-width: 850px) {
    padding: 0;
  }
`;
export const SectionContainer1 = styled(SectionContainerStyle)`
  padding-left: 30vw;

  margin-top: -5vh;

  @media screen and (max-width: 1050px) {
    padding-left: 20vw;
  }
  @media screen and (max-width: 850px) {
    padding-left: 8vw;
  }
`;

export const ImageContainerStyle = styled.div`
  height: 60vh;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const ImageContainer = styled(ImageContainerStyle)`
  margin-top: -5vh;
`;

export const ImageContainer1 = styled(ImageContainerStyle)``;

export const Section = styled.div`
  width: 28vw;
  padding: 0 2rem;
  margin-top: -8vh;

  @media screen and (max-width: 850px) {
    width: 50vw;
  }
`;
export const SectionTitle = styled.h1`
  color: #fff;
  font-size: 20px;
  line-height: 32px;
  font-family: var(--font-title);
  margin-bottom: 0.2rem;
`;
export const SectionText = styled.p`
  color: #d4d2d2;
  font-size: 0.8rem;
  margin-bottom: 20px;
  max-height: 20vh;
  overflow: hidden;
`;
export const Button = styled.button`
  background: var(--color-button2);
  padding: 10px 18px;
  color: #fff;
  border-radius: 30px;
  border: none;

  @media screen and (max-width: 550px) {
    padding: 5px 10px;
    font-size: 0.8rem;
  }
`;
