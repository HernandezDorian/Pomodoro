import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./index.css";
import clochetteSound from "./../../assets/Clochette.mp3";

// export const pomodoro = 10;

function Counter({
  pomodoro,
  shortBreak,
  longBreak,
  exportType,
  setExportType,
  pomAvLongBreak,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 581) {
      setSize(300);
      setFontSize(80);
      setXValue(0);
      setYValue(55);
      setDivSize(310);
      setmarginTimer(50);
    } else {
      setSize(480);
      setFontSize(120);
      setXValue(0);
      setYValue(72);
      setDivSize(500);
      setmarginTimer(100);
    }
  }, [windowWidth]); // Re-run this effect when windowWidth changes

  const [size, setSize] = useState(480);
  const [fontSize, setFontSize] = useState(120);
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(72);
  const [divSize, setDivSize] = useState(500);
  const [marginTimer, setmarginTimer] = useState(100);

  const [time, setTime] = useState(0);
  const [second, setSecond] = useState(0);
  const [dixsecond, setDixsecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [dixminute, setDixminute] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [AcutalTime, setAcutalTime] = useState(pomodoro);
  const [ActualType, setActualType] = useState(0);

  const radius = size / 2.15; // 216
  const circumference = 2 * Math.PI * radius;
  const progress = ((time / AcutalTime) * 100 * circumference) / 100;
  let color = "rgb(250, 112, 114)";

  switch (exportType) {
    case "pom":
      color = "rgb(250, 112, 114)";
      break;
    case "sho":
      color = "rgb(248, 245, 39)";
      break;
    case "lon":
      color = "rgb(39, 248, 39)";
      break;
  }

  useEffect(() => {
    setExportType("pom");
    setActualType(1);
    setAcutalTime(pomodoro);
    reset();
  }, [longBreak, pomodoro, shortBreak, setExportType]);

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
      if (ActualType === pomAvLongBreak * 2 - 1) {
        // Longbreak
        setActualType(0);
        setAcutalTime(longBreak);
        reset();
        setIsRunning(true);
        setExportType("lon");
      } else {
        switch (ActualType % 2) {
          case 0: // pomodoro
            setActualType(ActualType + 1);
            setAcutalTime(pomodoro);
            reset();
            setIsRunning(true);
            setExportType("pom");
            break;
          case 1: // shortBreak
            setActualType(ActualType + 1);
            setAcutalTime(shortBreak);
            reset();
            setIsRunning(true);
            setExportType("sho");
            break;
        }
      }
    };
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);

        setSecond(second + 1);

        if (time === AcutalTime - 1 || time === AcutalTime) {
          setIsRunning(false);
          const audio = new Audio(clochetteSound);
          audio
            .play()
            .catch((error) => console.log("Auto-play was not allowed", error));
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
    pomAvLongBreak,
  ]);

  return (
    <div
      onClick={() => {
        setIsRunning(!isRunning);
      }}
      style={{ width: divSize, height: divSize }}
      className="Counter"
    >
      <svg className="progress-ring" width={size} height={size}>
        <circle
          className="progress-ring__circle"
          stroke="grey"
          strokeWidth="20"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <foreignObject x={xValue} y={yValue} width={size} height={size}>
          <div
            className="Timer"
            style={{ fontSize: fontSize, margin: marginTimer }}
          >{`${dixminute}${minute}:${dixsecond}${second}`}</div>
        </foreignObject>
        <circle
          className="progress-ring__progress"
          stroke={`${color}`}
          strokeWidth="20"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
      </svg>
    </div>
  );
}

Counter.propTypes = {
  pomodoro: PropTypes.number.isRequired,
  shortBreak: PropTypes.number.isRequired,
  longBreak: PropTypes.number.isRequired,
  setExportType: PropTypes.func.isRequired,
  exportType: PropTypes.string.isRequired,
  pomAvLongBreak: PropTypes.number.isRequired,
};

export default Counter;
