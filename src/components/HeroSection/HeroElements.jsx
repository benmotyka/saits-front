import styled from 'styled-components'
import {BsBoxArrowInUpRight, BsBoxArrowUpRight} from "react-icons/bs"
import {colors} from "../constants"

export const HeroContainer = styled.div`
background: ${colors.black};
display: flex;
justify-content: center;
align-items: center;
padding: 0 25px;
height: 98vh;//100vh normally, but somehow doesn't work on fhd 15.6 screens
position: relative;
z-index: 1;

//make it a little darker
:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.3), 0%, rgba(0,0,0,0.7) 100%);
    z-index: 2; 
}
`

export const HeroBg = styled.div`
//expand heroBg to full screen
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
//maintain aspect ratio but crop video
--o-object-fit: cover; 
object-fit: cover;
background: ${colors.darkGreen};
`

export const HeroContent = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
max-width: 1200px;
padding: 8px 24px;
z-index: 3;
`

export const HeroH1 = styled.h1`
color: ${colors.white};
font-size: 3.5rem;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 2.5rem;
}

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`

export const HeroP = styled.p`
margin: 1.6rem 0;
color: ${colors.white};
font-size: 2.5rem;
text-align: center;
max-width: 600px;
@media screen and (max-width: 768px){
    font-size: 2rem;
}

@media screen and (max-width: 480px){
    font-size: 1.5rem;
}
`

export const HeroBtnWrapper = styled.div`
margin-top: 2rem;
display: flex;
flex-direction: column;
align-items: center;
`

export const ArrowForward = styled(BsBoxArrowUpRight)`
margin-left: 0.5rem;
font-size: 1.4rem;
`

export const ArrowRight = styled(BsBoxArrowInUpRight)`
margin-left: 0.5rem;
font-size: 1.4rem;
`
