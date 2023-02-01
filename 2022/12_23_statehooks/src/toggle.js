import React, { useState } from 'react';


export default function Toggle() {
  const [toggle, setToggle] = useState('ready');

  return(
    <>
      <h2>Toggle Changer</h2>
      <p>Toggle is {toggle}</p>

      <button
      onClick={() => setToggle('On')}>Im on</button>
      <button
      onClick={() => setToggle('Off')}>Im off</button>

    </>
  );
}
