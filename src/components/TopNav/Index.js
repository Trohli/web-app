import React, { useState } from "react";
import {
  TopNavigation,
  ProUpgrade,
  OpenNavIcon,
  DarkModeIcon,
  CloseNavIcon,
  LightModeIcon,
  NavElements,
  NavHeader,
  NavHeading,
  NavContainer,
  NavLinkContainer,
  NavLinktText,
  NavLink,
  NavContainers,
} from "./TopNavElements";

function TopNav() {
  const [lightBg, setLightBg] = useState(true);
  const [openNav, setOpenNav] = useState(false);

  const DarkNav = () => setLightBg(!lightBg);
  const ShowNav = () => setOpenNav(!openNav);
  return (
    <>
      <TopNavigation lightBg={lightBg}>
        <ProUpgrade>PRO</ProUpgrade>
        <div onClick={DarkNav}>
          {lightBg ? (
            <LightModeIcon lightBg={lightBg} />
          ) : (
            <DarkModeIcon lightBg={lightBg} />
          )}
        </div>
        <div onClick={ShowNav}>
          {openNav ? (
            <CloseNavIcon lightBg={lightBg} />
          ) : (
            <OpenNavIcon lightBg={lightBg} />
          )}
        </div>
      </TopNavigation>
      <NavElements openNav={openNav} lightBg={lightBg}>
        <NavHeader lightBg={lightBg}>
          <NavHeading lightBg={lightBg}>Contents</NavHeading>
          <NavHeading lightBg={lightBg}>People</NavHeading>
          <NavHeading lightBg={lightBg}>Tags</NavHeading>
        </NavHeader>
        <NavContainer>
          <NavLinkContainer>
            <NavLink to="/">
              <NavLinktText lightBg={lightBg}>Lessons</NavLinktText>
            </NavLink>
            <NavLink to="/">
              <NavLinktText lightBg={lightBg}>Full Courses</NavLinktText>
            </NavLink>
            <NavLink to="/">
              <NavLinktText lightBg={lightBg}>Quick Snippets</NavLinktText>
            </NavLink>
            <NavLink to="/">
              <NavLinktText lightBg={lightBg}>#tags</NavLinktText>
            </NavLink>
          </NavLinkContainer>

          <NavLinkContainer>
            <NavLink to="/">
              <NavLinktText lightBg={lightBg}>Manifesto </NavLinktText>
            </NavLink>
            <NavLink to="/">
              <NavLinktText lightBg={lightBg}>Contributors</NavLinktText>
            </NavLink>
            <NavLink to="/">
              <NavLinktText lightBg={lightBg}>About</NavLinktText>
            </NavLink>
            <NavLink to="/">
              <NavLinktText lightBg={lightBg}>Slack Chat</NavLinktText>
            </NavLink>
            <NavLink to="/">
              <NavLinktText lightBg={lightBg}>Login</NavLinktText>
            </NavLink>
          </NavLinkContainer>

          <NavLinkContainer>
            <NavLink to="/">
              <NavLinktText lightBg={lightBg}>#angular</NavLinktText>
            </NavLink>
            <NavLink to="/">
              <NavLinktText lightBg={lightBg}>#flutter</NavLinktText>
            </NavLink>
            <NavLink to="/">
              <NavLinktText lightBg={lightBg}>#firebase </NavLinktText>
            </NavLink>
            <NavLink to="/">
              <NavLinktText lightBg={lightBg}>#stripe</NavLinktText>
            </NavLink>
          </NavLinkContainer>
        </NavContainer>

        <NavContainers lightBg={lightBg}>
          <NavLink to="/">
            <NavLinktText lightBg={lightBg}>Vardency</NavLinktText>
          </NavLink>
          <NavLink to="/">
            <NavLinktText lightBg={lightBg}>terms</NavLinktText>
          </NavLink>
          <NavLink to="/">
            <NavLinktText lightBg={lightBg}>privacy</NavLinktText>
          </NavLink>
          <NavLink to="/">
            <NavLinktText lightBg={lightBg}>style guide</NavLinktText>
          </NavLink>
        </NavContainers>
      </NavElements>
    </>
  );
}

export default TopNav;
