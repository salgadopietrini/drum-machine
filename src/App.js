import React, { useState } from "react";
import "./app.css";

const pad = [
  {
    letter: "Q",
    id: "Heater-1",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    letter: "W",
    id: "Heater-2",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    letter: "E",
    id: "Heater-3",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    letter: "A",
    id: "Heater-4",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    letter: "S",
    id: "Heater-6",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    letter: "D",
    id: "Dsc-Oh",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    letter: "Z",
    id: "Kick-n-Hat",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    letter: "X",
    id: "RP4-KICK-1",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    letter: "C",
    id: "Cev-H2",
    sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  const [display, setDisplay] = useState("Play!");
  const [currentLetter, setCurrentLetter] = useState("");

  const handleClick = (lett) => {
    let { id, letter } = pad.find((elem) => lett.toUpperCase() === elem.letter);
    setDisplay(id);
    setCurrentLetter(letter);
    const audio = document.getElementById(lett);
    audio.play();
    setTimeout(() => {
      setDisplay("Play!");
      setCurrentLetter("");
    }, 400);
  };

  const handleKeyPress = (letter) => {
    handleClick(letter.toUpperCase());
  };

  document.addEventListener("keypress", (event) => handleKeyPress(event.key));
  return (
    <div id="drum-machine">
      <h1 id="display">{display}</h1>
      <div className="pad-container">
        {pad.map((elem) => (
          <div
            onClick={(event) => handleClick(elem.letter)}
            className="drum-pad"
            id={elem.id}
            key={elem.id}
            style={{
              backgroundColor: currentLetter === elem.letter ? "black" : null,
              color: currentLetter === elem.letter ? "white" : null,
            }}
          >
            {elem.letter}
            <audio
              src={elem.sound}
              id={elem.letter}
              className="clip"
              autoPlay
            ></audio>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
