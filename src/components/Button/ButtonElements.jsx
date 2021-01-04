import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
border-radius: 3rem;
background: #00ab00;
white-space: nowrap;
padding: ${({big}) => (big?'0.8rem 2.4rem': '0.6rem 1.8rem')};
color: ${({dark}) => (dark? '#000': "#fff")};
font-size: ${({fontBig}) => (fontBig? '1.5rem':'1rem')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
display: ${({hidden}) => (hidden?'none':'flex')};
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    
}
`