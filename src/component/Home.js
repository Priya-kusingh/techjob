import React from "react";
import { Link } from "react-router-dom";
import "./HomeStyle.css";
import About from "./About.js";
import Service from "./Service.js";
import Certificate from "./Certificate.js";
import Contact from "./Contact.js";
import Google from "./Google.js";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="content">
          <h1>Welcome to Tech Job Mentors</h1>
          <Link to="/contact">
            <button className="btn">CONTACT US</button>
          </Link>
          <Link to="/about">
            <button className="button">ABOUT </button>
          </Link>
        </div>
      </div>
      <About />
      <Service />
      <Certificate />
      <Contact />
    </>
  );
};
export default Home;
