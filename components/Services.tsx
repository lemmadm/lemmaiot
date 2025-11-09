import React, { useState, useMemo } from 'react';
import { SERVICES_DATA } from '../constants';

const serviceCategories = ['All', 'Development', 'Business Growth'];

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = useMemo(() => {
    if (activeCategory === 'All') {
      return SERVICES_DATA;
    }
    return SERVICES_DATA.filter(service => service.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="services" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-dark tracking-tight">Our Core Services</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A complete suite of digital solutions to build, launch, and grow your business in Nigeria.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12 md:mb-16">
          {serviceCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue ${
                activeCategory === category
                  ? 'bg-brand-blue text-white shadow-lg transform -translate-y-1'
                  : 'bg-white text-gray-700 hover:bg-gray-200 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div key={activeCategory} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div 
              key={service.title} 
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-pink text-white rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-blue-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;