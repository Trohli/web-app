import styled from "styled-components";
import { RiArrowRightCircleFill } from "react-icons/ri";
import { RiArrowLeftCircleFill } from "react-icons/ri";
import { Button } from "@material-ui/core";

export const Slide = styled.div`
  height: 50vh;
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
  justify-content: space-evenly;
  max-height: 380px;
  height: 100%;
  max-width: 800px;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  color: var(--lightTheme);
`;

export const HeroSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContentHeading = styled.h2`
  font-size: 54px;
  font-weight: 5px;
  font: italic normal 300 55px/70px Poppins;
`;
export const ContentText = styled.p`
  font-size: 18px;
  font-weight: 2px;
  font: normal normal 300 15px/23px Poppins;
`;
export const Btn = styled(Button)`
  border-radius: 99px !important;
  background: var(--subTheme) !important;
  border: 2px solid var(--mainTheme) !important;
  padding: 5px !important;
  color: var(--mainTheme) !important;
  font-weight: bolder !important;
  font: normal normal medium 20px Poppins !important;
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
  padding: 5px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid var(--mainTheme);
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
