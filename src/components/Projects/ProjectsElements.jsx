import styled from "styled-components"
import {colors} from "../constants"


export const ProjectsContainer = styled.div`

height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: ${colors.black};

@media screen and (max-width: 768px){
    height: 1100px;
}

@media screen and (max-width: 480px){
    height: 1300px;
}
`

export const ProjectsH1 = styled.h2`
font-size: 2rem;
color: ${colors.white};
margin-bottom: 30px;

@media screen and (max-width: 480px){
    font-size: 1.5rem;
}
`

export const ProjectsWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 1rem;
padding: 0 50px;
margin-bottom: 1.5rem;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns:  1fr;
    padding: 0 20px;
}
`

export const ProjectsCard = styled.div`
background: ${colors.white};
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 2px 2px rgba(0,0,0,0.3);
transition: all 0.2s ease-in-out;

&:hover{
transform: scale(1.02);
transition: all 0.2s ease-in-out;
cursor: pointer;
}
`

export const ProjectsLogo= styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`

export const ProjectsH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`

export const ProjectsP = styled.p`
font-size: 1rem;
text-align: center;`