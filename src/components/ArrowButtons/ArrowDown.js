import styled from 'styled-components'
import {Link} from 'react-scroll'
import {colors} from "../constants"

export const ArrowDown = styled(Link)`
border-radius: 50%;
background: ${colors.green};
white-space: nowrap;
width: 2rem;
height: 2rem;
color: ${({dark}) => (dark? colors.black: colors.white)};
font-size: ${({fontbig}) => (fontbig? '1.5rem':'1rem')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
display: ${({hidden}) => (hidden?'none':'flex')};
text-decoration: none;
&:focus {
    outline: 2px solid ${colors.someHighContrastColor};
  }
`