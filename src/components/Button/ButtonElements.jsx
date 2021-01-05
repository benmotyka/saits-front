import styled from 'styled-components'
import {Link} from 'react-scroll'
import {colors} from "../constants"

export const Button = styled(Link)`
border-radius: 2rem;
background: ${colors.green};
white-space: nowrap;
padding: ${({big}) => (big?'0.7rem 1.3rem': '0.6rem 1.8rem')};
color: ${({dark}) => (dark? colors.black: colors.white)};
font-size: ${({fontbig}) => (fontbig? '1.3rem':'1rem')};
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
    background: ${colors.white};
    border: 1px solid ${colors.green};
}
`