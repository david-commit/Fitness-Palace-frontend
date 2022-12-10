import React from 'react'
import "./Welcome.css"

     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
     integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
     crossorigin="anonymous" referrerpolicy="no-referrer"/>

function Welcome() {
  return (
    <div className='Invites'>
     <p>
     <i class="fa-solid fa-check fa-8x" size="lg"></i>
    </p>

    <h2>Your application has been recieved, you will be contacted by our staff.</h2>
    <h3>Staff Expected to contact you</h3>
    <p>Name: tutor name</p>
    <p>Date: 01/30/2023</p>
    <p>Method: Phone call</p>

    </div>
  )
}

export default Welcome