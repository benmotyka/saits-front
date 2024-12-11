import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLinkExternal,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./styles";
import { AiOutlineArrowUp as ArrowUpIcon } from "react-icons/ai";
import {
  FaFacebook,
  FaDiscord,
  FaYoutube,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { ArrowDown } from "../ArrowButtons/ArrowDown";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sekcje</FooterLinkTitle>
              <FooterLink
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                aria-label="Home"
              >
                Home
              </FooterLink>
              <FooterLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                aria-label="About Us"
              >
                O nas
              </FooterLink>
              <FooterLink
                to="conference"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                aria-label="Konferencja"
              >
                Konferencja
              </FooterLink>
              <FooterLink
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                aria-label="Działalność"
              >
                Działalność
              </FooterLink>
              <FooterLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                aria-label="Kontakt"
              >
                Kontakt
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLinkExternal
                target="_blank"
                href="https://www.facebook.com/SAITSPRz"
                aria-label="Facebook"
              >
                Facebook
              </FooterLinkExternal>
              <FooterLinkExternal
                target="_blank"
                href="https://www.instagram.com/saits.prz/"
                aria-label="Instagram"
              >
                Instagram
              </FooterLinkExternal>
              <FooterLinkExternal
                target="_blank"
                href="https://www.youtube.com/channel/UCoUdn059OkXrwJ8qHBlD9eA"
                aria-label="YouTube"
              >
                YouTube
              </FooterLinkExternal>
              <FooterLinkExternal
                target="_blank"
                href="https://discord.gg/QWtaJzweZd"
                aria-label="Discord"
              >
                Discord
              </FooterLinkExternal>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Kontakt</FooterLinkTitle>
              <FooterLinkExternal
                href="mailto:saits@prz.edu.pl"
                aria-label="Email"
              >
                sasit@prz.edu.pl
              </FooterLinkExternal>
              <FooterLinkExternal
                target="_blank"
                href="https://www.google.com/maps/place/Aleja+Powsta%C5%84c%C3%B3w+Warszawy+12,+35-959+Rzesz%C3%B3w/data=!4m2!3m1!1s0x473cfbb343ad0907:0xecdfcdf8b501fd15?sa=X&ved=2ahUKEwiT-qes04TuAhW-AxAIHdXgC8UQ8gEwAHoECAMQAQ"
                aria-label="Adres"
              >
                Wincentego Pola 2
              </FooterLinkExternal>
              <FooterLinkExternal
                target="_blank"
                href="https://www.google.com/maps/place/Aleja+Powsta%C5%84c%C3%B3w+Warszawy+12,+35-959+Rzesz%C3%B3w/data=!4m2!3m1!1s0x473cfbb343ad0907:0xecdfcdf8b501fd15?sa=X&ved=2ahUKEwiT-qes04TuAhW-AxAIHdXgC8UQ8gEwAHoECAMQAQ"
                aria-label="Adres"
              >
                35-021 Rzeszów
              </FooterLinkExternal>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo aria-label="Przewiń do góry strony">
              <ArrowDown
                onClick={toggleHome}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                exact="true"
                aria-label="Przewiń do góry strony"
              >
                <ArrowUpIcon />
              </ArrowDown>
            </SocialLogo>
            <WebsiteRights>
              SAITS © {new Date().getFullYear()} wszelkie prawa zastrzeżone.
            </WebsiteRights>

            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/SAITSPRz"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/saits.prz/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/channel/UCoUdn059OkXrwJ8qHBlD9eA"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://discord.gg/QWtaJzweZd"
                target="_blank"
                aria-label="Discord"
              >
                <FaDiscord />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/benmotyka/saits_front"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
