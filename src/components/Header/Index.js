import React, { useState } from "react";
import { PageLinks } from "../GenComponent";
import SideNav from "../SideNav/Index";
import {
  HeaderComponent,
  HeaderBg,
  HeaderContainer,
  HeaderInput,
  HeaderLogo,
  HeaderSearch,
  IconContainer,
  SearchEngIcon,
  HeaderRight,
  HeaderBasketContainer,
  BasketIcon,
  CountContainer,
  Count,
  LikeIcon,
  HandlebarsIcon,
  CloseHandleBars,
  NavIconContainer,
} from "./HeaderElements";

function Header() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <HeaderComponent>
        <HeaderBg>
          <HeaderContainer>
            <PageLinks to="/">
              <HeaderLogo src="./images/Trohli-logo.png" />
            </PageLinks>

            <HeaderSearch>
              <HeaderInput />
              <IconContainer>
                <SearchEngIcon />
              </IconContainer>
            </HeaderSearch>

            <HeaderRight>
              <HeaderBasketContainer>
                <LikeIcon />
                <CountContainer>
                  <Count>0</Count>
                </CountContainer>
              </HeaderBasketContainer>

              <PageLinks to="/checkout">
                <HeaderBasketContainer>
                  <BasketIcon />
                  <CountContainer>
                    <Count>0</Count>
                  </CountContainer>
                </HeaderBasketContainer>
              </PageLinks>

              <NavIconContainer onClick={() => setOpenNav(!openNav)}>
                {openNav ? <CloseHandleBars /> : <HandlebarsIcon />}
              </NavIconContainer>
            </HeaderRight>
          </HeaderContainer>
        </HeaderBg>
        <SideNav openNav={openNav} />
      </HeaderComponent>
    </>
  );
}

export default Header;
