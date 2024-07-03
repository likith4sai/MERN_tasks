// src/WordCounter.js
import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    
    const words = newText.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  };

  return (
    <div>
      <h1> Responsive Paragraph Word Counter</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type or paste your text here"
        rows="10"
        cols="50"
      ></textarea>
      <p><b>Word Count:</b> {wordCount}</p>
    </div>
  );
};

export default WordCounter;
