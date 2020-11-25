import React from "react";
import { Card, CardImg, CardText, CardM } from "./CloseCardElements";

function ClosebyCards({ image, text, distance }) {
  return (
    <>
      <Card>
        <CardImg src={image} />
        <CardText> {text} </CardText>
        <CardM> {distance} </CardM>
      </Card>
    </>
  );
}

export default ClosebyCards;
