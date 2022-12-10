import React, { useRef } from 'react'
import "./Contact.css"
//import map_image from "../img/map.png"

function Contact() {
  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const messageRef = useRef()

  return (
    <div>
    <h1 id='us'>Contact Us</h1>
    <div className='topsection'>
      <div className='row'>
        <h2>Get in touch</h2>
        <br />
        <p>
        Do you have a question about our products? We’d love to hear from you. Here’s how you can reach us..
        </p>
      </div>
      <div className='row'>
        <h2>Connect with our offices</h2>
        <br />
        <p>
        Ngong Lane, Ngong Lane Plaza, 1st Floor, Nairobi Kenya
        </p>
      </div>
    </div>
    <div className='counties'>
      <div>
        <h3>Software Engineering</h3>
        <p>
          <i className='fa-solid fa-phone' /> +254728366036
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> software@devops.edu
        </p>
      </div>
      <div>
        <h3>Statistics and Data science</h3>
        <p>
          <i className='fa-solid fa-phone' /> +254719535899
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> statanddatas@devops.edu
        </p>
      </div>
    </div>
    <div className='social'>
      <div className='platforms'>
        <div>
          <p>
            <i className='fa-brands fa-instagram' /> @DevOps_edu
          </p>
        </div>
        <div>
          <p>
            <i className='fa-brands fa-twitter' /> @DevOps_edu
          </p>
        </div>
        <div>
          <p>
            <i className='fa-brands fa-facebook' /> @DevOps_edu
          </p>
        </div>
      </div>

      <div className='form'>
        <h3 id='mail'>Contact Us</h3>
        <form>
          <div className='labels'>
            <label htmlFor='name'>Name</label>
            <br />
            <input
              type='text'
              id='fullname'
              placeholder='John Doe'
              required
              ref={nameRef}
            />
          </div>
          <div className='labels'>
            <label htmlFor='name'>Email Address</label>
            <br />
            <input
              type='email'
              id='fullname'
              placeholder='me@example.com'
              required
              ref={emailRef}
            />
          </div>
          <div className='labels'>
            <label htmlFor='name'>Phone Number</label>
            <b>
              <input type='tel' id='fullname' placeholder={+254} required ref={phoneRef}/>
              <br />
            </b>
          </div>
          <b>
            <div className='labels'>
              <label htmlFor='name'>Message</label>
              <br />
              <textarea
                type='text'
                id='usermessage'
                placeholder='Write your message here..'
                style={{
                  height: '150px',
                  width: '100%',
                  borderRadius: '12px',
                  padding: '15px',
                }}
                defaultValue={''}
                ref={messageRef}
              />
            </div>
            <div className='btnclassName'>
              <button type='submit' id='btn' value='submit'>
                Submit
              </button>
            </div>
          </b>
        </form>
      </div>
    </div>
    <b></b>
  </div>
        
  )
}

export default Contact