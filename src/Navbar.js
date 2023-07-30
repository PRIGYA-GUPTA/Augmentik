import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import image1 from "./Images/neowell.png";
import image2 from "./Images/cart.png";
const Navbar = () => {
  return (
    <section className="navBarSection">
      <header className="header1 flex">
        <div className="navBar">
          <ul className="navLists flex">
            <li className="navItem">
              <a href="/" className="navLink">
                Beauty Treatments
              </a>
            </li>
            <li className="navItem">
              <a href="/" className="navLink">
                Product
              </a>
            </li>
            <img src={image1}></img>
          </ul>

          <ul className="navLists flex">
            <li className="navItem">
              <a href="/" className="navLink">
                Search
              </a>
            </li>
            <li className="navItem">
              <a href="/user" className="navLink">
                SignUp
              </a>
            </li>
            <img src={image2} style={{ width: "30px" }} />
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
