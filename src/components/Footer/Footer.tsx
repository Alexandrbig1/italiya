import { Container } from "../Layout";
import Logo from "../Logo/Logo";
import NeedHelp from "../NeedHelp/NeedHelp";
import {
  FooterContainer,
  FooterWrapper,
  FooterBottom,
  PrivacyWrapper,
  PrivacyLink,
  TermsLink,
  FooterText,
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
          <FooterText>©2024 Italiya. All rights reserved.</FooterText>
          <PrivacyWrapper>
            <PrivacyLink to="privacy">Privacy Policy</PrivacyLink> /
            <TermsLink to="terms">Terms of Service</TermsLink>
          </PrivacyWrapper>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
