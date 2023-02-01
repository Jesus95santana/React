import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import Color from './color.js';
import Toggle from './toggle.js';
import Loader from './loader.js';
import Input from './input.js';
import Count from './counter.js';

import IndexCSS from './index.css';

function Index () {
  return(
    <>
      <App />
      <Count />
      <Input />
      <Toggle />
      <Loader />
      <Color />
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
