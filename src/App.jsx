import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./styles.css";

export function Square({ handleClick }) {
  const [insertSymbol, setInsertSymbol] = useState("");

  function handleClick() {}

  return (
    <>
      <button className="square" onClick={handleClick()}>
        X
      </button>
    </>
  );
}

export function Board() {
  return (
    <div className="square-wrapper">
      <Square handleClick={handleClick} />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

function App() {
  return (
    <>
      <Board />
    </>
  );
}

export default App;
