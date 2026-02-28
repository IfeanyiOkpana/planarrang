// src/components/PartnersSection.js
import React from 'react';

const partnerData = {
  ceasar: `<img src="/images/profile_image_ceasar.png" height=200 width=200> ...`, // Keep same HTML as before
  sharonda: `<img src="/images/profile_image_sharonda.png" height=200 width=200> ...`,
  james: `<p><strong>A III's Lawn Care</strong></p> ...`
};

const PartnersSection = ({ openModal }) => {
  return (
    <section className="partners-section">
      <h2>Our Partners</h2>
      <div className="partners-grid">
        <div className="partner-card" onClick={() => openModal(partnerData.ceasar)}>
          <img src="/images/Logo/Ceasar's Logo2_main.png" alt="Hendricks Educational Consulting Logo" />
          <h3>Ceasar B. Hendricks, M.Ed, MBA, BSM</h3>
          <p className="role">Founder / Lead Consultant</p>
        </div>

        <div className="partner-card" onClick={() => openModal(partnerData.sharonda)}>
          <img src="/images/Logo/Sharonda's Logo9.png" alt="Sharonda E Rogers" />
          <h3>Sharonda E. Rogers</h3>
          <p className="role">Insurance & Financial Services</p>
        </div>

        <div className="partner-card" onClick={() => openModal(partnerData.james)}>
          <img src="/images/Logo/James - Businnes Card5.png" alt="James Lawn Care" />
          <h3>James Adair III, Founder</h3>
          <p className="role">A III's Lawn Care</p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;