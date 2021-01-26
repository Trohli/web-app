import styled from "styled-components";
import { BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

export const SummaryContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  background-image: url("../images/shopper.svg");
  background-position: center;
  background-size: cover;
  height: 70vh;
  width: 90%;
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--mainTheme);
  border-radius: 5px;
  justify-content: center;
`;
export const SummaryContentContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: var(--mainSeeThroughTheme);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px 10px;
  box-sizing: border-box;
  justify-content: center;
`;
export const ContactInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
export const ContactInfoContent = styled.div`
  display: flex;
  align-items: center;
`;
export const PaymentSummaryContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  line-height: 1.9;
  padding: 10px;
  box-sizing: border-box;
`;
export const SummaryHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const SummaryText = styled.h5`
  font-size: 16px;
  color: ${({ top }) => (top ? "var(--subTheme)" : "var(--lightTheme)")};
`;
export const PhoneIcon = styled(BsPhone)`
  font-size: 20px;
  color: var(--subTheme);
  margin-right: 15px;
`;
export const MailIcon = styled(HiOutlineMail)`
  font-size: 20px;
  color: var(--subTheme);
  margin-right: 15px;
`;
export const SmallText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: var(--lightTheme);
`;
export const BgText = styled.h3`
  font-size: 30px;
  font-weight: bold;
  color: var(--subTheme);
`;
export const MidText = styled.h4`
  font-size: 20px;
  font-weight: bold;
  color: var(--lightTheme);
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
