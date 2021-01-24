import React from "react";
import {
  Card,
  CardH3,
  CardImg,
  CardBtn,
  CardRow,
  AddCartIcon,
  LikeIcon,
} from "./TrendingElements";

function TrendingCard({ name, image, price }) {
  return (
    <>
      <Card>
        <CardH3> {name} </CardH3>
        <CardImg src={image} />
        <CardH3> {price} </CardH3>
        <CardRow>
          <CardBtn>Buy</CardBtn>
          <LikeIcon />
          <AddCartIcon />
        </CardRow>
      </Card>
    </>
  );
}

export default TrendingCard;
