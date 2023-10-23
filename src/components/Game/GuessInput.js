import { useState } from "react";

function Form() {
  const [guess, setGuess] = useState("");

  return (
    <form className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter Word</label>
      <input
        value={guess}
        onChange={(event) => {
            setGuess(event.target.value)
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default Form;
