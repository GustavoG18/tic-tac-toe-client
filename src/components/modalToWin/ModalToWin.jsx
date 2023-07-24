import confetti from "canvas-confetti";
import { useEffect } from "react";
import { useTheme } from "../../ThemeContext";
import "./ModalToWin.css";

const ModalToWin = ({ winner, show, resetGame }) => {
  const { theme } = useTheme();
  useEffect(() => {
    if (show) {
      const modalToWin = document.getElementById("call-modal-to-win");
      modalToWin.click();
      confetti();
    }
  }, [show]);
  return (
    <div className={`message ${theme}`}>
      {show ? (
        <>
          <div id="modal-to-win" className="modal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div
                className={`modal-content ${theme}`}
                id="modal-content-setting"
              >
                <div className="modal-header">
                  <h4 className="modal-title">Congratulations!</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div className="modal-body">
                  <p>Player {winner} won! Try again.</p>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className={`btn btn-secondary ${theme}`}
                    data-dismiss="modal"
                    onClick={() => resetGame()}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            id="call-modal-to-win"
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#modal-to-win"
            hidden
          ></button>
        </>
      ) : null}
    </div>
  );
};

export default ModalToWin;
