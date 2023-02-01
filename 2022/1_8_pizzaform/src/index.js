import React from 'react';
import ReactDOM from 'react-dom';
import { PizzaForm } from './form.module.js';
import { IndexCSS } from './index.css';

class Index extends React.Component{
  render() {
    return(
      <>
        <h1>Cusomization Pizza Form</h1>
        <PizzaForm
        className='pizaform' />
      </>
    );
  }
};

ReactDOM.render(<Index />, document.getElementById('root'));
