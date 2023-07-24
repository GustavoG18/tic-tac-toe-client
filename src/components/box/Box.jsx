import "./Box.css";
import { useEffect, useState } from "react";
import { useTheme } from "../../ThemeContext";

const Box = ({ gridState, setGridState, paint, row, column }) => {
  const [item, setItem] = useState(undefined);
  const { theme } = useTheme();

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

  useEffect(() => {
    if (!gridState.movement) {
      setItem(undefined);
    }
  }, [gridState]);

  return (
    <div className={`${paint} box-dimension ${theme}`} onClick={handleOnClick}>
      {item ? (
        <div className="item-container">
          <h2 className={`item ${theme}`}>{item}</h2>
        </div>
      ) : null}
    </div>
  );
};

export default Box;
