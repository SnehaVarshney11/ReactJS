import React, { useState } from 'react';
import './App.css';

function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  );
}

function Board({ xIsNext, squares, onPlay }) {

  function handleClick(i) {
    if(squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquare = squares.slice();
    if(xIsNext) {
      nextSquare[i] ="X"
    }else {
      nextSquare[i] = "O";
    }
    onPlay(nextSquare);
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next Player : " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="board-container">
      <div className="board">
        <div className='status'>{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}


function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currMove, setCurrMove] = useState(0);
  const xIsNext = currMove % 2 === 0; 
  const currSquare = history[currMove];

  function handlePlay(nextSquare) {
    const nextHistory = [...history.slice(0, currMove + 1), nextSquare];
    setHistory(nextHistory);
    setCurrMove(nextHistory.length - 1);
  }

  function jump(nextMove) {
    setCurrMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let discriptiion;
    if(move > 0) {
      discriptiion = "Go to move #" + move;
    }else {
      discriptiion = "Go back to start";
    }

    return (
      <li key={move}>
        <button onClick={() => jump(move)}>{discriptiion}</button>
      </li>
    )
  })

  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currSquare} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}