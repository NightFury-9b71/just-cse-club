import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the slide after `interval` milliseconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(autoSlide); // Cleanup the interval on unmount
  }, [currentIndex, interval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-slider">
      <button className="slider-btn prev-btn" onClick={goToPrevious}>
        &#8592;
      </button>
      <div
        className="slider-image"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      ></div>
      <button className="slider-btn next-btn" onClick={goToNext}>
        &#8594;
      </button>
    </div>
  );
};

export default ImageSlider;
