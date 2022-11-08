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
          <input type="date" name="date" placeholder="Date" />
        </div>
        <div>
          <input type="date" name="date" placeholder="Date" />
        </div>
        <div>
          <input type="date" name="date" placeholder="Date" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Appointment
