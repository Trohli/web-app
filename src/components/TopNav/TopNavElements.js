import styled from "styled-components";
import { FaEye, FaEyeSlash, FaThLarge, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const TopNavigation = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  display: flex;
  align-items: center;
  border-radius: 0 0 0 30px;
  background: ${({ lightBg }) =>
    lightBg ? "var(--darkTheme)" : "var(--LightTheme)"};
  justify-content: space-between;
  height: 50px;
  width: 150px;
  box-shadow: rgb(193, 193, 193) 4px 0px 10px -3px;
  box-sizing: border-box;
`;
export const NavElements = styled.div`
  position: absolute;
  top: 80px;
  right: 15px;
  padding: 10px;
  height: 350px;
  width: 600px;
  background: ${({ lightBg }) =>
    lightBg ? "var(--darkTheme)" : "var(--LightTheme)"};
  visibility: ${({ openNav }) => (openNav ? "visible" : "hidden")};
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const NavHeader = styled.div`
  display: flex;
  flex: start;
  justify-content: space-between;
  width: 100%;
  border-bottom: ${({ lightBg }) =>
    lightBg ? "2px solid var(--LightTheme)" : "2px solid var(--darkTheme)"};
`;

export const NavHeading = styled.h2`
  font-size: 25px;
  font-weight: 15px;
  color: ${({ lightBg }) =>
    lightBg ? "var(--LightTheme)" : "var(--darkTheme)"};
  padding: 5px;
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: start;
  width: 100%;
`;
export const NavContainers = styled.div`
  display: flex;
  justify-content: space-between;
  flex: start;
  width: 100%;
  border-top: ${({ lightBg }) =>
    lightBg ? "2px solid var(--LightTheme)" : "2px solid var(--darkTheme)"};
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NavLinktText = styled.h3`
  font-size: 20px;
  font-weight: 10px;
  color: ${({ lightBg }) =>
    lightBg ? "var(--LightTheme)" : "var(--darkTheme)"};
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;

export const ProUpgrade = styled.h2`
  font-size: 20px;
  font-weight: 20px;
  background: #6a6d6e;
  color: var(--LightTheme);
  height: 100%;
  border-radius: 0 0 0 30px;
  width: 30%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const OpenNavIcon = styled(FaThLarge)`
  color: ${({ lightBg }) =>
    lightBg ? "var(--LightTheme)" : "var(--darkTheme)"};
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;
`;
export const CloseNavIcon = styled(FaTimes)`
  color: ${({ lightBg }) =>
    lightBg ? "var(--LightTheme)" : "var(--darkTheme)"};
  font-size: 24px;
  margin-right: 10px;
  cursor: pointer;
`;
export const DarkModeIcon = styled(FaEyeSlash)`
  color: ${({ lightBg }) =>
    lightBg ? "var(--LightTheme)" : "var(--darkTheme)"};
  font-size: 24px;
  cursor: pointer;
`;
export const LightModeIcon = styled(FaEye)`
  color: ${({ lightBg }) =>
    lightBg ? "var(--LightTheme)" : "var(--darkTheme)"};
  font-size: 24px;
  cursor: pointer;
`;
