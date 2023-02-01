import React from 'react';
import ReactDOM from 'react-dom';
import IndexCSS from './index.css';
import { TopPage } from './TopPage.js';
import { MiddlePage } from './MiddlePage.js';
import { BottomPage } from './BottomPage.js';


class Index extends React.Component {
  render() {
    return (
      <div>
      <TopPage />
      <MiddlePage />
      <BottomPage />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
