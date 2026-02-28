/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/


// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Logo from './components/Logo';
import CarouselSection from './components/CarouselSection';
import CompanyDesc from './components/CompanyDesc';
import PartnersSection from './components/PartnersSection';
import SupportingPartners from './components/SupportingPartners';
import Modal from './components/Modal';

function App() {
  const [modalContent, setModalContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const openModal = (content) => {
    setScrollPosition(window.scrollY);
    setModalContent(content);
    setIsModalOpen(true);
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.width = '100%';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition);
  };

  return (
    <div className="App">
      <Logo />

      <div className="container">
        <CarouselSection
          title="Weddings"
          carouselClass="left-carousel"
          images={[
            'https://images.unsplash.com/photo-1750208759761-6a32d532e426?q=80&w=870&auto=format&fit=crop',
            '/images/intro_collage_accessories_desktop_mobile.png',
            '/images/intro_wedding_gowns.jpg',
            '/images/intro_wedding_dinner2.png',
            '/images/intro_friends_outing.jpg',
            'https://images.unsplash.com/photo-1664646326926-3f52f88ff265?q=80&w=771&auto=format&fit=crop',
            '/images/watermark-image.jpg',
            '/images/intro_double_wedding.jpg'
          ]}
          infoText="Ready to create the wedding of your dreams?"
        />

        <CarouselSection
          title="Special Events"
          carouselClass="right-carousel"
          images={[
            'https://images.unsplash.com/photo-1660549895667-cb9fae3b3be3?q=80&w=833&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1752857015590-ab5254f2523f?q=80&w=870&auto=format&fit=crop',
            '/images/intro_vecteezy_graduation_image3.png',
            '/images/intro_expo_new1.jpg',
            '/images/Baby-Shower.png',
            '/images/intro_birthday2.jpg',
            'https://images.unsplash.com/photo-1755207297287-2cc2721dac5c?q=80&w=869&auto=format&fit=crop'
          ]}
          infoText="Ready to begin planning your special events?"
        />
      </div>

      <CompanyDesc />

      <PartnersSection openModal={openModal} />

      <SupportingPartners />

      <Modal
        isOpen={isModalOpen}
        content={modalContent}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
