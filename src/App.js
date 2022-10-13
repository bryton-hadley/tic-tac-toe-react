import './App.css';
import Square from "./Square";

import {useState} from 'react'

function App() {
const [squares, setSquares] = useState(["", "", "", "", "", "", "" , "", ""]);
const [player, setPlayer] = useState(true);

// creating the functio for handleClick and setitng it to an array with 9 empty strings 
const handleClick = () => {
  setSquares(["", "", "", "", "", "", "" , "", ""])
  setPlayer(true)
}

// const propVariable = " this is my variable choice "
// creating a new div with the class of container 

  return (
    <div className="App">
      <div className='container'>
          {squares.map((value, index) => {
            
            return (
              <Square 
                setSquares = {setSquares}
                index = {index}
                squareValue = {value}
                squares = {squares}
                player = {player}
                setPlayer = {setPlayer}
              />
            );
          })}
      </div>
      <button onClick={handleClick}>Reset</button>
    </div>

  );
}

export default App;
