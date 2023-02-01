import React from 'react';
import {useBoolToggle, toggle} from './useBoolToggle.js';

export default function Bool() {

  return(
    <div className='Bool'>
      <h2>Bool component</h2>
      <p>This component is {toggle}</p>
      <button
      onClick={useBoolToggle}>Load</button>
    </div>
  )
}
