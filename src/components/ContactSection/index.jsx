import React, { useRef, useState } from "react";
import { Button } from "../Button/ButtonElements";
import { animateScroll as scroll } from "react-scroll";
import {sweetalert} from "../../common/functions/sweetalert.js"
import HCaptcha from "@hcaptcha/react-hcaptcha";
import EmailValidator from "email-validator";

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

const apiUrl = 'https://saits-api.herokuapp.com'
const HCAPTCHA_KEY = '4c06a02d-4657-4f09-89d8-a6eb83b3a244'
// dev 
// const apiUrl = 'http://localhost:3001'
// const HCAPTCHA_KEY = '10000000-ffff-ffff-ffff-000000000001'

function ContactSection() {
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);
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
    await fetch(`${apiUrl}/saits/contact`, {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        senderEmail: values.email,
        subject: values.subject,
        message: values.message,
        captcha: token
      })
    });
  
    sweetalert("success", "Wiadomość wysłana!");
  };

  const sendMail = async (event) => {
    event.preventDefault();
    try {
      if (!EmailValidator.validate(values.email)) return sweetalert("error", "Błędny email!");

      if (values.subject.length < 3) return sweetalert("error", "Błędny temat!");

      if (values.message.length < 5) return sweetalert("error", "Błędna treść!");

      if (!token) return sweetalert("error", "Wypełnij CAPTCHA!");

      setValues({
        email: "",
        subject: "",
        message: "",
      });
      await sendFormData();
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
              <FormInput value={values.subject}
                  onChange={set("subject")}/>
            </FormInputWrapper>
            <FormInputMessageWrapper>
              <FormLabel>Treść</FormLabel>
              <FormMessageInput value={values.message}
                  onChange={set("message")} />
            </FormInputMessageWrapper>
            <FormInputWrapper>
            <HCaptcha
              sitekey={HCAPTCHA_KEY}
              onVerify={setToken}
              ref={captchaRef}
            />
            </FormInputWrapper>

            <FormButtonContainer>
              <Button dark="true" fontbig="true" onClick={sendMail} >
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
        style={{ margin: "100px auto 0 auto" }}
      >
        <ArrowDownIcon></ArrowDownIcon>
      </ArrowDown>
    </ContactSectionContainer>
  );
}

export default ContactSection;
