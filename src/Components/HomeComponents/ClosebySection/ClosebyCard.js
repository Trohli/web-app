import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardM,
  CardPrice,
  AddCartIcon,
} from "./ClosebyElements";

function ClosebyCard({ image, text, distance, price }) {
  return (
    <>
      <Card>
        <CardImg src={image} />
        <CardText> {text} </CardText>
        <CardM> {distance} </CardM>
        <CardPrice>${price} </CardPrice>
        <AddCartIcon />
      </Card>
    </>
  );
}

export default ClosebyCard;
