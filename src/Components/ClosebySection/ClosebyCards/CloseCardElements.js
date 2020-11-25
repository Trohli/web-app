import styled from "styled-components";

export const Card = styled.div`
  background: var(--lightTheme);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 250px;
  width: 220px;
  margin: 0 5px;
  padding: 5px;
`;
export const CardImg = styled.img`
  width: 210px;
  height: 200px;
`;
export const CardText = styled.h4`
  font-size: 18px;
  font-weight: 5px;
`;
export const CardM = styled.p`
  font-size: 15px;
`;
