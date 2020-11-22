import React from "react";
import { useState } from "react";
import {
  SlideBar,
  SliderContent,
  Slide,
  Arrow,
  ArrowLeft,
  ArrowRight,
  Dot,
  Dots,
  SlideContent,
  ContentHeading,
  ContentText,
  Btn,
} from "./HeroElements";

function HeroSection() {
  const ScreenWidth = () => window.innerWidth;

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
    activeIndex: 0,
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * ScreenWidth(),
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * ScreenWidth(),
        activeIndex: slides.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * ScreenWidth(),
    });
  };

  // const slides = [
  //   "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  //   "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
  //   "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
  //   "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
  // ];

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

  return (
    <div>
      <SlideBar>
        <SliderContent
          translate={translate}
          transition={transition}
          width={ScreenWidth() * slides.length}
        >
          {slides.map((slides, i) => (
            <Slide key={slides + i} content={slides.image}>
              <SlideContent>
                <ContentHeading>{slides.heading}</ContentHeading>
                <ContentText>{slides.text}</ContentText>
                <Btn>Shop Now</Btn>
              </SlideContent>
            </Slide>
          ))}
        </SliderContent>

        <Arrow onClick={nextSlide} right>
          <ArrowRight />
        </Arrow>

        <Arrow>
          <ArrowLeft onClick={prevSlide} />
        </Arrow>
        <Dots>
          {slides.map((slide, i) => (
            <Dot key={slide} active={activeIndex === i} />
          ))}
        </Dots>
      </SlideBar>
    </div>
  );
}

export default HeroSection;
