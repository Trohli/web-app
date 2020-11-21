import styled from "styled-components";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import PinDropIcon from "@material-ui/icons/PinDrop";

export const NavBg = styled.div`
  background: var(--lightTheme);
  height: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  text-align: center;
`;
export const NavUl = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 0.9;
`;

export const NavLi = styled.p`
  margin-right: 10px;
  font-size: 15px;
  font-weight: 2px;
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
`;
export const HelpIcon = styled(HelpOutlineIcon)`
  font-size: 12px !important ;
  margin-right: 5px !important;
`;
export const LocationIcon = styled(PinDropIcon)`
  font-size: 12px !important;
  margin-right: 5px !important;
`;
