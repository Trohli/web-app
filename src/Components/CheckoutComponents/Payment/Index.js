import React, { useReducer, useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import {
  CheckoutPaymentContainer,
  PaymentMethodContainer,
  SelectPaymentMethod,
  CardDetailContainer,
  PaymentTotalContainer,
  PaymentSelectContainer,
  PaymentImageSelector,
  ActivePaymentIcon,
  CardDetailContent,
  PaymentTotalContent,
  PaymentSumHeading,
  BillingFlexContainer,
  PaymentBillFlex,
  PaymentCostText,
  TotalFont,
  CardForm,
  CardInput,
  BackToShopIcon,
  ContinueCheckoutIcon,
  BackToShopContainer,
  BackToShopFlex,
  PaymentBillFlexContainer,
  PaymentHoverInfo,
  HoverText,
  DiscountBtn,
  DiscountFormInput,
  DiscountForm,
  CheckoutPaymentContent,
  BackToShopText,
} from "./PaymentElements";

const initialState = {
  visaPay: true,
  payPal: false,
  payStack: false,
  amazonPay: false,
  hoverVisaPay: false,
  hoverPayPal: false,
  hoverPayStack: false,
  hoverAmazonPay: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setVisaPayActive":
      return {
        ...state,
        visaPay: true,
        payPal: false,
        payStack: false,
        amazonPay: false,
      };
    case "setPayPalActive":
      return {
        ...state,
        visaPay: false,
        payPal: true,
        payStack: false,
        amazonPay: false,
      };
    case "setPayStackActive":
      return {
        ...state,
        visaPay: false,
        payPal: false,
        payStack: true,
        amazonPay: false,
      };
    case "setAmazonPayActive":
      return {
        ...state,
        visaPay: false,
        payPal: false,
        payStack: false,
        amazonPay: true,
      };
    case "setVisaPayHoverState":
      return {
        ...state,
        hoverVisaPay: !state.hoverVisaPay,
      };
    case "setPayPalHoverState":
      return {
        ...state,
        hoverPayPal: !state.hoverPayPal,
      };
    case "setPayStackHoverState":
      return {
        ...state,
        hoverPayStack: !state.hoverPayStack,
      };
    case "setAmazonPayHoverState":
      return {
        ...state,
        hoverAmazonPay: !state.hoverAmazonPay,
      };
  }
};

function CheckoutPayment() {
  const [methodState, dispatch] = useReducer(reducer, initialState);

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setfocus] = useState("");

  const paymentOptionDetails = [
    {
      name: "Card Payments",
      image: "../images/pm2.png",
      text:
        "express payment with a Visa Card, MasterCard, American Express and other cards.",
      state: methodState.visaPay,
      hoverState: methodState.hoverVisaPay,
      hoverStateType: "setVisaPayHoverState",
      actionType: "setVisaPayActive",
    },
    {
      name: "PayStack",
      image: "../images/pm5.png",
      text:
        "Pay through direct bank transfer with Paystack, Available in Nigeria.",
      state: methodState.payStack,
      hoverState: methodState.hoverPayStack,
      hoverStateType: "setPayStackHoverState",
      actionType: "setPayStackActive",
    },
    {
      name: "payPal",
      image: "../images/pm4.png",
      text:
        "Pay with paypal. You should have a Paypal account with funds above your bill.",
      state: methodState.payPal,
      hoverState: methodState.hoverPayPal,
      hoverStateType: "setPayPalHoverState",
      actionType: "setPayPalActive",
    },
    {
      name: "amazonPay",
      image: "../images/pm1.png",
      text: "Pay with amazon and get express delivery.",
      state: methodState.amazonPay,
      hoverState: methodState.hoverAmazonPay,
      hoverStateType: "setAmazonPayHoverState",
      actionType: "setAmazonPayActive",
    },
  ];

  const paymentOptions = paymentOptionDetails.map(
    ({ name, image, text, state, hoverState, hoverStateType, actionType }) => (
      <PaymentSelectContainer
        key={name}
        state={state}
        onMouseLeave={() => dispatch({ type: hoverStateType })}
        onMouseEnter={() => dispatch({ type: hoverStateType })}
        onClick={() => dispatch({ type: actionType })}
      >
        <PaymentImageSelector src={image} />
        {state && <ActivePaymentIcon />}
        {hoverState && (
          <PaymentHoverInfo state={state}>
            <HoverText>{name} </HoverText>
            <HoverText small>{text}</HoverText>
          </PaymentHoverInfo>
        )}
      </PaymentSelectContainer>
    )
  );
  return (
    <>
      <CheckoutPaymentContent>
        <CheckoutPaymentContainer>
          <PaymentMethodContainer>
            <SelectPaymentMethod>{paymentOptions}</SelectPaymentMethod>
            <CardDetailContainer>
              <CardDetailContent>
                <Cards
                  cvc={cvc}
                  expiry={expiry}
                  focused={focus}
                  name={name}
                  number={number}
                />
                <CardForm>
                  <CardInput
                    type="tel"
                    name="number"
                    placeholder="Card Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    onFocus={(e) => setfocus(e.target.name)}
                  />
                  <CardInput
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={(e) => setfocus(e.target.name)}
                  />
                  <CardInput
                    type="text"
                    name="expiry"
                    placeholder="MM/YY/ Expiry"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    onFocus={(e) => setfocus(e.target.name)}
                  />
                  <CardInput
                    last
                    type="tel"
                    name="cvc"
                    placeholder="CVC"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    onFocus={(e) => setfocus(e.target.name)}
                  />
                </CardForm>
              </CardDetailContent>
            </CardDetailContainer>
          </PaymentMethodContainer>
          <PaymentTotalContainer>
            <PaymentTotalContent>
              <PaymentSumHeading>Your Total Bill</PaymentSumHeading>
              <BillingFlexContainer>
                <PaymentBillFlexContainer>
                  <PaymentBillFlex>
                    <PaymentCostText small>Cart Total:</PaymentCostText>
                    <PaymentCostText> $55.53</PaymentCostText>
                  </PaymentBillFlex>
                  <PaymentBillFlex>
                    <PaymentCostText small>Shipping:</PaymentCostText>
                    <PaymentCostText> $44.4</PaymentCostText>
                  </PaymentBillFlex>
                </PaymentBillFlexContainer>
                <DiscountForm>
                  <DiscountFormInput placeholder="Discount Code?" type="tel" />
                  <DiscountBtn>Apply</DiscountBtn>
                </DiscountForm>
              </BillingFlexContainer>
              <PaymentBillFlex>
                <PaymentCostText> Total:</PaymentCostText>
                <TotalFont>$553.33</TotalFont>
              </PaymentBillFlex>
            </PaymentTotalContent>
          </PaymentTotalContainer>
        </CheckoutPaymentContainer>
      </CheckoutPaymentContent>
      <BackToShopContainer>
        <BackToShopFlex to="/checkout">
          <BackToShopIcon /> <BackToShopText>Back to Cart</BackToShopText>
        </BackToShopFlex>
        <BackToShopFlex to="/checkout/summary">
          <BackToShopText>Complete Payment</BackToShopText>
          <ContinueCheckoutIcon />
        </BackToShopFlex>
      </BackToShopContainer>
    </>
  );
}

export default CheckoutPayment;
