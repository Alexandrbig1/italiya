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

const theme = {
  light: {
    colors: {
      mainTextColor: "#242424",
      mainBgColor: "#f8f9fa",
    },
  },
  dark: {
    colors: {
      mainTextColor: "#fafafa",
      mainBgColor: "#242424",
    },
  },
};

const Home = lazy(() => import("../pages/Home/Home"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Privacy = lazy(() => import("../pages/Privacy/Privacy"));
const Terms = lazy(() => import("../pages/Terms/Terms"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? false : true;
  });

  const toggleTheme = () => {
    setIsDarkTheme((prevState) => !prevState);
    localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/italiya/" element={<RootLayout />}>
        <Route
          index
          element={<Home toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
        />
        <Route
          path="cart"
          element={<Cart toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />}
        />
        <Route
          path="privacy"
          element={
            <Privacy toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          }
        />
        <Route
          path="terms"
          element={
            <Terms toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          }
        />
        <Route
          path="*"
          element={
            <NotFound toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          }
        />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <FontsHelmet />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
