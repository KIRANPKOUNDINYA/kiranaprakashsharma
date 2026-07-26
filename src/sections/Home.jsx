"use client";

import React from 'react';
import Link from 'next/link';
import { FiPhoneCall } from "react-icons/fi";
import bgImage from '@/assets/Koundinya_maharshi.jpeg';
import { useLanguage } from '@/context/LanguageContext';

const Home = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center lg:bg-[center_top_15%] bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage?.src ?? bgImage})` }} 
    >
      <div className="absolute inset-0 bg-white/50 sm:bg-white/40"></div>

      <div className="absolute top-0 left-0 w-full px-2 py-4 sm:p-6 flex justify-between items-start z-20">
        <div className="flex bg-white/80 backdrop-blur-sm rounded-lg p-1 shadow-md">
          <Link href="/shuba" className="px-2 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-base font-bold rounded-md transition text-orange-700 hover:bg-orange-100 text-center">
            {t.home.topLinkShuba}
          </Link>
          <Link href="/ashuba" className="px-2 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-base font-bold rounded-md transition text-orange-700 hover:bg-orange-100 text-center">
            {t.home.topLinkAshuba}
          </Link>
        </div>

        <div className="flex bg-white/80 backdrop-blur-sm rounded-lg p-1 shadow-md">
          <button onClick={() => setLanguage('ENGLISH')} className={`px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-sm font-bold rounded-md transition ${language === 'ENGLISH' ? 'bg-orange-600 text-white' : 'text-orange-700 hover:bg-orange-100'}`}>
            {t.home.englishLabel}
          </button>
          <button onClick={() => setLanguage('KANNADA')} className={`px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-sm font-bold rounded-md transition ${language === 'KANNADA' ? 'bg-orange-600 text-white' : 'text-orange-700 hover:bg-orange-100'}`}>
            {t.home.kannadaLabel}
          </button>
        </div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl drop-shadow-md mt-16 sm:mt-0">
          <span className="block text-orange-600 mt-2">{t.home.heroTitleLine1}</span>
          <span className="block text-orange-600 mt-2">{t.home.heroTitleLine2}</span>
        </h1>

        <p className="mt-3 max-w-md mx-auto text-base font-bold text-gray-900 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl drop-shadow-md">
          {t.home.heroDescription}
        </p>

<div className="mt-10 sm:flex sm:justify-center">
  {/* Book Now Button */}
  <div className="rounded-md shadow-xl">
    <a
      href="tel:+919513311293"
      className="w-full flex items-center justify-center gap-2 px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg transition transform hover:-translate-y-1"
    >
      <FiPhoneCall size={20} />
      <span>{t.home.ctaBook}</span>
    </a>
  </div>

  {/* View Services Button */}
  <div className="mt-3 sm:mt-0 sm:ml-3 shadow-xl rounded-md">
    <a
      href="#pooja-list"
      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-orange-700 bg-white hover:bg-orange-50 md:py-4 md:text-lg transition transform hover:-translate-y-1"
    >
      {t.home.ctaView}
    </a>
  </div>
</div>
      </main>
    </div>
  );
};

export default Home;
