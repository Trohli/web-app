import React from "react";
import {
  RecommendedBarContainer,
  RecommendedTextcontainer,
  RecommendedContentContainer,
  RecommendedText,
  Hrl,
  RecommendedGridContainer,
  RecommendedGridContent,
} from "./RecommendedBarElements";

function RecommendedBar() {
  return (
    <>
      <RecommendedBarContainer>
        <RecommendedContentContainer>
          <RecommendedTextcontainer>
            <RecommendedText>Recommended For You</RecommendedText>
            <Hrl />
          </RecommendedTextcontainer>
          <RecommendedGridContainer>
            <RecommendedGridContent>grid content</RecommendedGridContent>
            <RecommendedGridContent>grid content</RecommendedGridContent>
            <RecommendedGridContent>grid content</RecommendedGridContent>
          </RecommendedGridContainer>
        </RecommendedContentContainer>
      </RecommendedBarContainer>
    </>
  );
}

export default RecommendedBar;
