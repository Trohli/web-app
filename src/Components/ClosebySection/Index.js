import React, { useState } from "react";
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
  const [translate, setTranslate] = useState(0);

  const nextCard = () => {
    translate === cardBarWidth ? setTranslate() : setTranslate(translate + 255);
  };

  const prevCard = () => {
    translate === 0 ? setTranslate(0) : setTranslate(translate - 255);
  };

  const CardInfo = [
    {
      image: "",
      text: "headphones",
    },
    {
      image: "",
      text: "headphones",
    },
    {
      image: "",
      text: "headphones",
    },
    {
      image: "",
      text: "headphones",
    },
    {
      image: "",
      text: "headphones",
    },
    {
      image: "",
      text: "headphones",
    },
    {
      image: "",
      text: "headphones",
    },
    {
      image: "",
      text: "headphones",
    },
    {
      image: "",
      text: "headphones",
    },
    {
      image: "",
      text: "headphones",
    },
    {
      image: "",
      text: "headphones",
    },
  ];

  const cardBarWidth = CardInfo.length * 255;

  return (
    <>
      <ClosebySection>
        <ClosebyHeading>
          <Hrl />
          <ClosebyH3>Items Closeby</ClosebyH3>
          <Hrl />
        </ClosebyHeading>

        <CardSection>
          <CardBar translate={translate} width={cardBarWidth}>
            {CardInfo.map((card, i) => (
              <ClosebyCards />
            ))}
          </CardBar>

          <Arrow right onClick={nextCard}>
            <ArrowRight />
          </Arrow>

          <Arrow onClick={prevCard}>
            <ArrowLeft />
          </Arrow>
        </CardSection>
      </ClosebySection>
    </>
  );
}

export default ClosebyItems;
