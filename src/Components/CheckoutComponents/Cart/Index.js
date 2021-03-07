import React from "react";
import { getBasketTotal } from "../../../reducer";
import { useStateValue } from "../../../StateProvider";
import {
  BillingContainer,
  CartContainer,
  CartItemsContainer,
  CartItemsContent,
  FlexMore,
  CartTextNormal,
  CartSumIcon,
  CartSumText,
  ChargeHeading,
  CartChargeText,
  CartChargeFlex,
  CartChargeContainer,
  BackToShopIcon,
  ContinueCheckoutIcon,
  BackToShopFlex,
  BackToShopContainer,
  BackToShopText,
} from "./CartElements";
import CartItem from "./CartItem";

function CheckoutCart() {
  const [{ basket }, dispatch] = useStateValue();

  const CartInlineComponents = () => (
    <>
      <CartContainer>
        <CartItemsContainer>
          <CartItemsContent>
            <FlexMore>
              <CartTextNormal>Cart Items</CartTextNormal>
            </FlexMore>
          </CartItemsContent>
          {basket.map(({ id, name, image, price, description }, i) => (
            <CartItem
              key={id + i}
              id={id}
              name={name}
              image={image}
              price={price}
              description={description}
            />
          ))}
        </CartItemsContainer>
        <BillingContainer>
          <ChargeHeading>
            <CartSumIcon />
            <CartSumText>Your cart</CartSumText>
          </ChargeHeading>
          <CartChargeContainer>
            <CartChargeFlex>
              <CartChargeText>Subtotal:</CartChargeText>
              <CartChargeText>{basket.length} items</CartChargeText>
            </CartChargeFlex>
            <CartChargeFlex>
              <CartChargeText>Total cost:</CartChargeText>
              <CartChargeText big>${getBasketTotal(basket)} </CartChargeText>
            </CartChargeFlex>
          </CartChargeContainer>
        </BillingContainer>
      </CartContainer>
      <BackToShopContainer>
        <BackToShopFlex to="/">
          <BackToShopIcon /> <BackToShopText>Continue Shopping</BackToShopText>
        </BackToShopFlex>
        <BackToShopFlex to="/checkout/shipping">
          <BackToShopText>Proceed to Shipping</BackToShopText>
          <ContinueCheckoutIcon />
        </BackToShopFlex>
      </BackToShopContainer>
    </>
  );
  return (
    <>
      <CartInlineComponents />
    </>
  );
}

export default CheckoutCart;
