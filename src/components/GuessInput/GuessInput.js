import { useState } from "react";

function GuessInput({ handleSubmitGuess }) {
  const [possibleGuess, setPossibleGuess] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(possibleGuess);
    setPossibleGuess("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter Word</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={possibleGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase()
          setPossibleGuess(nextGuess);
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
