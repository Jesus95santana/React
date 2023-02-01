import React, { useState } from 'react';
import CalcApp from './CalcApp.js';
import './index.css';

export default function App() {
const [nums, setNums] = useState();
const [target, setTarget] = useState();

const [newNum, setNewNum] = useState();
const [newTarget, setNewTarget] = useState();

const handleNum = (event) => {
  setNums(event.target.value);
}

const handleTarget = (event) =>  {
  setTarget(event.target.value);
}

const submitNum = () =>  {
  setNewNum(nums);
}

const submitTarget = () =>  {
  setNewTarget(target);
}

  return(
    <div className='web'>
      <div className='app_container'>
        <h1>Input</h1>
        <p>input an array of numbers</p>
        <input
        type='text'
        value={nums}
        onChange={handleNum} />

        <h1>Target</h1>
        <p>input a target number</p>
        <input
        type='text'
        value={target}
        onChange={handleTarget} />

        <button
        style={
          {display: 'block',
          margin: '20px'}}
        onClick={ () => {submitNum(); submitTarget()}}
        >Submit</button>
      </div>

      <CalcApp
      nums={newNum}
      target={newTarget} />
    </div>
  );
}
