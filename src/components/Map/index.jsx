import React from "react";
import {colors} from "../constants"

function Map() {
  return <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929.7270015540688!2d21.984866753342857!3d50.02667202173806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfbaefe222183%3A0x6a590633671c25c4!2sWydzia%C5%82%20Elektrotechniki%20i%20Informatyki%20Politechniki%20Rzeszowskiej!5e1!3m2!1sen!2spl!4v1613586487965!5m2!1sen!2spl" style={{width: "100%", height: "100%", border: `2px solid ${colors.green}`, borderRadius: "30px"}}></iframe>;
}

export default Map;

