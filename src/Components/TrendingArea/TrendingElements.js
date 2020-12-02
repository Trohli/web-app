import styled from "styled-components";
import { Button } from "@material-ui/core";

export const TrendingSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 550px;
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
  border-radius: 1px;
  background: var(--mainTheme);
`;

export const TrendingH2 = styled.h2`
  font-size: 20px;
  font-weight: bolder;
  color: var(--subTheme);
`;

export const TrendingCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

export const CardBar = styled.div`
  height: 100%;
  width: 270px;
  display: flex;
  overflow: hidden;
  align-items: center;
`;

export const Card = styled.div`
  height: 100%;
  width: 260px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: var(--lightTheme);
`;

export const CardH3 = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: var(--mainTheme);
`;

export const CardImg = styled.img`
  width: 200px;
  object-fit: contain;
`;

export const CardBtn = styled(Button)`
  border-radius: 8px !important;
  background: ${({ main }) =>
    main ? "var(--lightTheme) " : " var(--mainTheme) "} !important;
  padding: 5px !important;
  color: ${({ main }) =>
    main ? " var(--mainTheme)  " : "var(--lightTheme)  "} !important;
  font-size: 15px !important;
  font-weight: bold !important;
  margin: 5px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ main }) =>
      main ? " var(--mainTheme)" : "var(--lightTheme)  "} !important;
    color: ${({ main }) =>
      main ? "  var(--lightTheme)  " : " var(--mainTheme)"} !important;
  }
`;

export const TrendingNavFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--lightTheme);
  height: 30px;
  width: 100%;
`;

export const TrendingNav = styled.div`
  height: 20px;
  width: 20px;
  padding: 10px;
  margin: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  background: var(--lightTheme);
  color: var(--mainTheme);
`;
