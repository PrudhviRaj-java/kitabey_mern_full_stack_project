import React from "react";
import "./Index.css";

const Images = () => {
  return (
    <div className="main-container">
      <div className="image-container">
        <img src="/Assests/Books1.jpg" alt="Image1" />
      </div>
      <div className="image-container">
        <img src="/Assests/Books2.jpg" alt="Image2" />
      </div>
      <div className="image-container">
        <img src="/Assests/Books3.jpg" alt="Image3" />
      </div>
      <div className="image-container">
        <img src="/Assests/Books4.jpg" alt="Image4" />
      </div>
    </div>
  );
};

export default Images;
