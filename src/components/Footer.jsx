import React from 'react';

const Footer = () => {
  // This automatically gets the current year so your copyright is always up to date!
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-orange-600 text-white pt-5 pb-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Brand Name & Subtitle */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold tracking-wide">
            Kiranaprakashsharma9
          </h2>
          <p className="text-orange-200 text-sm mt-1 font-medium tracking-wider uppercase">
            Srirangapatana Purohit
          </p>
        </div>

        {/* Quick Back-to-Top Link (Optional but helpful) */}
        <a href="#home" className="mb-8 text-sm font-medium hover:text-orange-200 transition flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          Back to Top
        </a>

        {/* Divider Line */}
        <div className="w-full border-t border-orange-500 mb-1 max-w-3xl opacity-50"></div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-orange-100">
          <p>&copy; {currentYear} Kiranaprakashsharma9. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;