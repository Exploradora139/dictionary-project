import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyboard, setKeyboard] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();

    // SheCodes Dictionary API request
    let apiKey = "36399t92b73b5o4fa0b8a2cb798d68aa";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyboard}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
