import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header class='header '>
      <h1 class='h1 '>Yoga Classes</h1>
      <nav class=' nav'>
  <ul>
       <li><a class='as' href="/" ><span>Home</span></a></li> 
       <li>  <a class='as'href="/"     ><span>About</span></a></li> 
       <li>  <a class='as'href="/user" ><span>Admission</span></a></li> 
       <li> <a class='as'href="/" ><span>Contact</span></a></li>
       </ul>
      </nav>
    </header>
  );
};

export default Header;