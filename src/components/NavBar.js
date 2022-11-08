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
              <NavLink
                exact
                to='/'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to='/Workouts'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                Workouts
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to='/trainers'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                Trainers
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                exact
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                Contact Us
              </NavLink>
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
