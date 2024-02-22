import ReactDOM from "react-dom/client";
import React from "react";
import { StrictMode } from "react";
import App from "./components/App.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.tsx";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
