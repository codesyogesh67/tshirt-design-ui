import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: -100px;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  @media screen and (max-width: 550px) {
    text-align: center;
  }
`;

export const Text = styled.p`
  text-align: center;
  padding: 2rem 6rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-width: 800px;
  }
`;

export const Section = styled.div`
  background: #5f37ef;
  padding: 6rem 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 6rem 3rem;
  }
`;
export const SectionText = styled.p`
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2.2rem;
  text-align: center;
  margin-right: 20px;
  font-family: var(--font-title);

  flex: 1;

  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`;
export const Button = styled.button`
  padding: 0.7rem 1.2rem;
  width: 240px;
  border-radius: 30px;
  background: #5f37ef;
  color: white;
  border: 2px solid white;
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
  min-height: 60px;

  &:hover {
    color: #5f37ef;
    background: white;
  }

  @media screen and (max-width: 768px) {
    width: 260px;
    font-size: 1rem;
  }
`;
