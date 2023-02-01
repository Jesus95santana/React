import React, { useState } from 'react';


export default function App() {
  const [toggle, setToggle] = useState();
  const [color, setColor] = useState();

  const divStyle = {backgroundColor: color}

  return(
    <>
      <h1>Practicing useState</h1>
    </>
  );
}
