import React from "react";
import {
  CartItemsContent,
  CartTextNormal,
  CartTextSmall,
  FlexItemsless,
  FlexItemsMore,
  ItemImg,
  SizeSelect,
  ItemTextContainer,
} from "./CartElements";

function CartItem() {
  return (
    <>
      <CartItemsContent>
        <FlexItemsMore>
          <ItemImg src="../images/phone.png" />
          <ItemTextContainer>
            <CartTextNormal>Product</CartTextNormal>
            <CartTextSmall>Blue</CartTextSmall>
          </ItemTextContainer>
        </FlexItemsMore>
        <FlexItemsless>
          <SizeSelect>
            <option value="1">32gb</option>
            <option value="2">24gb</option>
            <option value="3">18gb</option>
            <option value="4">12gb</option>
          </SizeSelect>
        </FlexItemsless>
        <FlexItemsless>
          <CartTextNormal>Quantity</CartTextNormal>
        </FlexItemsless>
        <FlexItemsless start>
          <CartTextNormal>$340</CartTextNormal>
        </FlexItemsless>
      </CartItemsContent>
    </>
  );
}

export default CartItem;
