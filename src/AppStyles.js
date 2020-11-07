import styled from "styled-components";

export const AppComponent = styled.div`
  background: ${({ lightBg }) =>
    lightBg ? "var(--LightTheme)" : "var(--darkTheme)"};
  color: ${({ lightBg }) =>
    lightBg ? "var(--darkTheme)" : "var(--LightTheme)"};
  display: flex;
  height: 100vh;
  position: relative;
`;

export const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  align-items: center;
  padding: 10px;
`;
