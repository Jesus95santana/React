import React from 'react';
import ReactDOM from 'react-dom';
import IndexCSS from './index.css';
import { Header } from './header.js';
import { Main } from './main.js';
import { Footer } from './footer.js';

function Page() {
  return (
    <body >
      <Header />
      <Main />
      <div
      className='emptybox'></div>
      <Main />
      <Footer />
    </body>
  );
}

ReactDOM.render(<Page />, document.getElementById('root'));
