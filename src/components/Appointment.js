import React from 'react';
import './Appointment.css';

function Appointment() {
  return (
    <div className='appointment-form'>
      <h1>Book Appointment</h1>
      <form>
        <label htmlFor="name">Full Name</label>
        <input type='text' name='name' placeholder='Name' />

        <label htmlFor='date'>Date</label>
        <input type='date' name='date' value='' placeholder='Date' />
        <label htmlFor='finish-time'>Start Time</label>

        <input
          type='time'
          name='Start Time'
          value=''
          placeholder='Start Time'
        />
        <label htmlFor='finish-time'>Finish Time</label>
        <input type='time' name='finish-time' value='' placeholder='End Time' />
        <select name='workout-selection' id='workout-selection'>
          <option value='Workout1'>Workout1</option>
          <option value='Workout2'>Workout2</option>
          <option value='Workout3'>Workout3</option>
          <option value='Workout4'>Workout4</option>
          <option value='Workout5'>Workout5</option>
        </select>

        <select name='trainer-selection' id='trainer-selection'>
          <option value='Trainer1'>Trainer1</option>
          <option value='Trainer2'>Trainer2</option>
          <option value='Trainer3'>Trainer3</option>
          <option value='Trainer4'>Trainer4</option>
          <option value='Trainer5'>Trainer5</option>
        </select>

        <button type='submit'>Book</button>
      </form>
    </div>
  );
}

export default Appointment;

// =================ORIGINAL
// <div>
//   <h1>Appointment</h1>
//     <div>
//       <input type="text" name="name" placeholder="Name" />
//     </div>
//     <div>
//       <input type="date" name="date" value="" placeholder="Date" />
//     </div>
//     <div>
//       <input
//         type="datetime-local"
//         name="duration"
//         value=""
//         placeholder="Duration"
//       />
//     </div>
//     <div>
//       <input type="text" name="trainor" placeholder="Trainor" />
//     </div>
//     <input type="submit" value="Book" />
// </div>
