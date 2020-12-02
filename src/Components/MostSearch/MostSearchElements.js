import styled from "styled-components";

export const MostSearchSection = styled.section`
  background: var(--lightTheme);
  color: var(--grayTheme);
  height: 220px;
  width: 100%;
  padding: 10px 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const SearchKeyWordsContainer = styled.div`
  display: Flex;
  flex-direction: column;
  flex: 0.7;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-evenly;
  box-sizing: border-box;
`;
export const KeyWordRow = styled.div`
  display: flex;
  align-items: center;
`;

export const MostSearchH2 = styled.h2`
  font-size: 20px;
  font-weight: bolder;
`;
export const MostSearchH3 = styled.h3`
  font-size: 16px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  padding: ${({ start }) => (start ? "0" : "8px")};
  border-right: ${({ end }) => (end ? "none" : "1px solid var(--grayTheme)")};
`;
