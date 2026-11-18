import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetic && (
            <Phonetic
              phonetic={props.results.phonetic}
              word={props.results.word}
            />
          )}
          {props.results.phonetics &&
            props.results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} word={props.results.word} />
                </div>
              );
            })}
        </section>
        {props.results.meanings &&
          props.results.meanings
            .filter(function (meaning, index, array) {
              if (
                meaning.partOfSpeech !== "noun" &&
                meaning.partOfSpeech !== "verb"
              ) {
                return false;
              }
              return (
                array.findIndex(function (item) {
                  return item.partOfSpeech === meaning.partOfSpeech;
                }) === index
              );
            })
            .map(function (meaning, index) {
              return (
                <section key={index}>
                  <Meaning meaning={meaning} />
                </section>
              );
            })}
      </div>
    );
  } else {
    return null;
  }
}
