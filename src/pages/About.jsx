import React from 'react';

const About = () => {
  return (
    <div id="about" className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <div className="text-center mb-16">
          <h2 className="text-lg text-gray-900 font-bold tracking-wide uppercase">
            Sacred Traditions Since 1978
          </h2>
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
              <span className="block text-4xl font-extrabold">5,000+</span> {/* You can adjust this number */}
              <span className="mt-2 block text-lg font-medium text-orange-100">Blessed Families</span>
            </div>
            <div className="py-2">
              <span className="block text-4xl font-extrabold">40+</span>
              <span className="mt-2 block text-lg font-medium text-orange-100">Years of Wisdom</span>
            </div>
            <div className="py-2">
              <span className="block text-4xl font-extrabold">1,000+</span>
              <span className="mt-2 block text-lg font-medium text-orange-100">Sacred Ceremonies</span>
            </div>
          </div>
        </div>

        {/* The Spiritual Journey */}
        <div className="mb-20 bg-orange-50 rounded-2xl p-8 lg:p-12 border-l-4 border-orange-600 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">The Spiritual Journey of Kiranaprakashsharma</h3>
          <p className="text-gray-700 mb-6 text-lg">
            Initiated into Vedic studies at age 12, Kiranaprakashsharma represents the 7th generation of purohits in his family. His unique approach combines:
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

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a href="tel:+919513311293" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg transition transform hover:-translate-y-1">
              Book a Consultation
            </a>
        </div>

      </div>
    </div>
  );
};

export default About;