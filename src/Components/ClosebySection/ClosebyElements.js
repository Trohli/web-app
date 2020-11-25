import styled from "styled-components";
import { RiArrowRightCircleFill } from "react-icons/ri";
import { RiArrowLeftCircleFill } from "react-icons/ri";

export const ClosebySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: Space-between;
  height: 300px;
  width: 100%;
`;

export const CardSection = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const CardBar = styled.div`
  max-width: 300px;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
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

export const Arrow = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  ${({ right }) => (right ? "right: 25px " : "left: 25px")};
  height: 30px;
  width: 30px;
  justify-content: center;
  background: var(--subTheme);
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ArrowRight = styled(RiArrowRightCircleFill)`
  font-size: 20px !important;
  color: var(--mainTheme);
  transform: translateX 2px;
`;
export const ArrowLeft = styled(RiArrowLeftCircleFill)`
  font-size: 20px !important;
  color: var(--mainTheme);
  transform: translateX -2px;
`;
