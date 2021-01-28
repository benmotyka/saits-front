import styled from 'styled-components'
import {colors} from "../constants"


export const ContactSectionContainer = styled.div`
background: ${colors.white};
height: 100vh;
padding: 60px;
width: 100%;
@media screen and (max-width: 768px){
    padding: 60px 10px;;
    height: 120vh;
}
`

export const ContactSectionHeader = styled.h2`
font-size: 55px;
display: flex;
justify-content: center;
text-align: center;
margin-bottom: 50px;

@media screen and (max-width: 768px){
font-size: 30px;
margin-bottom: 10px;
}
`
export const ContactSectionWrapper = styled.div`
display: grid;
grid-template-columns: 1fr  1fr;
z-index: 1;
width: 100%;
height: 400px;
padding: 0 80px;

@media screen and (max-width: 768px){
grid-template-columns: 1fr ;
    width: 100%;
    padding: 0;
height: 600px;
}
`

export const FormContainer = styled.div`
`

export const FormWrapper = styled.div`
display: flex;
justify-content: space-evenly;
flex-direction: column;
height: 100%;
`

export const FormInputWrapper = styled.div`
display: flex;
justify-content: space-between;
height: 75px;
flex-direction: column;
text-align: center;
padding: 0 100px;

@media screen and (max-width: 768px){
padding: 0;
}

`

export const FormInput = styled.input`

height: 40px;
border-radius: 15px;
border: 1px solid green;
padding: 10px;
outline: none;
font-size: 16px;

`

export const FormLabel = styled.label`
font-weight: bold;
font-size: 25px;
`

export const FormInputMessageWrapper = styled(FormInputWrapper)`
justify-content: space-evenly;
height: 150px;

`

export const LocalizationContainer = styled.div`

`

export const MapContainer = styled.div`
width: 100%;
height: 100%;
`


export const FormMessageInput = styled.textarea`
border-radius: 15px;
border: 1px solid green;
padding: 10px;
outline: none;
font-size: 16px;
height: 100px;
overflow: hidden;

resize: none;
`

export const FormButton = styled.button`
width: 100px;
height: 50px;
font-size: 25px;
margin: 10px;
background-color: ${colors.green};
border-radius: 20px;
color: ${colors.white};
font-weight: normal;
outline: none;
`

export const FormButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

