import React from "react";
import collage from "./photo.png";

export default function Hero() {
  return (
    <div>
      <div className="hero-item">
        <img className="hero-img" src={collage} alt = "collage image" />
      </div>
      <h1 className="hero-text1 section">Online <span className="epx"> Experiences Netlify </span></h1>
      <p className=" gray hero-text2 section ">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
