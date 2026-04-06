import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Function to handle smooth scrolling to the top
  const scrollToTop = (e) => {
    e.preventDefault(); // Prevents the default jump behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-orange-600 text-white pt-5 pb-4 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Brand Name & Subtitle */}
        <div className="text-center mb-2">
          <h2 className="text-xl font-bold tracking-wide">
            Kiranaprakashsharma9
          </h2>
          <p className="text-orange-200 text-sm mt-1 font-medium tracking-wider uppercase">
            Srirangapatana Purohit
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-orange-500 mb-2 max-w-3xl opacity-50"></div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-orange-100 flex flex-col gap-2 mb-6">
          <p>&copy; {currentYear} Kiranaprakashsharma9. All rights reserved.</p>
          
          {/* Credits Section */}
          <p className="text-xs sm:text-sm text-orange-200">
            Designed & Developed By{' '}
            <a 
              href="https://kiranpkoundinya.github.io/Portfolio/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold text-white hover:underline hover:text-orange-100 transition-colors"
            >
              KIRAN P KOUNDINYA
            </a>
            {' '}&{' '}
            <a 
              href="https://ravichandrals507.github.io/Portfolio/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold text-white hover:underline hover:text-orange-100 transition-colors"
            >
              RAVICHANDRA L S
            </a>
          </p>
        </div>

        {/* Back to Top Button - Placed at the absolute bottom */}
        <button 
          onClick={scrollToTop} 
          className="text-sm font-bold text-orange-200 hover:text-white transition flex items-center gap-2 mt-10"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          Back to Top
        </button>

      </div>
    </footer>
  );
};

export default Footer;