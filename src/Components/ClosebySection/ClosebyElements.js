import styled from "styled-components";
import { IoMdCart } from "react-icons/io";

export const ClosebySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: Space-between;
  height: 250px;
  width: 100%;
  margin-bottom: 20px;
`;

export const CardSection = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  box-sizing: border-box;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const CardBar = styled.div`
  height: 100%;
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
  width: 150px;
  margin: 0 5px;
  padding: 5px;
`;
export const CardImg = styled.img`
  width: 100%;
  height: 140px;
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
  text-align: center;
`;
export const ClosebyH3 = styled.div`
  font-size: 20px;
  font-weight: bolder;
  color: var(--mainTheme);
`;
export const Hrl = styled.hr`
  border-top: 2px solid var(--mainTheme);
  border-radius: 99px;
  margin: 0 25px;
  width: 100px;
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
