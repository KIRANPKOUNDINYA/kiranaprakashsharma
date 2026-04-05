import React, { useState, useEffect, useRef } from 'react';
// 1. Import the image directly from the assets folder
import aboutImage from '../assets/positive_and_negatives.jpg';

// --- Custom Animated Counter Component ---
const AnimatedCounter = ({ end, duration = 2000, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  // 1. Detect when the element scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it triggers (only animate once)
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of it is visible
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // 2. Run the smooth counting animation
  useEffect(() => {
    if (isVisible) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function for a smooth slow-down at the end
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isVisible, end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};
// --- END Custom Component ---

const About = () => {
  return (
    <div id="about" className="py-20 bg-white text-gray-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Top Featured Image using local asset --- */}
        <div className="mb-12 sm:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-orange-50">
          <img 
            src={aboutImage} 
            alt="Kiranaprakashsharma - Srirangapatana Purohit" 
            className="w-full h-auto object-cover object-top max-h-[300px] sm:max-h-[500px] md:max-h-[600px]"
          />
        </div>

        {/* Intro Section */}
        <div className="text-center mb-16">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            "Where Ancient Vedic Wisdom Meets Modern Devotion"
          </p>
          <div className="mt-6 max-w-3xl mx-auto space-y-4 text-lg text-gray-600">
            <p>
              For over four decades, <strong>Kiranaprakashsharma</strong> has been the torchbearer of authentic Vedic rituals, blending scriptural precision with heartfelt devotion. Our lineage traces back to generations of Vedic scholars who have preserved these sacred traditions.
            </p>
            <p>
              We bridge ancient traditions with modern accessibility, offering both in-person ceremonies in Srirangapatna.
            </p>
          </div>
        </div>

        {/* Stats Section (Banner) */}
        <div className="bg-orange-600 rounded-2xl shadow-lg text-white py-10 px-6 sm:px-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-orange-400">
            <div className="py-2">
              <span className="block text-4xl font-extrabold">
                <AnimatedCounter end={2500} duration={4000} />
              </span> 
              <span className="mt-2 block text-lg font-medium text-orange-100">Blessed Families</span>
            </div>
            <div className="py-2">
              <span className="block text-4xl font-extrabold">
                <AnimatedCounter end={22} duration={4000} />
              </span>
              <span className="mt-2 block text-lg font-medium text-orange-100">Years of Wisdom</span>
            </div>
            <div className="py-2">
              <span className="block text-4xl font-extrabold">
                <AnimatedCounter end={2000} duration={4000} />
              </span>
              <span className="mt-2 block text-lg font-medium text-orange-100">Sacred Ceremonies</span>
            </div>
          </div>
        </div>

        {/* The Spiritual Journey */}
        <div className="mb-20 bg-orange-50 rounded-2xl p-8 lg:p-12 border-l-4 border-orange-600 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">The Spiritual Journey of Kiranaprakashsharma</h3>
          <p className="text-gray-700 mb-6 text-lg">
            Kiranaprakashsharma represents the 3rd generation of purohits in his family. His unique approach combines:
          </p>
          <ul className="space-y-4 text-gray-700 text-lg list-disc list-inside marker:text-orange-600 font-medium">
            <li>Scriptural mastery of Rigveda and Yajurveda traditions</li>
            <li>Practical guidance for modern spiritual seekers</li>
            <li>Compassionate understanding of family karma patterns</li>
          </ul>
        </div>

        {/* Why Choose Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-extrabold text-gray-900">Why Choose Our Vedic Services?</h3>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            In Vedic tradition, rituals are sacred bridges between the material and spiritual worlds. Our purohits perform these divine ceremonies with scriptural precision and heartfelt devotion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-600 mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Authentic Vedic Tradition</h4>
            <p className="text-gray-600">Strict adherence to Rigveda & Yajurveda scriptures</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-600 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Generational Expertise</h4>
            <p className="text-gray-600">40+ years mastering sacred rituals</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-600 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Global Digital Poojas</h4>
            <p className="text-gray-600">Serving devotees across 15+ countries</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-600 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path></svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Annadana Seva</h4>
            <p className="text-gray-600">Sacred meals offered to all attendees</p>
          </div>
        </div>

        {/* CTA Buttons (Call + WhatsApp) */}
        {/* CHANGED: Flex container stacks columns on mobile, side-by-side on larger screens */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <style>
            {`
              @keyframes bounceContinuous {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-8px); }
              }
              .btn-bounce {
                animation: bounceContinuous 1.5s ease-in-out infinite; 
              }
            `}
          </style>

          {/* Primary Call Button */}
          <a 
            href="tel:+919513311293" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg shadow-xl btn-bounce"
          >
            {/* Phone Icon */}
            <svg 
              className="w-5 h-5 mr-3 animate-pulse" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Book a Consultation
          </a>

          {/* WhatsApp Button */}
          <a 
            // URL Encoded message so WhatsApp reads the spaces and newlines correctly!
            href="https://wa.me/919513311293?text=Hii%20kiranaprakashsharma%20ji!%0Awe%20are%20looking%20for%20your%20service" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-green-500 hover:bg-green-600 md:py-4 md:text-lg shadow-xl btn-bounce"
          >
            {/* WhatsApp Icon */}
            <svg 
              className="w-5 h-5 mr-3" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp Contact
          </a>
        </div>

      </div>
    </div>
  );
};

export default About;