import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import RecommendedItems from "./Items/Index";
import {
  RecommendedBarContainer,
  RecommendedTextcontainer,
  RecommendedContentContainer,
  RecommendedText,
  Hrl,
  RecommendedFlexContainer,
} from "./RecommendedBarElements";

function RecommendedBar() {
  const responsive = {
    540: { items: 1 },
    622: { items: 2 },
    770: { items: 3 },
    1025: { items: 4 },
  };

  const RecommendeditemsData = [
    {
      image: "./images/phone.png",
      item: "Redimi Note 7",
      price: "$98.99",
      key: 1,
    },
    {
      image: "./images/phone.png",
      item: "Redimi Note 7",
      price: "$98.99",
      key: 2,
    },
    {
      image: "./images/phone.png",
      item: "Redimi Note 7",
      price: "$98.99",
      key: 3,
    },
    {
      image: "./images/phone.png",
      item: "Redimi Note 7",
      price: "$98.99",
      key: 4,
    },
    {
      image: "./images/phone.png",
      item: "Redimi Note 7",
      price: "$98.99",
      key: 5,
    },
    {
      image: "./images/phone.png",
      item: "Redimi Note 7",
      price: "$98.99",
      key: 6,
    },
    {
      image: "./images/phone.png",
      item: "Redimi Note 7",
      price: "$98.99",
      key: 7,
    },
  ];

  const RecomendedSlideItem = RecommendeditemsData.map(
    ({ image, item, price, key }) => (
      <RecommendedItems image={image} key={key} item={item} price={price} />
    )
  );

  return (
    <>
      <RecommendedBarContainer>
        <RecommendedContentContainer>
          <RecommendedTextcontainer>
            <RecommendedText>Recommended For You</RecommendedText>
            <Hrl />
          </RecommendedTextcontainer>
          <RecommendedFlexContainer>
            <AliceCarousel
              autoPlay
              infinite
              mouseTracking
              items={RecomendedSlideItem}
              animationType="fadeout"
              autoPlayInterval="8000"
              controlsStrategy="responsive"
              disableDotsControls="true"
              disableButtonsControls="true"
              responsive={responsive}
            />
          </RecommendedFlexContainer>
        </RecommendedContentContainer>
      </RecommendedBarContainer>
    </>
  );
}

export default RecommendedBar;
