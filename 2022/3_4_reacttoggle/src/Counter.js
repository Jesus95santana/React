import React, {useState} from 'react';

export default function Counter() {
  const [click, setClick] = useState(0);
  const handleCounter = click === 0;

function handleClick() {
setClick((prev)=>prev + 1);
}

function handleMinusClick() {
  setClick((prev)=>prev - 1);
}

  return(
    <div className='Counter'>
      <h2>Counter Container</h2>
      <p>You have clicked the button {click} times</p>
      <button
      onClick={handleClick}>Click Me!</button>
      <button
      disabled={handleCounter}
      onClick={handleMinusClick}>Subtract Click</button>
    </div>
  )
}
