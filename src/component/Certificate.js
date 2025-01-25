import React, { useState } from "react";
import "./Certificate.css"; // External CSS file for styling

import team1 from "../img/kartik.jpg";
import team2 from "../img/sonam.jpg";
import team3 from "../img/vikas.jpeg";
import team4 from "../img/rakesh.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hcl from "../img/hcl.png";
import airtel from "../img/Airtel.jpeg";
import tcs from "../img/tcs1.png";
import ericission from "../img/ericission.png";
import wipro from "../img/wipro.png";
import accenture from "../img/Accenture.png";
import capgemini from "../img/capgemini.png";
import infosys from "../img/INFOSYS.jpg";
import ibm from "../img/IBM.jpeg";

const teamMembers = [
  {
    icons: 1,
    name: "Mr. Jeetendra ",
    image: team1, // replace with the actual image source
  },
  {
    icons: 2,
    name: "Miss. Shreya",
    image: team2, // replace with the actual image source
  },
  {
    icons: 3,
    name: "Mr. Pravdhan Singh",
    image: team3, // replace with the actual image source
  },
  {
    icons: 4,
    name: "xyz",
    image: team4, // replace with the actual image source
  },
];

const firstRowImages = [
  { name: "HCL", logo: hcl },
  { name: "AIRTEL", logo: airtel },
  { name: "TCS", logo: tcs },
  // More images for the first row...
];

const secondRowImages = [
  { name: "ERICISSION", logo: ericission },
  { name: "WIPRO", logo: wipro },
  { name: "accenture", logo: accenture },
  // More images for the second row...
];

const thirdRowImages = [
  { name: "CAPGEMINI", logo: capgemini },
  { name: "IBM", logo: ibm },
  { name: "INFOSYS", logo: infosys },
  // More images for the third row...
];

// Settings for the 1st and 3rd rows (left to right autoplay)
const settingsLTR = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Show 4 images at a time
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024, // For tablets and large mobile devices
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600, // For small devices
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480, // For very small devices
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const faqs = [
  {
    question: "How do I resolve my doubts during the course?",
    answer:
      " You can attend live Q&A sessions, or reach out to our mentors via chat or email. Our instructors and support team are available to help.",
  },
  {
    question: "What are the prerequisites for joining the course?",
    answer:
      "There are no specific prerequisites. Our course is designed for beginners, as well as for professionals looking to enhance their",
  },
  {
    question: "Is this course suitable for beginners?",
    answer:
      "Absolutely! Our course is designed to accommodate beginners, intermediate learners, and even advanced professionals looking to deepen their knowledge.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer 24/7 support via email and chat. You can also attend live office hours with instructors to get help with specific concepts or projects.",
  },
];

// Settings for the 2nd row (right to left autoplay)
const settingsRTL = {
  ...settingsLTR, // Same settings as LTR, but with reversed direction
  rtl: true, // Set right-to-left direction for the second row
};
const Certificate = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="training-course-container">
      {/* // team member */}

      <div className="Team">
        <h2> Our Experience Facilities​</h2>
      </div>

      <div className="team-gallery-container">
        {teamMembers.map((member) => (
          <div className="team-member-card" key={member.icons}>
            <img
              src={member.image}
              alt={member.name}
              className="team-member-image"
            />
            <div className="team-member-name">{member.name}</div>
          </div>
        ))}
      </div>
      {/* ______________placepartner__ */}
      <div className="partners-carousel-container">
        <h2>Our Hiring Partner</h2>
        {/* First Row (Left to Right) */}
        <div className="carousel-row">
          <Slider {...settingsLTR}>
            {firstRowImages.map((image, index) => (
              <div key={index} className="partner-item">
                <img src={image.logo} alt={image.name} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Second Row (Right to Left) */}
        <div className="carousel-row">
          <Slider {...settingsRTL}>
            {secondRowImages.map((image, index) => (
              <div key={index} className="partner-item">
                <img src={image.logo} alt={image.name} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Third Row (Left to Right) */}
        <div className="carousel-row">
          <Slider {...settingsLTR}>
            {thirdRowImages.map((image, index) => (
              <div key={index} className="partner-item">
                <img src={image.logo} alt={image.name} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* _--------------------------frequentl ask questions section----------- */}

      <div className="faquent-container">
        <h2>Frequently Asked Questions</h2>

        <div className="faquent-items">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faquent-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faquent-question">
                {faq.question}
                <span className="faquent-toggle">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div className="faquent-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
