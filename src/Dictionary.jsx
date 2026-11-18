import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
    setLoaded(true);
  }

  function search(event) {
    event.preventDefault();

    // SheCodes Dictionary API request
    let apiKey = "36399t92b73b5o4fa0b8a2cb798d68aa";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(event);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (!loaded) {
    search({ preventDefault: () => {} });
    return "Loading...";
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
