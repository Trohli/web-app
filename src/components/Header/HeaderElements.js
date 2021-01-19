import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Avatar } from "@material-ui/core";

export const HeaderBg = styled.div`
  background: var(--mainTheme);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid var(--lightTheme);
  position: sticky;
  top: 0;
  z-index: 100;

  @media screen and (max-width: 768px) {
    height: 40px;
  }
  @media screen and (max-width: 540px) {
    height: 35px;
  }
  @media screen and (max-width: 375px) {
    height: 30px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1250px;
  padding: 0 15px;
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  text-align: center;
`;

export const HeaderLogo = styled.img`
  object-fit: contain;
  height: 40px;
  flex: 0.1;

  @media screen and (max-width: 768px) {
    height: 30px;
  }
  @media screen and (max-width: 540px) {
    height: 20px;
  }
  @media screen and (max-width: 375px) {
    height: 18px;
  }
`;

export const HeaderSearch = styled.div`
  display: flex;
  flex: 0.5;
  align-items: center;
  justify-content: center;
  height: 30px;
  max-width: 550px;
  width: 100%;
  border-radius: 9px;
  background: #fff;

  @media screen and (max-width: 768px) {
    max-width: 450px;
    height: 25px;
  }
  @media screen and (max-width: 540px) {
    max-width: 200px;
    height: 22px;
  }
  @media screen and (max-width: 375px) {
    max-width: 160px;
    height: 20px;
  }
`;

export const HeaderInput = styled.input`
  background: transparent;
  border: none;
  flex: 0.9;
  width: 100%;
  padding: 5px 10px;
  font-size: 15px;

  &:focus {
    outline: none;
  }
`;

export const IconContainer = styled.div`
  background: var(--subTheme);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 0 9px 9px 0;
  flex: 0.1;
`;

export const SearchEngIcon = styled(SearchIcon)`
  font-size: 25px !important;
  color: var(--lightTheme) !important;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0.2;

  @media screen and (max-width: 768px) {
    flex: 0.3;
  }
`;

export const HeaderProfile = styled.div`
  display: flex;
  align-item: center;
`;

export const HeaderAvatar = styled(Avatar)`
  height: 40px !important;
  width: 40px !important;

  @media screen and (max-width: 768px) {
    height: 30px !important;
    width: 30px !important;
  }
  @media screen and (max-width: 540px) {
    height: 25px !important;
    width: 25px !important;
  }
  @media screen and (max-width: 375px) {
    height: 20px !important;
    width: 20px !important;
  }
`;

export const ProfileText = styled.h3`
  font-size: 18px;
  font-weight: 5px;
`;

export const HeaderBasketContainer = styled.div`
  position: relative;
  width: 40px;
`;

export const BasketIcon = styled(ShoppingBasketIcon)`
  font-size: 30px !important;
  color: var(--lightTheme) !important;

  @media screen and (max-width: 540px) {
    font-size: 25px !important;
  }
  @media screen and (max-width: 375px) {
    font-size: 20px !important;
  }
`;

export const LikeIcon = styled(FavoriteBorderIcon)`
  font-size: 30px !important;
  color: var(--lightTheme) !important;

  @media screen and (max-width: 540px) {
    font-size: 25px !important;
  }
  @media screen and (max-width: 375px) {
    font-size: 18px !important;
  }
`;

export const CountContainer = styled.div`
  display: felx;
  background: var(--subTheme);
  border-radius: 999px;
  border: 1px solid var(--mainTheme);
  position: absolute;
  top: 1px;
  right: 0px;
  padding: 4px;
  width: 10px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 540px) {
    width: 8px;
    height: 8px;
    padding: 2px;
  }
`;

export const Count = styled.p`
  font-size: 12px;
  color: var(--lightTheme);

  @media screen and (max-width: 540px) {
    font-size: 10px;
  }
`;
