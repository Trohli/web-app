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
  width: 20%;
  height: 90vh;
  position: absolute;
  top: 55px;
  border-radius: 5px 30px;
  border: 2px solid var(--lightTheme);
  left: ${({ openNav }) => (openNav ? "0" : "-100%")};
  opacity: 1;
  padding: 50px 0;
  box-sizing: border-box;
  transition: all 0.5s ease;
  z-index: 100%;
`;

export const NavHeadText = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: var(--lightTheme);
  margin-bottom: 10px;
`;

export const SideAvatar = styled(Avatar)`
  height: 80px !important;
  width: 80px !important;
  border: 3px solid var(--subTheme);
  margin-bottom: 10px;

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

export const SideOptionsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
