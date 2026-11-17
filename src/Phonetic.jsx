import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (!props.phonetic) {
    return null;
  }

  function playAudio() {
    if (typeof props.phonetic === "object" && props.phonetic.audio) {
      let audio = new Audio(props.phonetic.audio);
      audio.play();
    } else if ("speechSynthesis" in window && props.word) {
      let utterance = new SpeechSynthesisUtterance(props.word);
      window.speechSynthesis.speak(utterance);
    }
  }

  // When phonetic is a string (from SheCodes API)
  if (typeof props.phonetic === "string") {
    return (
      <div className="Phonetic">
        <button type="button" onClick={playAudio}>
          🔊 Listen
        </button>
        <span className="text">{props.phonetic}</span>
      </div>
    );
  }

  // When phonetic is an object (from Free Dictionary API)
  return (
    <div className="Phonetic">
      <button type="button" onClick={playAudio}>
        🔊 Listen
      </button>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
