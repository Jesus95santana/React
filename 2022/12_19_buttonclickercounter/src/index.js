import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './App.js'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.clickTotal = this.clickTotal.bind(this);
  }

  clickTotal() {
    const total = this.state.clicks;

    this.setState({clicks: total + 1});
  }

  render () {
    return (
        <div>
          <Child onClick={this.clickTotal}/>
          <p>{this.state.clicks}</p>
        </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
