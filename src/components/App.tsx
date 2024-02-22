import { GlobalStyle } from "./GlobalStyle";
import FontsHelmet from "./FontsHelmnet";
import { ThemeProvider } from "styled-components";
import { lazy, useState } from "react";
import RootLayout from "../layouts/RootLayout/RootLayout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const themes = {
  light: {
    colors: {
      mainTextColor: "#242424",
      mainCardsTextColor: "#242424",
      mainBgColor: "#efede8",
      // mainBgColor: "#f8f9fa",
      mainBgColorLowOp: "rgb(248, 249, 250, 0.7)",
      scrollBgColor: "rgb(36, 36, 36, 0.3)",
      mainHeaderBg: "#FCFCFC",
      mainHeaderTextColor: "#161616",
      mainHeaderTextColorLowOp: "rgb(22, 22, 22, 0.5)",
      mainHeaderTextColorHover: "#f76707",
      themeModalBg: "#e9ecef",
      accentColor: "#f76707",
      mainLogoTextColor: "#242424",
      mainLogoTextColorLowOp: "rgb(36, 36, 36, 0.1)",
      mainLogoColor: "#f76707",
      inputColor: "#f76707",
      white: "#fff",
      whiteLowOp: "rgb(255, 255, 255, 0.5)",
      black: "#121212",
      errorColor: "#ff2929",
      signInBgBtn: "#43aa8b",
      signInBgHoverBtn: "#36886f",
      signUpBgBtn: "#f76707",
      signUpBgHoverBtn: "#dc2f02",
      signTextBtn: "#f8f9fa",
    },
  },
  dark: {
    colors: {
      mainTextColor: "#fafafa",
      mainCardsTextColor: "#fafafa",
      mainBgColor: "#242424",
      mainBgColorLowOp: "rgb(36, 36, 36, 0.7)",
      scrollBgColor: "rgb(248, 249, 250, 0.3)",
      mainHeaderBg: "#161616",
      mainHeaderTextColor: "#fafafa",
      mainHeaderTextColorLowOp: "rgb(248, 249, 250, 0.5)",
      mainHeaderTextColorHover: "#f76707",
      themeModalBg: "#242424",
      accentColor: "#f76707",
      mainLogoTextColor: "#f8f9fa",
      mainLogoTextColorLowOp: "rgb(248, 249, 250, 0.1)",
      mainLogoColor: "#f76707",
      inputColor: "#f76707",
      white: "#fff",
      whiteLowOp: "rgb(255, 255, 255, 0.5)",
      black: "#121212",
      errorColor: "#ff2929",
      signInBgBtn: "#43aa8b",
      signInBgHoverBtn: "#36886f",
      signUpBgBtn: "#f76707",
      signUpBgHoverBtn: "#dc2f02",
      signTextBtn: "#f8f9fa",
    },
  },
  cats: {
    colors: {
      mainTextColor: "#fafafa",
      mainCardsTextColor: "#fafafa",
      mainBgColor: "#fb8500",
      mainBgColorLowOp: "rgb(251, 133, 0, 0.7)",
      scrollBgColor: "rgb(36, 36, 36, 0.3)",
      mainHeaderBg: "#f77f00",
      mainHeaderTextColor: "#161616",
      mainHeaderTextColorLowOp: "rgb(22, 22, 22, 0.5)",
      mainHeaderTextColorHover: "#f76707",
      themeModalBg: "#fafafa",
      accentColor: "#f76707",
      mainLogoTextColor: "#242424",
      mainLogoTextColorLowOp: "rgb(36, 36, 36, 0.1)",
      mainLogoColor: "#dc2f02",
      inputColor: "rgb(22, 22, 22, 0.5)",
      white: "#fff",
      whiteLowOp: "rgb(255, 255, 255, 0.5)",
      black: "#121212",
      errorColor: "#ff2929",
      signInBgBtn: "#43aa8b",
      signInBgHoverBtn: "#36886f",
      signUpBgBtn: "#dc2f02",
      signUpBgHoverBtn: "#ff5400",
      signTextBtn: "#f8f9fa",
    },
  },
};

const Home = lazy(() => import("../pages/Home/Home"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Products = lazy(() => import("../pages/Products/Products"));
const SignIn = lazy(() => import("../pages/SignIn/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp/SignUp"));
const Privacy = lazy(() => import("../pages/Privacy/Privacy"));
const Terms = lazy(() => import("../pages/Terms/Terms"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("italiya-theme");
    return savedTheme || "dark";
  });

  function toggleTheme(e) {
    const themeValue = e.currentTarget.getAttribute("data-theme");
    setCurrentTheme(themeValue);
    localStorage.setItem("italiya-theme", themeValue);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/italiya/"
        element={<RootLayout toggleTheme={toggleTheme} />}
      >
        <Route path="" element={<Home toggleTheme={toggleTheme} />}>
          <Route
            path="products"
            element={<Products toggleTheme={toggleTheme} />}
          />
        </Route>
        <Route path="cart" element={<Cart toggleTheme={toggleTheme} />} />

        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="privacy" element={<Privacy toggleTheme={toggleTheme} />} />
        <Route path="terms" element={<Terms toggleTheme={toggleTheme} />} />
        <Route path="*" element={<NotFound toggleTheme={toggleTheme} />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyle />
      <FontsHelmet />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
