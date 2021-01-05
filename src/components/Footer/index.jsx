import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinkExternal, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from "./FooterElements"

import { FaFacebook, FaDiscord, FaYoutube, FaInstagram } from 'react-icons/fa'

function Footer() {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Sekcje</FooterLinkTitle>
                            <FooterLink to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Home</FooterLink>
                            <FooterLink to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>O nas</FooterLink>
                            <FooterLink to="conference" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Konferencja</FooterLink>
                            <FooterLink to="projects" smooth={true} duration={500} spy={true} exact="true" offset={0}>Działalność</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLinkExternal target="_blank" href="https://www.facebook.com/SAITSPRz">Facebook</FooterLinkExternal>
                            <FooterLinkExternal target="_blank" href="https://www.instagram.com/saits.prz/">Instagram</FooterLinkExternal>
                            <FooterLinkExternal target="_blank" href="https://www.youtube.com/channel/UCoUdn059OkXrwJ8qHBlD9eA">YouTube</FooterLinkExternal>
                            <FooterLink target="_blank" href="https://discord.gg/QWtaJzweZd">Discord</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        {/* <FooterLinkItems>
                            <FooterLinkTitle>Partnerzy</FooterLinkTitle>
                            <FooterLinkExternal target="_blank" href="https://w.prz.edu.pl/">Politechnika Rzeszowska</FooterLinkExternal>
                            <FooterLinkExternal target="_blank" href="https://weii.prz.edu.pl/">WEiI PRz</FooterLinkExternal>
                        </FooterLinkItems> */}
                        <FooterLinkItems>
                            <FooterLinkTitle>Kontakt</FooterLinkTitle>
                            <FooterLinkExternal href="mailto:saits@prz.edu.pl">sasit@prz.edu.pl</FooterLinkExternal>
                            <FooterLinkExternal target="_blank" href="https://www.google.com/maps/place/Aleja+Powsta%C5%84c%C3%B3w+Warszawy+12,+35-959+Rzesz%C3%B3w/data=!4m2!3m1!1s0x473cfbb343ad0907:0xecdfcdf8b501fd15?sa=X&ved=2ahUKEwiT-qes04TuAhW-AxAIHdXgC8UQ8gEwAHoECAMQAQ">al. Powstańców Warszawy 12</FooterLinkExternal>
                            <FooterLinkExternal target="_blank" href="https://www.google.com/maps/place/Aleja+Powsta%C5%84c%C3%B3w+Warszawy+12,+35-959+Rzesz%C3%B3w/data=!4m2!3m1!1s0x473cfbb343ad0907:0xecdfcdf8b501fd15?sa=X&ved=2ahUKEwiT-qes04TuAhW-AxAIHdXgC8UQ8gEwAHoECAMQAQ">35-959 Rzeszów</FooterLinkExternal>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo onClick={toggleHome}>
                            SAITS
            </SocialLogo>
                        <WebsiteRights>
                            SAITS © {new Date().getFullYear()} wszelkie prawa zastrzeżone.
            </WebsiteRights>

                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/SAITSPRz" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/saits.prz/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com/channel/UCoUdn059OkXrwJ8qHBlD9eA" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="https://discord.gg/QWtaJzweZd" target="_blank" aria-label="Discord">
                                <FaDiscord />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
