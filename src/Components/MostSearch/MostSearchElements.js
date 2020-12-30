import styled from "styled-components";

export const MostSearchSection = styled.section`
  background: var(--lightTheme);
  color: var(--grayTheme);
  height: 100%;
  width: 100%;
  padding: 15px 60px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
`;
export const SearchKeyWordsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
  width: 100%;
`;
export const KeyWordRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const MostSearchH2 = styled.h2`
  font-size: 20px;
  font-weight: bolder;
`;
export const MostSearchH3 = styled.h3`
  font-size: ${({ bold }) => (bold ? "16px" : "14px")};
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  padding: ${({ start }) => (start ? "0" : "0 8px")};
  border-right: ${({ end }) => (end ? "none" : "1px solid var(--grayTheme)")};
`;
