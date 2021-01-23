import styled from "styled-components";
import { FaShip } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiInterceptorShip } from "react-icons/gi";

export const DashboHeadingContainer = styled.div`
  background: var(--subTheme);
  height: 25vh;
  width: 100%;
  color: var(--mainTheme);
  display: flex;
`;
export const HeadingText = styled.div`
  font-size: 40px;
  font-weight: bolder;
  width: 100%;
  max-width: 1150px;
  margin: 20px auto;
`;
export const ProcessContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  max-width: 900px;
  width: 100%;
  margin: -70px auto 20px auto;
`;
export const ProcessContent = styled.div`
  width: 100%;
  background: ${({ active }) => (active ? "var(--lightGreen)" : "#fff")};
  height: 140px;
  border-radius: 4px;
  padding: 15px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const ProcessIconContainer = styled.div`
  padding: 10px;
  border-radius: 999px;
  width: 40px;
  color: var(--subTheme);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--mainTheme);
`;
export const ProcessText = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: var(--mainTheme);
`;
export const ShipIcon = styled(FaShip)`
  font-size: 40px;
`;
export const DeiverIcon = styled(GiInterceptorShip)`
  font-size: 40px;
`;
export const PaidIcon = styled(GiTakeMyMoney)`
  font-size: 40px;
`;

export const AdvertBar = styled.div`
  width: 100%;
  max-width: 1000px;
  border-radius: 5px;
  margin: 0 auto 20px auto;
  height: 10vh;
  padding: 10px 40px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  background: url("images/open.jpg") no-repeat center center/cover;
`;
export const AdvertCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;
export const AdvertCount = styled.h2`
  font-size: 40px;
  color: #fff;
`;
export const AdvertDiscount = styled.h3`
  font-size: 36px;
  color: var(--subTheme);
`;
export const AdvertDate = styled.h4`
  font-size: 34px;
  color: #fff;
`;
