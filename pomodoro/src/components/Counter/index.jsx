import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./index.css";

// export const pomodoro = 10;

function Counter({ pomodoro, shortBreak, longBreak, setExportType }) {
  const [time, setTime] = useState(0);
  const [second, setSecond] = useState(0);
  const [dixsecond, setDixsecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [dixminute, setDixminute] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [AcutalTime, setAcutalTime] = useState(pomodoro);
  const [ActualType, setActualType] = useState(1);

  const radius = 216;
  const circumference = 2 * Math.PI * radius;
  const progress = ((time / AcutalTime) * 100 * circumference) / 100;

  useEffect(() => {
    reset();
    setAcutalTime(pomodoro);
  }, [longBreak, pomodoro, shortBreak]);

  function reset() {
    setTime(0);
    setSecond(0);
    setDixsecond(0);
    setMinute(0);
    setDixminute(0);
    setIsRunning(false);
  }

  useEffect(() => {
    const changeType = () => {
      switch (ActualType % 2) {
        case 0:
          setActualType(ActualType + 1);
          setAcutalTime(pomodoro);
          reset();
          setIsRunning(true);
          setExportType("pom");
          break;
        case 1:
          setActualType(ActualType + 1);
          setAcutalTime(shortBreak);
          reset();
          setIsRunning(true);
          setExportType("sho");
          break;
      }

      if (ActualType === 7) {
        setActualType(0);
        setAcutalTime(longBreak);
        reset();
        setIsRunning(true);
        setExportType("lon");
      }
    };
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);

        setSecond(second + 1);

        if (time === AcutalTime - 1 || time === AcutalTime) {
          setIsRunning(false);
          changeType();
          console.log(ActualType);
        }

        if (second === 9) {
          setSecond(0);
          setDixsecond(dixsecond + 1);
        }
        if (dixsecond === 6) {
          setDixsecond(0);
          setMinute(minute + 1);
        }
        if (minute === 9) {
          setMinute(0);
          setDixminute(dixminute + 1);
        }
        if (dixminute === 6) {
          reset();
        }
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [
    isRunning,
    time,
    second,
    dixsecond,
    minute,
    dixminute,
    AcutalTime,
    ActualType,
    longBreak,
    pomodoro,
    shortBreak,
    setExportType,
  ]);

  return (
    <div
      onClick={() => {
        setIsRunning(!isRunning);
      }}
      className="Counter"
    >
      <svg className="progress-ring" width="480" height="480">
        <circle
          className="progress-ring__circle"
          stroke="grey"
          strokeWidth="20"
          fill="transparent"
          r={radius}
          cx="240"
          cy="240"
        />
        <circle
          className="progress-ring__progress"
          stroke="rgb(250, 112, 114)"
          strokeWidth="20"
          fill="transparent"
          r={radius}
          cx="240"
          cy="240"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
      </svg>
      <div className="Timer">{`${dixminute}${minute}:${dixsecond}${second}`}</div>
    </div>
  );
}

Counter.propTypes = {
  pomodoro: PropTypes.number.isRequired,
  shortBreak: PropTypes.number.isRequired,
  longBreak: PropTypes.number.isRequired,
  setExportType: PropTypes.func.isRequired,
};

export default Counter;
