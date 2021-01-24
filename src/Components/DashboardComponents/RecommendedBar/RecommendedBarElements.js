import styled from "styled-components";

export const RecommendedBarContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 10px auto 20px auto;
  background: #fff;
  height: 30vh;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RecommendedContentContainer = styled.div`
  max-width: 1200px;
  width: 95%;
  padding: 10px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 90%;
  margin: 0 auto;
`;
export const RecommendedTextcontainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const RecommendedText = styled.h2`
  font-size: 25px;
  font-weight: bold;
  color: var(--mainTheme);
  margin-right: 15px;
`;
export const Hrl = styled.hr`
  flex: 1;
  border-bottom: 2px solid var(--mainTheme);
  font-weight: bold;
`;
export const RecommendedFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
`;
