import PropTypes from "prop-types";
import "./index.css";

function ModalOptions({ setIsModalOpen, pomodoro }) {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const pomodoroMin = pomodoro / 60;

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
            <input type="number" defaultValue={pomodoroMin}></input>
          </label>
          <label>
            Short break<br></br>
            <input type="number"></input>
          </label>
          <label>
            long break<br></br>
            <input type="number"></input>
          </label>
        </form>
      </div>

      <button className="ValidModalBtn">Apply</button>
    </div>
  );
}

ModalOptions.propTypes = {
  setIsModalOpen: PropTypes.func,
};

ModalOptions.propTypes = {
  pomodoro: PropTypes.number,
};

export default ModalOptions;
