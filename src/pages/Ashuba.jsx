import React from 'react';

const Ashuba = () => {
  // Replace the 'src' with your actual image imports later!
  const ashubaImages = [
    { id: 5, title: 'Tila Homa', src: '/api/placeholder/400/300' },
    { id: 6, title: 'Tripindi Shraddha', src: '/api/placeholder/400/300' },
    { id: 7, title: 'Asthi Visarjana', src: '/api/placeholder/400/300' },
    { id: 8, title: 'Narayana Bali', src: '/api/placeholder/400/300' },
  ];

  return (
    <div id="ashuba" className="py-24 bg-orange-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-orange-600 font-bold tracking-widest uppercase">Ashuba Events</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900">Ancestral Rites</p>
          <div className="mt-4 w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Image Grid */}
        {/* CHANGED: grid-cols-1 to grid-cols-2 for mobile. Reduced mobile gap to gap-3 sm:gap-6 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {ashubaImages.map((image) => (
            <div key={image.id} className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border-2 border-transparent hover:border-orange-400 transition-all duration-300 cursor-pointer">
              
              <div className="bg-white relative">
                {/* CHANGED: h-64 to h-40 sm:h-64 so images don't stretch on mobile */}
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="object-cover w-full h-40 sm:h-64 group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              
              {/* Overlay */}
              {/* CHANGED: opacity-100 on mobile, switches to hover effect on desktop (sm:opacity-0 sm:group-hover:opacity-100) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                {/* CHANGED: Reduced padding on mobile (p-2 sm:p-4) */}
                <div className="p-2 sm:p-4 w-full">
                  {/* CHANGED: Smaller text on mobile (text-sm sm:text-lg) */}
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