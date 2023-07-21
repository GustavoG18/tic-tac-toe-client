import confetti from "canvas-confetti";
import { useEffect } from "react";
import { useTheme } from "../../ThemeContext";
import "./ModalToWin.css";

const ModalToWin = ({ winner, show }) => {
  const { theme } = useTheme();
  useEffect(() => {
    if (show) {
      confetti();
    }
  }, [show]);
  return (
    <div className={`message ${theme}`}>
      {show ? (
        <>
          <h1>Congratulations!</h1>
          <p>The player {winner} won!</p>
        </>
      ) : null}
    </div>
  );
};

export default ModalToWin;
