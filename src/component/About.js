import React, { useState } from "react";
import "./AboutStyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    id: 1,
    name: "Neha ",
    package: "12 LPA",
    company: "Global Logic",
  },
  {
    id: 2,
    name: "Shivam Kumar",
    package: "11 LPA",
    company: "Airtel",
  },
  { id: 3, name: "Rahul Rana", package: "8.5 LPA", company: "PNB Bank" },
  {
    id: 4,
    name: "jyoti Singh",
    package: "9 LPA",
    company: "Payu",
  },
  { id: 5, name: "Altams Khan", package: "6 LPA", company: "FIS" },
  {
    id: 6,
    name: "Prabhar ",
    package: "11 LPA",
    company: "Wipro",
  },
  {
    id: 7,
    name: "Sandeep Bhag",
    package: "11.5 LPA",
    company: "Sarvatra Technologies",
  },
  {
    id: 8,
    name: "Tanya",
    package: "13 LPA",
    company: "Gemini Solutions",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const About = () => {
  const [showSecondRow, setShowSecondRow] = useState(false);
  return (
    <section className="about-section">
      <div className="columns">
        <h2>About Us</h2>
      </div>
      <div className="about-container">
        <div className="row">
          <div className="about-image">
            <img
              src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010140.jpg?t=st=1723036893~exp=1723040493~hmac=6c20a78be7291d6ab189411641c40c2701d5f505f4166dd7451c1befc68babe3"
              alt="About Us"
            />
          </div>
          <div className="about-content">
            {/* <h3>About Tech Mentors</h3> */}
            {/* <h1>10+ Years Of Success</h1> */}
            <p>
              Tech Mentors is a pioneering education consultancy and career
              guidance firm dedicated to empowering students and professionals
              in the realms of education, employment, software industry, and
              services. Our comprehensive suite of services encompasses
              training, SEO and SEM, web design and development, social media
              marketing, and software development.
            </p>
            <h3>Founding Team</h3>
            <p>
              Tech Mentors was founded by a team of visionary professionals
              committed to fostering technical excellence and innovation. Our
              founding team comprises seasoned experts with a deep understanding
              of the latest technologies and industry trends.
            </p>
          </div>
        </div>
      </div>

      <div className="about-container">
        {showSecondRow && (
          <div className="row">
            {" "}
            <div className="about-content">
              {/* <h3>Mission Statements and Roles And Our Vision</h3> */}

              <h3> Mission </h3>
              <p>
                In response to the burgeoning demand for expertise in digital
                marketing, e-commerce, and related fields, Tech Mentors strives
                to establish itself as a premier training organization. We cater
                specifically to college and university students, providing them
                with cutting-edge knowledge and skills to excel in their chosen
                careers.
              </p>
              <h3> Vision </h3>
              <p>
                At Tech Mentors, we envision a future where individuals and
                organizations can leverage technology to drive innovation,
                growth, and success. We are committed to bridging the skills gap
                in the tech industry by providing accessible, high-quality
                training and mentorship programs.
              </p>
            </div>
            <div className="about-image">
              <img
                src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg"
                alt="About Us"
              />
            </div>
          </div>
        )}

        {!showSecondRow && (
          <div className="button-container">
            <button
              className="read-more-button"
              onClick={() => setShowSecondRow(true)}
            >
              Read More
            </button>
          </div>
        )}
      </div>

      {/* ________________________close_________ */}
      <div className="container">
        <div className="second-row">
          <div className="column">
            <h1>16 Weeks</h1>
            <h3>Program Duration</h3>
          </div>
          <div className="column">
            <h1>95%</h1>
            <h3>Placement Record</h3>
          </div>
          <div className="column">
            <h1>1000+</h1>
            <h3>Students</h3>
          </div>
          <div className="column">
            <h1>20+</h1>
            <h3>Exp.. Facilities</h3>
          </div>
        </div>
        {/* our placed students */}
        <div className="slider-container">
          <h2 className="section-title">Placed Students</h2>
          <p className="some">
            The more that you read, the more things you will know. The more that
            you learn, the more places you’ll go . . . . .
          </p>
          <Slider {...settings}>
            {images.map((image) => (
              <div key={image.id} className="slide">
                <h1 className="slide-image">{image.company}</h1>
                <div className="caption">
                  <h3>Congratulations {image.name}</h3>
                  <p>Package: {image.package}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default About;
