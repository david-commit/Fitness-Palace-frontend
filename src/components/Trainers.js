import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Trainers.css"

function Trainers() {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetch('https://gymit-api.herokuapp.com/trainers')
      .then((response) => response.json())
      .then((data) => setTrainers(data));
  }, []);
  console.log(trainers);

  const mappedTrainers = trainers.map((trainer) => {
    return (
      <div className='trainer-card' key={trainer.id}>
        <img src={trainer.image} alt='Trainer' />
        <div className='trainer-details'>
          <h3>{trainer.name}</h3>
          <p>{trainer.title}</p>
          <Link to='/' class='fab fa-facebook-f'></Link>
          {/*{trainer.facebook}*/}
          <Link to='/' class='fab fa-twitter'></Link> {/*{trainer.twitter}*/}
          <Link to='/' class='fab fa-linkedin'></Link> {/*{trainer.linkedin}*/}
          <Link to='/' class='fab fa-pinterest'></Link> {/*{trainer.pintrest}*/}
        </div>
      </div>
    );
  });
  return (
    <div className='trainers-container'>
      <h1 className='trainers-heading'>Meet the Team</h1>
      <div className='trainers'>{mappedTrainers}</div>
      <div className='join-us'>
        <Link to='/addtrainer'>
          <button type='button'>JOIN THE TEAM</button>
        </Link>
      </div>
    </div>
  );
}

export default Trainers;
