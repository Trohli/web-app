import styled from "styled-components";

export const ClosebySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: Space-between;
  height: 250px;
  width: 100%;
  margin-bottom: 20px;
`;

export const CardSection = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  box-sizing: border-box;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const CardBar = styled.div`
  height: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
`;

export const ClosebyHeading = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
export const ClosebyH3 = styled.div`
  font-size: 20px;
  font-weight: bolder;
  color: var(--mainTheme);
`;
export const Hrl = styled.hr`
  border-top: 2px solid var(--mainTheme);
  border-radius: 99px;
  margin: 0 25px;
  width: 100px;
`;
