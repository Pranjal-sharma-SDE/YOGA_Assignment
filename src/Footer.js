import React from 'react';
import './Header.css'

const Footer = () => {
  return (
    <footer>
      <div class="footer-content">
        <p>Copyright @PJ Yoga Classes 2021</p>
        <h1> Developed By Pranjal Sharma </h1>
        <h2>UIET KANPUR</h2>
        <nav class=' nav'>
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/user">Classes</a></li>
          <li><a href="/profile">Contact</a></li>
        </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;