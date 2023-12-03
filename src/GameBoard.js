// GameBoard.js
import React from 'react';
import { useGameContext } from './GameContext';

const GameBoard = () => {
  const { currentWord } = useGameContext();

  return (
    <div>
   <h3 style={{fontFamily:'cursive'}}>Embark on the Antakshari journey! Unleash your creativity, link words seamlessly, and conquer the linguistic arena.<br></br> May your clever connections lead you to victory!</h3>
    </div>
  );
};

export default GameBoard;
