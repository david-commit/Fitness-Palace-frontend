import React from 'react'
import "./Appointment.css"


function Appointment() {
  return (
    <div>
      <h1>Appointment</h1>
      <div>
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div className="time">
        <input type="date" name="date" value="" placeholder="Date" />
      
      
        <input
          type="datetime-local"
          name="duration"
          value=""
          placeholder="Duration"
        />
      </div>
      <div>
        <input type="text" name="trainor" placeholder="Trainor" />
      </div>
      <div>
        <button className="button" type="submit">
          BOOK
          </button>
      </div>
    </div>
  );
}

export default Appointment
