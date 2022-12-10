import React from "react";
import "./AvailableCourses.css";
import Data from "../images/DataScience.png";
import Devops from "../images/devops.png";
import ProductDesign from "../images/ProductDesign.jpg";
import SoftwareEng from "../images/SoftwareEng.jpg";
import ComputerS from "../images/computerS.png";
import Statistics from "../images/Stats.jpg";
function AvailableCourses() {
  return (
    <>
      <h1 id="title">Moringa School Executive Members</h1>
      <div className="course">
        <div class="card">
          <img src={Data} alt="Avatar" />
          <h4>Data Science</h4>
          {/* <div class="container">
          </div> */}
        </div>
        <div class="card">
          <img src={Devops} alt="Avatar" />
          <div class="container">
            <h4>DevOps</h4>
          </div>
        </div>
        <div class="card">
          <img src={ProductDesign} alt="Avatar" />
          <div class="container">
            <h4>Product Design</h4>
          </div>
        </div>
        <div class="card">
          <img src={SoftwareEng} alt="Avatar" />
          <div class="container">
            <h4>Software Engineering</h4>
          </div>
        </div>
        <div class="card">
          <img src={ComputerS} alt="Avatar" />
          <div class="container">
            <h4>Computer Science</h4>
          </div>
        </div>
        <div class="card">
          <img src={Statistics} alt="Avatar" />
          <div class="container">
            <h4>Statistics and Data development</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default AvailableCourses;
