import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ClosebyCards from "./ClosebySection/ClosebyCards/Index";

const CardInfo = [
  {
    image: "./images/hp1",
    text: "headphones",
    distance: "3m",
  },
  {
    image: "./images/hp1",
    text: "headphones",
    distance: "3m",
  },
  {
    image: "./images/hp1",
    text: "headphones",
    distance: "3m",
  },
  {
    image: "./images/hp1",
    text: "headphones",
    distance: "3m",
  },
  {
    image: "./images/hp1",
    text: "headphones",
    distance: "3m",
  },
  {
    image: "./images/hp1",
    text: "headphones",
    distance: "3m",
  },
  {
    image: "./images/hp1",
    text: "headphones",
    distance: "3m",
  },
  {
    image: "./images/hp1",
    text: "headphones",
    distance: "3m",
  },
  {
    image: "./images/hp1",
    text: "headphones",
    distance: "3m",
  },
  {
    image: "./images/hp1",
    text: "headphones",
    distance: "3m",
  },
];

export class Slide extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinte: true,
      speed: 500,
      slidesToShow: 5,
      arrows: true,
      slidesToScroll: 1,
      className: "slides",
    };
    return (
      <div>
        <Slider {...settings}>
          {CardInfo.map((card, i) => (
            <ClosebyCards
              key={card + i}
              image={CardInfo.image}
              text={CardInfo.text}
              distance={CardInfo.distance}
            />
          ))}
        </Slider>
      </div>
    );
  }
}

export default Slide;
