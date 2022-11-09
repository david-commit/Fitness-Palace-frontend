import React from 'react'
import "./Contact.css"
//import map_image from "../img/map.png"

function Contact() {
  return (
    <div>
    <h1 id='us'>Contact Us</h1>
    <div className='topsection'>
      <div className='row'>
        <h2>Help</h2>
        <br />
        <p>
          You can always get in touch with us. Our support team is always
          24hrs on the line. Reach us by chat or make a call for any urgent
          service
        </p>
      </div>
      <div className='row'>
        <h2>Feedback</h2>
        <br />
        <p>
          We value our customer's feedbak. do not hesutate toleave us a
          comment on our services. We're glad to hear from you
        </p>
      </div>
      <div className='row'>
        <h2>Address</h2>
        <br />
        <p>
          We are located along TwoMbili Street, at PikiByke Plaza, Nairobi
          Kenya.You can also check our websites to find our offices next to
          you
        </p>
      </div>
    </div>
    <div className='counties'>
      <div>
        <h3>Nairobi</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> nairobi@Fitness.com
        </p>
      </div>
      <div>
        <h3>Mombasa</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> mombasa@Fitness.com
        </p>
      </div>
      <div>
        <h3>Kisumu</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> kisumu@Fitness.com
        </p>
      </div>
    </div>
    <div className='counties'>
      <div>
        <h3>Kiambu</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> kiambu@Fitness.com
        </p>
      </div>
      <div>
        <h3>Taita Taveta</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> taita@Fitness.com
        </p>
      </div>
      <div>
        <h3>Kajiado</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> kajiado@Fitness.com
        </p>
      </div>
    </div>
    <div className='counties'>
      <div>
        <h3>Nakuru</h3>
        <p>
          <i className='fa-solid fa-phone' /> 0200123445
        </p>
        <p>
          <i className='fa-solid fa-envelope' /> nakuru@Fitness.com
        </p>
      </div>
      <div />
      <div />
    </div>
    <div className='social'>
      <div className='platforms'>
        <div>
          <p>
            <i className='fa-brands fa-instagram' /> @Fitness Palace
          </p>
        </div>
        <div>
          <p>
            <i className='fa-brands fa-twitter' /> @Fitness Palace
          </p>
        </div>
        <div>
          <p>
            <i className='fa-brands fa-facebook' /> @Fitness Palace
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
            />
          </div>
          <div className='labels'>
            <label htmlFor='name'>Phone Number</label>
            <b>
              <input type='tel' id='fullname' placeholder={+254} required />
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