import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (!props.meaning) {
    return null;
  }

  if (props.meaning.definitions) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                <strong>Definition:</strong> {definition.definition}
              </p>
              {definition.example && (
                <div className="example">
                  <strong>Example:</strong>
                  <ul>
                    <li>
                      <em>{definition.example}</em>
                    </li>
                  </ul>
                </div>
              )}
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
        <strong>Definition:</strong> {props.meaning.definition}
      </p>
      {props.meaning.example && (
        <div className="example">
          <strong>Example:</strong>
          <ul>
            <li>
              <em>{props.meaning.example}</em>
            </li>
          </ul>
        </div>
      )}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
