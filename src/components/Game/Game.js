import React, { useState } from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import WonBanner from '../WonBanner'
import LostBanner from '../LostBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState('running')
  const [guesses, setGuesses] = useState([])

  function handleSubmitGuess(possibleGuess) {
    const nextGuesses = [...guesses, possibleGuess]
    setGuesses(nextGuesses)
    if (possibleGuess.toUpperCase() === answer) {
      setGameStatus('won')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  return (
  <>
  <GuessResults guesses={guesses} answer={answer} />  
  <GuessInput gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess} />
  {gameStatus === 'won' && (
    <WonBanner numOfGuesses={guesses.length} />
  )}
  {gameStatus === 'lost' && <LostBanner answer={answer} />}
  </>
  );
}

export default Game;
