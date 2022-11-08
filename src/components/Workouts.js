import React from "react";
import "./Workouts.css";
import train from "../img/undraw_personal_training_0dqn.png";
import trainer from "../img/undraw_indoor_bike_pwa4.png";

function Workouts() {
  return (
    <>
      <h1 id="title">Available Workouts</h1>
      <div className="workouts">
        <div class="card">
          <img src={train} alt="Avatar" />
          <div class="container">
            <h4>
              <b>Aerobics</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src={trainer} alt="Avatar" />
          <div class="container">
            <h4>
              <b>Indoor Bike</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src={train} alt="Avatar" />
          <div class="container">
            <h4>
              <b>Aerobics</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src={train} alt="Avatar" />
          <div class="container">
            <h4>
              <b>Aerobics</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src={train} alt="Avatar" />
          <div class="container">
            <h4>
              <b>Aerobics</b>
            </h4>
          </div>
        </div>
        <div class="card">
          <img src={train} alt="Avatar" />
          <div class="container">
            <h4>
              <b>Aerobics</b>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Workouts;
