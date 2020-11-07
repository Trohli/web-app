import React from "react";
import { HeroOne } from "../components/Data";
import HeroVideo from "../components/HeroVideo";

function Home() {
  return (
    <>
      <HeroVideo {...HeroOne} />
    </>
  );
}

export default Home;
