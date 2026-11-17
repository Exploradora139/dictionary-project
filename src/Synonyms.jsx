import React from "react";

export default function Synonyms({ synonyms }) {
  if (synonyms) {
    return (
      <ul className="Synonyms">
        {synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
