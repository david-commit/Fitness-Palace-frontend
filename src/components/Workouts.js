import React from "react";
import "./Workouts.css";
import train from "../img/dumbells.jpg";
import bike from "../img/indoor bike.png";
import zumba from "../img/zumba-dance.jpg";
import defence from "../img/self defence.jpeg";
import yoga from "../img/yoga1.jpg";
import weights from "../img/weight lifting.webp";
import aerobics from "../img/aerobics.jpeg";
import treadmill from "../img/treadmill.webp";
import legs from "../img/leg workout.jpg";
import pilates from "../img/pilates.webp";
import online from "../img/online.jpeg";
import personal from "../img/personal.jpg";

function Workouts() {
  return (
    <>
      <h1 id="title">Available Workouts</h1>
      <div className="workouts">
        <div class="card">
          <img src={train} alt="Avatar" />
          <div class="container">
          <h4>Aerobics</h4>
          </div>
        </div>
        <div class="card">
          <img src={bike} alt="Avatar" />
          <div class="container">
            <h4>Indoor Bike</h4>
          </div>
        </div>
        <div class="card">
          <img src={zumba} alt="Avatar" />
          <div class="container">
            <h4>Zumba</h4>
          </div>
        </div>
        <div class="card">
          <img src={defence} alt="Avatar" />
          <div class="container">
            <h4>Self defence</h4>
          </div>
        </div>
        <div class="card">
          <img src={yoga} alt="Avatar" />
          <div class="container">
            <h4>Yoga</h4>
          </div>
        </div>
        <div class="card">
          <img src={weights} alt="Avatar" />
          <div class="container">
            <h4>Weight lifting</h4>
          </div>
        </div>
        <div class="card">
          <img src={aerobics} alt="Avatar" />
          <div class="container">
            <h4>Aerobics</h4>
          </div>
        </div>
        <div class="card">
          <img src={treadmill} alt="Avatar" />
          <div class="container">
            <h4>Treadmill</h4>
          </div>
        </div>
        <div class="card">
          <img src={legs} alt="Avatar" />
          <div class="container">
            <h4>Leg Workouts</h4>
          </div>
        </div>
        <div class="card">
          <img src={pilates} alt="Avatar" />
          <div class="container">
            <h4>Pilates</h4>
          </div>
        </div>
        <div class="card">
          <img src={online} alt="Avatar" />
          <div class="container">
            <h4>Online Training</h4>
          </div>
        </div>
        <div class="card">
          <img src={personal} alt="Avatar" />
          <div class="container">
            <h4>Personal Training</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Workouts;
