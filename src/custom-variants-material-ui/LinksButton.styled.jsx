import styled from "@emotion/styled";
import { useTheme } from "../ThemeContext";
import { Grid, IconButton, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const StyledGrid = styled(Grid)`
  width: ${(props) => (props.width ? props.width : "100%")};
`;

const IconSocialButton = styled(IconButton)`
  width: fit-content;
  outline: none !important;
  color: ${(props) => props.theme.palette[props.themecontext].colors.secondary};
  &:hover {
    background: transparent;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
`;

const LinksButton = ({ ...props }) => {
  const { theme } = useTheme();
  return (
    <StyledGrid container {...props}>
      <StyledLink
        href="https://www.linkedin.com/in/gguerrerof98/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconSocialButton arial-label="linkedin-button" themecontext={theme}>
          <LinkedInIcon fontSize="medium" />
        </IconSocialButton>
      </StyledLink>
      <StyledLink
        href="https://github.com/GustavoG18"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconSocialButton arial-label="github-button" themecontext={theme}>
          <GitHubIcon fontSize="medium" />
        </IconSocialButton>
      </StyledLink>
    </StyledGrid>
  );
};

export default LinksButton;
