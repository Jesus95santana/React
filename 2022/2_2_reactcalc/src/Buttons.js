import React, { useState } from 'react';

export default function Buttons(num) {

  const [num,setNum] = useState();
  function pass(gotchu) {
    setNum(gotchu)
  }




return(
  <section className='button_container'>
    <button className='clear'>C</button>
    <button className='negative'>+/-</button>
    <button className='percent'>%</button>
    <button
    className='divide'
    onClick={pass(8)}>/</button>
    <button
    className='7'
    onClick={() => calculate('7')}>7</button>
    <button
    className='8'
    onClick={() => calculate('8')}>8</button>
    <button
    className='9'
    onClick={() => calculate('9')}>9</button>
    <button
    className='multiply'
    onClick={() => calculate('*')}>x</button>
    <button
    className='4'
    onClick={() => calculate('4')}>4</button>
    <button
    className='5'
    onClick={() => calculate('5')}>5</button>
    <button
    className='6'
    onClick={() => calculate('6')}>6</button>
    <button
    className='subtract'
    onClick={() => calculate('-')}>-</button>
    <button
    className='1'
    onClick={() => calculate('1')}>1</button>
    <button
    className='2'
    onClick={() => calculate('2')}>2</button>
    <button
    className='3'
    onClick={() => calculate('3')}>3</button>
    <button
    className='add'
    onClick={() => calculate('+')}>+</button>
    <button
    className='0'
    onClick={() => calculate('0')}>0</button>
    <button className='dot'>.</button>
    <button className='equal'>=</button>
  </section>
);
}
