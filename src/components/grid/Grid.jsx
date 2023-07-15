import "./Grid.css";
import { useEffect, useState } from "react";
import Box from "../box/box";

const Grid = () => {
  const [gridState, setGridState] = useState({
    matrix: [
      [{}, {}, {}],
      [{}, {}, {}],
      [{}, {}, {}],
    ],
    item: true,
    movement: 0,
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
        possibleWinner = true;
        firstElement = gridState.matrix[0][indexColumn].select;
        for (let indexRow = 0; indexRow < gridState.matrix.length; indexRow++) {
          if (firstElement !== gridState.matrix[indexRow][indexColumn].select) {
            possibleWinner = false;
          }
          if (!possibleWinner) {
            break;
          }
        }
        if (possibleWinner) {
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
          debugger;
          if (firstElement !== gridState.matrix[index][indexColumn].select) {
            possibleWinner = false;
            break;
          }
        }
        if (possibleWinner) {
          break;
        }
      }
      return possibleWinner ? firstElement : "";
    };

    if (gridState.movement > 4) {
      const possibleWinInRow = winRow();
      let textToWin = "";
      if (possibleWinInRow !== "") {
        textToWin =
          possibleWinInRow === "X"
            ? "Row: The first player win!"
            : "Row: The second player win!";
        alert(textToWin);
      }
      const possibleWinInColumn = winColumn();
      if (possibleWinInColumn !== "") {
        textToWin =
          possibleWinInColumn === "X"
            ? "Column: The first player win!"
            : "Column: The second player win!";
        alert(textToWin);
      }
      const possibleWinInDiag = winDiag();
      if (possibleWinInDiag !== "") {
        textToWin =
          possibleWinInDiag === "X"
            ? "Diag: The first player win!"
            : "Diag: The second player win!";
        alert(textToWin);
      }
    }
  }, [gridState]);

  return (
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
  );
};

export default Grid;
