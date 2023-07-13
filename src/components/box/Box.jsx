import { useState } from "react";

const Box = ({ gridState, setGridState, row, column }) => {
  const [item, setItem] = useState(undefined);

  const handleOnClick = () => {
    if (!item) {
      const cloneGridState = { ...gridState };
      cloneGridState.matrix[row][column] = {
        row,
        column,
        select: cloneGridState.item ? "X" : "O",
      };
      setItem(cloneGridState.matrix[row][column].select);
      cloneGridState.item = !cloneGridState.item;
      setGridState(cloneGridState);
    }
  };

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid red",
      }}
      onClick={handleOnClick}
    >
      {item ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100px",
            height: "100px",
          }}
        >
          {item}
        </div>
      ) : null}
    </div>
  );
};

export default Box;
