import ReactDOM from "react-dom/client";
import React from "react";
import { StrictMode } from "react";
import App from "./components/App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
