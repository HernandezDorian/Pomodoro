import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./index.css";

function Counter({ pomodoro }) {
  const [time, setTime] = useState(0);
  const [second, setSecond] = useState(0);
  const [dixsecond, setDixsecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [dixminute, setDixminute] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const progress = ((time / pomodoro) * 100 * circumference) / 100;

  function reset() {
    setTime(0);
    setSecond(0);
    setDixsecond(0);
    setMinute(0);
    setDixminute(0);
    setIsRunning(false);
  }

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);

        setSecond(second + 1);

        console.log(progress);

        if (time === pomodoro - 1) {
          setIsRunning(false);
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
  }, [isRunning, time, second, dixsecond, minute, dixminute, pomodoro]);

  return (
    <>
      <div
        onClick={() => {
          setIsRunning(!isRunning);
        }}
        className="Counter"
      >
        <svg className="progress-ring" width="120" height="120">
          <circle
            className="progress-ring__circle"
            stroke="blue"
            strokeWidth="4"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
          />
          <circle
            className="progress-ring__progress"
            stroke="red"
            strokeWidth="4"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
          />
        </svg>
        <div className="Timer">{`${dixminute}${minute}:${dixsecond}${second}`}</div>
      </div>
    </>
  );
}

Counter.propTypes = {
  pomodoro: PropTypes.number.isRequired,
};

Counter.defaultProps = {
  pomodoro: 1500, // Default value (25m)
};

export default Counter;
