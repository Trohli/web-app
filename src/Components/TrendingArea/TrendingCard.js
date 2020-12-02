import React from "react";
import { Card, CardH3, CardImg, CardBtn } from "./TrendingElements";

function TrendingCard({ name, image, price }) {
  return (
    <>
      <Card>
        <CardH3> {name} </CardH3>
        <CardImg src={image} />
        <CardH3> {price} </CardH3>
        <CardBtn>Buy</CardBtn>
      </Card>
    </>
  );
}

export default TrendingCard;
