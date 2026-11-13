import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyboard, setKeyboard] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyboard} definition`);
  }

  function handleKeyboardChange(event) {
    setKeyboard(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="text" value={keyboard} onChange={handleKeyboardChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
