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
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1250px;
  width: 100%;
  text-align: center;
`;

export const HeaderLogo = styled.img`
  object-fit: contain;
  height: 40px;
  flex: 0.1;
`;

export const HeaderSearch = styled.div`
  display: flex;
  flex: 0.5;
  align-items: center;
  justify-content: center;
  height: 30px;
  max-width: 550px;
  width: 100%;
  border-radius: 12px;
  background: var(--lightTheme);
`;

export const HeaderInput = styled.input`
  padding: 10px;
  background: transparent;
  border: none;
  height: 90%;
  flex: 0.9;
  padding: 0 15px;
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
  border-radius: 0 12px 12px 0;
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
`;

export const HeaderProfile = styled.div`
  display: flex;
  align-item: center;
`;

export const HeaderAvatar = styled(Avatar)`
  font-size: 20px !important;
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
`;

export const LikeIcon = styled(FavoriteBorderIcon)`
  font-size: 30px !important;
  color: var(--lightTheme) !important;
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
`;

export const Count = styled.p`
  font-size: 12px;
  color: var(--lightTheme);
`;
