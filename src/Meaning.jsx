import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              {definition.example && (
                <>
                  <br />
                  <em>{definition.example}</em>
                </>
              )}
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}

return (
  <div className="Meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
    <p>
      {props.meaning.definition}
      {props.meaning.example && (
        <>
          <br />
          <em>{props.meaning.example}</em>
        </>
      )}
    </p>
  </div>
);
