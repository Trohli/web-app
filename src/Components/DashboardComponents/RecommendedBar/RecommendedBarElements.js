import styled from "styled-components";

export const RecommendedBarContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 10px auto 20px auto;
  background: #fff;
  height: 30vh;
  border-radius: 5px;
`;

export const RecommendedContentContainer = styled.div`
  max-width: 1100px;
  width: 90%;
  padding: 10px 0;
  box-sizing: border-box;
  display: grid;
  grid-gap: 20px;
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
export const RecommendedGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  grid-gap: 25px;
  height: 20vh;
`;
export const RecommendedGridContent = styled.div`
  background: var(--lightTheme);
  height: 100%;
  border-radius: 5px;
`;
