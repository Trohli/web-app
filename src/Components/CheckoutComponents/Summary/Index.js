import React from "react";
import {
  SummaryContainer,
  SummaryContentContainer,
  SmallText,
  BgText,
  MidText,
  ContactInfoContainer,
  ContactInfoContent,
  PhoneIcon,
  MailIcon,
  PaymentSummaryContainer,
  SummaryText,
  SummaryHeading,
  BackToShopFlex,
  BackToShopContainer,
  ContinueCheckoutIcon,
  BackToShopIcon,
  CartChargeText,
  BackToShopText,
} from "./SummaryElements";

function CheckoutSummary() {
  return (
    <>
      <SummaryContainer>
        <SummaryContentContainer>
          <SummaryHeading>
            <SmallText>Hi skyboy, Congratulations!!</SmallText>
            <BgText>Payment Successful!!</BgText>
            <MidText>Total: $7,560</MidText>
            <ContactInfoContainer>
              <ContactInfoContent>
                <PhoneIcon />
                <SmallText>+2347015688584</SmallText>
              </ContactInfoContent>
              <ContactInfoContent>
                <MailIcon />
                <SmallText>codexpath3@gmail.com</SmallText>
              </ContactInfoContent>
            </ContactInfoContainer>
          </SummaryHeading>
          <PaymentSummaryContainer>
            <SummaryText top>
              Payment Details: Card Payment -- 1122*********433
            </SummaryText>
            <SummaryText>
              Shipping Address: 12 Ikorodu Street Ikeja Lagos
            </SummaryText>
            <SummaryText>Shipping Speed: very fast,</SummaryText>
            <SummaryText>Items Cost: $740.99,</SummaryText>
            <SummaryText>Delivery Cost: $33.44,</SummaryText>
            <SummaryText>Tracking Id: 12j124nbb1l41n,</SummaryText>
          </PaymentSummaryContainer>
          <SummaryText top>
            You have completed your order. You can track them now on your
            dashboard.
          </SummaryText>
        </SummaryContentContainer>
      </SummaryContainer>
      <BackToShopContainer>
        <BackToShopFlex to="/">
          <BackToShopIcon /> <BackToShopText>Continue Shopping</BackToShopText>
        </BackToShopFlex>
        <BackToShopFlex to="/dashboard">
          <BackToShopText>Track order</BackToShopText>
          <ContinueCheckoutIcon />
        </BackToShopFlex>
      </BackToShopContainer>
    </>
  );
}

export default CheckoutSummary;
