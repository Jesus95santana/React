import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
// import DoctorImg from './doctor.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <a target="_blank" href={process.env.PUBLIC_URL + "./11_14_Flex_Tea/document.html"} > terminos</a>
      </div>);
  }
}
export default App;
