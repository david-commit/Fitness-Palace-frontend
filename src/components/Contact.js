import React from 'react'
import "./Contact.css"
//import logo from "../img/location_icon.png"

function Contact() {
  return (
    <div className='container'>
       <div className="mb-1">
            <h1>Feel free to ask us </h1>
            <h2>We are open to any queries,concerns and suggestions</h2>
              {/* <img src={logo} alt="location icon"/> */}
              <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          P.O Box 18188-00100, Nairobi
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                          <a href="tel://07072222">+254707222222</a>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <a href="#">fitness-palace.com</a>
                        </p>
                      </div>
                    </div>
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