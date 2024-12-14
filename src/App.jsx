import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Added Router for routing
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Events from "./components/Events";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import Notices from "./components/Notices";
import Login from "./components/Login";  // Import the Login component
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [events, setEvents] = useState([]);
  const [notices, setNotices] = useState([]);
  const [activeSection, setActiveSection] = useState("home");

  // Dynamically import all images using import.meta.glob
  useEffect(() => {
    const loadImages = async () => {
      const imageModules = import.meta.glob("./images/*.{png,jpg,jpeg,svg}");
      const imagePaths = await Promise.all(
        Object.keys(imageModules).map((path) => imageModules[path]())
      );
      setImages(imagePaths.map((module) => module.default));
    };
    loadImages();
  }, []);

  // Fetch events and notices data
  useEffect(() => {
    // Fetch events
    fetch("https://justcseclub.pythonanywhere.com/api/events/")
      .then((response) => response.json())
      .then((data) => setEvents(data));

    // Fetch notices
    fetch("https://justcseclub.pythonanywhere.com/api/notices/")
      .then((response) => response.json())
      .then((data) => setNotices(data));
  }, []);

  return (
    <Router>
      <div className="main-content">
        <Navbar onNavClick={setActiveSection} />
        <div className="content">
          {/* Show ImageSlider only on Home */}
          {activeSection === "home" && images.length > 0 ? (
            <ImageSlider images={images} interval={2000} />
          ) : (
            activeSection === "home" && <p>Loading images...</p>
          )}

          {/* Routes for the pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/events" element={<Events events={events} />} />
            <Route path="/notices" element={<Notices notices={notices} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
