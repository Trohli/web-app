import styled from "styled-components";

export const LeftNavBar = styled.div`
  background: var(--darkTheme);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  overflow: visible;
  width: 80px;
  height: 100vh;
  border-right: 2px solid var(--LightTheme);
`;
export const IconContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  height: 70%;
`;
