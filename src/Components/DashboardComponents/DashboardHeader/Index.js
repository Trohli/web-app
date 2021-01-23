import React from "react";
import { useState } from "react";
import {
  AdvertBar,
  DashboHeadingContainer,
  HeadingText,
  ProcessContainer,
  ProcessContent,
  ProcessIconContainer,
  ShipIcon,
  ProcessText,
  PaidIcon,
  DeiverIcon,
  AdvertCount,
  AdvertCountContainer,
  AdvertDiscount,
  AdvertDate,
} from "./HeaderElements";

function DashboardHeader() {
  const [isPaidActive, setisPaidActive] = useState(true);
  const [isShippedActive, setisShippedActive] = useState(false);
  const [isDeliverdActive, setisDeliverdActive] = useState(false);
  const process = [
    {
      text: "Paid",
      Icon: PaidIcon,
      State: isPaidActive,
    },
    {
      text: "Shipped",
      Icon: ShipIcon,
      State: isShippedActive,
    },
    {
      text: "Delivered",
      Icon: DeiverIcon,
      State: isDeliverdActive,
    },
  ];
  return (
    <>
      <DashboHeadingContainer>
        <HeadingText>Dashboard</HeadingText>
      </DashboHeadingContainer>
      <ProcessContainer>
        {process.map(({ text, Icon, State }) => (
          <ProcessContent key={text} active={State}>
            <ProcessIconContainer>
              <Icon />
            </ProcessIconContainer>
            <ProcessText>{text}</ProcessText>
          </ProcessContent>
        ))}
      </ProcessContainer>
      <AdvertBar>
        <AdvertCountContainer>
          <AdvertCount>50%</AdvertCount>
          <AdvertDiscount>Discount</AdvertDiscount>
        </AdvertCountContainer>
        <AdvertDate>09/05/2021</AdvertDate>
      </AdvertBar>
    </>
  );
}

export default DashboardHeader;
