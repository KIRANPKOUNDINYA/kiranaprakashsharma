import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook

const Ashuba = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const ashubaImages = [
    { id: 5, title: 'Tila Homa', src: '/api/placeholder/400/300' },
    { id: 6, title: 'Tripindi Shraddha', src: '/api/placeholder/400/300' },
    { id: 7, title: 'Asthi Visarjana', src: '/api/placeholder/400/300' },
    { id: 8, title: 'Narayana Bali', src: '/api/placeholder/400/300' },
  ];

  return (
    <div id="ashuba" className="py-24 bg-orange-50 scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Back Button --- */}
        <button 
          onClick={() => navigate(-1)} // Takes user back to the home page
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
          {ashubaImages.map((image) => (
            <div key={image.id} className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border-2 border-transparent hover:border-orange-400 transition-all duration-300 cursor-pointer">
              
              <div className="bg-white relative">
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="object-cover w-full h-40 sm:h-64 group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              
              {/* Overlay */}
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
    </div>
  );
};

export default Ashuba;