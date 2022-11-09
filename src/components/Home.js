import React from 'react'
import "./Home.css"
import bannerimg from '../img/jump-fitness-workout1.png';

function Home() {
  return (
    <div>
      <div className='home-banner'>
        <div className='home-banner-img'>
          <img src={bannerimg} alt='Banner' />
        </div>
        <div className='home-banner-content'>
          <h1>THE BEST FITNESS STUDIO IN TOWN</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            excepturi ratione harum placeat sint, adipisci eaque tenetur fuga
            asperiores ea esse dicta, non sed ex quae quisquam laborum.
          </p>
          <button type='button'>BOOK APPOINTMENT</button>
        </div>
      </div>
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