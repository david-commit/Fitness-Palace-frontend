import React from 'react';
import './Appointment.css';
import { Link } from 'react-router-dom';

function Appointment() {
  return (
    <div className='appointment-form'>
      <h1>Book Appointment</h1>
      <form>
        <label htmlFor='name'>First Name</label>
        <input type='text' name='name' placeholder='first name' />

        <label htmlFor='name'>Last Name</label>
        <input type='text' name='name' placeholder='last name' />

        <label htmlFor='date'>Select Date</label>
        <input type='text' placeholder={new Date().toLocaleDateString()} />

        <label htmlFor='duration'>Duration</label>
        <input type="text" name='duration' placeholder='90 minutes'/>

        <select name='workout-selection' id='workout-selection'>
          <option value='Workout1'>Defer</option>
          <option value='Workout2'>Queries on results</option>
        </select>
        <Link to="/welcome">
          <button type='submit'>Book</button>
        </Link>
      </form>
    </div>
  );
}

export default Appointment;


