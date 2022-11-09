import React from 'react'
import "./Home.css"


function Home() {
  return (
    <div>

      {/* ==STATEMENT== */}
      <div className='info-cont'>
        <div className='info-cont-header'>
          <h1>PUSH YOUR LIMITS FORWARD</h1>
          <p>
            At Fitness Palace we take pride in enabling our clients achieve
            their fitness goals one step at a time. Take a look at some of the
            features we offer.
          </p>
        </div>
        <div className='info-cont-cards'>
          <div className='info-cont-card'>
            <i class='fa-solid fa-dumbbell'></i>
            <h1>QUALITY EQUIPMENT'S</h1>
            <p>
              We have all equipments targeting all major muscles and all fitness
              components to suit everyone's needs.
            </p>
          </div>
          <div className='info-cont-card'>
            <i class='fa-solid fa-file-pen'></i>
            <h1>NUTRITION PLAN</h1>
            <p>
              Rest assured of a personalized meal plan for your fitness goals
              from our resident nutritionist upon request.
            </p>
          </div>
          <div className='info-cont-card'>
            <i class='fa-solid fa-shower'></i>
            <h1>SHOWER SERVICE</h1>
            <p>
              An essential feature in our facility that ensures the cleanliness
              and public health safety of our clients..
            </p>
          </div>
          <div className='info-cont-card'>
            <i class='fa-solid fa-fingerprint'></i>
            <h1>BIOMETRIC ACCESS</h1>
            <p>
              We ensure the safety and privacy of our clients by use of
              biometric access of the workout area to members only.
            </p>
          </div>
        </div>
      </div>
      {/* ==STATEMENT== */}
    </div>
  );
}

export default Home