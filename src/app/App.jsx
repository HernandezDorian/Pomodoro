import "./App.css";
import Counter from "../components/Counter";
import Menu from "./../components/Menu/index.jsx";
import Options from "./../components/options/index.jsx";
import { useState } from "react";

function App() {
  const [pomodoro, setPomodoro] = useState(1500);
  const [shorkBreak, setShorkBreak] = useState(300);
  const [longBreak, setLongBreak] = useState(1800);
  const [exportType, setExportType] = useState("pom");
  const [pomAvLongBreak, setPomAvLongBreak] = useState(4);

  return (
    <>
      <header>
        <h1>Pomodoro</h1>
        <Menu exportType={exportType} />
      </header>
      <main>
        <Counter
          pomodoro={pomodoro}
          shortBreak={shorkBreak}
          longBreak={longBreak}
          setExportType={setExportType}
          exportType={exportType}
          pomAvLongBreak={pomAvLongBreak}
        />
      </main>
      <footer>
        <Options
          pomodoro={pomodoro}
          setPomodoro={setPomodoro}
          shorkBreak={shorkBreak}
          setShorkBreak={setShorkBreak}
          longBreak={longBreak}
          setLongBreak={setLongBreak}
          pomAvLongBreak={pomAvLongBreak}
          setPomAvLongBreak={setPomAvLongBreak}
        />
      </footer>
    </>
  );
}

export default App;
