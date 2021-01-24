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
            <CartSumText>Cart Charges</CartSumText>
          </ChargeHeading>
          <CartChargeText>
            You have 4 different items in your cart.
          </CartChargeText>
          <CartChargeText>Everyting here cost $3800.</CartChargeText>
        </BillingContainer>
      </CartContainer>
    </>
  );
}

export default CheckoutCart;
