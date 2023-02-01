import React from 'react';
import { add } from './native.js';

export default function CalcApp({nums, target}) {

  return(
    <div className='calc_container'>
      <h1 className='calctitle'>Calc App</h1>
      <div className='box'>
        <p>input is {nums}</p>
      </div>
      <div className='boxy'>
        <p>target is {target}</p>
      </div>
      <div className='answer'>
        <h4>{add(1, 1)}</h4>
      </div>
    </div>
  );
}
