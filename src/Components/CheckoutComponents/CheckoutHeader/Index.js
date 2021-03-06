import React from "react";
import { PageLinks } from "../../GenComponent";
import {
  CheckoutHeadingContainer,
  CheckoutHeadingContent,
  CheckoutHeadingText,
  CheckoutLinksContainer,
  CheckoutLinksContent,
} from "./HeadingElements";

function CheckoutHeading() {
  const CheckoutLink = [
    {
      name: "Shipping",
      id: "shipping",
    },
    {
      name: "Payments",
      id: "payment",
    },
    {
      name: "Summary",
      id: "summary",
    },
  ];

  return (
    <>
      <CheckoutHeadingContainer>
        <CheckoutHeadingContent>
          <CheckoutHeadingText>Checkout</CheckoutHeadingText>
        </CheckoutHeadingContent>
      </CheckoutHeadingContainer>
      <CheckoutLinksContainer>
        <PageLinks to="/checkout">
          <CheckoutLinksContent>Cart</CheckoutLinksContent>
        </PageLinks>
        {CheckoutLink.map(({ name, id }) => (
          <PageLinks to={`/checkout/${id}`} key={id}>
            <CheckoutLinksContent>{name}</CheckoutLinksContent>
          </PageLinks>
        ))}
      </CheckoutLinksContainer>
    </>
  );
}

export default CheckoutHeading;
