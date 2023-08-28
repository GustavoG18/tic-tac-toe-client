import "./App.css";
import "./Global.css";
import GridAux from "./components/grid/Grid";
import { Box, LinearProgress } from "@mui/material";
import Container from "./custom-variants-material-ui/Container.styled";
import LinksButton from "./custom-variants-material-ui/LinksButton.styled";
import SwitchThemeMode from "./custom-variants-material-ui/SwitchThemeMode.styled";

function App() {
  return (
    <Container height="100vh" alignItems="flex-end">
      <Container justifyContent="space-between">
        <SwitchThemeMode size="small" />
        <LinksButton width="auto" />
      </Container>
      <Container height="95%">
        <Container
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <GridAux />
        </Container>
        {/* <Container
          justifyContent="center"
          alignItems="center"
          bgcolor="black"
          width="50%"
        >
          <GridAux />
        </Container> */}
      </Container>
    </Container>
  );
}

export default App;
