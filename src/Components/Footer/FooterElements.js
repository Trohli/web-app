import styled from "styled-components";
import { BiMailSend } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { RiYoutubeFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";

export const FooterSection = styled.section`
  background: var(--darkTheme);
  color: var(--lightTheme);
  height: 100%;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterTop = styled.div`
  display: flex;
  height: 100%;
`;

export const FooterTopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  padding: 15px 30px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FooterColunm = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
`;
export const FooterLetter = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;
`;
export const FooterRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const FooterFlex = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
`;
export const FooterImg = styled.img`
  height: 20px;
  object-fit: contain;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;
export const NewsletterForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 100%;
  border-radius: 7px;
  background: var(--lightTheme);
`;
export const NewsLetterInput = styled.input`
  background: transparent;
  border: none;
  height: 90%;
  flex: 0.8;
  padding: 0 15px;
  font-size: 15px;
  box-sizing: border-box;
  width: 100%;

  &:focus {
    outline: none;
  }
`;
export const IconContainer = styled.div`
  background: var(--subTheme);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 0 7px 7px 0;
  flex: 0.2;
`;
export const MailingIcon = styled(BiMailSend)`
  font-size: 25px !important;
  color: var(--lightTheme) !important;
`;
export const FaceBookIcon = styled(RiFacebookFill)`
  font-size: 20px !important;
  color: var(--lightTheme) !important;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;
export const InstagramIcon = styled(AiFillInstagram)`
  font-size: 20px !important;
  color: var(--lightTheme) !important;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;
export const TwitterIcon = styled(FaTwitter)`
  font-size: 20px !important;
  color: var(--lightTheme) !important;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;
export const YouTubeIcon = styled(RiYoutubeFill)`
  font-size: 20px !important;
  color: var(--lightTheme) !important;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;

export const Footerdiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterButtom = styled.div`
  background: var(--subgrayTheme);
  height: 40px;
`;

export const FooterButtomContent = styled.div`
  box-sizing: border-box;
  padding: 9px 15px;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const FooterH3 = styled.h3`
  font-size: ${({ big }) => (big ? "16px" : "14px")};
  font-weight: ${({ bold }) => (bold ? "bolder" : "normal")};
  cursor: normal;
`;
