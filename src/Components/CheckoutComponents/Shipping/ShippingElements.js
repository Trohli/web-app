import styled from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

export const ShipContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 40px 20px;
  box-sizing: border-box;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  min-height: 60vh;
  color: var(--mainTheme);

  @media screen and (max-width: 1024px) {
    min-height: 62vh;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    align-items: center;
  }
  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const ShipFormContainer = styled.form`
  display: grid;
  grid-gap: 15px;
  max-width: 650px;
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 4px;
  height: 100%;

  @media screen and (max-width: 1024px) {
    max-width: 550px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
  // @media screen and (max-width: 540px) {
  //   width: 100%;
  // }
`;
export const FormElementContainer = styled.div`
  display: grid;
  grid-gap: 3px;
  padding: 5px 10px;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  height: max-content;
  border: 1px solid var(--grayTheme);

  &:active {
    border: 2px solid var(--subgrayTheme);
  }
`;
export const ElementGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ duo }) =>
    duo ? "repeat(2, 1fr)" : "repeat(3, 1fr) "};
  grid-gap: 5px;
`;
export const FlexPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const FlexHigh = styled.div`
  width: 65%;
`;
export const FlexLow = styled.div`
  width: 34%;
`;
export const ShippingFormInput = styled.input`
  background: transparent;
  border: none;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 12px;

  &:focus {
    outline: none;
  }
`;
export const SizeSelect = styled.select`
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  border: none;
  color: var(--mainTheme);
  font-size: 12px;

  &:focus {
    outline: none;
  }
`;
export const SelectOption = styled.option`
  font-size: 12px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
export const SummaryContainer = styled.div`
  display: grid;
  border-radius: 4px;
  width: 100%;
  max-width: 350px;
  height: max-content;
  padding: 20px 20px;
  border: 1px solid var(--mainTheme);

  @media screen and (max-width: 1024px) {
    max-width: 250px;
  }
  @media screen and (max-width: 768px) {
    max-width: 450px;
    width: 90%;
  }
  // @media screen and (max-width: 540px) {
  //   width: 100%;
  // }
`;
export const SummaryGrid = styled.div`
  display: grid;
  grid-gap: 4px;
  padding: 10px 5px;
  margin: 5px 0;
  box-sizing: border-box;
  border-top: 1px solid var(--grayTheme);
  border-bottom: 1px solid var(--grayTheme);
`;
export const SummaryFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ last }) => (last ? "15px" : "none")};
  width: 100%;
`;
export const SummaryText = styled.p`
  font-size: 12px;
`;
export const SummaryHeading = styled.h4`
  font-size: 16px;
  font-weight: bold;
`;
export const SmallFont = styled.h5`
  font-size: 12px;
  font-weight: bold;

  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;
export const SpaceFont = styled.h5`
  font-size: 12px;
  font-weight: bold;
  width: 15%;
  display: flex;
  align-items: flex-start;
`;

export const SpeedSelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const SpeedSelect = styled.select`
  flex: 0.1;
  padding: 0 10px;
  box-sizing: border-box;
  border: none;
  color: var(--mainTheme);

  &:focus {
    outline: none;
  }
`;
export const BackToShopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
  color: var(--mainTheme);
  margin-bottom: 10px;
`;
export const BackToShopFlex = styled(Link)`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;
export const BackToShopIcon = styled(IoIosArrowRoundBack)`
  font-size: 30px;
  font-weight: bolder;
  margin-right: 15px;
  padding: 2px;
  border: 1px solid var(--mainTheme);
  color: var(--mainTheme);

  @media screen and (max-width: 414px) {
    font-size: 16px;
    margin-right: 10px;
  }
  @media screen and (max-width: 375px) {
    font-size: 15px;
  }
  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
`;
export const ContinueCheckoutIcon = styled(IoIosArrowRoundForward)`
  font-size: 30px;
  font-weight: bolder;
  margin-left: 15px;
  padding: 2px;
  border: 1px solid var(--mainTheme);
  color: var(--mainTheme);

  @media screen and (max-width: 414px) {
    font-size: 16px;
    margin-right: 10px;
  }
  @media screen and (max-width: 375px) {
    font-size: 14px;
  }
  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;
export const BackToShopText = styled.h4`
  font-size: 16px;
  font-weight: bold;

  @media screen and (max-width: 414px) {
    font-size: 13px;
  }
  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;
