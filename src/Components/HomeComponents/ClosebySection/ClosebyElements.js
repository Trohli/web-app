import styled from "styled-components";
import { MdAddShoppingCart } from "react-icons/md";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export const ClosebySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: max-content;
  width: 100%;
  margin-bottom: 20px;
`;

export const CardSection = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
  align-items: center;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CardBar = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
`;

export const Card = styled.div`
  background: var(--lightTheme);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 180px;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 4px;

  @media screen and (max-width: 320px) {
    height: 140px;
  }
`;
export const CardButtomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5px;
  box-sizing: border-box;
`;
export const LikeIcon = styled(FavoriteBorderIcon)`
  font-size: 30px !important;
  color: var(--mainTheme) !important;

  @media screen and (max-width: 786px) {
    font-size: 25px !important;
  }
  @media screen and (max-width: 540px) {
    font-size: 20px !important;
  }
  @media screen and (max-width: 414px) {
    font-size: 18px !important;
  }
  @media screen and (max-width: 375px) {
    font-size: 16px !important;
  }
  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;
export const CardImg = styled.img`
  width: 100%;
  height: 120px;
  border-radius: 4px;

  // @media screen and (max-width: 414px) {
  //   font-size: 20px;
  // }
  // @media screen and (max-width: 375px) {
  //   font-size: 18px;
  // }
  @media screen and (max-width: 320px) {
    height: 85px;
  }
`;
export const CardText = styled.h4`
  font-size: 18px;
  font-weight: 5px;
  color: var(--mainTheme);

  // @media screen and (max-width: 414px) {
  //   font-size: 20px;
  // }
  // @media screen and (max-width: 375px) {
  //   font-size: 18px;
  // }
  @media screen and (max-width: 320px) {
    font-size: 16px;
  }
`;
export const CardPrice = styled.h5`
  font-size: 16px;
  font-weight: 2px;
  color: var(--mainTheme);
  position: absolute;
  top: 10px;
  left: 10px;

  // @media screen and (max-width: 414px) {
  //   font-size: 20px;
  // }
  // @media screen and (max-width: 375px) {
  //   font-size: 18px;
  // }
  @media screen and (max-width: 320px) {
    font-size: 14px;
    top: 5px;
    left: 5px;
  }
`;
export const CardM = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: var(--mainTheme);
`;

export const ClosebyHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ClosebyH3 = styled.div`
  font-size: 20px;
  font-weight: bolder;
  color: var(--mainTheme);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: bolder;

  @media screen and (max-width: 520px) {
    font-size: 16px;
  }
  @media screen and (max-width: 414px) {
    font-size: 15px;
  }
  @media screen and (max-width: 375px) {
    font-size: 14px;
  }
`;
export const Hrl = styled.hr`
  border-top: 2px solid var(--mainTheme);
  margin: 0 25px;
  width: 100px;

  @media screen and (max-width: 414px) {
    width: 60px;
  }
  @media screen and (max-width: 375px) {
    width: 50px;
  }
  @media screen and (max-width: 320px) {
    width: 40px;
  }
`;

export const AddCartIconContainer = styled(IconButton)`
  position: absolute !important;
  top: 0px !important;
  right: 0px !important;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.02);
  }

  // @media screen and (max-width: 414px) {
  //   font-size: 20px;
  // }
  // @media screen and (max-width: 375px) {
  //   font-size: 18px;
  // }
  @media screen and (max-width: 320px) {
    padding: 6px !important;
  }
`;
export const AddCartIcon = styled(MdAddShoppingCart)`
  font-size: 18px !important;
  color: var(--mainTheme);
  font-weight: bolder;

  // @media screen and (max-width: 414px) {
  //   font-size: 20px;
  // }
  // @media screen and (max-width: 375px) {
  //   font-size: 18px;
  // }
  @media screen and (max-width: 320px) {
    font-size: 14px !important;
  }
`;
