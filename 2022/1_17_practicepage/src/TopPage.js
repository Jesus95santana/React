import React from 'react';
import Ele from './img/ele.png';

export class TopPage extends React.Component {
  render() {
    return (
      <div
      className='Topbox'>
        <img
        src={Ele}/>
        <h1>Hello World</h1>
        <ul
        className='Toplist'>
          <li>home</li>
          <li>work</li>
          <li>fun</li>
        </ul>
      </div>
    );
  }
}
