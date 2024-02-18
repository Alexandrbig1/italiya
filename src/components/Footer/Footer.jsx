import { Container } from "../Layout";
import Logo from "../Logo/Logo";
import NeedHelp from "../NeedHelp/NeedHelp";
import {
  FooterContainer,
  FooterWrapper,
  FooterBottom,
  PrivacyWrapper,
} from "./Footer.styled";

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <FooterWrapper>
          <div>
            <Logo />
            <NeedHelp />
          </div>
        </FooterWrapper>
        <FooterBottom>
          <p>©2024 Italiya. All rights reserved.</p>
          <PrivacyWrapper>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </PrivacyWrapper>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
