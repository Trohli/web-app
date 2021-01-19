import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import {
  Slide,
  SlideContent,
  ContentHeading,
  ContentText,
  Btn,
  HeroSlider,
} from "./HeroElements";

function HeroSection() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
      heading: "Otigba Deals",
      text:
        "lorem ipsum dummy data generator orem ipsum dummy data generator orem ipsum dummy data generator orem ipsum dummy data generator orem ipsum dummy data generator orem ipsum dummy data generatororem ipsum dummy data generatororem ipsum dummy data generator dummy data generator",
    },
    {
      image:
        "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
      heading: "Agege Deals",
      text:
        "lorem ipsum dummy data generator orem ipsum dummy data generator orem ipsum dummy data generator orem ipsum dummy data generator orem ipsum dummy data generator orem ipsum dummy data generatororem ipsum dummy data generatororem ipsum dummy data generator dummy data generator",
    },
    {
      image:
        "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
      heading: "Lekki Deals",
      text:
        "lorem ipsum dummy data generator orem ipsum dummy data generator orem ipsum dummy data generator orem ipsum dummy data generator orem ipsum dummy data generator orem ipsum dummy data generatororem ipsum dummy data generatororem ipsum dummy data generator dummy data generator",
    },
    {
      image:
        "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
      heading: "Ochanga Deals",
      text:
        "lorem ipsum dummy data generator orem ipsum dummy data generator orem ipsum dummy data generator orem ipsum dummy data generator orem ipsum dummy data generator orem ipsum dummy data generatororem ipsum dummy data generatororem ipsum dummy data generator dummy data generator",
    },
  ];

  const items = slides.map((slides, i) => (
    <Slide key={slides + i} content={slides.image}>
      <SlideContent>
        <ContentHeading>{slides.heading}</ContentHeading>
        <ContentText>{slides.text}</ContentText>
        <Btn>Shop Now</Btn>
      </SlideContent>
    </Slide>
  ));

  return (
    <>
      <HeroSlider>
        <AliceCarousel
          autoPlay="true"
          infinite
          mouseTracking
          items={items}
          animationType="fadeout"
          autoPlayInterval="6000"
          controlsStrategy="responsive"
          disableDotsControls="true"
          disableButtonsControls="true"
        />
      </HeroSlider>
    </>
  );
}

export default HeroSection;
