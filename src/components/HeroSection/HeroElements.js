import styled from "styled-components";
import { RiArrowRightCircleFill } from "react-icons/ri";
import { RiArrowLeftCircleFill } from "react-icons/ri";
import { Button } from "@material-ui/core";

export const SlideBar = styled.div`
  position: relative;
  height: 95vh;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export const SliderContent = styled.div`
  transform: translateX(-${({ translate }) => translate}px);
  transition: transform ease-out ${({ transition }) => transition}s;
  height: 100%;
  width: ${({ width }) => width}px;
  display: flex;
`;

export const Slide = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("${({ content }) => content}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-height: 360px;
  width: 480px;
  margin-bottom: -80px;
  color: var(--lightTheme);
`;

export const ContentHeading = styled.h2`
  font-size: 54px;
  font-weight: 5px;
`;
export const ContentText = styled.p`
  font-size: 18px;
  font-weight: 2px;
`;
export const Btn = styled(Button)`
  border-radius: 99px !important;
  background: var(--subTheme) !important;
  border: 2px solid var(--mainTheme) !important;
  padding: 8px !important;
  color: var(--mainTheme) !important;
  font-size: 15px !important;
  font-weight: 20px !important;
`;

export const Arrow = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  ${({ right }) => (right ? "right: 25px " : "left: 25px")};
  height: 50px;
  width: 50px;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ArrowRight = styled(RiArrowRightCircleFill)`
  font-size: 30px !important;
  color: var(--mainTheme);
  transform: translateX 2px;
`;
export const ArrowLeft = styled(RiArrowLeftCircleFill)`
  font-size: 30px !important;
  color: var(--mainTheme);
  transform: translateX -2px;
`;

export const Dot = styled.div`
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid var(--mainTheme);
  background: ${({ active }) =>
    active ? "var(--subTheme)" : "var(--subShadowTheme)"};
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
