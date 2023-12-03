// App.js
import React from 'react';
import './App.css';
import { GameProvider } from './GameContext';
import GameBoard from './GameBoard';
import WordInputForm from './WordInputForm';
import GameResult from './GameResult';

function App() {
  return (
    <GameProvider>
      <div className="App">
        <h1 >Words Antakshari</h1>
        <GameBoard />
        <WordInputForm />
        <GameResult />
      </div>
    </GameProvider>
  );
}

export default App;
