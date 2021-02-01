import React, { useReducer } from "react";
import { useState } from "react";
import { useStateValue } from "../../StateProvider";
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
  WalletIcon,
} from "./SideNavElements";

const initialState = {
  activeHome: false,
  activeMarket: false,
  activeCart: false,
  activeWishList: false,
  activeWallet: false,
  activeDashboard: false,
  activeNotification: false,
  activeSettings: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ACTIVATE_HOME":
      return {
        ...state,
        activeHome: true,
      };
  }
};
function SideNav() {
  const [{ openNav }, dispatch] = useStateValue();
  const [state, disput] = useReducer(reducer, initialState);

  const SideNavContent = [
    {
      Icon: HomeIcon,
      Text: "Home",
      main: state.activeHome,
      link: "/",
    },
    {
      Icon: MarketIcon,
      Text: "General Market",
      main: state.activeMarket,
      link: "/",
    },
    {
      Icon: LikeIcon,
      Text: "Wishlist",
      main: state.activeWishList,
      link: "/",
    },

    {
      Icon: ShipIcon,
      Text: "Cart",
      main: state.activeCart,
      link: "/checkout",
    },

    {
      Icon: WalletIcon,
      Text: "wallet",
      main: state.activeDashboard,
      link: "/dashboard",
    },
    {
      Icon: DashboardIcon,
      Text: "Dashboard",
      main: state.activeDashboard,
      link: "/dashboard",
    },
    {
      Icon: NotificationIcon,
      Text: "Notification",
      main: state.activeNotification,
      link: "/",
    },
    {
      Icon: SettingsIcon,
      Text: "Settings",
      main: state.activeSettings,
      link: "/",
    },
    {
      Icon: LogoutIcon,
      Text: "Logout",
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
            <SideOptionGuard main={main} key={Text} to={link}>
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
