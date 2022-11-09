import React from "react";
import "./HomeBanner.css";
import bannerimg from "../img/jump-fitness-workout1.png"

function HomeBanner() {
  return (
    <div className="home-banner">
      <div className="home-banner-img">
        <img src={bannerimg} alt="Banner" />
      </div>
      <div className="home-banner-content">
        <h1>THE BEST FITNESS STUDIO IN TOWN</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          excepturi ratione harum placeat sint, adipisci eaque tenetur fuga
          asperiores ea esse dicta, non sed ex quae quisquam laborum.
        </p>
        <button type="button">BOOK APPOINTMENT</button>
      </div>
    </div>
  );
}

export default HomeBanner;
