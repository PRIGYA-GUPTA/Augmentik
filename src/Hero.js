import React from "react";
import image1 from "./Images/shopnow.png";
import image2 from "./Images/finglobe.jpeg";
import image3 from "./Images/img3.png";

import "./Hero.css";
export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <h1>
          Unlock your best skin,<br></br>Get ready to glow like never before!
        </h1>
        <img className="img1" src={image1} alt="img1" />
      </div>
      <div className="container">
        <p>
          Shop our top-rated moisturizers,cleansers, and <br></br>serums, or
          book a facial at one of our partner locations
        </p>
        <img className="img2" src={image2} alt="img2" />
      </div>
      <div>
        <img className="img3" src={image3} alt="img3" />
      </div>
    </div>
  );
}
