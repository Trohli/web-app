import React from "react";
import {
  ItemImage,
  RecommendedItemContent,
  ItemDetailContainer,
  ItemTextContainer,
  ItemName,
  ItemPrice,
  ItemIconContainer,
  AddCartIcon,
  LikeIcon,
  ItemBtn,
} from "./ItemElements";

function RecommendedItems({ image, item, price }) {
  return (
    <>
      <RecommendedItemContent>
        <ItemImage src={image} />
        <ItemDetailContainer>
          <ItemTextContainer>
            <ItemName>{item}</ItemName>
            <ItemPrice>{price}</ItemPrice>
          </ItemTextContainer>
          <ItemIconContainer>
            <ItemBtn>Buy</ItemBtn>
            <LikeIcon />
            <AddCartIcon />
          </ItemIconContainer>
        </ItemDetailContainer>
      </RecommendedItemContent>
    </>
  );
}

export default RecommendedItems;
