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
  pomAvLongBreak,
  setPomAvLongBreak,
}) {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const pomodoroRef = useRef();
  const shorkBreakRef = useRef();
  const longBreakRef = useRef();
  const pomAvLongBreakRef = useRef();

  const pomodoroMin = pomodoro / 60;
  const shorkBreakMin = shorkBreak / 60;
  const longBreakMin = longBreak / 60;

  const handleApply = () => {
    setPomodoro(pomodoroRef.current.value * 60);
    setShorkBreak(shorkBreakRef.current.value * 60);
    setLongBreak(longBreakRef.current.value * 60);
    setPomAvLongBreak(pomAvLongBreakRef.current.value);
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
      <div className="ModalTime ModalElem">
        <h3>TIME (MINUTES)</h3>
        <form className="ModalTimeConfig ModalForm">
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
      <div className="ModalNbrPom ModalElem">
        <h3>🍎 UNTIL LONGBREAK</h3>
        <form className="ModalPomNbrConfig ModalForm">
          <label>
            N° of pomodoro<br></br>
            <input
              type="number"
              defaultValue={pomAvLongBreak}
              ref={pomAvLongBreakRef}
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
  pomAvLongBreak: PropTypes.number.isRequired,
  setPomAvLongBreak: PropTypes.func.isRequired,
};

export default ModalOptions;
