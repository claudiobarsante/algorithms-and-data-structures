/**
 * We provided some simple React template code. Your goal is to create a functioning Tic Tac Toe game. It should work the following way: the first player to go places an X anywhere on the board by clicking a square, and then the next player will be able to place an O, and it continues alternating like this every turn.

You should also implement a function to determine if any player won by getting 3 X's or O's in a diagonal, horizontal, or vertical row. If there is a winner, display a message at the top. If nobody wins, then do not display any message. Finally, you should also implement the reset function that resets the entire board. You should also not be able to override the other players move during the game.

You are free to add classes and styles, but make sure you leave the element ID's as they are.

Submit your code once it is complete and our system will validate your output.
 */

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const rowStyle = {
  display: 'flex'
};

const squareStyle = {
  width: '60px',
  height: '60px',
  backgroundColor: '#ddd',
  margin: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  color: 'white'
};

const boardStyle = {
  backgroundColor: '#eee',
  width: '208px',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  border: '3px #eee solid'
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
};

const instructionsStyle = {
  marginTop: '5px',
  marginBottom: '5px',
  fontWeight: 'bold',
  fontSize: '16px'
};

const buttonStyle = {
  marginTop: '15px',
  marginBottom: '16px',
  width: '80px',
  height: '40px',
  backgroundColor: '#8acaca',
  color: 'white',
  fontSize: '16px'
};

function Square({ id, player, handleSquareClick }) {
  return (
    <div
      className="square"
      style={squareStyle}
      onClick={() => handleSquareClick(id, player)}
    >
      {player}
    </div>
  );
}

const INITIAL_STATE = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: ''
};

const WIN = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

function checkWinner(game, player, id) {
  const updated = { ...game, [id]: player };
  for (let i = 0; i < WIN.length; i++) {
    const combination = WIN[i];
    const first = combination[0];
    const second = combination[1];
    const third = combination[2];
    if (
      updated[first] === player &&
      updated[second] === player &&
      updated[third] === player
    )
      return true;
  }
  return false;
}
function Board() {
  const [player, setPlayer] = useState('X');
  const [game, setGame] = useState(INITIAL_STATE);
  const [winner, setWinner] = useState('None');

  function handleSquareClick(id) {
    if (winner === 'X' || winner === 'O') return;
    // --- check if square is empty
    const value = game[id];
    if (value) return;
    // -- update square
    setGame(previous => ({ ...previous, [id]: player }));
    // -- check if there's a winner
    const hasWinner = checkWinner(game, player, id);
    if (hasWinner) {
      setWinner(player);
      return;
    }
    // -- change player
    setPlayer(previous => {
      if (previous === 'X') return 'O';
      if (previous === 'O') return 'X';
    });
  }

  function reset() {
    setGame(INITIAL_STATE);
    setPlayer('X');
    setWinner('None');
  }
  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{player}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>{winner}</span>
      </div>
      <button style={buttonStyle} onClick={reset}>
        Reset
      </button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square
            id="1"
            handleSquareClick={handleSquareClick}
            player={game[1]}
          />
          <Square
            id="2"
            handleSquareClick={handleSquareClick}
            player={game[2]}
          />
          <Square
            id="3"
            handleSquareClick={handleSquareClick}
            player={game[3]}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            id="4"
            handleSquareClick={handleSquareClick}
            player={game[4]}
          />
          <Square
            id="5"
            handleSquareClick={handleSquareClick}
            player={game[5]}
          />
          <Square
            id="6"
            handleSquareClick={handleSquareClick}
            player={game[6]}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            id="7"
            handleSquareClick={handleSquareClick}
            player={game[7]}
          />
          <Square
            id="8"
            handleSquareClick={handleSquareClick}
            player={game[8]}
          />
          <Square
            id="9"
            handleSquareClick={handleSquareClick}
            player={game[9]}
          />
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Game />);
