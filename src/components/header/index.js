import React from "react";
import {
  HeaderContainer,
  Features,
  Link,
  Links,
  Button,
  HamburgerIcon,
} from "./HeaderElements";
import Logo from "./Logo";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Features>
        <Link>Sell</Link>
        <Link>MarketPlace</Link>
        <Link>Community</Link>
        <Link>Develop</Link>
        <Link>Resources</Link>
      </Features>
      <Links>
        <Link>Log in</Link>
        <Button>Get Started</Button>
        <SearchIcon />
      </Links>
      <HamburgerIcon />
    </HeaderContainer>
  );
}

export default Header;
