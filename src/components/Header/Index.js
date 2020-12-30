import React from "react";
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
          <HeaderLogo src="./images/Trohli-logo.png" />

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

            <HeaderBasketContainer>
              <BasketIcon />
              <CountContainer>
                <Count>0</Count>
              </CountContainer>
            </HeaderBasketContainer>

            <HeaderAvatar />
          </HeaderRight>
        </HeaderContainer>
      </HeaderBg>
    </>
  );
}

export default Header;
