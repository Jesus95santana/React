import React from 'react';
import ReactDOM from 'react-dom';
import { Todo } from './App.js';
import IndexCSS from './index.css'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {item: 'computer'};
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    const anItem = this.item;
    // this.setState({item: something});
  }

  render() {
    return(
      <div>
        <Todo />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
