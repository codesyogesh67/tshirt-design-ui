import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-family);
`;
export const LogoDesign = styled.div`
  flex: 0.3;
  min-width: 120px;
  display: flex;
  align-items: center;

  p:nth-child(1) {
    background: var(--color-button);
    color: white;
    padding: 0.4rem;
    border-radius: 5px;
    font-weight: 800;
    letter-spacing: 0.02rem;
    font-family: var(--font-title);
  }

  p:nth-child(2) {
    font-weight: 800;
    font-family: var(--font-title);
    margin-left: 0.2rem;
    text-transform: uppercase;
  }
`;

export const Features = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;
export const Link = styled.p`
  font-size: 18px;
  line-height: 21px;
  font-family: Roboto;
`;

export const Links = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 992px) {
    flex: 0.4;
    display: none;
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 47px;
  background: var(--color-button);
  color: #fff;
  font-size: 18px;
  font-height: 21px;
  border-radius: 5px;
  border: none;
`;

export const HamburgerIcon = styled(MenuIcon)`
  display: none !important;

  @media screen and (max-width: 992px) {
    display: block !important;
  }
`;
