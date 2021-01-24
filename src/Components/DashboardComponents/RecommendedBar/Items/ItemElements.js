import styled from "styled-components";
import { Button } from "@material-ui/core";
import { IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

export const RecommendedItemContent = styled.div`
  background: var(--lightTheme);
  width: 90%;
  height: 18vh;
  border-radius: 5px;
  padding: 10px 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;
export const ItemImage = styled.img`
  height: 15vh;
  padding-right: 15px;
  box-sizing: border-box;
  width: 40%;
`;
export const ItemDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;
export const ItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
export const ItemName = styled.h3`
  color: var(--mainTheme);
  font-size: 18px;
  font-weight: bold;
`;
export const ItemPrice = styled.h4`
  color: var(--mainTheme);
  font-size: 16px;
`;
export const ItemIconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
export const AddCartIcon = styled(IoMdCart)`
  font-size: 20px !important;
  color: var(--mainTheme);

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.4);
  }
`;
export const LikeIcon = styled(FaHeart)`
  font-size: 20px !important;
  color: var(--mainTheme);

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.4);
  }
`;
export const ItemBtn = styled(Button)`
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
