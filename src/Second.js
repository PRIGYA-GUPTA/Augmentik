import React from "react";
import "./Second.css";
import CarouselPage from "./CarouselPage";

export default function Second() {
  return (
    <div className="Second">
      <div className="container">
        <h1>
          Curious about the perfect <br></br>skincare routine?
        </h1>
        <p className="para1">
          Let us help you find the perfect provider for<br></br> your unique
          needs
        </p>
      </div>
      <div>
        <p className="para2">
          But don't worry, we've got you covered!Let us show you <br></br>how to
          keep your skin healthy and glowing
        </p>
      </div>
      <div className="caro">
        <CarouselPage />
      </div>
    </div>
  );
}
