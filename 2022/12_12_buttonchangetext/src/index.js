import React from 'react';
import ReactDOM from 'react-dom';

// const page = (
//   <div>
//     <h1>Hello World</h1>
//     <section>
//       <p>{this.state.message}</p>
//       <button>Click Me</button>
//     </section>
//   </div>
// );

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 'Hello' };
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler() {
    this.setState(
      { message: 'goodbye' }
    );
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.buttonHandler}>Click Me</button>
      </div>
    );
  }
};

ReactDOM.render(<Page />, document.getElementById('root'));
