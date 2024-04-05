import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./styles.css";

export function Square({ value, handleClick }) {
  return (
    <>
      <button className="square" onClick={handleClick}>
        {value}
      </button>
    </>
  );
}

export function Board() {
  const [userIn, setUserIn] = useState(Array(9).fill(null));
  const [next, setNext] = useState(true);
  // const [insertSymbol, setInsertSymbol] = useState(); No need cause userIn doing the work for me.

  function calculateWinner(arr) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (arr[a] === arr[b] && arr[b] === arr[c]) {
        console.log("WINNER!");
        return arr[a];
      }
    }
    return null;
  }

  function handleClick(i) {
    // setInsertSymbol("X");
    const newArr = [...userIn];
    if (newArr[i] == null || calculateWinner(newArr) == null) {
      next ? (newArr[i] = "X") : (newArr[i] = "O");
    }
    setUserIn(newArr);
    console.log(newArr);
    setNext(!next);
    let winner = calculateWinner(newArr);
  }

  return (
    <>
      <div>
        <h2>Next Player: {next ? "X" : "O"}</h2>
      </div>
      <div className="square-wrapper">
        <Square value={userIn[0]} handleClick={() => handleClick(0)} />
        <Square value={userIn[1]} handleClick={() => handleClick(1)} />
        <Square value={userIn[2]} handleClick={() => handleClick(2)} />
        <Square value={userIn[3]} handleClick={() => handleClick(3)} />
        <Square value={userIn[4]} handleClick={() => handleClick(4)} />
        <Square value={userIn[5]} handleClick={() => handleClick(5)} />
        <Square value={userIn[6]} handleClick={() => handleClick(6)} />
        <Square value={userIn[7]} handleClick={() => handleClick(7)} />
        <Square value={userIn[8]} handleClick={() => handleClick(8)} />
      </div>
    </>
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
