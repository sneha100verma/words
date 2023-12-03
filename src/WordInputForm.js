// WordInputForm.js
import React, { useState, useEffect } from 'react';
import { useGameContext } from './GameContext';
import './WordInputForm.css';

const WordInputForm = () => {
  const { currentWord, updateGame } = useGameContext();
  const [inputWord, setInputWord] = useState('');
  const [error, setError] = useState(null);
  const [usedWords, setUsedWords] = useState([]);
  const [popOut, setPopOut] = useState(false);

  useEffect(() => {
    setError(null);
  }, [inputWord]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the user input is a valid word
    if (inputWord.length < 3) {
      setError('Word should be at least 3 letters long.');
      return;
    }

    // Check if the word has already been used
    if (usedWords.includes(inputWord.toLowerCase())) {
      setError('Word has already been used. Try a new one!');
      return;
    }

    // Check if it's the first turn (computer's initial word)
    if (currentWord === '') {
      updateGame(inputWord);
      setInputWord('');
      return;
    }

    if (inputWord.charAt(0).toLowerCase() !== currentWord.slice(-1).toLowerCase()) {
      setError('Word should start with the last letter of the previous word.');
      return;
    }

    // Fetch a word from the API based on the last letter of the user's word
    try {
      const response = await fetch(`https://api.datamuse.com/words?sp=${inputWord.charAt(inputWord.length - 1)}*&max=1`);
      const data = await response.json();

      if (data.length === 0) {
        setError('No words found. You win!');
        
        return;
      }

      const computerWord = data[0].word;
      updateGame(computerWord);
      setUsedWords([...usedWords, inputWord.toLowerCase()]);
      setInputWord('');
      setPopOut(true);

      // Reset pop-out after a delay
      setTimeout(() => {
        setPopOut(false);
      }, 500);
    } catch (error) {
      console.error('Error fetching word from API:', error);
      setError('Error fetching word from API.');
    }
  };

  return (
    <div className="game-container">
     
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label className="form-label"  style={{fontFamily:'cursive'}}>
            Enter a word: &nbsp;
            <input
              type="text"
              value={inputWord}
              onChange={(e) => setInputWord(e.target.value)}
              className="form-input"
              style={{fontFamily:'cursive'}}
            />
    
          <button type="submit" className="form-button">
            GO
          </button>
          </label>
        </form>

        <div className={`card-container ${popOut ? 'pop-out' : ''}`}>
        <h2 style={{fontFamily:'cursive'}}>{currentWord || 'Start the game!'}</h2>
      </div>

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default WordInputForm;
