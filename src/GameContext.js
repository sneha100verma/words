// GameContext.js
import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGameContext = () => {
  return useContext(GameContext);
};

export const GameProvider = ({ children }) => {
  const [currentWord, setCurrentWord] = useState('');
  const [playerTurn, setPlayerTurn] = useState(1); // Player 1 starts
  const [usedWords, setUsedWords] = useState([]); // Add usedWords state
  const [gameIsOver, setGameIsOver] = useState(false); // Add gameIsOver state

  const updateGame = (newWord) => {
    setCurrentWord(newWord);
    setPlayerTurn(playerTurn === 1 ? 2 : 1); // Switch player turn
  };

  const resetGame = () => {
    setCurrentWord('');
    setPlayerTurn(1);
    setUsedWords([]); // Reset usedWords
    setGameIsOver(false); // Reset gameIsOver
  };

  return (
    <GameContext.Provider value={{ currentWord, playerTurn, usedWords, gameIsOver, updateGame, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};