import React, { useState, useEffect, useRef } from 'react';

const Reviews = () => {
  const reviews = [
    {
      name: "Ramesh Sharma",
      service: "Gruhapravesha Pooja",
      rating: 4,
      text: "The dedication Kiranaprakashsharma showed during our new home warming was remarkable. He arrived punctually and meticulously explained the significance of every ritual, creating a profoundly sacred and positive atmosphere in our house.",
    },
    {
      name: "Priya V.",
      service: "Tila Homa & Ancestral Rites",
      rating: 5,
      text: "Performing annual rites for my parents felt seamless under his guidance on the Kaveri banks. His deep scriptural knowledge and compassionate support provided our family immense emotional closure and peace.",
    },
    {
      name: "Dr. L. Patel",
      service: "Marriage Pooja",
      rating: 5,
      text: "Kiranaprakashsharma was the officiant for our Vedic wedding. The ceremony was sweet, sincere, and systematic. All our guests, including those new to Indian traditions, were engaged by his beautiful explanations in English.",
    },
    {
      name: "Smrithi V.",
      service: "Astrology Consultation",
      rating: 4.5,
      text: "I had a very insightful session. Kiranaprakashsharma listened carefully to my concerns and provided practical, thoughtful guidance based on my chart. The predictions felt extremely relevant to my current life path.",
    }
  ];

  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scrolling logic using requestAnimationFrame for smooth continuous movement
  useEffect(() => {
    let animationFrameId;
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += 1; // Adjust this number to change scroll speed
        
        // Seamless infinite loop: Reset scroll to 0 when we reach the halfway point 
        // (since we duplicated the array to fake the infinite effect)
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Functions for manual arrow scrolling
  const scrollLeft = () => {
    if (scrollRef.current) {
      // 382px matches the width of the card (350px) + the gap (32px or 2rem)
      scrollRef.current.scrollBy({ left: -382, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 382, behavior: 'smooth' });
    }
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-orange-600' : 'text-orange-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div id="review" className="py-24 bg-white relative">
      {/* Hide scrollbar for a cleaner look */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-lg text-gray-900 font-bold tracking-wide uppercase">Client Testimonials</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">Voices of Blessed Families</p>
          <div className="mt-4 w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Outer container with Arrows */}
        <div className="relative group">
          
          {/* Left Arrow Button */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white text-orange-600 p-3 rounded-full shadow-md hover:bg-orange-600 hover:text-white transition hidden md:block focus:outline-none"
            aria-label="Scroll Left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrolling inner container */}
          <div 
            ref={scrollRef}
            // Mouse events for Desktop, Touch events for Mobile tap-and-hold
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex space-x-8 overflow-x-hidden hide-scrollbar py-4"
          >
            {/* Render reviews twice for seamless looping */}
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="bg-orange-50 w-[350px] flex-shrink-0 p-8 rounded-2xl border border-orange-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{review.name}</h4>
                      <p className="text-sm font-medium text-orange-600">{review.service}</p>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed text-sm">
                    "{review.text}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white text-orange-600 p-3 rounded-full shadow-md hover:bg-orange-600 hover:text-white transition hidden md:block focus:outline-none"
            aria-label="Scroll Right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Reviews;