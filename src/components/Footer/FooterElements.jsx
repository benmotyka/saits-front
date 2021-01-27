import styled from "styled-components"
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import {colors} from "../constants"

export const FooterContainer = styled.footer`
background-color: ${colors.black};
`

export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 820px){
    padding-top: 32px;
    justify-content: space-between;
}
`

export const FooterLinksWrapper = styled.div`
display: flex;


@media screen and (max-width: 820px){
justify-content: space-between;    
}
`

export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 1rem;
text-align: left;
width: 160px;
box-sizing: border-box;
color: ${colors.white};

@media screen and (max-width: 420px){
    margin: 0 15px;
    padding: 10px;
    width: 100%;
}
`

export const FooterLinkTitle = styled.h3`
font-size: 13px;
margin-bottom: 16px;
`

export const FooterLink = styled(LinkS)`
color: ${colors.white};
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
cursor: pointer;

&:hover{
    color: ${colors.green}; 
    transition: 0.3s ease-in-out;
}
`
export const FooterLinkExternal = styled.a`
color: ${colors.white};
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;

&:hover{
    color: ${colors.green}; 
    transition: 0.3s ease-in-out;
}
`

export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`

export const SocialLogo = styled(LinkR)`
color: ${colors.white};
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 1rem;
font-weight: bold;
`
export const WebsiteRights = styled.small`
color: ${colors.white};
margin-bottom: 1rem;
`

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`

export const SocialIconLink = styled.a`
color: ${colors.white};
font-size: 1.5rem;

&:hover{
    color: ${colors.green}; 
    transition: 0.3s ease-in-out;
}
`