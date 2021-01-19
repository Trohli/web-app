import styled from "styled-components";
import { Button } from "@material-ui/core";

export const ShipContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 40px 20px;
  box-sizing: border-box;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  height: max-content;
  color: var(--mainTheme);
`;

export const ShipFormContainer = styled.form`
  display: grid;
  grid-gap: 10px;
  max-width: 650px;
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 4px;
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

  &:focus {
    outline: none;
  }
`;
export const SummaryContainer = styled.div`
  display: grid;
  border-radius: 4px;
  width: 100%;
  max-width: 350px;
  height: max-content;
  padding: 20px 20px;
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
`;
export const SpaceFont = styled.h5`
  font-size: 12px;
  font-weight: bold;
  width: 15%;
  display: flex;
  align-items: flex-start;
`;
export const SummaryForms = styled.form`
  display: flex;
  align-items: center;
  border-radius: 8px !important;
  padding-left: 5px;
  box-sizing:border-box
  justify-content: space-between;
  max-width: 180px;
  width: 100%;
  border: 1px solid var(--grayTheme);
  background: #fff;
`;
export const SummaryFormInput = styled.input`
  background: transparent;
  border: none;
  max-width: 130px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 12px;
  height: 20px;

  &:focus {
    outline: none;
  }
`;
export const SummaryBtn = styled(Button)`
  border-radius: 8px !important;
  background: ${({ main }) =>
    main ? "var(--lightTheme) " : " var(--mainTheme) "} !important;
  color: ${({ main }) =>
    main ? " var(--mainTheme)  " : "var(--lightTheme)  "} !important;
  font-size: 10px !important;
  font-weight: bolder;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.02);
    background: ${({ main }) =>
      main ? " var(--mainTheme)" : "#fff "} !important;
    color: ${({ main }) => (main ? "  #fff " : " var(--mainTheme)")} !important;
  }
`;
