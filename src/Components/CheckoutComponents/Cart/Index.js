import React from "react";
import {
  BillingContainer,
  CartContainer,
  CartItemsContainer,
  CartItemsContent,
  FlexMore,
  Flexless,
  CartTextNormal,
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
        <BillingContainer>this is the billing container</BillingContainer>
      </CartContainer>
    </>
  );
}

export default CheckoutCart;
