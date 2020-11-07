import React from "react";
import {
  FlexColumn,
  FlexContainer,
  HA,
  Hrl,
  VideoPlayer,
  HB,
  Buttons,
} from "./GenComponents";

function HeroVideo({
  Url,
  HAText,
  HATextI,
  HBText,
  HBTextI,
  HBSpan,
  BtnText,
  HBState,
  HBSpanState,
  HAState,
}) {
  return (
    <>
      <FlexContainer>
        <VideoPlayer url={Url} />
        <FlexColumn>
          <HA strong={HAState}>
            {HAText} <br /> {HATextI}
          </HA>
          <HB strong={HBState}>
            {HBText} <br /> {HBTextI}
            <span>
              <HB strong={HBSpanState}> {HBSpan} </HB>
            </span>
          </HB>
          <Buttons lightBg> {BtnText} </Buttons>
        </FlexColumn>
      </FlexContainer>
      <Hrl lightBg={true} />
    </>
  );
}

export default HeroVideo;
