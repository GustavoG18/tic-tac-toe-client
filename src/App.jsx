import "./App.css";
import "./Global.css";
import Grid from "./components/grid/Grid";
import Switch from "./components/switch/Switch";
import { useTheme } from "./ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`wrapper ${theme}`}>
      <Switch />
      <h1 id="game-title" className={`${theme}`}>
        Tic-Tac-Toe
      </h1>
      <Grid />
    </div>
  );
}

export default App;
