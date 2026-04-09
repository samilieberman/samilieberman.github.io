import { SocialIcon } from "react-social-icons";
import { useTheme } from "styled-components";
import { Wrapper } from "./styles";

function Contact() {
  const theme = useTheme();
  const isDark = theme.mode === "dark";
  const bgColor = isDark ? "#e6e4dc" : "#1c1c1a";
  const fgColor = isDark ? "#1c1c1a" : "#ffffff";

  return (
    <Wrapper>
      <SocialIcon
        url="https://www.linkedin.com/in/sami-lieberman-609059125/"
        target="_blank"
        bgColor={bgColor}
        fgColor={fgColor}
        style={{ height: 36, width: 36 }}
      />
      <SocialIcon
        url="https://github.com/samilieberman"
        target="_blank"
        bgColor={bgColor}
        fgColor={fgColor}
        style={{ height: 36, width: 36 }}
      />
      <SocialIcon
        url="mailto:samilieberman1@gmail.com"
        target="_blank"
        bgColor={bgColor}
        fgColor={fgColor}
        style={{ height: 36, width: 36 }}
      />
    </Wrapper>
  );
}
export default Contact;
