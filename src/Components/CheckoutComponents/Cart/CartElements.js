import styled from "styled-components";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 40px 20px 20px 20px;
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

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  padding: 10px 20px;
  box-sizing: border-box;
  height: 100%;
  background: #fff;
  border-radius: 4px;

  @media screen and (max-width: 1024px) {
    width: 550px;
  }
  @media screen and (max-width: 768px) {
    margin: 0 auto 25px auto;
    width: 100%;
  }
`;

export const CartItemsContent = styled.div`
  width: 100%;
  height: max-content;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--lightGray);
`;
export const ItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
`;

export const FlexMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 30%;
`;
export const FlexItemsMore = styled.div`
  display: flex;
  padding: 5px;
  box-sizing: border-box;
  width: 30%;
`;
export const Flexless = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ start }) => (start ? "flex-start" : "center")};
  width: ${({ start }) => (start ? "15%" : "20%")};
`;
export const FlexItemsless = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
`;
export const RemoveCartIcon = styled(MdDeleteForever)`
  font-size: 20px;
  color: var(--mainTheme);
  padding: 5px;
  cursor: pointer;
`;
export const CartTextNormal = styled.h4`
  font-size: 15px;
  font-weight: bold;
  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;
export const CartTextSmall = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: var(--grayTheme);
`;

export const ItemImg = styled.img`
  height: 55px;
  width: 40px;
  margin-right: 10px;
`;

export const BillingContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 250px;
  height: 100%;
  background: var(--mainSeeThroughTheme);
  border: 1px solid var(--mainTheme);
  padding: 15px 10px;
  color: var(--mainTheme);

  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 540px) {
    padding: 10px 5px;
  }
`;
export const ChargeHeading = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--mainTheme);
  padding-bottom: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;

  @media screen and (max-width: 540px) {
    margin-bottom: 5px;
    padding-bottom: 5px;
  }
`;
export const CartSumIcon = styled(GiShoppingCart)`
  font-size: 30px;
  font-weight: bolder;
  margin-right: 15px;
  color: var(--mainTheme);

  @media screen and (max-width: 414px) {
    font-size: 20px;
    margin-right: 10px;
  }
  @media screen and (max-width: 375px) {
    font-size: 18px;
  }
  @media screen and (max-width: 320px) {
    font-size: 16px;
  }
`;

export const CartSumText = styled.h3`
  font-size: 18px;
  font-weight: bold;
  width: 100%;

  @media screen and (max-width: 375px) {
    font-size: 16px;
  }
  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;
export const CartChargeText = styled.h4`
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  font-weight: bold;

  @media screen and (max-width: 320px) {
    font-size: ${({ big }) => (big ? "16px" : "14px")};
  }
`;
export const CartChargeFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  box-sizing: border-box;
  margin-bottom: 5px;

  @media screen and (max-width: 540px) {
    padding: 0 10px;
  }
`;
export const CartChargeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--mainTheme);

  @media screen and (max-width: 540px) {
    padding-bottom: 5px;
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
