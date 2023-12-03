// GameResult.js
import React from 'react';
import { useGameContext } from './GameContext';

const GameResult = () => {
  const { resetGame } = useGameContext();

  return (
    <div>
        <br></br>
        <button
  onClick={resetGame}
  style={{
    padding: '10px 20px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = 'darkgreen';
    e.target.style.transform = 'scale(1.05)';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = 'green';
    e.target.style.transform = 'scale(1)';
  }}
>
  RESET
</button>

    </div>
  );
};

export default GameResult;
