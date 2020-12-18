import React, { useState } from "react";
import {
  FooterSection,
  FooterTop,
  FooterTopContent,
  FooterTopGrid,
  FooterColunm,
  Footerdiv,
  FooterButtom,
  FooterButtomContent,
  FooterLetter,
  FooterFlex,
  FooterRow,
  NewsletterForm,
  NewsLetterInput,
  FaceBookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
  IconContainer,
  MailingIcon,
  FooterImg,
  FooterH3,
} from "./FooterElements";

function Footer() {
  const [dateTime] = useState(new Date());
  return (
    <>
      <FooterSection>
        <FooterTop>
          <FooterTopContent>
            <FooterTopGrid>
              <FooterColunm>
                <Footerdiv>
                  <FooterH3 big bold>
                    &copy; Trohli
                  </FooterH3>
                  <FooterH3 big bold>
                    Plot 233 Enugu, Nigeria
                  </FooterH3>
                  <FooterH3 big bold>
                    +2347015688584
                  </FooterH3>
                </Footerdiv>
                <Footerdiv>
                  <FooterH3 big bold>
                    About Us
                  </FooterH3>
                  <FooterH3 big bold>
                    Contact Us
                  </FooterH3>
                  <FooterH3 big bold>
                    Donate
                  </FooterH3>
                  <FooterH3 big bold>
                    Directions
                  </FooterH3>
                </Footerdiv>
              </FooterColunm>
              <FooterColunm>
                <Footerdiv>
                  <FooterH3 big bold>
                    &copy; Trohli
                  </FooterH3>
                  <FooterH3 big bold>
                    Plot 233 Enugu, Nigeria
                  </FooterH3>
                  <FooterH3 big bold>
                    +2347015688584
                  </FooterH3>
                </Footerdiv>
                <Footerdiv>
                  <FooterH3 big bold>
                    About Us
                  </FooterH3>
                  <FooterH3 big bold>
                    Contact Us
                  </FooterH3>
                  <FooterH3 big bold>
                    Donate
                  </FooterH3>
                  <FooterH3 big bold>
                    Directions
                  </FooterH3>
                </Footerdiv>
              </FooterColunm>
              <FooterColunm>
                <Footerdiv>
                  <FooterH3 big bold>
                    &copy; Trohli
                  </FooterH3>
                  <FooterH3 big bold>
                    Plot 233 Enugu, Nigeria
                  </FooterH3>
                  <FooterH3 big bold>
                    +2347015688584
                  </FooterH3>
                </Footerdiv>
                <Footerdiv>
                  <FooterH3 big bold>
                    About Us
                  </FooterH3>
                  <FooterH3 big bold>
                    Contact Us
                  </FooterH3>
                  <FooterH3 big bold>
                    Donate
                  </FooterH3>
                  <FooterH3 big bold>
                    Directions
                  </FooterH3>
                </Footerdiv>
              </FooterColunm>

              <FooterLetter>
                <Footerdiv>
                  <FooterH3 big bold>
                    Subscribe now
                  </FooterH3>
                  <FooterH3>
                    Contrary to popular belief of lorem ipsum latin amet ltin
                    from
                  </FooterH3>
                </Footerdiv>
                <Footerdiv>
                  <NewsletterForm>
                    <NewsLetterInput placeholder="Email" />
                    <IconContainer>
                      <MailingIcon />
                    </IconContainer>
                  </NewsletterForm>
                  <FooterRow>
                    <FooterFlex>
                      <FaceBookIcon />
                      <InstagramIcon />
                      <TwitterIcon />
                      <YouTubeIcon />
                    </FooterFlex>
                    <FooterFlex>
                      <FooterImg src="./images/google.jpg" />
                      <FooterImg src="./images/apple.jpg" />
                    </FooterFlex>
                  </FooterRow>
                </Footerdiv>
              </FooterLetter>
            </FooterTopGrid>
          </FooterTopContent>
        </FooterTop>
        <FooterButtom>
          <FooterButtomContent>
            <FooterH3 bold> &copy; {dateTime.getFullYear()} Trohli</FooterH3>
          </FooterButtomContent>
        </FooterButtom>
      </FooterSection>
    </>
  );
}

export default Footer;
