import { Container } from "../Layout";
import Logo from "../Logo/Logo";
import Theme from "../Theme/Theme";
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderMenuWrapper,
  SignIn,
  SignUp,
  HeaderMenuText,
} from "./Header.styled";

function Header({ toggleTheme }) {
  return (
    <HeaderContainer>
      <Container>
        <HeaderWrapper>
          <Logo />
          <HeaderMenuWrapper>
            <HeaderMenuText>About</HeaderMenuText>
            <HeaderMenuText>Gallery</HeaderMenuText>
            <Theme toggleTheme={toggleTheme} />
            <SignIn>Sign In</SignIn>
            <SignUp>Sign Up</SignUp>
          </HeaderMenuWrapper>
        </HeaderWrapper>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
