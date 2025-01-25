import React, { useState } from "react";
import QRCode from "react-qr-code";
import Gogle from "../img/Goo.jpg";
import "./Google.css";

const reviews = [
  {
    name: "Grace W.",
    date: "23 days ago",
    rating: 4,
    review:
      "I came here for a fancy dinner, and it was the perfect place to go. Even though the environment was a bit stodgy (it...",
  },
  {
    name: "Cassandra",
    date: "a month ago",
    rating: 5,
    review:
      "Eat meat here now. In a city littered with steakhouses, this one never disappoints. Familiar staff and the Chemist Club is an...",
  },
  {
    name: "Grace W.",
    date: "23 days ago",
    rating: 4,
    review:
      "I came here for a fancy dinner, and it was the I came here for a fancy dinner, and it was the perfect place to go. Even though the environment was a bit stodgy (it... perfect place to go. Even though the environment was a bit stodgy (it...",
  },
  {
    name: "Cassandra",
    date: "a month ago",
    rating: 5,
    review:
      "Eat meat here now. In a city littered with steakhouses, this one never disappoints. Familiar staff and the Chemist Club is an...",
  },
];

const Google = () => {
  const letters = [
    { char: "G", color: "#4285F4" }, // Blue
    { char: "o", color: "#EA4335" }, // Red
    { char: "o", color: "#FBBC05" }, // Yellow
    { char: "g", color: "#34A853" }, // Green
    { char: "l", color: "#EA4335" }, // Red
    { char: "e", color: "#4285F4" }, // Blue
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 3 : prevIndex - 3
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= reviews.length ? 0 : prevIndex + 3
    );
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);
  const googleReviewLink = "https://www.google.com/maps/reviews"; // Replace with your Google review link

  return (
    <div className="review-page">
      {/* Left Section */}

      <div className="left-section">
        <div className="rating">
          <h2 className="Hero">
            Tech <span className="Zen">Mentor</span>
          </h2>
          <p>5.0 ⭐⭐⭐⭐⭐</p>
          <p className="exc">Based on 25 reviews</p>
          <div className="gool">
            <p className="exc">
              Powered by
              {letters.map((letter, index) => (
                <span key={index} style={{ color: letter.color }}>
                  {letter.char}
                </span>
              ))}
            </p>
          </div>
        </div>
        <button
          onClick={() => window.open(googleReviewLink, "_blank")}
          className="review-button"
        >
          Review on Us <span className="Moon">G</span>
        </button>
        <div className="qr-code">
          <h3>Scan to Review</h3>
          <QRCode value={googleReviewLink} size={120} />
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        {" "}
        <div className="review-cards">
          <button onClick={handlePrev} className="arrow-button">
            ←
          </button>
          <div className="cards-container">
            {visibleReviews.map((review) => (
              <div key={review.name} className="card">
                <h3>{review.name}</h3>
                <p className="date">{review.date}</p>
                <p className="stars">{"⭐".repeat(review.rating)}</p>
                <p className="review">{review.review}</p>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="arrow-button">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Google;
