import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import themes from "./themes/themes.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeProviderContext } from "./ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProviderContext>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ThemeProviderContext>
  </React.StrictMode>
);
