import React from 'react';
import HeaderCSS from './header.module.css';
import AppleIcon from './apple.jpeg';

const headpage = (
  <header
  className={HeaderCSS.container}>
    <figure
    className={HeaderCSS.figurebox}>
      <img
      className={HeaderCSS.imgbox}
      src={AppleIcon}/>
      <h3
      className={HeaderCSS.h3box}>Apple inc.</h3>
    </figure>
    <ul
    className={HeaderCSS.ulbox}>
      <li
      className={HeaderCSS.libox}>
      <a
      className={HeaderCSS.abox}>Home</a></li>
      <li
      className={HeaderCSS.libox}>
      <a
      className={HeaderCSS.abox}>Pictures</a></li>
      <li
      className={HeaderCSS.libox}>
      <a
      className={HeaderCSS.abox}>Contact</a></li>
    </ul>
  </header>
);

export class Header extends React.Component {
  render() {
    return headpage;
  }
};
