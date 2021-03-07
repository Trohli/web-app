import styled from "styled-components";

export const CheckoutHeadingContainer = styled.div`
  background: var(--mainTheme);
  height: 22vh;
  width: 100%;

  @media screen and (max-width: 1024px) {
    height: 12vh;
  }
  @media screen and (max-width: 768px) {
    height: 15vh;
  }
  @media screen and (max-width: 540px) {
    height: 20vh;
  }
`;

export const CheckoutHeadingContent = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
`;

export const CheckoutLinksContainer = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  margin-top: -18px;
  padding: 0 25px;
  box-sizing: border-box;

  @media screen and (max-width: 540px) {
    justify-content: space-between;
  }
`;
export const CheckoutLinksContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 15px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: bold;
  background: var(--lightGray);
  color: var(--mainTheme);
  border-radius: 28px;
  margin-right: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
  }
  @media screen and (max-width: 375px) {
    margin: 0;
    font-size: 12px;
  }
  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;

export const CheckoutHeadingText = styled.h2`
  color: var(--lightTheme);
  font-size: 55px;
  font-weight: bold;

  @media screen and (max-width: 320px) {
    font-size: 35px;
  }
`;
