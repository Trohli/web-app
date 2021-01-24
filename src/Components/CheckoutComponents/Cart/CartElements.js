import styled from "styled-components";
import { GiShoppingCart } from "react-icons/gi";

export const CartContainer = styled.div`
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
export const CartSumText = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;
export const CartChargeText = styled.h4`
  font-size: 16px;
  font-weight: bold;
`;
