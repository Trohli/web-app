import React from "react";
import {
  StoreImg,
  StoreTag,
  StoreTagTop,
  StoreTagTopContent,
  StoreBtn,
  StoreTagButtom,
  StoreTagButtomH4,
  StoresContentH3,
} from "./CategoriesElements";

function StoreCategories({ main, tagA, tagB, tagC, tagD, store, storeImg }) {
  return (
    <>
      <StoreTag main={main}>
        <StoreTagTop>
          <StoreImg src={storeImg} />
          <StoreTagTopContent>
            <StoresContentH3 small main={main}>
              {store}
            </StoresContentH3>
            <StoreBtn main={main}>Visit</StoreBtn>
          </StoreTagTopContent>
        </StoreTagTop>
        <StoreTagButtom>
          <StoreTagButtomH4 main={main}>{tagA}</StoreTagButtomH4>
          <StoreTagButtomH4 main={main}>{tagB}</StoreTagButtomH4>
          <StoreTagButtomH4 main={main}>{tagC}</StoreTagButtomH4>
          <StoreTagButtomH4 main={main}>{tagD}</StoreTagButtomH4>
        </StoreTagButtom>
      </StoreTag>
    </>
  );
}

export default StoreCategories;
