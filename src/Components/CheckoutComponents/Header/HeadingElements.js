import styled from "styled-components";

export const CheckoutHeadingContainer = styled.div`
  background: var(--mainTheme);
  height: 25vh;
  width: 100%;
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
`;

export const CheckoutHeadingText = styled.h2`
  color: var(--lightTheme);
  font-size: 55px;
  font-weight: bold;
`;
