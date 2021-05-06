import React from "react";
import { SocialIcon } from "react-social-icons";
import { Wrapper } from "./styles";

function Contact() {
  return (
    <Wrapper>
      <SocialIcon
        url="https://www.linkedin.com/in/sami-lieberman-609059125/"
        target="_blank"
        bgColor="white"
      />
      <SocialIcon
        url="https://github.com/samilieberman"
        target="_blank"
        bgColor="white"
      />
      <SocialIcon
        url="mailto:samilieberman1@gmail.com"
        target="_blank"
        bgColor="white"
      />
    </Wrapper>
  );
}
export default Contact;
