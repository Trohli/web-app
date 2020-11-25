import React from "react";
import ClosebyItems from "../Components/ClosebySection/Index";
import { ProductContainer } from "../Components/GenComponent";
import HeroSection from "../Components/HeroSection/Index";

function Home() {
  return (
    <>
      <HeroSection />
      <ProductContainer>
        <ClosebyItems />
      </ProductContainer>
    </>
  );
}

export default Home;
