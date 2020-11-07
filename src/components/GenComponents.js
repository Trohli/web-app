import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export const VideoPlayer = styled(ReactPlayer)`
  height: 300px;
  width: 50%;
  padding: 10px;
`;

export const PageLinks = styled(Link)`
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;
export const Buttons = styled(Button)`
  background: ${({ lightBg }) =>
    lightBg ? "var(--darkTheme)" : "var(--LightTheme)"} !important;
  color: ${({ lightBg }) =>
    lightBg ? "var(--LightTheme)" : "var(--darkTheme)"} !important;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ lightBg }) =>
      lightBg ? "var(--LightTheme)" : "var(--darkTheme)"} !important ;
    color: ${({ lightBg }) =>
      lightBg ? "var(--darkTheme)" : "var(--LightTheme)"} !important;
  }
`;
export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  flex: start;
  justify-content: space-between;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  height: 100%;
`;
export const Hrl = styled.hr`
  border: 1px solidvar(--darkTheme);
  width: 100%;
  border: 1px dashed black;
`;

export const HA = styled.h1`
  font-size: 35px;
  font-weight: ${({ strong }) => (strong ? "bolder" : "lighter")};
`;
export const HB = styled.h2`
  font-size: 25px;
  font-weight: ${({ strong }) => (strong ? "bolder" : "lighter")};
`;
export const HC = styled.h3`
  font-size: 20px;
  font-weight: ${({ strong }) => (strong ? "25px" : "10px")};
`;
export const HD = styled.h4`
  font-size: 18px;
  font-weight: ${({ strong }) => (strong ? "25px" : "10px")};
`;
export const HE = styled.h5`
  font-size: 15px;
  font-weight: ${({ strong }) => (strong ? "25px" : "10px")};
`;
