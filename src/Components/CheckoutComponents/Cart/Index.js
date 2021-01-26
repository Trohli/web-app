import React from "react";
import {
  BillingContainer,
  CartContainer,
  CartItemsContainer,
  CartItemsContent,
  FlexMore,
  Flexless,
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
} from "./CartElements";
import CartItem from "./CartItem";

function CheckoutCart() {
  return (
    <>
      <CartContainer>
        <CartItemsContainer>
          <CartItemsContent>
            <FlexMore>
              <CartTextNormal>Product</CartTextNormal>
            </FlexMore>
            <Flexless>
              <CartTextNormal>Size</CartTextNormal>
            </Flexless>
            <Flexless>
              <CartTextNormal>Quantity</CartTextNormal>
            </Flexless>
            <Flexless start>
              <CartTextNormal>Total Price</CartTextNormal>
            </Flexless>
          </CartItemsContent>
          <CartItem />
          <CartItem />
          <CartItem />
        </CartItemsContainer>
        <BillingContainer>
          <ChargeHeading>
            <CartSumIcon />
            <CartSumText>Your cart</CartSumText>
          </ChargeHeading>
          <CartChargeContainer>
            <CartChargeFlex>
              <CartChargeText>Subtotal:</CartChargeText>
              <CartChargeText>2 items</CartChargeText>
            </CartChargeFlex>
            <CartChargeFlex>
              <CartChargeText>Total cost:</CartChargeText>
              <CartChargeText big>$1020</CartChargeText>
            </CartChargeFlex>
          </CartChargeContainer>
        </BillingContainer>
      </CartContainer>
      <BackToShopContainer>
        <BackToShopFlex to="/">
          <BackToShopIcon /> <CartChargeText>Continue Shopping</CartChargeText>
        </BackToShopFlex>
        <BackToShopFlex to="/checkout/shipping">
          <CartChargeText>Proceed to Shipping</CartChargeText>
          <ContinueCheckoutIcon />
        </BackToShopFlex>
      </BackToShopContainer>
    </>
  );
}

export default CheckoutCart;
