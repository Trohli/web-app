import React from "react";
import { ProductContainer } from "../Components/GenComponent";
import ClosebyItems from "../Components/HomeComponents/ClosebySection/Index";
import HeroSection from "../Components/HomeComponents/HeroSection/Index";
import Categories from "../Components/HomeComponents/Categories/Index";
import TrendingArea from "../Components/HomeComponents/TrendingArea/Index";

function Home() {
  return (
    <>
      <HeroSection />
      <ProductContainer>
        <ClosebyItems />
        <Categories />
        <TrendingArea />
      </ProductContainer>
    </>
  );
}

export default Home;
