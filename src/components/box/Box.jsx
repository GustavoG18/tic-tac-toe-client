import "./Box.css";
import { useState } from "react";

const Box = ({ gridState, setGridState, paint, row, column }) => {
  const [item, setItem] = useState(undefined);

  const handleOnClick = () => {
    if (!item) {
      const cloneGridState = { ...gridState };
      cloneGridState.matrix[row][column] = {
        row,
        column,
        select: cloneGridState.item ? "X" : "O",
      };
      cloneGridState.movement += 1;
      setItem(cloneGridState.matrix[row][column].select);
      cloneGridState.item = !cloneGridState.item;
      setGridState(cloneGridState);
    }
  };

  return (
    <div className={`${paint} box-dimension`} onClick={handleOnClick}>
      {item ? (
        <div className="item-container">
          <h2 className="item">{item}</h2>
        </div>
      ) : null}
    </div>
  );
};

export default Box;
