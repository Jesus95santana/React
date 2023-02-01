import React from 'react';


export class Button1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'blue'};
    this.colorChange = this.colorChange.bind(this);
  }

  colorChange() {
    const change = this.state.color == 'blue' ? 'green' : 'blue';
    this.setState({ color: change });
  }

  render () {
    return (
      <div style = {{background: this.state.color}}>
        <button
      onClick={this.colorChange}>
          <span>Color Changer</span>
        </button>
      </div>
    )
  }
}
