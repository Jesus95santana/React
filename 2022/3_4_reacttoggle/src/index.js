import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Color from './Color.js';
import Counter from './Counter.js';
import './index.css';

export default function Index() {
  return(
    <div className="Index">
      <h1>Hello world</h1>
      <App/>
      <Color/>
      <Counter/>
    </div>
  )
}

ReactDOM.render(<Index/>, document.getElementById('root'));
