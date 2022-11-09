import React from 'react'
import "./Contact.css"
//import logo from "../img/location_icon.png"

function Contact() {
  return (
    <div className='body'>
       <div className="mb-1">
            <h1>Feel free to ask us </h1>
            <h2>We are just a dial away from any queries,concerns and suggestions.</h2>
              {/* <img src={logo} alt="location icon"/> */}
        </div>
      <div className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your email address" />
        </div>
        <div className='query'>
        <input type="text" name="query" placeholder="Your query"/>
        </div>
      <button className="btn" type="submit">
          Send us a Message
      </button>
    </div>
  )
}

export default Contact