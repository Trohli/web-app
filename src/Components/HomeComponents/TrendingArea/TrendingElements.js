import styled from "styled-components";
import { Button } from "@material-ui/core";
import { IoMdCart } from "react-icons/io";

export const TrendingSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
  border-radius: 1px;
  background: var(--mainTheme);
  border-radius: 4px;
`;

export const TrendingH2 = styled.h2`
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 15px;
  color: var(--lightTheme);
`;

export const TrendingCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  padding: 5px;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardBar = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
`;

export const Card = styled.div`
  height: 400px;
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: var(--lightTheme);
`;
export const CardRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;
export const CardH3 = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: var(--mainTheme);
`;

export const CardImg = styled.img`
  width: 100%;
  height: 260px;
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
    transform: scale(1.2);
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
  margin-top: 15px;
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
export const AddCartIcon = styled(IoMdCart)`
  font-size: 20px !important;
  color: var(--mainTheme);

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.4);
  }
`;
