import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Bool from './Bool.js';

export default function Index() {
  return(
    <div className="Index">
      <App/>
      <Bool/>
    </div>
  )
}

ReactDOM.render(<Index/>, document.getElementById('root'))
