<<<<<<< HEAD
import React from 'react';
import './App.css';

export default function App () {
  return (
    <div className='background'>
      <div className='calc_container'>
        <section className='screen'>
        </section>
        <section className='button_container'>
          <button className='C'>C</button>
          <button className='C'>+/-</button>
          <button className='C'>%</button>
          <button className='C'>/</button>
          <button className='C'>7</button>
          <button className='C'>8</button>
          <button className='C'>9</button>
          <button className='C'>x</button>
          <button className='C'>4</button>
          <button className='C'>5</button>
          <button className='C'>6</button>
          <button className='C'>-</button>
          <button className='C'>1</button>
          <button className='C'>2</button>
          <button className='C'>3</button>
          <button className='C'>+</button>
          <button className='C'>0</button>
          <button className='C'>.</button>
          <button className='C'>=</button>
        </section>
=======
import React, { useState } from 'react';
import Buttons from './Buttons.js';
import './App.css';

export default function App () {

  const [calc, setCalc] = useState('');
  const [answer, setAnswer] = useState('');

  const operators = ['+','-','*','/','%','.'];

  function calculate(value) {
    setCalc(calc + value);
  }

  return (
    <div className='background'>
      <div className='calc_container'>
        <input
        className='screen'
        value={''}/>
        <Buttons />
>>>>>>> ubuntu
      </div>
    </div>
  );
}
