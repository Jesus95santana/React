import React, { useState } from 'react';

export default function Count() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  return(
    <>
      <h2>Count Changer</h2>

      <p>You have clicked that button {count} times</p>
      <button
      onClick={increment}>Click Here</button>
    </>
  );
}
