import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ClosebyCard from "./ClosebyCard";
import {
  ClosebySection,
  ClosebyHeading,
  Hrl,
  ClosebyH3,
  CardSection,
  CardBar,
} from "./ClosebyElements";

function ClosebyItems() {
  const CardInfo = [
    {
      image:
        "https://images.unsplash.com/photo-1576074209407-04b529a8ca81?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGklMjBwaG9uZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "GaBox",
      distance: "1m",
      price: 200,
      id: 1,
    },
    {
      image:
        "https://images.unsplash.com/photo-1576074209407-04b529a8ca81?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGklMjBwaG9uZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "jam Box",
      distance: "3m",
      price: 523,
      id: 2,
    },
    {
      image:
        "https://images.unsplash.com/photo-1576074209407-04b529a8ca81?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGklMjBwaG9uZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "plam Box",
      distance: "5m",
      price: 322,
      id: 3,
    },
    {
      image:
        "https://images.unsplash.com/photo-1576074209407-04b529a8ca81?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGklMjBwaG9uZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "plates Box",
      distance: "9m",
      price: 120,
      id: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1576074209407-04b529a8ca81?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGklMjBwaG9uZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "Game Box",
      distance: "0m",
      price: 250,
      id: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1576074209407-04b529a8ca81?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGklMjBwaG9uZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "Game Box",
      distance: "4m",
      price: 332,
      id: 6,
    },
  ];

  const items = CardInfo.map((card, i) => (
    <ClosebyCard
      key={card + i}
      image={card.image}
      text={card.text}
      distance={card.distance}
      price={card.price}
      id={card.id + i}
    />
  ));

  const responsive = {
    0: { items: 1 },
  };

  return (
    <>
      <ClosebySection>
        <ClosebyHeading>
          <Hrl />
          <ClosebyH3>Items Closeby</ClosebyH3>
          <Hrl />
        </ClosebyHeading>
        <CardSection>
          {Array(12)
            .fill()
            .map((_, i) => (
              <CardBar key={i}>
                <AliceCarousel
                  autoPlay
                  infinite
                  items={items}
                  mouseTracking
                  animationType="fadeout"
                  autoPlayInterval="8000"
                  controlsStrategy="responsive"
                  disableDotsControls="true"
                  disableButtonsControls="true"
                  responsive={responsive}
                />
              </CardBar>
            ))}
        </CardSection>
      </ClosebySection>
    </>
  );
}

export default ClosebyItems;
