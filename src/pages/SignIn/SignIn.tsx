import Box from "@mui/material/Box";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FieldWrapper } from "../SignUp/SignUp.styled";
import emailRegex from "../../regex/emailRegex";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  BoxStyled,
  ButtonEl,
  ButtonStyled,
  ContainerStyled,
  EyeIconWrapper,
  LinkStyled,
  TextFieldStyled,
  TypoStyled,
  TypoTitleStyled,
  EyePasswordWrap,
  SignInErrorMessage,
  RegistrationLink,
  BtnLogInSpan,
} from "./SignIn.styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 550,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function Copyright(props) {
  return (
    <TypoStyled
      variant="body2"
      align="center"
      {...props}
      style={{ fontSize: "1rem" }}
    >
      {"Alex Smagin © "}
      <LinkStyled
        color="inherit"
        href="https://alexandrbig1.github.io/italiya/"
        target="_blank"
      >
        Italiya
      </LinkStyled>{" "}
      {new Date().getFullYear()}
      {"."}
    </TypoStyled>
  );
}

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const newErrors = {};

    if (email.trim().length === 0) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (password.length < 6 || password.length > 20) {
      newErrors.password = "Password must be between 6 and 20 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      dispatch(
        logIn({
          email,
          password,
        })
      );
      form.reset();
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Italiya - Sign In</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            property="og:url"
            content="https://alexandrbig1.github.io/italiya/"
          />
          <meta
            name="description"
            content="Sign in to Italiya's Whisker Wonders website and explore a world of cat-themed treasures."
          />
          <meta
            property="og:title"
            content="Italiya's Whisker Wonders - Sign In"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Sign in to Italiya's Whisker Wonders website and explore a world of cat-themed treasures."
          />
        </Helmet>
      </HelmetProvider>
      <ThemeProvider theme={customTheme}>
        <ContainerStyled>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.2rem",
            }}
          >
            <BoxStyled>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.4rem",
                  position: "relative",
                }}
              >
                <RegistrationLink to="/italiya/signup">
                  {/* <RegistrationLink href="signup" variant="body2"> */}
                  Sign Up
                </RegistrationLink>
                <TypoTitleStyled variant="h5">
                  {/* <TypoTitleStyled component="h1" variant="h5"> */}
                  Sign In
                </TypoTitleStyled>
                {/* <Google /> */}
              </Box>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                  mt: 2,
                  width: { sm: "376px", xs: "312px" },
                }}
              >
                <FieldWrapper>
                  <TextFieldStyled
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    placeholder="Enter your email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    error={errors.email ? true : false}
                  />
                  {errors.email && (
                    <SignInErrorMessage>{errors.email}</SignInErrorMessage>
                  )}
                </FieldWrapper>

                <EyePasswordWrap>
                  <TextFieldStyled
                    placeholder="Confirm a password"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    type={showPassword ? "text" : "password"}
                    error={errors.password ? true : false}
                  />
                  {errors.password && (
                    <SignInErrorMessage>{errors.password}</SignInErrorMessage>
                  )}
                  <EyeIconWrapper onClick={handleClickShowPassword}>
                    {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                  </EyeIconWrapper>
                </EyePasswordWrap>
                <ButtonStyled>
                  <ButtonEl type="submit" color="inherit">
                    <BtnLogInSpan>Log In Now</BtnLogInSpan>
                  </ButtonEl>
                </ButtonStyled>
              </Box>
            </BoxStyled>
          </div>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </ContainerStyled>
      </ThemeProvider>
    </>
  );
}
