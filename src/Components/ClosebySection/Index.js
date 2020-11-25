import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ClosebyCards from "./ClosebyCards/Index";
import {
  ClosebySection,
  ClosebyHeading,
  Hrl,
  ClosebyH3,
  CardSection,
  Arrow,
  ArrowRight,
  ArrowLeft,
  CardBar,
} from "./ClosebyElements";

function ClosebyItems() {
  const CardInfo = [
    {
      image:
        "https://images.unsplash.com/photo-1576074209407-04b529a8ca81?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGklMjBwaG9uZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "GaBox",
      distance: "1m",
    },
    {
      image:
        "https://images.unsplash.com/photo-1576074209407-04b529a8ca81?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGklMjBwaG9uZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "jam Box",
      distance: "3m",
    },
    {
      image:
        "https://images.unsplash.com/photo-1576074209407-04b529a8ca81?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGklMjBwaG9uZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "plam Box",
      distance: "5m",
    },
    {
      image:
        "https://images.unsplash.com/photo-1576074209407-04b529a8ca81?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGklMjBwaG9uZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "plates Box",
      distance: "9m",
    },
    {
      image:
        "https://images.unsplash.com/photo-1576074209407-04b529a8ca81?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGklMjBwaG9uZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "Game Box",
      distance: "0m",
    },
    {
      image:
        "https://images.unsplash.com/photo-1576074209407-04b529a8ca81?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGklMjBwaG9uZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
      text: "Game Box",
      distance: "4m",
    },
  ];

  return (
    <>
      <ClosebySection>
        <ClosebyHeading>
          <Hrl />
          <ClosebyH3>Items Closeby</ClosebyH3>
          <Hrl />
        </ClosebyHeading>
        <CardSection>
          <CardBar>
            <AliceCarousel
              autoPlay
              infinite
              mouseTracking
              animationType="fadeout" //slide, fadeout
              autoPlayInterval="4000" //default 400
              // touchTracking default true
              // autoPlayDirection='rtl' or "ltr"
              controlsStrategy="responsive"
              // paddingLeft='0px' it shows image padding on aminate
              disableDotsControls="true" //it remove dots
              disableButtonsControls="true"
              // it remove arrows oporer ta
              // autoPlayStrategy='default' or 'none' (on hover default emits autoplay)
              // autoPlayControls='play/pause' or "show/hide"
            >
              {CardInfo.map((card, i) => (
                <ClosebyCards
                  key={card + i}
                  image={card.image}
                  text={card.text}
                  distance={card.distance}
                />
              ))}
            </AliceCarousel>
          </CardBar>
          <CardBar>
            <AliceCarousel
              autoPlay
              infinite
              mouseTracking
              animationType="fadeout" //slide, fadeout
              autoPlayInterval="000" //default 400
              // touchTracking default true
              // autoPlayDirection='rtl' or "ltr"
              controlsStrategy="responsive"
              // paddingLeft='0px' it shows image padding on aminate
              disableDotsControls="true" //it remove dots
              disableButtonsControls="true"
              // it remove arrows oporer ta
              // autoPlayStrategy='default' or 'none' (on hover default emits autoplay)
              // autoPlayControls='play/pause' or "show/hide"
            >
              {CardInfo.map((card, i) => (
                <ClosebyCards
                  key={card + i}
                  image={card.image}
                  text={card.text}
                  distance={card.distance}
                />
              ))}
            </AliceCarousel>
          </CardBar>
          <CardBar>
            <AliceCarousel
              autoPlay
              infinite
              mouseTracking
              animationType="fadeout" //slide, fadeout
              autoPlayInterval="4000" //default 400
              // touchTracking default true
              // autoPlayDirection='rtl' or "ltr"
              controlsStrategy="responsive"
              // paddingLeft='0px' it shows image padding on aminate
              disableDotsControls="true" //it remove dots
              disableButtonsControls="true"
              // it remove arrows oporer ta
              // autoPlayStrategy='default' or 'none' (on hover default emits autoplay)
              // autoPlayControls='play/pause' or "show/hide"
            >
              {CardInfo.map((card, i) => (
                <ClosebyCards
                  key={card + i}
                  image={card.image}
                  text={card.text}
                  distance={card.distance}
                />
              ))}
            </AliceCarousel>
          </CardBar>
          <CardBar>
            <AliceCarousel
              autoPlay
              infinite
              mouseTracking
              animationType="fadeout" //slide, fadeout
              autoPlayInterval="000" //default 400
              // touchTracking default true
              // autoPlayDirection='rtl' or "ltr"
              controlsStrategy="responsive"
              // paddingLeft='0px' it shows image padding on aminate
              disableDotsControls="true" //it remove dots
              disableButtonsControls="true"
              // it remove arrows oporer ta
              // autoPlayStrategy='default' or 'none' (on hover default emits autoplay)
              // autoPlayControls='play/pause' or "show/hide"
            >
              {CardInfo.map((card, i) => (
                <ClosebyCards
                  key={card + i}
                  image={card.image}
                  text={card.text}
                  distance={card.distance}
                />
              ))}
            </AliceCarousel>
          </CardBar>
        </CardSection>
      </ClosebySection>
    </>
  );
}

export default ClosebyItems;
