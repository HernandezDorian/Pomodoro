import { useState } from "react";
import optionlogo from "./../../assets/settings.png";
import ModalOptions from "./modalOptions/index.jsx";
import PropTypes from "prop-types";

function Options({
  pomodoro,
  setPomodoro,
  shorkBreak,
  setShorkBreak,
  longBreak,
  setLongBreak,
  pomAvLongBreak,
  setPomAvLongBreak,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const updatePomodoro = () => {
  //   setPomodoro(300);
  // };

  //   return updatePomodoro();
  return (
    <>
      <img
        className="optionsBtn"
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
        src={optionlogo}
        alt="options"
      />
      {isModalOpen && (
        <ModalOptions
          pomodoro={pomodoro}
          setPomodoro={setPomodoro}
          shorkBreak={shorkBreak}
          setShorkBreak={setShorkBreak}
          longBreak={longBreak}
          setLongBreak={setLongBreak}
          setIsModalOpen={setIsModalOpen}
          pomAvLongBreak={pomAvLongBreak}
          setPomAvLongBreak={setPomAvLongBreak}
        />
      )}
    </>
  );
}

Options.propTypes = {
  pomodoro: PropTypes.number.isRequired,
  setPomodoro: PropTypes.func.isRequired,
  shorkBreak: PropTypes.number.isRequired,
  setShorkBreak: PropTypes.func.isRequired,
  longBreak: PropTypes.number.isRequired,
  setLongBreak: PropTypes.func.isRequired,
  pomAvLongBreak: PropTypes.number.isRequired,
  setPomAvLongBreak: PropTypes.func.isRequired,
};

export default Options;
