import React, { useState } from "react";
import { Button } from "../Button/ButtonElements";
import { animateScroll as scroll } from "react-scroll";
import {sweetalert} from "../../common/functions/sweetalert.js"
import {validateEmailData} from "../../common/functions/validateEmailData.js"

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
  ContactSectionHeader,
  FormMessageInput,
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

  const [values, setValues] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const set = (field) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [field]: value }));
    };
  };

  const toogleFooter = () => {
    // eslint-disable-next-line no-restricted-globals
    scroll.scrollToBottom();
  };

  const sendFormData = async () => {
    // const response = await axios.post("/email", { values });

    //if response status = 200

    sweetalert("success", "Wiadomość wysłana!");
  };

  const sendMail = async (event) => {
    event.preventDefault();
    try {
      if (
        await validateEmailData(values.email, values.subject, values.message)
      ) {
        setValues({
          email: "",
          subject: "",
          message: "",
        });
        await sendFormData();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ContactSectionContainer id="contact">
      <ContactSectionHeader>Kontakt</ContactSectionHeader>
      <ContactSectionWrapper>
        <FormContainer>
          <FormWrapper>
            <FormInputWrapper>
              <FormLabel>Email</FormLabel>
              <FormInput value={values.email}
                  onChange={set("email")}/>
            </FormInputWrapper>
            <FormInputWrapper>
              <FormLabel>Temat</FormLabel>
              <FormInput           value={values.subject}
                  onChange={set("subject")}/>
            </FormInputWrapper>
            <FormInputMessageWrapper>
              <FormLabel>Treść</FormLabel>
              <FormMessageInput value={values.message}
                  onChange={set("message")} />
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
