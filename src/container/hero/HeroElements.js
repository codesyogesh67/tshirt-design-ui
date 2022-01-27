import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: var(--color-bg);
  padding: 3rem 6rem;
  padding-right: 5rem;

  @media only screen and (max-width: 768px) {
    padding: 2rem 4rem;
  }

  @media only screen and (max-width: 550px) {
    padding: 2rem;
  }
`;
