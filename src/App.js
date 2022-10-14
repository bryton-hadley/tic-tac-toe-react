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

//write a function that will checks if the winner 
// step 1: create a function that takes in an array 
// step 2: in the function create a variable that is equal to an array
// step 3: loop over the varibale 

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
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]

    if(
      arr[a] &&
      arr[a] === arr[b] &&
      arr[a] === arr[c]
    ) {
      return `${arr[a]} won!`
    }
  }
  return "Who will win"
}


// const propVariable = " this is my variable choice "
// creating a new div with the class of container 
//  mappping over the squares array 
// rendering the Square.jsx for each item in the array 
  return (
    <div className="App">
      {/* adding the span element and passing in squares */}
      <span>{calculateWinner(squares)}</span>
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
            )
          })}
      </div>
      <button onClick={handleClick}>Reset</button>
    </div>

  );
}

export default App;
