import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email, message }),
      });

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Error sending message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="contact-container">
      <h2 className="columns">Contact Us</h2>
      <div className="contact-content">
        {/* Left-side Contact Details */}
        <div className="contact-details">
          <h2>Contact Details</h2>
          <p className="Date">
            <strong>Phone:</strong> +91 85273 45379
          </p>
          <p className="Date">
            <strong>Email:</strong> techjobmentors@gmail.com
          </p>
          <p className="Date">
            <strong>Address:</strong> 1234 Your Street, City, Country
          </p>
        </div>

        {/* Right-side Get in Touch Form */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <div>
                <label>Phone No. :</label>
                <input
                  type="tel"
                  maxlength="10"
                  pattern="[0-9]{10}"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Message:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
          {status && <p>{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
