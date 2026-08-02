"use client";

import Script from 'next/script';

const Reviews = () => {
  return (
    <section id="review" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-lg font-bold uppercase tracking-wide text-gray-900">
            Google Reviews
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            What families are saying
          </p>
          <div className="mt-4 h-1 w-24 rounded-full bg-orange-600 mx-auto"></div>
        </div>

        <div className="rounded-3xl border border-orange-100 bg-orange-50 p-4 shadow-sm sm:p-6">
          <div className="sk-ww-google-reviews" data-embed-id="25702009"></div>
          <Script
            src="https://widgets.sociablekit.com/google-reviews/widget.js"
            strategy="afterInteractive"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;


// "use client";

// import React, { useState, useEffect, useRef } from 'react';
// import { useLanguage } from '@/context/LanguageContext';

// const Reviews = () => {
//   const { t } = useLanguage();
//   const reviews = t.reviews.items;

//   const scrollRef = useRef(null);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     let animationFrameId;
//     const scrollContainer = scrollRef.current;

//     const scroll = () => {
//       if (!isPaused && scrollContainer) {
//         scrollContainer.scrollLeft += 1;
//         if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
//           scrollContainer.scrollLeft = 0;
//         }
//       }
//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     animationFrameId = requestAnimationFrame(scroll);
//     return () => cancelAnimationFrame(animationFrameId);
//   }, [isPaused]);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -382, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 382, behavior: 'smooth' });
//     }
//   };

//   const StarRating = ({ rating }) => {
//     return (
//       <div className="flex items-center space-x-0.5">
//         {[...Array(5)].map((_, i) => (
//           <svg
//             key={i}
//             className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-orange-600' : 'text-orange-200'}`}
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div id="review" className="py-24 bg-white relative">
//       <style>{`
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .hide-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div className="text-center mb-16">
//           <h2 className="text-lg text-gray-900 font-bold tracking-wide uppercase">{t.reviews.headerTitle}</h2>
//           <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">{t.reviews.headerSubTitle}</p>
//           <div className="mt-4 w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
//         </div>

//         <div className="relative group">
//           <button 
//             onClick={scrollLeft}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white text-orange-600 p-3 rounded-full shadow-md hover:bg-orange-600 hover:text-white transition hidden md:block focus:outline-none"
//             aria-label={t.reviews.scrollLeftAria}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           <div 
//             ref={scrollRef}
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//             onTouchStart={() => setIsPaused(true)}
//             onTouchEnd={() => setIsPaused(false)}
//             className="flex space-x-8 overflow-x-hidden hide-scrollbar py-4"
//           >
//             {[...reviews, ...reviews].map((review, index) => (
//               <div
//                 key={index}
//                 className="bg-orange-50 w-[350px] flex-shrink-0 p-8 rounded-2xl border border-orange-100 shadow-sm flex flex-col justify-between"
//               >
//                 <div>
//                   <div className="flex items-center justify-between mb-6">
//                     <div>
//                       <h4 className="text-lg font-bold text-gray-900">{review.name}</h4>
//                       <p className="text-sm font-medium text-orange-600">{review.service}</p>
//                     </div>
//                     <StarRating rating={review.rating} />
//                   </div>
//                   <blockquote className="text-gray-700 leading-relaxed text-sm">
//                     "{review.text}"
//                   </blockquote>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button 
//             onClick={scrollRight}
//             className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white text-orange-600 p-3 rounded-full shadow-md hover:bg-orange-600 hover:text-white transition hidden md:block focus:outline-none"
//             aria-label={t.reviews.scrollRightAria}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reviews;
