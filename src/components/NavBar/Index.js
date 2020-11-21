import React from "react";
import {
  NavBg,
  NavContainer,
  NavUl,
  NavLi,
  NavRight,
  NavIcon,
  NavText,
  LocationIcon,
  HelpIcon,
} from "./NavBarElements";

function Navbar() {
  return (
    <>
      <NavBg>
        <NavContainer>
          <NavUl>
            <NavLi>Home</NavLi>
            <NavLi>About</NavLi>
            <NavLi>Collection</NavLi>
            <NavLi>Blog</NavLi>
          </NavUl>
          <NavRight>
            <NavIcon>
              <HelpIcon />
              <NavText>Help</NavText>
            </NavIcon>
            <NavIcon>
              <LocationIcon />
              <NavText>Enugu</NavText>
            </NavIcon>
          </NavRight>
        </NavContainer>
      </NavBg>
    </>
  );
}

export default Navbar;
