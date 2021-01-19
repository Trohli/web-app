import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import TrendingCard from "./TrendingCard";
import {
  TrendingSection,
  TrendingH2,
  TrendingCardContainer,
  TrendingNavFooter,
  CardBar,
  TrendingNav,
} from "./TrendingElements";

function TrendingArea() {
  const items = [
    {
      name: "Redimi Note 7",
      image: "./images/phone.png",
      price: "$1,400",
      id: "212",
    },
    {
      name: "Redimi Note 7",
      image: "./images/phone.png",
      price: "$1,400",
      id: "34",
    },
    {
      name: "Redimi Note 7",
      image: "./images/phone.png",
      price: "$1,400",
      id: "23",
    },
    {
      name: "Redimi Note 7",
      image: "./images/phone.png",
      price: "$1,400",
      id: "1",
    },
  ];

  const CardData = [
    [
      {
        name: "Redimi Note 7",
        image: "./images/phone.png",
        price: "$1,400",
        id: "212",
      },
    ],
    [
      {
        name: "Redimi Note 7",
        image: "./images/phone.png",
        price: "$1,400",
        id: "212",
      },
    ],
    [
      {
        name: "Redimi Note 7",
        image: "./images/phone.png",
        price: "$1,400",
        id: "212",
      },
    ],
    [
      {
        name: "Redimi Note 7",
        image: "./images/phone.png",
        price: "$1,400",
        id: "212",
      },
    ],
    [
      {
        name: "Redimi Note 7",
        image: "./images/phone.png",
        price: "$1,400",
        id: "212",
      },
    ],
    [
      {
        name: "Redimi Note 7",
        image: "./images/phone.png",
        price: "$1,400",
        id: "212",
      },
    ],
    [
      {
        name: "Redimi Note 7",
        image: "./images/phone.png",
        price: "$1,400",
        id: "212",
      },
    ],
    [
      {
        name: "Redimi Note 7",
        image: "./images/phone.png",
        price: "$1,400",
        id: "212",
      },
    ],
    [
      {
        name: "Redimi Note 7",
        image: "./images/phone.png",
        price: "$1,400",
        id: "212",
      },
    ],
    [
      {
        name: "Redimi Note 7",
        image: "./images/phone.png",
        price: "$1,400",
        id: "212",
      },
    ],
    [
      {
        name: "Redimi Note 7",
        image: "./images/phone.png",
        price: "$1,400",
        id: "212",
      },
    ],
    [
      {
        name: "Redimi Note 7",
        image: "./images/phone.png",
        price: "$1,400",
        id: "212",
      },
    ],
  ];

  const cards = items.map(({ name, image, price, id }) => (
    <TrendingCard name={name} image={image} price={price} key={id} />
  ));

  return (
    <>
      <TrendingSection>
        <TrendingH2>Trending in Your Area</TrendingH2>
        <div>
          <TrendingCardContainer>
            {CardData.map(({ name, image, price, id }) => (
              <CardBar>
                <AliceCarousel
                  items={cards}
                  autoPlay
                  infinite
                  mouseTracking
                  animationType="fadeout"
                  autoPlayInterval="8000"
                  controlsStrategy="responsive"
                  disableButtonsControls
                  disableDotsControls
                />
              </CardBar>
            ))}
          </TrendingCardContainer>
        </div>
        <TrendingNavFooter>
          <TrendingNav>1</TrendingNav>
          <TrendingNav>2</TrendingNav>
          <TrendingNav>3</TrendingNav>
          <TrendingNav>4</TrendingNav>
          ....
          <TrendingNav>10</TrendingNav>
        </TrendingNavFooter>
      </TrendingSection>
    </>
  );
}

export default TrendingArea;
