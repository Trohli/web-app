import React from "react";
import {
  ClosebySection,
  ClosebyHeading,
  Hrl,
  ClosebyH3,
} from "./ClosebyElements";

function ClosebyItems() {
  return (
    <>
      <ClosebySection>
        <ClosebyHeading>
          <Hrl />
          <ClosebyH3>Items Closeby</ClosebyH3>
          <Hrl />
        </ClosebyHeading>
      </ClosebySection>
    </>
  );
}

export default ClosebyItems;
