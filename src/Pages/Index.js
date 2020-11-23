import React from "react";
import { ProductContainer } from "../Components/GenComponent";
import HeroSection from "../Components/HeroSection/Index";

function Home() {
  return (
    <div>
      <HeroSection />
      <ProductContainer>this is where all products goes</ProductContainer>
    </div>
  );
}

export default Home;
