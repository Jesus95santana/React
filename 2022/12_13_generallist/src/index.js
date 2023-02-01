import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Info() {
  return (
    <section className="infoBox">
      <h1>Jake from State Farm</h1>
      <p>bruh asdfjkalsdjfl;kadsfjkl;asdjfkl;asdjfksdjf
    fjkadsjf;adsfjk;adsjf;dsajf;sdjkf;jsadfjl;sd
    flkjadksl;jfl;kasdjfkljdslfj;asdfjk
    ;asdjfkldfkhadskfjdsk;fjkasdjf;</p>
      <ul>
        <li>Paris</li>
        <li>Jupiter</li>
        <li>Down a rabbit hole</li>
        </ul>
    </section>
  );
}

ReactDOM.render(<Info />, document.getElementById('root'));
