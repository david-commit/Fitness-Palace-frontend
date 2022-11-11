import React from 'react';
import './Home.css';
import bannerimg from '../img/jump-fitness-workout1.png';
import { Link } from "react-router-dom"

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
          <Link to='/appointment'>
            <button type='button'>BOOK APPOINTMENT</button>
          </Link>
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
      {/* ==PROGRESS== */}
      <div className='progress-cont'>
        <div className='progress-cont-cont'>
          <br />
          <br />
          <h2>IMPROVE YOUR BODY POWER</h2>
          <p>
            Workouts are critical in maintaining a healthy body. You may wonder
            when is the ideal time to start. The time is now.
          </p>
          <Link to='/workouts'>
            <button type='button'>See Workouts</button>
          </Link>
          <br />
          <br />
        </div>
        <div className='progress-cont-pro'>
          <br />
          <h4>Immunity</h4>
          <progress id='file' value='82' max='100'></progress>
          <h4>Heart &amp; Energy</h4>
          <progress id='file' value='87' max='100'></progress>
          <h4>Joint &amp; Bones</h4>
          <progress id='file' value='92' max='100'></progress>
          <h4>Skin</h4>
          <progress id='file' value='85' max='100'></progress>
          <br />
        </div>
      </div>
      {/* ==PROGRESS== */}
      {/* ==PRICING== */}
      <div className='pricing'>
        <div className='pricing-header'>
          <h1>OUR PRICING PLANS</h1>
          <p>
            Fitness Arena strives to ensure that all clients receive affordable
            yet quality experience at the gym <br /> facility. Looking forward
            to hosting you.
          </p>
        </div>
        <div className='pricing-cards'>
          <div className='pricing-card'>
            <section className='pricing-card-package'>MONTHLY PACKAGE</section>
            <br />
            <h1>KES 6000</h1>
            <h4>PER MONTH</h4>
            <p>
              PERSONAL TRAINING <br /> NUTRITIONAL GUIDANCE <br /> SPECIALIZED
              WORKOUTS
            </p>
            <Link to='/signup'>
              <button type='button'>Sign Up</button>
            </Link>
          </div>
          <div className='pricing-card' style={{backgroundColor: "black", border: "1px solid red", scale: "1.3"}}>
            <section className='pricing-card-package'>
              QUARTERLY PACKAGE
            </section>
            <br />
            <h1>KES 16000</h1>
            <h4>PER 3 MONTHS</h4>
            <p>
              PERSONALIZED TRAINING <br /> NUTRITIONAL GUIDANCE <br />{' '}
              SPECIALIZED WORKOUTS
            </p>
            <Link to='/signup'>
              <button type='button'>Sign Up</button>
            </Link>
          </div>
          <div className='pricing-card'>
            <section className='pricing-card-package'>1 YEAR PACKAGE</section>
            <br />
            <h1>KES 65000</h1>
            <h4>PER 12 MONTHs</h4>
            <p>
              UNLIMITED GYM ACCESS <br /> PERSONALIZED TRAINING <br /> NUTRITIONAL GUIDANCE
            </p>
            <Link to='/signup'>
              <button type='button'>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
      {/* ==PRICING== */}
    </div>
  );
}

export default Home;
