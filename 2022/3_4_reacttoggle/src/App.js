import React, {useState} from 'react';

export default function App() {
const [bool, setBool] = useState(true);

function handleTrueUpdate() {
  setBool(true);
}

function handleFalseUpdate() {
  setBool(false);
}

  return(
    <div className='App'>
      <h2>App Container</h2>
      <div className='trueFalseBox'>
        <h3>This is {bool ? 'loading' : 'not loading'}</h3>
        <button
        className='trueButton'
        onClick={handleTrueUpdate}>True</button>
        <button
        className='falseButton'
        onClick={handleFalseUpdate}>False</button>
      </div>
    </div>
  )
}
