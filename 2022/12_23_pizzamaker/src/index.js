import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];

function Index() {
// inserted an array to useState for selected
  const [selected, setSelected] = useState([]);


  function toggleTopping({target}) {
    const clickedTopping = target.value;

    function setSelected(prev) {
      if (prev.includes(clickedTopping)) {
        return prev.filter(t => t !== clickedTopping);
      } else {
        return [clickedTopping, ...prev];
      }
    }
  }


  return(
    <>
    {options.map(option =>(
      <button
      value={option}
      onClick={toggleTopping}
      key={option}>
      {selected.includes(option) ? 'Remove' : 'Add'}</button>
    ))}
      <p>Order a {selected.join(',')} pizza</p>
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
