import React, { useState } from 'react';

export default function Input() {
  const [input, setInput] = useState('nothing');

  const handleChange = function(event) {
    const updatedInput = event.target.value;
    setInput(updatedInput);
  }

  return(
    <>
      <h2>Input Changer</h2>

      <p>You have input {input}</p>

      <input
      value={input}
      onChange={handleChange} />
    </>
  );
};
