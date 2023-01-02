import styled from "styled-components";

export const BannerContainer = styled.div`
  padding: 4rem 0;
  padding-top:5rem;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }

  @media screen and (max-width: 550px) {
    padding: 4rem 0;
  }
`;
export const BannerContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  align-items: start;
  margin-right: 3rem;

  @media screen and (max-width: 760px) {
    margin-right: 2rem;
  }

  @media screen and (max-width: 550px) {
    margin: 0;
  }
`;
export const BannerTitle = styled.h1`
  color: var(--color-title);
  font-family: var(--font-title);
  font-weight: 800;
  font-size: 45px;
  line-height: 55px;
  line-spacing: -0.04em;


  @media screen and (max-width: 992px) {
    font-size: 48px;
    line-height: 60px;
  }
`;
export const BannerText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: black;
  margin-top: 1.5rem;
`;
export const BannerButton = styled.button`
  width: 80%;
  min-height: 50px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  background: var(--color-button);
  color: #fff;
  cursor: pointer;
  outline: none;
  margin: 2rem 0 1rem;
  border-radius: 60px;
  border: none;
  max-width: 230px;

  @media screen and (max-width: 1050px) {
    margin-bottom: 3rem;
  }
`;
export const BannerImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
    width: 100%;

    object-fit: contain;
  }
`;
