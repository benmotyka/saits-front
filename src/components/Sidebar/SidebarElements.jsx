import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import {FaTimes} from 'react-icons/fa'
import {colors} from "../constants"

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 100;
width: 100%;
height: 100%;
background: ${colors.black};
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen? '100%':'0')};
top: ${({isOpen}) => (isOpen? '0': '-100%')};
`

export const CloseIcon = styled(FaTimes)`
color: ${colors.white};
`
export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SidebarWrapper = styled.div`
color: ${colors.white};
`

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5,100px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(5,100px);
}
`

export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 2rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
font-weight: bold;
color: ${colors.white};
cursor: pointer;

&:hover{
    color: ${colors.green};
    transition: 0.2s ease-in-out;
}
`

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
border-radius: 25px;
background: ${colors.green};
white-space: nowrap;
padding: 16px 64px;
color: ${colors.black};
font-size: 1rem;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: ${colors.white};
    color: ${colors.black};
}
`
