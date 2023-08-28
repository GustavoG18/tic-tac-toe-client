import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { useTheme } from "../ThemeContext";

const StyledGrid = styled(Grid)`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => props.height};
  max-height: 100vh;
  padding: 0px;
  background: ${(props) => {
    if (props.bgcolor) {
      return props.bgcolor;
    }
    return props.theme.palette[props.themecontext].colors.background;
  }};
  transition: background-color 0.3s ease;
  ${(props) => props.theme.breakpoints.down("sm")} {
    flex-direction: column;
  }
`;

const Container = ({ children, ...props }) => {
  const { theme } = useTheme();
  return (
    <StyledGrid container themecontext={theme} {...props}>
      {children}
    </StyledGrid>
  );
};

export default Container;
