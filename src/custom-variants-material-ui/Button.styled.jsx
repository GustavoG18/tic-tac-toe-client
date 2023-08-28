import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { useTheme } from "../ThemeContext";

const StyledButton = styled(Button)`
  width: 200px;
  color: ${(props) => {
    if (props.bgcolor) {
      return props.bgcolor;
    }
    return props.theme.palette[props.themecontext].colors.background;
  }};
  background: ${(props) => {
    if (props.bgcolor) {
      return props.bgcolor;
    }
    return props.theme.palette[props.themecontext].colors.secondary;
  }};
  &:hover {
    background-color: ${(props) => {
      if (props.bgcolor) {
        return props.bgcolor;
      }
      return props.theme.palette[props.themecontext].colors.secondary;
    }};
  }
`;

const ButtonPrimary = ({ handleOnClick, label }) => {
  const { theme } = useTheme();
  return (
    <StyledButton themecontext={theme} onClick={handleOnClick}>
      {label}
    </StyledButton>
  );
};

export default ButtonPrimary;
