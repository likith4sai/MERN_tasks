// src/WordCounter.js
import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    // Split the text by spaces and filter out empty strings
    const words = newText.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  };

  return (
    <div>
      <h1>Word Counter</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type or paste your text here"
        rows="10"
        cols="50"
      ></textarea>
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;
