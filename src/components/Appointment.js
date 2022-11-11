import React from 'react';
import './Appointment.css';
import { Link } from 'react-router-dom';

function Appointment() {
  return (
    <div className='appointment-form'>
      <h1>Book Appointment</h1>
      <form>
        <label htmlFor='name'>First Name</label>
        <input type='text' name='name' placeholder='fname' />

        <label htmlFor='name'>Last Name</label>
        <input type='text' name='name' placeholder='lname' />

        <label htmlFor='date'>Select Date</label>
        <input type='text' placeholder={new Date().toLocaleDateString()} />

        <label htmlFor='duration'>Duration</label>
        <input type="text" name='duration' placeholder='90 minutes'/>

        <select name='workout-selection' id='workout-selection'>
          <option value='Workout1'>Aerobics</option>
          <option value='Workout2'>Indoor Bike</option>
          <option value='Workout3'>Zumba</option>
          <option value='Workout4'>Self Defence</option>
          <option value='Workout5'>Weights</option>
        </select>

        <select name='trainer-selection' id='trainer-selection'>
          <option value='Trainer1'>Trainer1</option>
          <option value='Trainer2'>Trainer2</option>
          <option value='Trainer3'>Trainer3</option>
          <option value='Trainer4'>Trainer4</option>
          <option value='Trainer5'>Trainer5</option>
        </select>
        <Link to="/welcome">
          <button type='submit'>Book</button>
        </Link>
      </form>
    </div>
  );
}

export default Appointment;


