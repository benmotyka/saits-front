import EmailValidator from "email-validator";
import { sweetalert } from "./sweetalert.js";

export const validateEmailData = async (email, subject, message) => {
  if (EmailValidator.validate(email)) {
    if (subject !== "") {
      if (message !== "") {
        return true;
      } else {
        sweetalert("error", "Błędna treść!");
      }
    } else {
      sweetalert("error", "Błędny temat!");
    }
  } else {
    sweetalert("error", "Błędny email!");
  }
};