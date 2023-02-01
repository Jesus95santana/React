import React from 'react';
import MainCSS from './main.module.css';
import Iphone4 from './iphone4.jpeg';

const mainpage = (
  <main
  className={MainCSS.container}>
    <h2
    className={MainCSS.h2box}>Introducing the Iphone XV</h2>
    <figure
    className={MainCSS.figurebox}>
      <img
      className={MainCSS.imgbox}
      src={Iphone4}/>
    </figure>

    <section
    className={MainCSS.sectionbox}>With a sleek edge and a fingerprint based touch button the techno world will be recolutionized by its amazing design. on top of having great gpu processor its built in retina display is shatter proof.</section>
  </main>
);

export class Main extends React.Component {
  render() {
    return mainpage;
  }
}
