import React from 'react';
import "./NavBar.css"
import logo from '../images/logo.jpg';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <div class='menubar'>
        <Link to='/' style={{ color: '#ea4e3a', textDecoration: 'none' }}>
          <div class='logo'>
            <img src={logo} alt='logo' />
            <h1>DevOps School</h1>
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
                to='/AvailableCourses'
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                Courses
              </NavLink>
            </li>
          <li>
              <NavLink
                to='/appointment'
                exact
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
              >
                Book appointment
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
            Log in as a tutor
          </button>
        </Link>
        <Link exact to='/login' id='menu-login-link'>
          <button type='button' id='menu-login-button'>
            Log in as a student
          </button>
        </Link>
        <Link exact to='/enroll' id='menu-login-link'>
          <button type='button' id='menu-login-button'>
            Enroll as a new student
          </button>
        </Link>
      </div>
    </header>
  );
  }
  
  export default NavBar;
