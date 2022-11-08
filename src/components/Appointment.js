import React from 'react'
import "./Appointment.css"


function Appointment() {
  return (
    <div>
      <h1>Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div>
          <input type="text" name="date" placeholder="Date" />
        </div>
        <div>
          <input type="text" name="duration" placeholder="Duration" />
        </div>
        <div>
          <input type="text" name="trainor" placeholder="Trainor" />
        </div>
        <input type="submit" value="Book" />
      </form>
    </div>
  );
}

export default Appointment
