import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import DataSender from './DataSender.js';

export default function Index() {
const [title, setTitle] = useState('Hello');

function data2Index(data) {
  setTitle(data);
}

    return(
      <>
        <h1>{title}</h1>
        <App/>
        <DataSender
        data2Index={data2Index}/>
      </>
    )
}

ReactDOM.render(<Index/>, document.getElementById("root"));
