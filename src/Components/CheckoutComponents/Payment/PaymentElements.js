import styled from "styled-components";
import { Button } from "@material-ui/core";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

export const CheckoutPaymentContainer = styled.div`
  display: flex;
  max-width: 1100px;
  justify-content: space-evenly;
  margin: 40px auto;
  width: 100%;

  @media screen and (max-width: 540px) {
    flex-direction: column;
    flex: 1;
  }
`;
export const CheckoutPaymentContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;

  @media screen and (max-width: 1024px) {
    min-height: 62vh;
  }
`;
export const PaymentMethodContainer = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 540px) {
    flex-direction: column;
    flex: 1;
  }
`;
export const SelectPaymentMethod = styled.div`
  display: flex;
  height: 400px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  flex: 0.3;

  @media screen and (max-width: 540px) {
    flex-direction: row;
    flex: 1;
    height: 100%;
  }
`;
export const PaymentSelectContainer = styled.div`
  cursor: pointer;
  width: 160px;
  border: ${({ state }) => (state ? " 1px solid var(--mainTheme)" : "none")};
  position: relative;
  border-radius: 8px;
  height: 90px;

  @media screen and (max-width: 540px) {
    height: 60px;
    width: 90px;
  }
  @media screen and (max-width: 375px) {
    height: 50px;
    width: 80px;
  }
  @media screen and (max-width: 320px) {
    height: 40px;
    width: 60px;
  }
`;
export const PaymentHoverInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
  position: absolute;
  top: 0;
  right: 0;
  background: var(--mainSeeThroughTheme);
  border-radius: 8px;
  color: var(--subTheme);
  padding: 2px 5px;
  box-sizing: border-box;
  line-height: 1.2;
  font-weight: bold;
  border: ${({ state }) => (state ? " none" : "1px solid var(--mainTheme)")};

  @media screen and (max-width: 540px) {
    height: 60px;
  }
  @media screen and (max-width: 375px) {
    height: 50px;
  }
  @media screen and (max-width: 320px) {
    height: 40px;
  }
`;
export const HoverText = styled.h4`
  font-size: ${({ small }) => (small ? "12px" : "14px")};
  margin-bottom: ${({ small }) => (small ? "none" : "5px")};

  @media screen and (max-width: 540px) {
    font-size: ${({ small }) => (small ? "6px" : "8px")};
  }
  @media screen and (max-width: 320px) {
    font-size: ${({ small }) => (small ? "4px" : "6px")};
  }
`;
export const PaymentImageSelector = styled.img`
  width: 100%;
  height: 90px;
  border-radius: 8px;

  @media screen and (max-width: 540px) {
    height: 60px;
  }
  @media screen and (max-width: 375px) {
    height: 50px;
  }
  @media screen and (max-width: 320px) {
    height: 40px;
  }
`;
export const ActivePaymentIcon = styled(AiOutlineCheckCircle)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 18px;
  color: var(--mainTheme);
`;
export const CardDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  flex: 0.5;
  box-sizing: border-box;
`;
export const CardDetailContent = styled.div`
  width: 90%;
  margin: auto;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
export const CardForm = styled.form`
  margin: 20px 0;
  background: #fff;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  width: 90%;
`;
export const CardInput = styled.input`
  background: transparent;
  border: none;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 12px;
  height: 30px;
  border-bottom: ${({ last }) =>
    last ? "none" : "1px solid var(--mainTheme)"};

  &:focus {
    outline: none;
  }
`;
export const PaymentTotalContainer = styled.div`
  flex: 0.2;
  border: 1px solid var(--mainTheme);
  background: var(--mainSeeThroughTheme);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  @media screen and (max-width: 540px) {
    flex: 1;
    width: 90%;
    margin: 0 auto;
  }
`;
export const PaymentTotalContent = styled.div`
  width: 90%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--mainTheme);
  padding: 10px 5px;
  box-sizing: border-box;

  @media screen and (max-width: 540px) {
    min-height: 250px;
    height: 100%;
  }
`;
export const BillingFlexContainer = styled.div`
  border-bottom: 1px solid var(--mainTheme);
  border-top: 1px solid var(--mainTheme);
  padding:15px 0;
  box-sizing:border-box;
  margin 10px 0 ;
  width:100%;
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`;
export const PaymentBillFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PaymentBillFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PaymentSumHeading = styled.h3`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 2px;
  box-sizing: border-box;
`;
export const PaymentCostText = styled.h4`
  font-size: ${({ small }) => (small ? "14px " : "16px")};
  font-weight: bold;
`;
export const TotalFont = styled.h4`
  font-size: 18px;
  font-weight: bold;
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

export const DiscountBtn = styled(Button)`
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
export const DiscountForm = styled.form`
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
export const DiscountFormInput = styled.input`
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
