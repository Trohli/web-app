import React from "react";
import { Buttons, PageLinks } from "../GenComponents";
import { IconContainer, LeftNavBar } from "./NavBarElement";
import NavOptions from "./NavOptions/Index";

function NavBar() {
  return (
    <LeftNavBar>
      <IconContainer>
        <NavOptions Home Link="/" Text="Home" />
        <NavOptions Search Link="/" Text="Search" />
        <NavOptions Videos Link="/" Text="Videos" />
        <NavOptions Classes Link="/" Text="Classes" />
        <NavOptions Snippets Link="/" Text="Snippets" />
        <NavOptions Tags Link="/" Text="Tags" />
      </IconContainer>

      <PageLinks to="/sign-in">
        <Buttons lightBg={false}>Login</Buttons>
      </PageLinks>
    </LeftNavBar>
  );
}

export default NavBar;
