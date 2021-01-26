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
`;
export const PaymentMethodContainer = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: space-evenly;
`;
export const SelectPaymentMethod = styled.div`
  display: flex;
  height: 50vh;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  flex: 0.3;
`;
export const PaymentSelectContainer = styled.div`
  cursor: pointer;
  width: 80%;
  border: ${({ state }) => (state ? " 1px solid var(--mainTheme)" : "none")};
  position: relative;
  border-radius: 5px;
  height: 10vh;
`;
export const PaymentHoverInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 10vh;
  position: absolute;
  top: 0;
  right: 0;
  background: var(--mainSeeThroughTheme);
  border-radius: 5px;
  color: var(--subTheme);
  padding: 2px 5px;
  box-sizing: border-box;
  line-height: 1.2;
  font-weight: bold;
  border: ${({ state }) => (state ? " none" : "1px solid var(--mainTheme)")};
`;
export const HoverText = styled.h4`
  font-size: ${({ small }) => (small ? "12px" : "14px")};
  margin-bottom: ${({ small }) => (small ? "none" : "5px")};
`;
export const PaymentImageSelector = styled.img`
  width: 100%;
  height: 10vh;
  border-radius: 5px;
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
  height: 50vh;
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
`;
export const PaymentTotalContent = styled.div`
  width: 90%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--mainTheme);
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
export const BackToShopIcon = styled(IoIosArrowRoundBack)`
  font-size: 30px;
  font-weight: bolder;
  margin-right: 15px;
  padding: 2px;
  border: 1px solid var(--mainTheme);
  color: var(--mainTheme);
`;
export const ContinueCheckoutIcon = styled(IoIosArrowRoundForward)`
  font-size: 30px;
  font-weight: bolder;
  margin-left: 15px;
  padding: 2px;
  border: 1px solid var(--mainTheme);
  color: var(--mainTheme);
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
export const CartChargeText = styled.h4`
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  font-weight: bold;
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
