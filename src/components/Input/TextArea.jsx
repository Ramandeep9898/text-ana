import React, { useState } from "react";
import "./text-input.css";
import {
  getNumberOfChar,
  getNumberOfSentences,
  getNumberOfWords,
  getNumberOfSpaces,
  getNumberOfParagraphs,
  getNumberOfPunctuations,
} from "../../utilFunctions";

const MATRIX = [
  {
    label: "Number of Characters.",
    key: "numberOfChar",
  },
  {
    label: "Number of Words.",
    key: "numberOfWords",
  },
  {
    label: "Number of Spaces.",
    key: "numberOfSpaces",
  },
  {
    label: "Number of Punctuations.",
    key: "numberOfPunctuations",
  },
  {
    label: "Number of Sentences.",
    key: "numberOfSentences",
  },
  {
    label: "Number of Paragraphs.",
    key: "numberOfParagraphs",
  },
];

export const TextArea = () => {
  const [inputValue, setInputValue] = useState("");
  const [matrix, setMatrix] = useState({
    numberOfChar: 0,
    numberOfWords: 0,
    numberOfSentences: 0,
    numberOfSpaces: 0,
    numberOfPunctuations: 0,
    numberOfParagraphs: 0,
  });
  const handleChange = (value) => {
    setInputValue(value);
    setMatrix({
      numberOfChar: getNumberOfChar(inputValue),
      numberOfWords: getNumberOfWords(inputValue),
      numberOfSentences: getNumberOfSentences(inputValue),
      numberOfSpaces: getNumberOfSpaces(inputValue),
      numberOfPunctuations: getNumberOfPunctuations(inputValue),
      numberOfParagraphs: getNumberOfParagraphs(inputValue),
    });
  };
  return (
    <div className="container">
      <textarea
        placeholder="Type a Note..."
        value={inputValue}
        rows="10"
        cols="10"
        className="input"
        onChange={(e) => handleChange(e.target.value)}
      />

      <div className="box-container">
        {MATRIX.map((info, index) => (
          <div className="box " key={index}>
            <h1 className="box-heading">{info.label}</h1>
            <h2 className="box-value">{matrix[info.key]}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
