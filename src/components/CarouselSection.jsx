// src/components/CarouselSection.js
import React from 'react';

const CarouselSection = ({ title, carouselClass, images, infoText }) => {
  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title" id="special-events-title">
        <span>{title.charAt(0)}</span>{title.slice(1)}
      </h2>
      <div className={`carousel ${carouselClass}`}>
        {images.map((img, i) => (
          <img key={i} src={img} alt={`${title} ${i + 1}`} />
        ))}
      </div>
      <div className="info-box">
        <p>{infoText}</p>
        <span>Start here</span>
      </div>
    </div>
  );
};

export default CarouselSection;