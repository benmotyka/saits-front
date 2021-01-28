import React, { useState } from "react";
import { Button } from "../Button/ButtonElements";
import { animateScroll as scroll } from "react-scroll";
import Swal from "sweetalert2";

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
} from "./ContactSectionElements";

import Map from "../Map/index";
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

  const sendMail = async () => {
    //todo validate entries
    //todo async func send email topic message through email
    await Swal.fire({
      icon: "success",
      title: "Wiadomość wysłana!",
      showConfirmButton: false,
      timer: 2000,
    });
    window.location.reload(false);
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
              <FormInput />
            </FormInputWrapper>
            <FormInputMessageWrapper>
              <FormLabel>Treść</FormLabel>
              <FormMessageInput required="true" />
            </FormInputMessageWrapper>
            <FormButtonContainer>
              <Button dark="true" fontbig="true" onClick={sendMail}>
                Prześlij
              </Button>
            </FormButtonContainer>
          </FormWrapper>
        </FormContainer>
        <LocalizationContainer>
          <MapContainer><Map></Map></MapContainer>
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
        style={{ margin: "20px auto 0 auto" }}
      >
        <ArrowDownIcon></ArrowDownIcon>
      </ArrowDown>
    </ContactSectionContainer>
  );
}

export default ContactSection;
