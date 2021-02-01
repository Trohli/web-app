import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
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
  const [{ basket, openNav }, dispatch] = useStateValue();
  const ToggleNav = () => {
    dispatch({
      type: "TOGGEL_NAV",
      navState: !openNav,
    });
  };

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
                    <Count>{basket?.length} </Count>
                  </CountContainer>
                </HeaderBasketContainer>
              </PageLinks>

              <NavIconContainer onClick={ToggleNav}>
                {openNav ? <CloseHandleBars /> : <HandlebarsIcon />}
              </NavIconContainer>
            </HeaderRight>
          </HeaderContainer>
        </HeaderBg>
        <SideNav />
      </HeaderComponent>
    </>
  );
}

export default Header;
