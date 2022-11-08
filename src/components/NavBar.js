import React from 'react';
import "./NavBar.css"
import logo from '../img/png-clipart-gym-logo-mark-gym.png';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <div class='menubar'>
        <Link to='/' style={{ color: '#ea4e3a', textDecoration: 'none' }}>
          <div class='logo'>
            <img src={logo} alt='logo' />
            <h1>Fitness Palace</h1>
          </div>
        </Link>
        <nav>
          <ul>
            <li>
              <a href='../index.html'>Home</a>
            </li>
            <li>
              <a href='../how-it-works/how-it-works.html'>How it Works</a>
            </li>
            <li>
              <a href='../products/products.html'>Products</a>
            </li>
            <li>
              <a href='../contact-us/contact-us.html'>Contact Us</a>
            </li>
          </ul>
        </nav>
        <Link exact to='/login' id='menu-login-link'>
          <button type='button' id='menu-login-button'>
            LOG IN
          </button>
        </Link>
      </div>
    </header>
  );
  }
  
  export default NavBar;
