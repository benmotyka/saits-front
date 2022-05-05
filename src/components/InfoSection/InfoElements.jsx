import styled from "styled-components"
import {colors} from "../constants"

export const InfoContainer = styled.div`
min-height: 100vh;
color: ${colors.white};
background: ${({dark}) => (dark?colors.dark:colors.white)};

@media screen and (max-width: 768px){
padding: 100px 0;
} 
`

export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 1.5rem;
justify-content: center;
`

export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart?`'col2 col1'`:`'col1 col2'`)};

@media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
}
`
const Column = styled.div`
margin-bottom: 1rem;
padding: 0 1rem;
`

export const Column1 = styled(Column)`
grid-area: col1;
`

export const Column2 = styled(Column)`
grid-area: col2;
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`

export const TopLine = styled.p`
color: ${colors.green};
font-size: 1rem;
line-height: 1rem;
font-weight: 600;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 1rem;
`

export const Heading = styled.h1`
margin-bottom: 1.5rem;
font-size: 3rem;
line-height: 1.2;
font-weight: bold;

color: ${({dark}) => (dark?colors.black:colors.white)};

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 1rem;
line-height: 1.5rem;
color: ${({dark}) => (dark?colors.black:colors.white)};
`

export const BtnWrap = styled.div`
display: flex;
justify-content: space-between;
`

export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`
