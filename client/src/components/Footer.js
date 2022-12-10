import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className='footer'>
        <div className='box'>
          <h3>quick links</h3>
          <Link to='/'>Home</Link>
          <br />
          <Link to='/appointment'>Appointment</Link>
          <br />
          <Link to='/AvailableCourses'>Available courses</Link>
          <br />
          <Link to='/contact'>Contact Us</Link>
          <br />
        </div>

        <div className='timing'>
          <h3>Contact Us</h3>
          <p>
            <i className='fas fa-phone'></i> +254719535899
          </p>
          <p>
            <i className='fas fa-envelope'></i> moringa@moringa.edu
          </p>
          <p>
            <i className='fas fa-map'></i> Nairobi, Kenya
          </p>
          <div className='share'>
            <i class='fa-brands fa-square-instagram'></i>
            <i class='fa-brands fa-facebook-f'></i>
            <i class='fa-brands fa-twitter'></i>
            <i class='fa-brands fa-linkedin'></i>
            <i class='fa-brands fa-pinterest'></i>
          </div>
        </div>

        <div className='box'>
          <h3>opening hours</h3>
          <p>
            Week-days : <i> 7:00am - 4:30pm </i>
          </p>
          <p>
            Saturday: <i> 7:00am - 10:30AM </i>
          </p>
          <p>
            Holidays : <i> 7:00am - 10:30AM </i>
          </p>
          <p>
            sunday : <i> closed </i>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
