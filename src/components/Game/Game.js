import React, { useState } from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import WonBanner from '../WonBanner'
import LostBanner from '../LostBanner'
import { checkGuess } from '../../game-helpers';
import Keyboard from '../Keyboard/Keyboard';

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS))
  const [gameStatus, setGameStatus] = useState('running')
  const [guesses, setGuesses] = useState([])

  function handleRestart() {
    const newAnswer = sample(WORDS)
    setAnswer(newAnswer)
    setGuesses([])
    setGameStatus('running')
  }

  const validatedGuesses = guesses.map((guess) => 
    checkGuess(guess, answer)
  )

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
  <GuessResults validatedGuesses={validatedGuesses} />  
  <GuessInput gameStatus={gameStatus} handleSubmitGuess={handleSubmitGuess} />
  <Keyboard validatedGuesses={validatedGuesses} />
  {gameStatus === 'won' && (
    <WonBanner numOfGuesses={guesses.length} handleRestart={handleRestart} />
  )}
  {gameStatus === 'lost' && <LostBanner answer={answer} handleRestart={handleRestart} />}
  </>
  );
}

export default Game;
