// src/components/SupportingPartners.js
/*import React, { useEffect, useRef, useState } from 'react';

const SupportingPartners = () => {
  const carouselRef = useRef();
  const [angle, setAngle] = useState(0);
  const total = 3; // number of cards

  const next = () => setAngle((prev) => prev - 360 / total);
  const prev = () => setAngle((prev) => prev + 360 / total);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `rotateY(${angle}deg)`;
    }
  }, [angle]);

  return (
    <section className="s-partners">
      <h2>Supporting Partners</h2>
      <div className="s-carousel-container">
        <div className="s-carousel" ref={carouselRef}>
          <div className="s-card">
            <img src="/images/Logo/Realty_Logo.png" alt="D'Ette Realty Team" />
            <h3>D'Ette Realty Team</h3>
            <p id="text-desc">(Commercial | Residential | Land | Property Management | Relocation | Apartments)</p>
            <div className="s-info">
              <a href="#">🌐 https://detterealty.com</a>
            </div>
          </div>

          <div className="s-card">
            <img src="/images/Logo/GE_&_TS.png" alt="Global Events and Travel Solutions" />
            <h3>Global Events and Travel Solutions</h3>
            <div className="s-info">
              <a href="#">🌐 https://geandts.com</a>
            </div>
          </div>

          <div className="s-card">
            <img src="/images/Logo/PRS.png" alt="Positive Result Solutions" />
            <h3>Positive Result Solutions</h3>
            <p id="text-desc">(Supporting entrepreneurs and businesses with coaching, education, and expansion opportunities)</p>
            <div className="s-info">
              <a href="#">🌐 https://p-r-solutions.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="s-controls">
        <button onClick={prev}>◀</button>
        <button onClick={next}>▶</button>
      </div>
    </section>
  );
};

export default SupportingPartners;*/


// src/components/SupportingPartners.jsx
import React, { useEffect, useRef, useState } from "react";

const partners = [
  {
    img: "/images/Logo/Realty_Logo.png",
    title: "D'Ette Realty Team",
    desc: "(Commercial | Residential | Land | Property Management | Relocation | Apartments)",
    link: "https://detterealty.com"
  },
  {
    img: "/images/Logo/GE_&_TS.png",
    title: "Global Events and Travel Solutions",
    desc: "",
    link: "https://geandts.com"
  },
  {
    img: "/images/Logo/PRS.png",
    title: "Positive Result Solutions",
    desc: "(Supporting entrepreneurs and businesses with coaching, education, and expansion opportunities)",
    link: "https://p-r-solutions.com"
  }
];

const SupportingPartners = () => {
  const carouselRef = useRef(null);
  const [angle, setAngle] = useState(0);

  const total = partners.length;
  const radius = 480; // controls how wide the circle is

  // Position cards in circle
  useEffect(() => {
    const cards = carouselRef.current.querySelectorAll(".s-card");

    cards.forEach((card, i) => {
      const rotation = (360 / total) * i;
      card.style.transform = `rotateY(${rotation}deg) translateZ(${radius}px)`;
    });
  }, [total]);

  // Rotate carousel when angle changes
  useEffect(() => {
    carouselRef.current.style.transform = `rotateY(${angle}deg)`;
  }, [angle]);

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev - 360 / total);
    }, 5000);

    return () => clearInterval(interval);
  }, [total]);

  const next = () => setAngle((prev) => prev - 360 / total);
  const prev = () => setAngle((prev) => prev + 360 / total);

  return (
    <section className="s-partners">
      <h2>Supporting Partners</h2>

      <div className="s-carousel-container">
        <div className="s-carousel" ref={carouselRef}>
          {partners.map((partner, index) => (
            <div className="s-card" key={index}>
              <img src={partner.img} alt={partner.title} />
              <h3>{partner.title}</h3>
              {partner.desc && <p id="text-desc">{partner.desc}</p>}
              <div className="s-info">
                <a href={partner.link} target="_blank" rel="noreferrer">
                  🌐 {partner.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="s-controls">
        <button onClick={prev}>◀</button>
        <button onClick={next}>▶</button>
      </div>
    </section>
  );
};

export default SupportingPartners;