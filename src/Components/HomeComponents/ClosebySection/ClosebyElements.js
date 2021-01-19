import styled from "styled-components";
import { IoMdCart } from "react-icons/io";

export const ClosebySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: max-content;
  width: 100%;
  margin-bottom: 20px;
`;

export const CardSection = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
  align-items: center;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CardBar = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
`;

export const Card = styled.div`
  background: var(--lightTheme);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 180px;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 4px;
`;
export const CardImg = styled.img`
  width: 100%;
  height: 120px;
  border-radius: 4px;
`;
export const CardText = styled.h4`
  font-size: 18px;
  font-weight: 5px;
`;
export const CardPrice = styled.h5`
  font-size: 16px;
  font-weight: 2px;
  color: var(--mainTheme);
  position: absolute;
  top: 10px;
  left: 10px;
`;
export const CardM = styled.p`
  font-size: 15px;
`;

export const ClosebyHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const ClosebyH3 = styled.div`
  font-size: 20px;
  font-weight: bolder;
  color: var(--mainTheme);
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 520px) {
    font-size: 16px;
  }
`;
export const Hrl = styled.hr`
  border-top: 2px solid var(--mainTheme);
  margin: 0 25px;
  max-width: 100px;
  width: 100%;
`;

export const AddCartIcon = styled(IoMdCart)`
  font-size: 20px !important;
  color: var(--mainTheme);
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;
