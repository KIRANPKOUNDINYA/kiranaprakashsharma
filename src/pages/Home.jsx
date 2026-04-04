import React, { useState } from 'react';
// 1. Import the image directly from the assets folder
import bgImage from '../assets/Koundinya_maharshi.jpeg'; 

const Home = () => {
  // State to track which language and event type are currently selected
  const [language, setLanguage] = useState('ENGLISH'); // Default selected is ENGLISH
  const [eventType, setEventType] = useState('Shuba');   // Default selected is Shuba

  return (
    <div 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }} 
    >
      {/* Semi-transparent overlay so the text is readable */}
      <div className="absolute inset-0 bg-white/50 sm:bg-white/40"></div>

      {/* --- Top Navigation Toggles --- */}
      {/* Reduced mobile padding from p-4 to px-2 py-4 to save horizontal space */}
      <div className="absolute top-0 left-0 w-full px-2 py-4 sm:p-6 flex justify-between items-start z-20">
        
        {/* Top Left: Shuba / Ashuba Buttons */}
        <div className="flex bg-white/80 backdrop-blur-sm rounded-lg p-1 shadow-md">
          {/* Reduced mobile padding (px-2) and text size (text-xs) */}
          <button 
            onClick={() => setEventType('Shuba')}
            className={`px-2 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-base font-bold rounded-md transition ${eventType === 'Shuba' ? 'bg-orange-600 text-white' : 'text-orange-700 hover:bg-orange-100'}`}
          >
            Shuba
          </button>
          <button 
            onClick={() => setEventType('Ashuba')}
            className={`px-2 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-base font-bold rounded-md transition ${eventType === 'Ashuba' ? 'bg-orange-600 text-white' : 'text-orange-700 hover:bg-orange-100'}`}
          >
            Ashuba
          </button>
        </div>

        {/* Top Right: Language Buttons */}
        <div className="flex bg-white/80 backdrop-blur-sm rounded-lg p-1 shadow-md">
          {/* Reduced mobile padding (px-2) and forced tight text sizing */}
          <button 
            onClick={() => setLanguage('ENGLISH')}
            className={`px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-sm font-bold rounded-md transition ${language === 'ENGLISH' ? 'bg-orange-600 text-white' : 'text-orange-700 hover:bg-orange-100'}`}
          >
            ENGLISH
          </button>
          <button 
            onClick={() => setLanguage('KANNADA')}
            className={`px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-sm font-bold rounded-md transition ${language === 'KANNADA' ? 'bg-orange-600 text-white' : 'text-orange-700 hover:bg-orange-100'}`}
          >
            KANNADA
          </button>
        </div>
        
      </div>
      {/* --- END Top Navigation Toggles --- */}

      {/* Hero Section Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
        
        {/* Pushed the main text down slightly on mobile (mt-16) to avoid overlapping the new buttons */}
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl drop-shadow-md mt-16 sm:mt-0">
          <span className="block text-orange-600 mt-2">Authentic Vedic Rituals</span>
          <span className="block text-orange-600 mt-2">& Astrological Guidance</span>
        </h1>
        
        <p className="mt-3 max-w-md mx-auto text-base font-bold text-gray-900 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl drop-shadow-md">
          Authentic Vedic rituals and expert astrological guidance for a peaceful, prosperous life.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="mt-10 sm:flex sm:justify-center">
          <div className="rounded-md shadow-xl">
            {/* Opens the phone dialer */}
            <a href="tel:+919513311293" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg transition transform hover:-translate-y-1">
              Book a Consultation
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3 shadow-xl rounded-md">
            {/* UPDATED: href is now '#pooja-list' to match the Services page ID */}
            <a href="#pooja-list" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-orange-700 bg-white hover:bg-orange-50 md:py-4 md:text-lg transition transform hover:-translate-y-1">
              View Services
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;