"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  const poojas = t.services.poojas;

  return (
    <div id="services" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-lg text-gray-900 font-bold tracking-wide uppercase">{t.services.headerTitle}</h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900">{t.services.headerSubTitle}</p>
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
              <h4 className="text-xl font-bold text-orange-600 mb-4">{t.services.hospitality.cateringTitle}</h4>
              <p className="text-gray-700 leading-relaxed">
                {t.services.hospitality.cateringDescription}
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-orange-600 mb-4">{t.services.hospitality.stayTitle}</h4>
              <p className="text-gray-700 leading-relaxed">
                {t.services.hospitality.stayDescription}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
