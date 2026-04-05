import React from 'react';

const Location = () => {
  // Updated with your exact Google Maps URLs
  const location1Url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d536.3760005694795!2d76.68301392544615!3d12.42742317503125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf77009e2fea13%3A0xfd3b9413bdd00f2c!2sSrirangapattana%20Ghat!5e1!3m2!1sen!2sin!4v1775379892260!5m2!1sen!2sin";
  const location2Url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.700512087775!2d76.70856367483127!3d12.402971387862545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf76bf7bdac4d9%3A0xde55aa9713283297!2sDodda%20Gosai%20Ghat!5e0!3m2!1sen!2sin!4v1775379790949!5m2!1sen!2sin";

  return (
    <div id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-lg text-gray-900 font-bold tracking-wide uppercase">Find Us</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900">Visit Our Spaces</p>
          <div className="mt-4 w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* 2-Column Grid for Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Location 1 */}
          <div className="flex flex-col space-y-4">
            <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-600 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Location 1</h3>
              <p className="text-gray-600 font-medium text-sm">
                Primary Branch Address, Srirangapatna Ghat (Gautama Mantapa), Karnataka
              </p>
            </div>
            <div className="h-[400px] w-full rounded-3xl overflow-hidden shadow-lg border-4 border-white ring-1 ring-orange-200">
              <iframe
                title="Google Map Location 1"
                src={location1Url}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Location 2 */}
          <div className="flex flex-col space-y-4">
            <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-600 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Location 2</h3>
              <p className="text-gray-600 font-medium text-sm">
                Secondary Branch Address, Dodda Gosaighat (Ravi Toota) Srirangapatna, Karnataka
              </p>
            </div>
            <div className="h-[400px] w-full rounded-3xl overflow-hidden shadow-lg border-4 border-white ring-1 ring-orange-200">
              <iframe
                title="Google Map Location 2"
                src={location2Url}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Location;