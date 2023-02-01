import React, { useState } from 'react'

export default function Loader() {
  const [load, setLoad] = useState(true);

  return(
    <>
      <h2>Load Changer</h2>

      <p>Loading is {load ? 'loading bolean true' : 'loading bolean false'}</p>

      <button
      onClick={() => setLoad(true)}>Turn on</button>
      <button
      onClick={() => setLoad(false)}>Turn off</button>
    </>
  );
}
