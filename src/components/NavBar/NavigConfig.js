import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const BtnLinks = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;
export const Buttons = styled(Button)`
  background: var(--LightTheme) !important;
  color: var(--darkTheme) !important;
`;
