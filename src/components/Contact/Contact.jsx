import { SocialIcon } from "react-social-icons";
import { Wrapper } from "./styles";

function Contact() {
  return (
    <Wrapper>
      <SocialIcon
        url="https://www.linkedin.com/in/sami-lieberman-609059125/"
        target="_blank"
        bgColor="#1c1c1a"
        style={{ height: 36, width: 36 }}
      />
      <SocialIcon
        url="https://github.com/samilieberman"
        target="_blank"
        bgColor="#1c1c1a"
        style={{ height: 36, width: 36 }}
      />
      <SocialIcon
        url="mailto:samilieberman1@gmail.com"
        target="_blank"
        bgColor="#1c1c1a"
        style={{ height: 36, width: 36 }}
      />
    </Wrapper>
  );
}
export default Contact;
