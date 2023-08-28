import styled from "@emotion/styled";
import { useTheme } from "../ThemeContext";
import { Button, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness3Icon from "@mui/icons-material/Brightness3";

const StyledButtonDarkMode = styled(Button)`
  width: fit-content;
  height: 50px;
  outline: none !important;
  color: ${(props) => props.theme.palette[props.themecontext].colors.secondary};
  &:hover {
    background: transparent;
  }
`;

const SwitchThemeMode = ({ children, ...props }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <StyledButtonDarkMode
      variant="outline"
      themecontext={theme}
      onClick={toggleTheme}
      startIcon={
        theme === "light" ? (
          <LightModeIcon fontSize="medium" />
        ) : (
          <Brightness3Icon fontSize="medium" />
        )
      }
      disableRipple
      {...props}
    >
      {theme === "light" ? "Light Mode" : "Dark Mode"}
    </StyledButtonDarkMode>
  );
};

export default SwitchThemeMode;
