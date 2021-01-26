import React, { useState } from "react";
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
  CartChargeText,
  PaymentBillFlexContainer,
  PaymentHoverInfo,
  HoverText,
  DiscountBtn,
  DiscountFormInput,
  DiscountForm,
} from "./PaymentElements";

function CheckoutPayment() {
  const [visaPay, setVisaPay] = useState(true);
  const [hoverVisaPay, setHoverVisaPay] = useState(false);
  const [payPal, setPayPal] = useState(false);
  const [hoverPayPal, setHoverPayPal] = useState(false);
  const [payStack, setPayStack] = useState(false);
  const [hoverPayStack, setHoverPayStack] = useState(false);
  const [amazonPay, setAmazonPay] = useState(false);
  const [hoverAmazonPay, sethoverAmazonPay] = useState(false);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setfocus] = useState("");

  const activateVisaPay = () => {
    setVisaPay(true);
    setPayPal(false);
    setPayStack(false);
    setAmazonPay(false);
  };
  const activatePaypal = () => {
    setVisaPay(false);
    setPayPal(true);
    setPayStack(false);
    setAmazonPay(false);
  };
  const activatePayStack = () => {
    setVisaPay(false);
    setPayPal(false);
    setPayStack(true);
    setAmazonPay(false);
  };
  const activateAmazonPay = () => {
    setVisaPay(false);
    setPayPal(false);
    setPayStack(false);
    setAmazonPay(true);
  };

  const paymentOptionDetails = [
    {
      name: "Card Payments",
      image: "../images/pm2.png",
      text:
        "express payment with a Visa Card, MasterCard, American Express and other cards.",
      state: visaPay,
      hoverState: hoverVisaPay,
      setHoverState: setHoverVisaPay,
      activeFunction: activateVisaPay,
    },
    {
      name: "PayStack",
      image: "../images/pm5.png",
      text:
        "Pay through direct bank transfer with Paystack, Available in Nigeria.",
      state: payStack,
      hoverState: hoverPayStack,
      setHoverState: setHoverPayStack,
      activeFunction: activatePayStack,
    },
    {
      name: "payPal",
      image: "../images/pm4.png",
      text:
        "Pay with paypal. You should have a Paypal account with funds above your bill.",
      state: payPal,
      hoverState: hoverPayPal,
      setHoverState: setHoverPayPal,
      activeFunction: activatePaypal,
    },
    {
      name: "amazonPay",
      image: "../images/pm1.png",
      text: "Pay with amazon and get express delivery.",
      state: amazonPay,
      hoverState: hoverAmazonPay,
      setHoverState: sethoverAmazonPay,
      activeFunction: activateAmazonPay,
    },
  ];

  const paymentOptions = paymentOptionDetails.map(
    ({
      name,
      image,
      text,
      state,
      hoverState,
      setHoverState,
      activeFunction,
    }) => (
      <PaymentSelectContainer
        key={name}
        state={state}
        onMouseLeave={() => setHoverState(false)}
        onMouseEnter={() => setHoverState(true)}
        onClick={activeFunction}
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
      <BackToShopContainer>
        <BackToShopFlex to="/checkout">
          <BackToShopIcon /> <CartChargeText>Back to Cart</CartChargeText>
        </BackToShopFlex>
        <BackToShopFlex to="/checkout/summary">
          <CartChargeText>Complete Payment</CartChargeText>
          <ContinueCheckoutIcon />
        </BackToShopFlex>
      </BackToShopContainer>
    </>
  );
}

export default CheckoutPayment;
