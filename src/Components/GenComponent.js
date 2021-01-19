import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductContainer = styled.section`
  padding: 40px 20px;
  background: var(--subTheme);
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AppBody = styled.div`
  width: 100%;
  background: var(--lightTheme);
`;

export const PageLinks = styled(Link)`
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;
