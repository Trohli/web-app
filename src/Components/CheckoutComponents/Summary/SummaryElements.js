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

  @media screen and (max-width: 1024px) {
    max-width: 850px;
  }
  @media screen and (max-width: 414px) {
    height: 80vh;
  }
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

  @media screen and (max-width: 375px) {
    font-size: 15px;
  }
  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
`;
export const PhoneIcon = styled(BsPhone)`
  font-size: 20px;
  color: var(--subTheme);
  margin-right: 15px;

  @media screen and (max-width: 414px) {
    margin-right: 10px;
  }
  @media screen and (max-width: 375px) {
    margin-right: 8px;
  }
  @media screen and (max-width: 320px) {
    margin-right: 5px;
  }
`;
export const MailIcon = styled(HiOutlineMail)`
  font-size: 20px;
  color: var(--subTheme);
  margin-right: 15px;

  @media screen and (max-width: 414px) {
    margin-right: 5px;
  }
  @media screen and (max-width: 375px) {
    margin-right: 4px;
  }
  @media screen and (max-width: 320px) {
    margin-right: 3px;
  }
`;
export const SmallText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: var(--lightTheme);

  @media screen and (max-width: 414px) {
    font-size: 15px;
  }
  @media screen and (max-width: 375px) {
    font-size: 14px;
  }
  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;
export const BgText = styled.h3`
  font-size: 30px;
  font-weight: bold;
  color: var(--subTheme);

  @media screen and (max-width: 414px) {
    font-size: 25px;
  }
  @media screen and (max-width: 375px) {
    font-size: 22px;
  }
  @media screen and (max-width: 320px) {
    font-size: 18px;
  }
`;
export const MidText = styled.h4`
  font-size: 20px;
  font-weight: bold;
  color: var(--lightTheme);
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
