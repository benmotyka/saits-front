import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import {
    ContactSectionContainer,
    ContactSectionWrapper,
    FormContainer,
    FormWrapper,
    FormInputWrapper,
    FormInput,
    FormLabel,
    FormInputMessageWrapper,
    LocalizationContainer,
    MapContainer,
    LocalizationTextContainer,
    ContactSectionHeader,
    FormMessageInput,
    FormButton,
    FormButtonContainer,
} from "./ContactSectionElements"

import { ArrowDown } from "../ArrowButtons/ArrowDown";
import { AiOutlineArrowDown as ArrowDownIcon } from "react-icons/ai";

function ContactSection() {

    const [hover, setHover] = useState(false);
    const onHover = () => {
      setHover(!hover);
    };

    const toogleFooter = () => {
        // eslint-disable-next-line no-restricted-globals
        scroll.scrollToBottom();
      };

    return (

        

        <ContactSectionContainer id="contact">
            <ContactSectionHeader>Skontaktuj się z nami!</ContactSectionHeader>
            <ContactSectionWrapper>
                <FormContainer>
                    <FormWrapper>
                        <FormInputWrapper>
                        <FormLabel>Email</FormLabel>
                        <FormInput />
                        </FormInputWrapper>
                        <FormInputWrapper>
                        <FormLabel>Temat</FormLabel>
                        <FormInput/>
                        </FormInputWrapper>
                        <FormInputMessageWrapper>
                        <FormLabel>Treść</FormLabel>
                        <FormMessageInput/>
                        </FormInputMessageWrapper>
                        <FormButtonContainer>
                        <FormButton>Prześlij</FormButton>
                        </FormButtonContainer>

                    </FormWrapper>

                </FormContainer>
                <LocalizationContainer>
                    <MapContainer>

                    </MapContainer>
                    <LocalizationTextContainer>

                    </LocalizationTextContainer>
                </LocalizationContainer>
            </ContactSectionWrapper>
            <ArrowDown
          onClick={toogleFooter}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          exact="true"
          style={{margin: "10px auto 0 auto"}}
        >
          <ArrowDownIcon></ArrowDownIcon>
        </ArrowDown>
        </ContactSectionContainer>
    )
}

export default ContactSection
