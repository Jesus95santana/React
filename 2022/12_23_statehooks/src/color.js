import React, { useState } from 'react';

export default function Color() {
  const [color, setColor] = useState('white');
  const divStyle = {backgroundColor: color}

  return(
    <>
      <h2>Color Changer</h2>

      <p>I am {color}</p>

      <button
      onClick={() => setColor('red')}>red</button>
      <button
      onClick={() => setColor('blue')}>blue</button>
      <button
      onClick={() => setColor('green')}>green</button>

      <div
      className='box'
      style={divStyle}></div>
    </>
  );
}
