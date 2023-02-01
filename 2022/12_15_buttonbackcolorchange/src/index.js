import React from 'react';
import ReactDOM from 'react-dom';
import { Button1 } from './button1.js'
import { Button2 } from './button2.js'
import { Button3 } from './button3.js'

class Page extends React.Component {
  render() {
    return (
      <body >
        <Button1 />
      </body>
    )
  }
}

ReactDOM.render(<Page />, document.getElementById('root'));
