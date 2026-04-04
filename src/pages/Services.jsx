import React from 'react';

const Services = () => {
  const poojas = [
    {
      title: "Tila Homa",
      description: "A powerful Vedic ritual performed to provide peace to the souls of ancestors and to remove 'Pitru Dosha' or obstacles caused by ancestral karmas."
    },
    {
      title: "Tripindi Shraddha",
      description: "A specialized ceremony performed to appease ancestors who might have passed away prematurely, ensuring their soul's journey to higher realms."
    },
    {
      title: "Mokshanarayana Bali",
      description: "Performed with Preta Samskara, this sacred ritual invokes Lord Vishnu to liberate souls from the cycle of birth and death."
    },
    {
      title: "Pitru Dosha Nivarana",
      description: "A remedial pooja designed to rectify planetary imbalances caused by ancestral debts, bringing harmony and prosperity to the family."
    },
    {
      title: "Narayana Bali Pooja",
      description: "A dedicated service to satisfy unfulfilled desires of departed souls, helping remove hurdles related to health, wealth, and progeny."
    },
    {
      title: "Shraddha Karma",
      description: "Traditional annual rites performed with deep respect to honor parents and ancestors, seeking their eternal blessings for the lineage."
    },
    {
      title: "Tarpana & Pinda Pradana",
      description: "Sacred offerings of water, sesame seeds, and rice balls (Pindas) to provide spiritual sustenance to the departed and maintain ancestral connections."
    },
    {
      title: "Asthi Visarjana",
      description: "The holy act of immersing ashes in the sacred rivers (Kaveri River) of Srirangapatna, ensuring the soul's peaceful transition to the afterlife."
    },
    {
      title: "Gruhapravesha Pooja",
      description: "A joyous ceremony to purify your new home, invite positive energies, and seek divine protection before you begin your stay."
    },
    {
      title: "Marriage Pooja",
      description: "Vedic wedding ceremonies conducted with traditional rituals like Kanyadana, Panigrahana, and Saptapadi, ensuring a divine and blessed start to your marital journey."
    },
    {
      title: "All Types of Homas",
      description: "Powerful fire rituals including Ganapathi, Navagraha, Lakshmi, and Mrityunjaya Homas & more, performed with strict Shastra adherence to invoke divine blessings for health and protection."
    },
  ];

  return (
    <div id="pooja-list" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-lg text-gray-900 font-bold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900">Vedic Rituals & Poojas</p>
          <div className="mt-4 w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Pooja Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {poojas.map((pooja, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-orange-600 hover:shadow-md transition transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pooja.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {pooja.description}
              </p>
            </div>
          ))}
        </div>

        {/* Hospitality Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100">
          <div className="bg-orange-600 px-8 py-4">
            <h3 className="text-white text-2xl font-bold">Food & Accommodation</h3>
          </div>
          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-bold text-orange-600 mb-4">Sattvic Catering</h4>
              <p className="text-gray-700 leading-relaxed">
                We provide high-quality Tiffin and Lunch services arranged for both auspicious celebrations and solemn inauspicious occasions. All meals are prepared with purity and devotion. Our menu is strictly vegetarian, adhering to Vedic dietary principles, ensuring that every dish is sattvic and suitable for all types of poojas and rituals.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-orange-600 mb-4">Halting & Stay</h4>
              <p className="text-gray-700 leading-relaxed">
                For devotees traveling from afar, we offer comfortable halting facilities and night dinner arrangements, ensuring a stress-free and peaceful spiritual experience in Srirangapatna.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;