import styled from "styled-components";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { GrFormAdd } from "react-icons/gr";
import { IoIosRemove } from "react-icons/io";
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
  height: max-content;
  color: var(--mainTheme);
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
  height: 100%;
  background: #fff;
  border-radius: 4px;
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
export const CartCountMeter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid var(--mainTheme);
  border-radius: 99px;
  padding: 2px 10px;
  box-sizing: border-box;
  width: 60%;
`;
export const ItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 30%;
`;
export const FlexItemsMore = styled.div`
  display: flex;
  align-items: center;
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
  justify-content: ${({ start }) => (start ? "flex-start" : "center")};
  width: ${({ start }) => (start ? "15%" : "20%")};
`;
export const IncreaseCartIcon = styled(GrFormAdd)`
  font-size: 20px;
  color: var(--mainTheme);
  padding: 5px;
  cursor: pointer;
`;
export const ReduceCartIcon = styled(IoIosRemove)`
  font-size: 20px;
  color: var(--mainTheme);
  padding: 5px;
  cursor: pointer;
`;
export const CountText = styled.h5`
  font-size: 15px;
  color: var(--mainTheme);
`;
export const CartTextNormal = styled.h4`
  font-size: 15px;
  font-weight: bold;
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
export const SizeSelect = styled.select`
  border: 2px solid var(--mainTheme);
  border-radius: 99px;
  padding: 5px 10px;
  box-sizing: border-box;
  width: 60%;

  &:focus {
    outline: none;
  }
`;

export const BillingContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background: var(--mainSeeThroughTheme);
  border: 1px solid var(--mainTheme);
  padding: 15px 10px;
  color: var(--mainTheme);
`;
export const ChargeHeading = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--mainTheme);
  padding-bottom: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;
export const CartSumIcon = styled(GiShoppingCart)`
  font-size: 30px;
  font-weight: bolder;
  margin-right: 15px;
  color: var(--mainTheme);
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
export const CartSumText = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;
export const CartChargeText = styled.h4`
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  font-weight: bold;
`;
export const CartChargeFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  box-sizing: border-box;
  margin-bottom: 5px;
`;
export const CartChargeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--mainTheme);
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
