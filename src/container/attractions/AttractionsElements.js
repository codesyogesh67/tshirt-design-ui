import styled from "styled-components";

export const Container = styled.div`
  padding: 0rem 6rem 3rem 5rem;

  @media only screen and (max-width: 768px) {
    padding: 2rem 4rem;
  }
  @media only screen and (max-width: 550px) {
    padding: 2rem;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled.h1`
  font-size: var(--font-size-title);
  line-height: 48px;
  color: var(--color-title);
  font-family: var(--font-title);
  font-weight: 600;
  width: 350px;
  text-align: center;

  @media screen and (max-width: 992px) {
    font-size: 38px;
    line-height: 42px;
    margin-bottom: 2rem;
  }
`;
export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 20px;
  row-gap: 20px;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ImageContainer = styled.div`
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const ImageContainer2 = styled.div`
  padding-top: 4rem;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 1160px) {
    padding-top: 0;
  }
`;
export const ImageContainer3 = styled.div`
  padding-top: 8rem;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 1160px) {
    padding-top: 0;
  }
`;
export const SectionTitle = styled.h1`
  font-size: 22px;
  line-height: 30px;
  padding: 0.5rem 0;
  margin-top: -30px;
`;
export const SectionText = styled.p`
  font-size: 15px;
  width: 75%;
  margin-bottom: 1.2rem;
`;
export const SectionLink = styled.p`
  color: var(--color-link);
  pointer: cursor;
  font-size: 15px;
`;
