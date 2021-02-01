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
import { IconButton } from "@material-ui/core";
import { useStateValue } from "../../../StateProvider";

function TrendingCard({ name, image, price, id, description }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        image: image,
        price: price,
        description: description,
      },
    });
  };

  return (
    <>
      <Card>
        <CardH3> {name} </CardH3>
        <CardImg src={image} />
        <CardH3> {price} </CardH3>
        <CardRow>
          <CardBtn>Buy</CardBtn>
          <IconButton>
            <LikeIcon />
          </IconButton>

          <IconButton onClick={addToBasket}>
            <AddCartIcon />
          </IconButton>
        </CardRow>
      </Card>
    </>
  );
}

export default TrendingCard;
