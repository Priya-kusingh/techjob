import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service";
import Certificate from "./component/Certificate";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Book from "./component/Book";
import Google from "./component/Google.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/google" element={<Google />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
