import React, { useState, useEffect } from "react";
import "./index.css";

const images = [
  "/Assests/books.png ",
  "/Assests/d6b51644c91000d7074759aa4bc4b5e1.jpg", 
  "/Assests/images (3).png",
  "/Assests/images (4).png",
  "/Assests/Wonder-Book-Full-Sale.png"
];

const Coursol = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Coursol;
