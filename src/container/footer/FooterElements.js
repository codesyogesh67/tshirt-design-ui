import styled from "styled-components";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import LockResetIcon from "@mui/icons-material/LockReset";

export const Wrapper = styled.div`
  background: #7854f7;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10rem;

  padding-top: 2rem;

  @media screen and (max-width: 1050px) {
    padding: 0;
    padding-top: 2rem;
    padding-left: 0.5rem;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Section = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;
export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.8rem;
`;
export const CheckCircle = styled(CheckCircleOutlineIcon)`
  width: 50px !important;
  height: 50px !important;
`;
export const SportsSoccer = styled(SportsSoccerIcon)`
  width: 50px !important;
  height: 50px !important;
`;
export const LockReset = styled(LockResetIcon)`
  width: 50px !important;
  height: 50px !important;
`;

export const Text = styled.div`
  margin-left: 10px;
  font-size: 1.5rem;
`;
export const LogoContainer = styled.div`
  margin: auto;
  margin-top: 6rem;
  margin-bottom: 3rem;
`;
export const LogoDesign = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.7rem;

  p:nth-child(1) {
    background: #fff;
    color: var(--color-button);
    padding: 0.5rem;
    border-radius: 5px;
    font-weight: 800;
    letter-spacing: 0.1rem;
    font-family: var(--font-title);
  }

  p:nth-child(2) {
    font-weight: 800;
    font-family: var(--font-title);
    margin-left: 0.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
`;
export const Divider = styled.div`
  background: rgb(230, 230, 230);
  text-align: center;
  height: 2px;
  width: 80%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const LowerContainer = styled.div`
  padding: 5rem;

  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  row-gap: 30px;
`;

export const Compartment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.01rem;
  font-size: 1.7rem;
`;
export const Links = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
`;
export const Link = styled.p`
  padding: 0.5rem 0;
`;
