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
      mainBgColor: "#f8f9fa",
      mainHeaderBg: "#f8f9fa",
      accentColor: "#f76707",
      white: "#fff",
      black: "#121212",
    },
  },
  dark: {
    colors: {
      mainTextColor: "#fafafa",
      mainBgColor: "#242424",
      mainHeaderBg: "#242424",
      accentColor: "#f76707",
      white: "#fff",
      black: "#121212",
    },
  },
  cats: {
    colors: {
      mainTextColor: "#fafafa",
      mainBgColor: "#242424",
      mainHeaderBg: "#242424",
      accentColor: "#f76707",
      white: "#fff",
      black: "#121212",
    },
  },
};

const Home = lazy(() => import("../pages/Home/Home"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const SignIn = lazy(() => import("../pages/SignIn/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp/SignUp"));
const Privacy = lazy(() => import("../pages/Privacy/Privacy"));
const Terms = lazy(() => import("../pages/Terms/Terms"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "dark";
  });

  function toggleTheme(e) {
    const themeValue = e.currentTarget.getAttribute("data-theme");
    setCurrentTheme(themeValue);
    localStorage.setItem("theme", themeValue);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/italiya/"
        element={<RootLayout toggleTheme={toggleTheme} />}
      >
        <Route index element={<Home toggleTheme={toggleTheme} />} />
        <Route path="cart" element={<Cart toggleTheme={toggleTheme} />} />
        <Route path="signin" element={<SignIn toggleTheme={toggleTheme} />} />
        <Route path="signup" element={<SignUp toggleTheme={toggleTheme} />} />
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
