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
            <HeaderMenuText to="/italiya/">About</HeaderMenuText>
            <HeaderMenuText to="products">Products</HeaderMenuText>
            <Theme toggleTheme={toggleTheme} />
            <SignIn to="signin">Sign In</SignIn>
            <SignUp to="signup">Sign Up</SignUp>
          </HeaderMenuWrapper>
        </HeaderWrapper>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
