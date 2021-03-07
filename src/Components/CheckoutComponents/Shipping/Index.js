import React from "react";
import {
  ShipContainer,
  ShipFormContainer,
  SummaryContainer,
  FormElementContainer,
  ElementGrid,
  FlexPart,
  FlexHigh,
  FlexLow,
  ShippingFormInput,
  SmallFont,
  SizeSelect,
  SummaryHeading,
  SummaryText,
  SummaryGrid,
  SummaryFlex,
  SpaceFont,
  SpeedSelectContainer,
  SpeedSelect,
  BackToShopContainer,
  BackToShopFlex,
  CartChargeText,
  ContinueCheckoutIcon,
  BackToShopIcon,
  BackToShopText,
  SelectOption,
} from "./ShippingElements";

function CheckoutShipping() {
  return (
    <>
      <ShipContainer>
        <ShipFormContainer>
          <FormElementContainer>
            <SmallFont>E-mail</SmallFont>
            <ShippingFormInput placeholder="JohnWick@gmail.com" type="email" />
          </FormElementContainer>

          <ElementGrid duo>
            <FormElementContainer>
              <SmallFont>Name</SmallFont>
              <ShippingFormInput placeholder="John" type="text" />
            </FormElementContainer>
            <FormElementContainer>
              <SmallFont>Surname</SmallFont>
              <ShippingFormInput placeholder="Wick" type="text" />
            </FormElementContainer>
          </ElementGrid>

          <FlexPart>
            <FlexHigh>
              <FormElementContainer>
                <SmallFont>Adress 1</SmallFont>
                <ShippingFormInput
                  placeholder="2 streets lane ikorodu"
                  type="text"
                />
              </FormElementContainer>
            </FlexHigh>
            <FlexLow>
              <FormElementContainer>
                <SmallFont>Appartments?</SmallFont>
                <ShippingFormInput placeholder="first floor" type="text" />
              </FormElementContainer>
            </FlexLow>
          </FlexPart>

          <FormElementContainer>
            <SmallFont>Town/city</SmallFont>
            <ShippingFormInput placeholder="Lagos" type="text" />
          </FormElementContainer>

          <ElementGrid>
            <FormElementContainer>
              <SmallFont>Country</SmallFont>
              <SizeSelect>
                <SelectOption>Nigeria</SelectOption>
                <SelectOption>Ghana</SelectOption>
                <SelectOption>Malawi</SelectOption>
                <SelectOption>Usa</SelectOption>
              </SizeSelect>
            </FormElementContainer>
            <FormElementContainer>
              <SmallFont>ZIP</SmallFont>
              <ShippingFormInput placeholder="" type="" />
            </FormElementContainer>
            <FormElementContainer>
              <SmallFont>State</SmallFont>
              <SizeSelect>
                <SelectOption>Abuja</SelectOption>
                <SelectOption>Enugu</SelectOption>
                <SelectOption>Lagos</SelectOption>
                <SelectOption>Owerri</SelectOption>
              </SizeSelect>
            </FormElementContainer>
          </ElementGrid>
        </ShipFormContainer>
        <SummaryContainer>
          <SummaryHeading>Summary</SummaryHeading>
          <SummaryText>
            The total cost consist of the tax, insurance and the shipping
            charge.
          </SummaryText>
          <SpeedSelectContainer>
            <SmallFont>How fast should it go?</SmallFont>
            <SpeedSelect>
              <SelectOption>Normal</SelectOption>
              <SelectOption>fast</SelectOption>
              <SelectOption>very fast</SelectOption>
            </SpeedSelect>
          </SpeedSelectContainer>
          <SummaryGrid>
            <SummaryFlex>
              <SmallFont>Shipping</SmallFont>
              <SpaceFont>$23.99</SpaceFont>
            </SummaryFlex>
            <SummaryFlex>
              <SmallFont>Speed</SmallFont>
              <SpaceFont>$5.44</SpaceFont>
            </SummaryFlex>
            <SummaryFlex>
              <SmallFont>Insurance</SmallFont>
              <SpaceFont>$12.00</SpaceFont>
            </SummaryFlex>
          </SummaryGrid>
          <SummaryFlex last>
            <SummaryHeading>Shipping Rate:</SummaryHeading>
            <SummaryHeading>$12.00</SummaryHeading>
          </SummaryFlex>
        </SummaryContainer>
      </ShipContainer>
      <BackToShopContainer>
        <BackToShopFlex to="/checkout">
          <BackToShopIcon /> <BackToShopText>Back to Cart</BackToShopText>
        </BackToShopFlex>
        <BackToShopFlex to="/checkout/payment">
          <BackToShopText>Proceed to Payments</BackToShopText>
          <ContinueCheckoutIcon />
        </BackToShopFlex>
      </BackToShopContainer>
    </>
  );
}

export default CheckoutShipping;
