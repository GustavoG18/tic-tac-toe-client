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
  });

  useEffect(() => {
    /// Refactorizar
    const winRow = (item) => {
      let win = false;
      gridState.matrix.forEach((row) => {
        if (!win && row.length) {
          win = row.every(({ select }) => {
            return select === item;
          });
        }
      });
      return win;
    };
    const winColumn = (item) => {
      let win = true;
      for (let i = 0; i < 3; i++) {
        win = true;
        for (let j = 0; j < 3; j++) {
          if (gridState.matrix[j][i].select !== item) {
            win = false;
          }
        }
        if (win) {
          break;
        }
      }
      return win;
    };
    if (winRow("O") || winColumn("O")) {
      alert("The second player win");
    }
    if (winRow("X") || winColumn("X")) {
      alert("The first player win");
    }
  }, [gridState]);

  return (
    <div
      style={{
        border: "1px solid black",
        width: "fit-content",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Box
          gridState={gridState}
          setGridState={setGridState}
          row={0}
          column={0}
        />
        <Box
          gridState={gridState}
          setGridState={setGridState}
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
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Box
          gridState={gridState}
          setGridState={setGridState}
          row={1}
          column={0}
        />
        <Box
          gridState={gridState}
          setGridState={setGridState}
          row={1}
          column={1}
        />
        <Box
          gridState={gridState}
          setGridState={setGridState}
          row={1}
          column={2}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Box
          gridState={gridState}
          setGridState={setGridState}
          row={2}
          column={0}
        />
        <Box
          gridState={gridState}
          setGridState={setGridState}
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
