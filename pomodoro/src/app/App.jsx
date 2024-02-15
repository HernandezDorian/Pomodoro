import "./App.css";
import Counter from "../components/Counter";
import Menu from "./../components/Menu/index.jsx";
import Options from "./../components/options/index.jsx";
import { useState } from "react";

function App() {
  const [pomodoro, setPomodoro] = useState(1500);
  const [shorkBreak, setShorkBreak] = useState(300);
  const [longBreak, setLongBreak] = useState(1800);
  return (
    <>
      <header>
        <h1>Pomodoro</h1>
        <Menu />
      </header>
      <main>
        <Counter
          pomodoro={pomodoro}
          shortBreak={shorkBreak}
          longBreak={longBreak}
        />
      </main>
      <footer>
        <Options pomodoro={pomodoro} setPomodoro={setPomodoro} />
      </footer>
    </>
  );
}

export default App;
