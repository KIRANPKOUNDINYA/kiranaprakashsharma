import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-lg font-bold tracking-wide uppercase">Get in Touch</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">Contact Us for Poojas & Consultations</p>
          <div className="mt-4 w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Direct Contact Information */}
          <div className="bg-white rounded-3xl p-8 shadow-md border-t-4 border-orange-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Direct Contact Details</h3>

            <div className="space-y-8">
              {/* Name */}
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-orange-100 p-4 rounded-full">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Purohit Name</p>
                  <p className="text-xl font-bold text-gray-900 mt-1">Kiranaprakash sharma</p>
                </div>
              </div>

              {/* Mobile */}
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-orange-100 p-4 rounded-full">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Mobile Numbers</p>
                  <p className="text-xl font-bold text-gray-900 mt-1">95133 11293</p>
                  <p className="text-xl font-bold text-gray-900">79750 49234</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-orange-100 p-4 rounded-full">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Mail-ID</p>
                  <a href="mailto:kiranaprakashsharma9@gmail.com" className="text-lg sm:text-xl font-bold text-orange-600 hover:text-orange-700 transition mt-1 block break-all">
                    kiranaprakashsharma9@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          {/* <div className="bg-white rounded-3xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send an Inquiry</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-gray-50 py-3 px-4 border outline-none transition" 
                  placeholder="Enter your full name" 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-gray-50 py-3 px-4 border outline-none transition" 
                  placeholder="Enter your mobile number" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message / Pooja Requirement</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-gray-50 py-3 px-4 border outline-none transition resize-none" 
                  placeholder="Tell us which pooja or service you are looking for..."
                ></textarea>
              </div>
              <button 
                type="button" 
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-bold text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Contact;