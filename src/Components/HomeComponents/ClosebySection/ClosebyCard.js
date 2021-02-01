import React from "react";
import { useStateValue } from "../../../StateProvider";
import {
  Card,
  CardImg,
  CardText,
  CardM,
  CardPrice,
  AddCartIcon,
  AddCartIconContainer,
} from "./ClosebyElements";

function ClosebyCard({ image, text, distance, price, id }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: text,
        image: image,
        price: price,
        distance: distance,
      },
    });
  };

  return (
    <>
      <Card>
        <CardImg src={image} />
        <CardText> {text} </CardText>
        <CardM> {distance} </CardM>
        <CardPrice>${price} </CardPrice>
        <AddCartIconContainer onClick={addToBasket}>
          <AddCartIcon />
        </AddCartIconContainer>
      </Card>
    </>
  );
}

export default ClosebyCard;
