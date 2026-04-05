import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook

const Shuba = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const shubaImages = [
    { id: 1, title: 'Marriage Ceremony', src: '/api/placeholder/400/300' },
    { id: 2, title: 'Gruhapravesha', src: '/api/placeholder/400/300' },
    { id: 3, title: 'Ganapathi Homa', src: '/api/placeholder/400/300' },
    { id: 4, title: 'Namakarana', src: '/api/placeholder/400/300' },
  ];

  return (
    <div id="shuba" className="py-24 bg-white scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- NEW: Back Button --- */}
        <button 
          onClick={() => navigate(-1)} // This takes the user 1 step back in history
          className="mb-8 flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-sm group"
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
          <h2 className="text-base text-orange-600 font-bold tracking-widest uppercase">Shuba Events</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900">Auspicious Ceremonies</p>
          <div className="mt-4 w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {shubaImages.map((image) => (
            <div key={image.id} className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border-2 border-transparent hover:border-orange-400 transition-all duration-300 cursor-pointer">
              
              <div className="bg-orange-100 relative">
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

export default Shuba;