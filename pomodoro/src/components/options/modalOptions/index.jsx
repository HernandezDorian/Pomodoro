import { useRef } from "react";
import PropTypes from "prop-types";
import "./index.css";

function ModalOptions({
  setIsModalOpen,
  pomodoro,
  setPomodoro,
  shorkBreak,
  setShorkBreak,
  longBreak,
  setLongBreak,
}) {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const pomodoroRef = useRef();
  const shorkBreakRef = useRef();
  const longBreakRef = useRef();

  const pomodoroMin = pomodoro / 60;
  const shorkBreakMin = shorkBreak / 60;
  const longBreakMin = longBreak / 60;

  const handleApply = () => {
    setPomodoro(pomodoroRef.current.value * 60);
    setShorkBreak(shorkBreakRef.current.value * 60);
    setLongBreak(longBreakRef.current.value * 60);
    closeModal();
  };

  return (
    <div className="ModalOptions">
      <div className="HeadModal">
        <h2 className="ModalTitle">Settings</h2>
        <button
          onClick={() => {
            closeModal();
          }}
          className="ModalButtonClose"
        >
          X
        </button>
      </div>
      <div className="ModalTime">
        <h3>TIME (MINUTES)</h3>
        <form className="ModalTimeConfig">
          <label>
            Pomodoro
            <br></br>
            <input
              type="number"
              defaultValue={pomodoroMin}
              ref={pomodoroRef}
            ></input>
          </label>
          <label>
            Short break<br></br>
            <input
              type="number"
              defaultValue={shorkBreakMin}
              ref={shorkBreakRef}
            ></input>
          </label>
          <label>
            long break<br></br>
            <input
              type="number"
              defaultValue={longBreakMin}
              ref={longBreakRef}
            ></input>
          </label>
        </form>
      </div>

      <button className="ValidModalBtn" onClick={handleApply}>
        Apply
      </button>
    </div>
  );
}

ModalOptions.propTypes = {
  setIsModalOpen: PropTypes.func,
  pomodoro: PropTypes.number.isRequired,
  setPomodoro: PropTypes.func.isRequired,
  shorkBreak: PropTypes.number.isRequired,
  setShorkBreak: PropTypes.func.isRequired,
  longBreak: PropTypes.number.isRequired,
  setLongBreak: PropTypes.func.isRequired,
};

export default ModalOptions;
