import { useState } from "react";
import optionlogo from "./../../assets/settings.png";
import ModalOptions from "./modalOptions/index.jsx";

function Options({ pomodoro, setPomodoro }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const updatePomodoro = () => {
    setPomodoro(300);
  };

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
        <ModalOptions pomodoro={pomodoro} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
}

export default Options;
