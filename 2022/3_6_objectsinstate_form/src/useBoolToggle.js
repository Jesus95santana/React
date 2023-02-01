import React, {useState} from 'react';

export default function useBoolToggle({toggle, useBoolToggle}) {
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    toggle ? setToggle(false): setToggle(true);
    myFunction(toggle);
  }
  return(
      <p>{toggle ? 'true': 'false'}</p>
  )
}
