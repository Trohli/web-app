import styled from "styled-components";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import PinDropIcon from "@material-ui/icons/PinDrop";

export const NavBg = styled.div`
  background: var(--lightTheme);
  height: 30px;
  align-items: center;
  justify-content: center;
  display: flex;

  @media screen and (max-width: 540px) {
    height: 25px;
  }
  @media screen and (max-width: 375px) {
    height: 20px;
  }
`;
export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1175px;
  padding: 0 20px;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
`;
export const NavUl = styled.div`
  display: flex;
  max-width: 220px;
  justify-content: space-evenly;
  align-items: center;
  flex: 0.9;
`;

export const NavLi = styled.p`
  font-size: 15px;
  font-weight: 2px;

  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;

export const NavRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0.1;
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;
`;
export const NavText = styled.p`
  font-size: 15px;
  font-weight: 2px;

  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
`;
export const HelpIcon = styled(HelpOutlineIcon)`
  font-size: 12px !important ;
  margin-right: 5px !important;
`;
export const LocationIcon = styled(PinDropIcon)`
  font-size: 12px !important;
  margin-right: 5px !important;
`;
