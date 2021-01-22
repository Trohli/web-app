import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import {
  SideAvatar,
  SideNavComponents,
  NavHeadText,
  SideOptionsContainer,
  SideOptionGuard,
  DashboardIcon,
  ArrowRightIcon,
  SideText,
  LikeIcon,
  ShipIcon,
  SettingsIcon,
  LogoutIcon,
  HomeIcon,
  MarketIcon,
  NotificationIcon,
} from "./SideNavElements";

function SideNav({ openNav }) {
  const { path } = useRouteMatch();
  const [activeHome, setActiveHome] = useState(false);
  const [activeMarket, setActiveMarket] = useState(false);
  const [activeWishList, setActiveWishlist] = useState(false);
  const [activeDashboard, setActiveDashboard] = useState(false);
  const [activeNotification, setActiveNotification] = useState(false);
  const [activeOrder, setActiveOrder] = useState(false);
  const [activeSettings, setActiveSettings] = useState(false);

  const SetHomeActive = () => {
    setActiveHome(true);
    setActiveMarket(false);
    setActiveWishlist(false);
    setActiveNotification(false);
    setActiveDashboard(false);
    setActiveOrder(false);
    setActiveSettings(false);
  };
  const SetMarketActive = () => {
    setActiveHome(false);
    setActiveMarket(true);
    setActiveWishlist(false);
    setActiveNotification(false);
    setActiveDashboard(false);
    setActiveOrder(false);
    setActiveSettings(false);
  };
  const SetDashboardActive = () => {
    setActiveHome(false);
    setActiveMarket(false);
    setActiveWishlist(false);
    setActiveNotification(false);
    setActiveDashboard(true);
    setActiveOrder(false);
    setActiveSettings(false);
  };
  const SetNotificationActive = () => {
    setActiveHome(false);
    setActiveMarket(false);
    setActiveWishlist(false);
    setActiveNotification(true);
    setActiveDashboard(false);
    setActiveOrder(false);
    setActiveSettings(false);
  };
  const SetWishlistActive = () => {
    setActiveHome(false);
    setActiveMarket(false);
    setActiveWishlist(true);
    setActiveNotification(false);
    setActiveDashboard(false);
    setActiveOrder(false);
    setActiveSettings(false);
  };
  const SetOrderActive = () => {
    setActiveHome(false);
    setActiveMarket(false);
    setActiveWishlist(false);
    setActiveNotification(false);
    setActiveDashboard(false);
    setActiveOrder(true);
    setActiveSettings(false);
  };
  const SetSettingActive = () => {
    setActiveHome(false);
    setActiveMarket(false);
    setActiveWishlist(false);
    setActiveNotification(false);
    setActiveDashboard(false);
    setActiveOrder(false);
    setActiveSettings(true);
  };
  const SetLogActive = () => {
    setActiveHome(false);
    setActiveMarket(false);
    setActiveWishlist(false);
    setActiveNotification(false);
    setActiveDashboard(false);
    setActiveOrder(false);
    setActiveSettings(false);
  };

  const SideNavContent = [
    {
      Icon: HomeIcon,
      Text: "Home",
      main: activeHome,
      handleClick: SetHomeActive,
      link: "/",
    },
    {
      Icon: MarketIcon,
      Text: "Market Square",
      main: activeMarket,
      handleClick: SetMarketActive,
      link: "/",
    },
    {
      Icon: LikeIcon,
      Text: "Wishlist",
      main: activeWishList,
      handleClick: SetWishlistActive,
      link: "/",
    },

    {
      Icon: DashboardIcon,
      Text: "Dashboard",
      main: activeDashboard,
      handleClick: SetDashboardActive,
      link: "/dashboard",
    },
    {
      Icon: ShipIcon,
      Text: "Order",
      main: activeOrder,
      handleClick: SetOrderActive,
      link: "/checkout/cart",
    },
    {
      Icon: NotificationIcon,
      Text: "Notification",
      main: activeNotification,
      handleClick: SetNotificationActive,
      link: "/",
    },
    {
      Icon: SettingsIcon,
      Text: "Settings",
      main: activeSettings,
      handleClick: SetSettingActive,
      link: "/",
    },
    {
      Icon: LogoutIcon,
      Text: "Logout",
      handleClick: SetLogActive,
      link: "/",
    },
  ];
  return (
    <>
      <SideNavComponents openNav={openNav}>
        <SideAvatar src="./images/sky.jpg" />
        <NavHeadText>Hello, Skyboy</NavHeadText>
        <SideOptionsContainer>
          {SideNavContent.map(({ Icon, link, Text, main, handleClick }) => (
            <SideOptionGuard
              main={main}
              key={Text}
              onClick={handleClick}
              to={link}
            >
              <Icon />
              <SideText>{Text}</SideText>
              <ArrowRightIcon />
            </SideOptionGuard>
          ))}
        </SideOptionsContainer>
      </SideNavComponents>
    </>
  );
}

export default SideNav;
