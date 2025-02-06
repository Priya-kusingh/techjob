import React, { useState } from "react";
import "./Service.css";
import serviceImage1 from "../img/linux.png";
import serviceImage2 from "../img/plsql.png";
import serviceImage3 from "../img/pyth.jpg";
import serviceImage4 from "../img/aws.png";
import serviceImage5 from "../img/perl.jpg";
import serviceImage6 from "../img/tools.png";
import serviceImage7 from "../img/software-architect.jpg";
import serviceImage8 from "../img/mobile-app.jpg";
import serviceImage9 from "../img/Site-realiablity.jpg";
import serviceImage10 from "../img/cybersecurity.jpg";
import serviceImage11 from "../img/Big-data.jpeg";
import serviceImage12 from "../img/machine-learning.jpg";
import serviceImage13 from "../img/data-architecht.jpg";
import serviceImage14 from "../img/database-admin.jpg";
import serviceImage15 from "../img/CTO.jpg";
import call from "../img/calls.png";
import resume from "../img/resume.png";
import interview from "../img/int.png";
import user from "../img/user.png";
import mock from "../img/Mock.jpg";
import clock from "../img/clock.png";
import dev from "../img/dev.png";
import tel from "../img/tel.png";
import learn from "../img/learn.png";

const services = [
  {
    id: 1,
    name: "Application Support Engineer",
    image: serviceImage1,
    link: "#application ",
  },
  {
    id: 2,
    name: "Backend Developer",
    image: serviceImage2,
    link: "#backend",
  },
  {
    id: 3,
    name: "Python Developer",
    image: serviceImage3,
    link: "#python",
  },
  {
    id: 4,
    name: "cloud Engineer",
    image: serviceImage4,
    link: "#cloud ",
  },
  {
    id: 5,
    name: "Frontend Developer",
    image: serviceImage5,
    link: "#frontend",
  },
  {
    id: 6,
    name: "All service tools",
    image: serviceImage6,
    link: "#tools",
  },
  {
    id: 7,
    name: "Software Architect",
    image: serviceImage7,
    link: "#software",
  },
  {
    id: 8,
    name: "Mobile App Developer",
    image: serviceImage8,
    link: "#mobile",
  },
  {
    id: 9,
    name: "Site Realiability Engineer",
    image: serviceImage9,
    link: "#site",
  },
  {
    id: 10,
    name: "Cyber Security Engineer",
    image: serviceImage10,
    link: "#cyber",
  },
  {
    id: 11,
    name: "Big Data Engineer",
    image: serviceImage11,
    link: "#big",
  },
  {
    id: 12,
    name: "Machine Learning",
    image: serviceImage12,
    link: "#machine",
  },
  {
    id: 13,
    name: "Data Architect",
    image: serviceImage13,
    link: "#data",
  },

  {
    id: 14,
    name: "DBA",
    image: serviceImage14,
    link: "#dba",
  },
  {
    id: 15,
    name: "Chief Technology Officer",
    image: serviceImage15,
    link: "#chief",
  },
];

const features = [
  {
    icon: call,
    title: "Placement Support",
    description:
      "Complete support from our dedicated placement team until you get a job",
  },
  {
    icon: resume,
    title: "Resume Building",
    description: "Resume sharing in our network of 70+ hiring partners",
  },
  // {
  //   icon: "/path-to-job-application-icon",
  //   title: "AlmaX Job Application",
  //   description: "End to end application tracking of multiple interview rounds",
  // },
  {
    icon: interview,
    title: "Interviews Preparation",
    description: "Professional interviews assistance",
  },
  {
    icon: user,
    title: "Dedicated Career Coach",
    description: "Expert career coaches to guide you throughout the program",
  },
  {
    icon: mock,
    title: "Mock Interview",
    description:
      " Mock interviews are incredibly valuable for candidates to build confidence and get constructive feedback",
  },
];

// ___________________________

// __________________________________________________-
const Service = () => {
  return (
    <section className="service-section">
      <div className="course">
        <h2>ALL MY COURSES</h2>
      </div>
      <div className="service-container">
        {services.map((service) => (
          <div className="coursename">
            <div className="service-card" key={service.id}>
              <div className="service-image">
                <img src={service.image} alt={service.name} />
              </div>
              <div className="service-content">
                <a href={service.link} className="service-link">
                  {service.name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* --------my servises------- */}
      <div className="course">
        <h2>Carrier service</h2>{" "}
      </div>
      <div className="feature-section">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <img src={feature.icon} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      {/* feauter _____________ */}

      <div className="course">
        <h2>A Flexible Program Created for you</h2>
      </div>
      <div className="faq-section">
        <div className="faq-item">
          <img src={dev} alt="Code" />
          <h3>Develop skills for real career growth</h3>
          <p>
            Cutting-edge curriculum designed in guidance with industry and
            academia to develop job-ready skills
          </p>
        </div>
        <div className="faq-item">
          <img src={learn} alt="Code" />
          <h3>
            Learn from experts active in their field, not out-of-touch trainers
          </h3>
          <p>
            Leading practitioners who bring current best practices and case
            studies to sessions that fit into your work schedule.
          </p>
        </div>
        <div className="faq-item">
          <img src={tel} alt="Code" />
          <h3>Learn by working on real-world problems</h3>
          <p>
            projects involving real world data sets with virtual labs for
            hands-on learning
          </p>
        </div>
        <div className="faq-item">
          <img src={clock} alt="Code" />
          <h3>How will I resolve my doubts?</h3>
          <p>
            You can get your doubts resolved by connecting with our subject
            matter experts over text or video call!
          </p>
        </div>
      </div>

      {/* ___________________carriculam section_________ */}
    </section>
  );
};

export default Service;
