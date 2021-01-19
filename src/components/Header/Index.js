import React from "react";
import { PageLinks } from "../GenComponent";
import {
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
  HeaderAvatar,
  LikeIcon,
} from "./HeaderElements";

function Header() {
  return (
    <>
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

            <HeaderAvatar />
          </HeaderRight>
        </HeaderContainer>
      </HeaderBg>
    </>
  );
}

export default Header;
