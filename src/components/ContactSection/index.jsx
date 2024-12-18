import React, { useRef, useState } from "react";
import { Button } from "../Button/styles";
import { animateScroll as scroll } from "react-scroll";
import { sweetalert } from "../../common/functions/sweetalert.js";
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
} from "./styles";

import Map from "../Map/index";
import { ArrowDown } from "../ArrowButtons/ArrowDown";
import { AiOutlineArrowDown as ArrowDownIcon } from "react-icons/ai";
import { API_URL, HCAPTCHA_KEY } from "../../common/config";

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
    await fetch(`${API_URL}/saits/contact`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderEmail: values.email,
        subject: values.subject,
        message: values.message,
        captcha: token,
      }),
    });

    sweetalert("success", "Wiadomość wysłana!");
  };

  const sendMail = async (event) => {
    event.preventDefault();
    try {
      if (!EmailValidator.validate(values.email))
        return sweetalert("error", "Błędny email!");

      if (values.subject.length < 3)
        return sweetalert("error", "Błędny temat!");

      if (values.message.length < 5)
        return sweetalert("error", "Błędna treść!");

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
              <FormLabel htmlFor="emailInput">Email</FormLabel>
              <FormInput
                id="emailInput"
                value={values.email}
                onChange={set("email")}
              />
            </FormInputWrapper>
            <FormInputWrapper>
              <FormLabel htmlFor="subjectInput">Temat</FormLabel>
              <FormInput
                id="subjectInput"
                value={values.subject}
                onChange={set("subject")}
              />
            </FormInputWrapper>
            <FormInputMessageWrapper>
              <FormLabel htmlFor="messageInput">Treść</FormLabel>
              <FormMessageInput
                id="messageInput"
                value={values.message}
                onChange={set("message")}
              />
            </FormInputMessageWrapper>
            <FormInputWrapper>
              <HCaptcha
                sitekey={HCAPTCHA_KEY}
                onVerify={setToken}
                ref={captchaRef}
                aria-label="Weryfikacja bezpieczeństwa"
              />
            </FormInputWrapper>

            <FormButtonContainer>
              <Button dark="true" fontbig="true" onClick={sendMail}>
                Prześlij
              </Button>
            </FormButtonContainer>
          </FormWrapper>
        </FormContainer>
        <LocalizationContainer>
          <MapContainer role="presentation" aria-hidden="true">
            <Map />
          </MapContainer>{" "}
        </LocalizationContainer>
      </ContactSectionWrapper>
      <ArrowDown
        aria-label="Przejdź do stopki strony"
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
        <ArrowDownIcon />
      </ArrowDown>
    </ContactSectionContainer>
  );
}

export default ContactSection;
