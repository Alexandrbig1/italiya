import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import emailRegex from "../../regex/emailRegex";
// import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  BoxSignUpStyled,
  ContainerSignUpStyled,
  ErrorMessage,
  EyeIconSignUpWrapper,
  EyePasswordSignUpWrap,
  LinkSignUpStyled,
  SignUpButtonEl,
  SignUpButtonStyled,
  TextFieldSignUpStyled,
  TypoSignUpStyled,
  TypoTitleSignUpStyled,
  LoginLink,
  BtnSpan,
  FieldWrapper,
  PasswordErrorMessage,
} from "./SignUp.styled";
import { useState } from "react";

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
    <TypoSignUpStyled
      variant="body2"
      align="center"
      {...props}
      style={{ fontSize: "1rem" }}
    >
      {"Alex Smagin © "}
      <LinkSignUpStyled
        color="inherit"
        href="https://alexandrbig1.github.io/italiya/"
        target="_blank"
      >
        Italiya
      </LinkSignUpStyled>{" "}
      {new Date().getFullYear()}
      {"."}
    </TypoSignUpStyled>
  );
}

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;

  //   const name = form.elements.name.value;
  //   const email = form.elements.email.value;
  //   const password = form.elements.password.value;

  //   const newErrors = {};

  //   if (name.trim().length === 0) {
  //     newErrors.name = "Name is required";
  //   } else if (name.trim().length < 3) {
  //     newErrors.name = "Name must be at least 3 characters";
  //   }

  //   if (email.trim().length === 0) {
  //     newErrors.email = "Email address is required";
  //   } else if (!emailRegex.test(email)) {
  //     newErrors.email = "Please enter a valid email address";
  //   }

  //   if (password.length < 6 || password.length > 18) {
  //     newErrors.password = "Password must be between 6 and 18 characters";
  //   }

  //   setErrors(newErrors);

  //   if (Object.keys(newErrors).length === 0) {
  //     setErrors({});
  //     dispatch(
  //       register({
  //         name: name,
  //         email: email,
  //         password: password,
  //       })
  //     );
  //     form.reset();
  //   }
  // };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Italiya - Sign Up</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Join Italiya's Whisker Wonders website and become part of the cat-loving community. Explore a world of delightful cat-themed treasures."
          />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Join Italiya's Whisker Wonders" />
          <meta
            property="og:description"
            content="Join Italiya's Whisker Wonders website and become part of the cat-loving community. Explore a world of delightful cat-themed treasures."
          />
          <meta
            property="og:url"
            content="https://alexandrbig1.github.io/italiya/"
          />
        </Helmet>
      </HelmetProvider>
      <ThemeProvider theme={customTheme}>
        <ContainerSignUpStyled>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.2rem",
            }}
          >
            <BoxSignUpStyled>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.4rem",
                  position: "relative",
                }}
              >
                <LoginLink to="/italiya/signin" variant="body2">
                  Sign In
                </LoginLink>
                <TypoTitleSignUpStyled component="h1" variant="h5">
                  Sign Up
                </TypoTitleSignUpStyled>
                {/* <Google /> */}
              </Box>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                  mt: 2,
                  width: { sm: "376px", xs: "312px" },
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} style={{ marginTop: "0.4rem" }}>
                    <FieldWrapper>
                      <TextFieldSignUpStyled
                        autoComplete="given-name"
                        name="name"
                        required
                        fullWidth
                        id="name"
                        placeholder="Enter your name"
                        autoFocus
                        error={errors.name ? true : false}
                      />
                      {errors.name && (
                        <ErrorMessage>{errors.name}</ErrorMessage>
                      )}
                    </FieldWrapper>
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: "0.4rem" }}>
                    <FieldWrapper>
                      <TextFieldSignUpStyled
                        required
                        fullWidth
                        id="email"
                        placeholder="Enter your email"
                        name="email"
                        autoComplete="email"
                        error={errors.email ? true : false}
                      />
                      {errors.email && (
                        <ErrorMessage>{errors.email}</ErrorMessage>
                      )}
                    </FieldWrapper>
                  </Grid>
                  <Grid item xs={12} style={{ position: "relative" }}>
                    <EyePasswordSignUpWrap>
                      <TextFieldSignUpStyled
                        placeholder="Create a password"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        id="password"
                        autoComplete="new-password"
                        type={showPassword ? "text" : "password"}
                        error={errors.password ? true : false}
                      />

                      {errors.password && (
                        <PasswordErrorMessage>
                          {errors.password}
                        </PasswordErrorMessage>
                      )}
                      <EyeIconSignUpWrapper onClick={handleClickShowPassword}>
                        {showPassword ? (
                          <BsFillEyeSlashFill />
                        ) : (
                          <BsFillEyeFill />
                        )}
                      </EyeIconSignUpWrapper>
                    </EyePasswordSignUpWrap>
                  </Grid>
                </Grid>
                <SignUpButtonStyled>
                  <SignUpButtonEl type="submit" color="inherit">
                    <BtnSpan>Register Now</BtnSpan>
                  </SignUpButtonEl>
                </SignUpButtonStyled>
              </Box>
            </BoxSignUpStyled>
          </div>
          <Copyright sx={{ mt: 5 }} />
        </ContainerSignUpStyled>
      </ThemeProvider>
    </>
  );
}
