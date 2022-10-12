import './App.css';
import Square from "./Square";

import {useState} from 'react'

function App() {
const [squares, setSquares] = useState(["", "", "", "", "", "", "" , "", ""]);
const [player, setPlayer] = useState(true);

// const propVariable = " this is my variable choice "
  return (
    <div className="App">
      <Square 
      // propVar = {propVariable}
      squares = {squares}
      setSquares = {setSquares}
      player = {player}
      setPlayer = {setPlayer}
      />
    </div>

  );
}

export default App;
