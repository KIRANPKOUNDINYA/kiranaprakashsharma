import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 1. Import the images directly from the assets folder
// Ensure these filenames exactly match what is in your src/assets/ashuba folder
import img1 from '../assets/ashuba/pindapradana.jpeg'; 
import img2 from '../assets/ashuba/Tarpana.jpeg';
import img3 from '../assets/ashuba/Tilahome.jpeg';

const Ashuba = () => {
  const navigate = useNavigate();

  // --- State to track which image is currently open in full screen ---
  const [selectedIndex, setSelectedIndex] = useState(null);

  // 2. Use the imported variables instead of string paths
  const ashubaImages = [
    { id: 5, title: 'Pindapradana', src: img1 }, 
    { id: 6, title: 'Tarpana', src: img2 },
    { id: 7, title: 'Tila Homa', src: img3 },
  ];

  // --- Navigation Functions for the Lightbox ---
  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = (e) => {
    e.stopPropagation(); // Prevents the click from closing the background
    setSelectedIndex((prev) => (prev === 0 ? ashubaImages.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === ashubaImages.length - 1 ? 0 : prev + 1));
  };

  // --- Keyboard support (Esc to close, Arrows to navigate) ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev === 0 ? ashubaImages.length - 1 : prev - 1));
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev === ashubaImages.length - 1 ? 0 : prev + 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, ashubaImages.length]);

  return (
    <div id="ashuba" className="py-24 bg-orange-50 scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Back Button --- */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center justify-center w-10 h-10 rounded-full bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-sm group border border-orange-100"
          aria-label="Go back"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 transform group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-orange-600 font-bold tracking-widest uppercase">Ashuba Events</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900">Ancestral Rites</p>
          <div className="mt-4 w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {ashubaImages.map((image, index) => (
            <div 
              key={image.id} 
              onClick={() => openLightbox(index)} // Opens the clicked image
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border-2 border-transparent hover:border-orange-400 transition-all duration-300 cursor-pointer"
            >
              <div className="bg-white relative aspect-square sm:aspect-video overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              
              {/* Overlay with Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-2 sm:p-4 w-full">
                  <h3 className="text-white font-bold text-sm sm:text-lg text-center leading-tight">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- Full Screen Lightbox Overlay --- */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox} // Clicking the dark background closes the gallery
        >
          {/* Close Button (Top Right) */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white p-2 z-[110] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow */}
          <button 
            onClick={showPrev}
            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 p-2 sm:p-4 rounded-full z-[110] transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Main Image Container */}
          <div 
            className="relative max-w-5xl max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // Prevents clicking the image from closing the gallery
          >
            <img 
              src={ashubaImages[selectedIndex].src} 
              alt={ashubaImages[selectedIndex].title} 
              className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl select-none"
            />
            {/* Title below the image */}
            <h3 className="text-white text-lg sm:text-2xl font-bold mt-4 tracking-wide">
              {ashubaImages[selectedIndex].title}
            </h3>
            <p className="text-white/60 text-sm mt-1">
              {selectedIndex + 1} / {ashubaImages.length}
            </p>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={showNext}
            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 p-2 sm:p-4 rounded-full z-[110] transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

    </div>
  );
};

export default Ashuba;