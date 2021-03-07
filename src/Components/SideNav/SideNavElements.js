import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { GiExitDoor } from "react-icons/gi";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { MdLocalConvenienceStore } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { Link } from "react-router-dom";

export const SideNavComponents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--mainTheme);
  width: 20vw;
  height: 90vh;
  position: absolute;
  top: 55px;
  border-radius: 5px 30px;
  border: 2px solid var(--lightTheme);
  left: ${({ openNav }) => (openNav ? "0" : "-100%")};
  opacity: 1;
  padding: 25px 0;
  box-sizing: border-box;
  transition: all 0.5s ease;
  z-index: 100%;

  @media screen and (max-width: 1024px) {
    width: 40vw;
  }
  @media screen and (max-width: 768px) {
    width: 50vw;
  }
  @media screen and (max-width: 540px) {
    width: 60vw;
  }
  @media screen and (max-width: 414px) {
    width: 80vw;
  }
  @media screen and (max-width: 375px) {
    width: 100vw;
  }
  @media screen and (max-width: 320px) {
    width: 95vw;
    height: 94.5vh;
    top: 30px;
  }
`;

export const NavHeadText = styled.h2`
  font-size: 25px;
  font-weight: bold;
  color: var(--lightTheme);
  margin-bottom: 10px;

  @media screen and (max-width: 414px) {
    font-size: 20px;
  }
  @media screen and (max-width: 375px) {
    font-size: 18px;
  }
  @media screen and (max-width: 320px) {
    font-size: 16px;
  }
`;

export const SideAvatar = styled(Avatar)`
  height: 70px !important;
  width: 70px !important;
  border: 3px solid var(--subTheme);
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    height: 60px !important;
    width: 60px !important;
  }
  @media screen and (max-width: 540px) {
    height: 45px !important;
    width: 45px !important;
    border: 2px solid var(--subTheme);
  }
  @media screen and (max-width: 375px) {
    height: 40px !important;
    width: 40px !important;
    border: 1px solid var(--subTheme);
  }
  @media screen and (max-width: 320px) {
    height: 25px !important;
    width: 25px !important;
  }
`;

export const SideOptionsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: #fff;
  width: 100%;
`;
export const SideOptionGuard = styled(Link)`
  outline: none;
  border: none;
  text-decoration: none;
  flex: 0.105;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
  background: ${({ main }) => (main ? "var(--subTheme)" : "var(--mainTheme)")};
  color: ${({ main }) =>
    main ? "  var(--mainTheme)  " : " var(--lightTheme)"};

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ main }) =>
      main ? " var(--mainTheme)" : "var(--subTheme) "};
    color: ${({ main }) =>
      main ? "  var(--lightTheme)  " : " var(--mainTheme)"};
  }
`;

export const HomeIcon = styled(FaHome)`
  font-size: 20px;
  margin-right: 15px;
`;
export const DashboardIcon = styled(MdDashboard)`
  font-size: 20px;
  margin-right: 15px;
`;
export const LikeIcon = styled(FaHeart)`
  font-size: 20px;
  margin-right: 15px;
`;
export const WalletIcon = styled(GiWallet)`
  font-size: 20px;
  margin-right: 15px;
`;
export const ShipIcon = styled(GiShoppingCart)`
  font-size: 20px;
  margin-right: 15px;
`;
export const SettingsIcon = styled(IoMdSettings)`
  font-size: 20px;
  margin-right: 15px;
`;
export const MarketIcon = styled(MdLocalConvenienceStore)`
  font-size: 20px;
  margin-right: 15px;
`;
export const NotificationIcon = styled(MdNotificationsActive)`
  font-size: 20px;
  margin-right: 15px;
`;
export const LogoutIcon = styled(GiExitDoor)`
  font-size: 20px;
  margin-right: 15px;
`;
export const ArrowRightIcon = styled(RiArrowRightSLine)`
  font-size: 20px;
`;
export const SideText = styled.h3`
  flex: 1;
  font-size: 16px;
`;
