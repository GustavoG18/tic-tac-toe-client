import "./Grid.css";
import { useEffect, useState } from "react";
import Box from "../box/box";
import { useTheme } from "../../ThemeContext";
import ModalToWin from "../modalToWin/ModalToWin";
import ProgressMovement from "../../custom-variants-material-ui/LinearProgress.styled";
import ButtonPrimary from "../../custom-variants-material-ui/Button.styled";

const GridAux = () => {
  const { theme } = useTheme();
  const [gridState, setGridState] = useState({
    matrix: [
      [{}, {}, {}],
      [{}, {}, {}],
      [{}, {}, {}],
    ],
    item: true,
    movement: 0,
    winner: 0,
  });

  useEffect(() => {
    const winRow = () => {
      let possibleWinner = false;
      let firstElement = "";
      for (let index = 0; index < gridState.matrix.length; index++) {
        firstElement = gridState.matrix[index][0].select;
        possibleWinner = gridState.matrix[index].every(({ select }) => {
          if (select) {
            return select === firstElement;
          }
          return false;
        });
        if (possibleWinner) {
          const lineToWin = document.getElementById("line-to-win");
          const root = document.documentElement;
          switch (index) {
            case 0:
              root.style.setProperty("--win-top", "50px");
              break;
            case 1:
              root.style.setProperty("--win-top", "150px");
              break;
            case 2:
              root.style.setProperty("--win-top", "250px");
              break;
          }
          lineToWin.classList.add("animation");
          lineToWin.setAttribute("checked", true);
          lineToWin.removeAttribute("hidden");
          break;
        }
      }
      return possibleWinner ? firstElement : "";
    };

    const winColumn = () => {
      let firstElement = "";
      let possibleWinner = true;
      for (
        let indexColumn = 0;
        indexColumn < gridState.matrix.length;
        indexColumn++
      ) {
        firstElement = gridState.matrix[0][indexColumn].select;
        possibleWinner = firstElement ? true : false;
        for (let indexRow = 0; indexRow < gridState.matrix.length; indexRow++) {
          if (firstElement !== gridState.matrix[indexRow][indexColumn].select) {
            possibleWinner = false;
          }
          if (!possibleWinner) {
            break;
          }
        }
        if (possibleWinner) {
          const lineToWin = document.getElementById("line-to-win");
          const root = document.documentElement;
          root.style.setProperty("--win-transform-rotate", "90deg");
          switch (indexColumn) {
            case 0:
              root.style.setProperty("--win-left", "50px");
              break;
            case 1:
              root.style.setProperty("--win-left", "150px");
              break;
            case 2:
              root.style.setProperty("--win-left", "250px");
              break;
          }
          lineToWin.classList.add("animation");
          lineToWin.removeAttribute("hidden");
          break;
        }
      }
      return possibleWinner ? firstElement : "";
    };

    const winDiag = () => {
      let firstElement = "";
      let possibleWinner = true;
      for (let diag = 0; diag < 2; diag++) {
        possibleWinner = true;
        firstElement = diag
          ? gridState.matrix[0][gridState.matrix.length - 1].select
          : gridState.matrix[0][0].select;
        for (let index = 0; index < gridState.matrix.length; index++) {
          let indexColumn = diag ? gridState.matrix.length - 1 - index : index;
          if (firstElement !== gridState.matrix[index][indexColumn].select) {
            possibleWinner = false;
            break;
          }
        }
        if (possibleWinner) {
          const lineToWin = document.getElementById("line-to-win");
          const root = document.documentElement;
          root.style.setProperty("--win-top", "39px");
          switch (diag) {
            case 0:
              root.style.setProperty("--win-transform-rotate", "45deg");
              root.style.setProperty("--win-left", "39px");
              break;
            case 1:
              root.style.setProperty("--win-transform-rotate", "315deg");
              root.style.setProperty("--win-transform-origin", "100%");
              root.style.setProperty("--win-left", "-39px");
              break;
          }
          lineToWin.classList.add("animation");
          lineToWin.removeAttribute("hidden");
          break;
        }
      }
      return possibleWinner ? firstElement : "";
    };

    if (gridState.movement > 4 && !gridState.winner) {
      const possibleWinInRow = winRow();
      if (possibleWinInRow !== "") {
        setGridState((prev) => {
          return { ...prev, winner: possibleWinInRow === "X" ? 1 : 2 };
        });
      }
      const possibleWinInColumn = winColumn();
      if (possibleWinInColumn !== "") {
        setGridState((prev) => {
          return { ...prev, winner: possibleWinInColumn === "X" ? 1 : 2 };
        });
      }
      const possibleWinInDiag = winDiag();
      if (possibleWinInDiag !== "") {
        setGridState((prev) => {
          return { ...prev, winner: possibleWinInDiag === "X" ? 1 : 2 };
        });
      }
    }
  }, [gridState]);

  const resetGame = () => {
    document.getElementById("line-to-win").setAttribute("hidden", true);
    setGridState({
      matrix: [
        [{}, {}, {}],
        [{}, {}, {}],
        [{}, {}, {}],
      ],
      item: true,
      movement: 0,
      winner: 0,
    });
  };

  return (
    <div id="container-relative">
      <ProgressMovement movement={gridState.movement} />
      <hr id="line-to-win" className={`win line ${theme}`} hidden />
      <div className="grid-container">
        <div className="row-container">
          <Box
            gridState={gridState}
            setGridState={setGridState}
            row={0}
            column={0}
          />
          <Box
            gridState={gridState}
            setGridState={setGridState}
            paint="top"
            row={0}
            column={1}
          />
          <Box
            gridState={gridState}
            setGridState={setGridState}
            row={0}
            column={2}
          />
        </div>
        <div className="row-container">
          <Box
            gridState={gridState}
            setGridState={setGridState}
            paint="left"
            row={1}
            column={0}
          />
          <Box
            gridState={gridState}
            setGridState={setGridState}
            paint="center"
            row={1}
            column={1}
          />
          <Box
            gridState={gridState}
            setGridState={setGridState}
            paint="left"
            row={1}
            column={2}
          />
        </div>
        <div className="row-container">
          <Box
            gridState={gridState}
            setGridState={setGridState}
            row={2}
            column={0}
          />
          <Box
            gridState={gridState}
            setGridState={setGridState}
            paint="top"
            row={2}
            column={1}
          />
          <Box
            gridState={gridState}
            setGridState={setGridState}
            row={2}
            column={2}
          />
        </div>
      </div>
      {gridState.movement === 9 && !gridState.winner && (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <ButtonPrimary label="Reset" handleOnClick={resetGame} />
        </div>
      )}
      <ModalToWin
        winner={gridState.winner}
        show={gridState.winner}
        resetGame={resetGame}
      />
    </div>
  );
};

export default GridAux;
