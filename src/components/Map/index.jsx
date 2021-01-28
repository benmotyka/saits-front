import React from "react";
import {colors} from "../constants"

function Map() {
  return <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2176.6286651659107!2d21.987039737928985!3d50.019166467918524!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfbae554b096b%3A0xfb1f78d1a4df278d!2sRzesz%C3%B3w%20University%20of%20Technology!5e0!3m2!1sen!2spl!4v1611872337231!5m2!1sen!2spl" style={{width: "100%", height: "100%", border: `2px solid ${colors.green}`, borderRadius: "30px"}}></iframe>;
}

export default Map;

