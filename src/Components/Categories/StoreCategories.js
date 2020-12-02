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

function StoreCategories({ main }) {
  return (
    <>
      <StoreTag main={main}>
        <StoreTagTop>
          <StoreImg src="./images/sk.png" />
          <StoreTagTopContent>
            <StoresContentH3 small main={main}>
              St.Kicks
            </StoresContentH3>
            <StoreBtn main={main}>Visit</StoreBtn>
          </StoreTagTopContent>
        </StoreTagTop>
        <StoreTagButtom>
          <StoreTagButtomH4 main={main}>Shoes</StoreTagButtomH4>
          <StoreTagButtomH4 main={main}>Bags</StoreTagButtomH4>
          <StoreTagButtomH4 main={main}>Clothings</StoreTagButtomH4>
          <StoreTagButtomH4 main={main}>Fasiion</StoreTagButtomH4>
        </StoreTagButtom>
      </StoreTag>
    </>
  );
}

export default StoreCategories;
