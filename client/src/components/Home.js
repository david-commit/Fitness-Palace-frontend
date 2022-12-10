import React from 'react';
import './Home.css';
import Homeimage from '../images/origin2.jpg';
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <div className='home-banner'>
        <div className='home-banner-img'>
          <img src={Homeimage} alt='Banner' />
        </div>
        <div className='home-banner-content'>
          <h1>Moringa School</h1>
          <p>
          Through market-aligned skills training,
          we help learners build new career possibilities
          with greater confidence and capability.
          </p>
        </div>
      </div>
      {/* ==STATEMENT== */}
      <div className='info-cont'>
        <div className='info-cont-header'>
          <h1>Discover. Grow. Transform.</h1>
          <p>
          In Moringa we are transforming the way tech education is done in African Markets.
          All our programs are delivered through a blended learning approach that combines market-aligned courses, a classroom team of talented mentors with the skills and knowledge to deliver growth and results for learners, and an environment that supports student creativity, job market preparation in a fun, open, and transformative learning experience.
          We celebrate our diversity and value strong, professional relationships that help our students build their futures with greater confidence, capability, and possibility.
          </p>
        </div>
        <div className='info-cont-cards'>
          <div className='info-cont-card'>
          <i class="fa-solid fa-laptop-code"></i>
            <h1>DevOps Engineering</h1>
            <p>
            DevOps is a set of practices that combines software development and IT operations.
            Learn the methodologies used to improve work throughout the software development lifecycle.
            </p>
          </div>
          <div className='info-cont-card'>
          <i class="fa-solid fa-code-compare"></i>
            <h1>Product Design (UI/UX) Full-time</h1>
            <p>
            
            Learn how to curate stunning user experiences for products in the current digital world.
            Get the necessary skills to enable you to transform user research to high-fidelity interactive designs.
            Rest assured of a personalized meal plan for your fitness goals from our resident nutritionist upon request.
            </p>
          </div>
          <div className='info-cont-card'>
            <i class='fa-solid fa-code'></i>
            <h1>Part-time Software Engineering</h1>
            <p>
            Study part-time to become a Moringa Certified Software Engineer.
            After this course, you will be able to apply software engineering principles to build high quality websites and dynamic applications for end users.
            An essential feature in our facility that ensures the cleanliness and public health safety of our clients.
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
          <h2>Enroll</h2>
          <p>
          Join our passionate, hardworking team and help Moringa School prepare learners for their future careers in tech.
          </p>
          <Link to='/workouts'>
            <button type='button'>See Workouts</button>
          </Link>
          <br />
          <br />
        </div>
        <div className='progress-cont-pro'>
          <br />
          <h4>Software Development</h4>
          <progress id='file' value='90' max='100'></progress>
          <h4>Data Development</h4>
          <progress id='file' value='67' max='100'></progress>
          <h4>Programing and computer science</h4>
          <progress id='file' value='73' max='100'></progress>
          <h4>Full stack Developer</h4>
          <progress id='file' value='71' max='100'></progress>
          <br />
        </div>
      </div>
      {/* ==PROGRESS== */}
      {/* ==PRICING== */}
      <div className='pricing'>
        <div className='pricing-header'>
          <h1>Course Duration</h1>
          <p>
          To have a good chance of completing and graduating from this course:
          you will need to attend at least 80% of the classes,
          submit your independent projects in time for weekly grading,
          and have a working laptop.
          </p>
        </div>
        <div className='pricing-cards'>
          <div className='pricing-card'>
            <section className='pricing-card-package'>
            Statistics and/or Data Science
            </section>
            <br />
            <h1>20</h1>
            <h4>Weeks</h4>
            <p>
              Python <br /> STATA and SPSS <br />{' '}
              Tableau, SQL and R-software
            </p>
            <Link to='/signup'>
              <button type='button'>Enroll</button>
            </Link>
          </div>
          <div className='pricing-card' style={{backgroundColor: "black", border: "1px solid red", scale: "1.3"}}>
            <section className='pricing-card-package'>
            Junior Full-Stack Software Engineer
            </section>
            <br />
            <h1>20</h1>
            <h4>weeks</h4>
            <p>
              Javascript <br /> React<br /> Ruby on Rails
            </p>
            <Link to='/signup'>
              <button type='button'>Enroll</button>
            </Link>
          </div>
          <div className='pricing-card'>
            <section className='pricing-card-package'>DevOps Engineering</section>
            <br />
            <h1>8</h1>
            <h4>Weeks</h4>
            <p>
            Git <br /> Docker <br /> Jenkins
            </p>
            <Link to='/signup'>
              <button type='button'>Enroll</button>
            </Link>
          </div>
        </div>
      </div>
      {/* ==PRICING== */}
    </div>
  );
}

export default Home;
