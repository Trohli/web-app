import React from "react";
import {
  CartItemsContent,
  CartTextNormal,
  CartTextSmall,
  FlexItemsless,
  FlexItemsMore,
  ItemImg,
  ItemTextContainer,
  RemoveCartIcon,
} from "./CartElements";
import { IconButton } from "@material-ui/core";
import { useStateValue } from "../../../StateProvider";

function CartItem({ image, name, description, price, id }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <>
      <CartItemsContent>
        <FlexItemsMore>
          <ItemImg src={image} />
          <ItemTextContainer>
            <CartTextNormal>{name} </CartTextNormal>
            <CartTextSmall>{description} </CartTextSmall>
          </ItemTextContainer>
        </FlexItemsMore>

        <FlexItemsless start>
          <CartTextNormal>{price} </CartTextNormal>
          <IconButton onClick={removeFromBasket}>
            <RemoveCartIcon />
          </IconButton>
        </FlexItemsless>
      </CartItemsContent>
    </>
  );
}

export default CartItem;
