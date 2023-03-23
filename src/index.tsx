import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import App from "./App";
import "@utils/i18next";
import { theme } from "./theme";
import store from "./store";
import Preloader from "@components/Preloader";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Preloader message={"Loading..."} />}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
