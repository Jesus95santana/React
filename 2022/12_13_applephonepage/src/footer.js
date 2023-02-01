import React from 'react';
import FooterCSS from './footer.module.css';

const footerpage = (
  <footer
  className={FooterCSS.footerbox}>
    <ul
    className={FooterCSS.ulbox}>
      <li
      className={FooterCSS.libox}>About us</li>
      <li
      className={FooterCSS.libox}>Careers</li>
      <li
      className={FooterCSS.libox}>Donate</li>
    </ul>
    <span
    className={FooterCSS.spanbox}>copyright&copy;Jay Santana</span>
  </footer>
);

export class Footer extends React.Component {
  render() {
    return footerpage;
  }
}
