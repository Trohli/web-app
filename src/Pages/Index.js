import React from "react";
import Categories from "../Components/Categories/Index";
import ClosebyItems from "../Components/ClosebySection/Index";
import { ProductContainer } from "../Components/GenComponent";
import HeroSection from "../Components/HeroSection/Index";
import MostSearch from "../Components/MostSearch/Index";
import TrendingArea from "../Components/TrendingArea/Index";

function Home() {
  return (
    <>
      <HeroSection />
      <ProductContainer>
        <ClosebyItems />
        <Categories />
        <TrendingArea />
      </ProductContainer>
      <MostSearch />
    </>
  );
}

export default Home;
