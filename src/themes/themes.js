import { createTheme } from "@mui/material";

const themes = createTheme({
  palette: {
    light: {
      colors: {
        background: "#67B99A",
        secondary: "#ffffff",
      },
    },
    dark: {
      colors: {
        background: "#036666",
        secondary: "#ffffff",
      },
    },
  },
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
});

export default themes;
