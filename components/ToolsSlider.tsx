import React, { useState, useEffect } from 'react';
import { LEMMA_TOOLS } from '../constants';

const ToolsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % LEMMA_TOOLS.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-dark tracking-tight">Powerful Tools, Built For You</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our suite of free, in-house applications designed to solve real problems for Nigerian businesses.
          </p>
        </div>
        <div className="relative w-full max-w-4xl mx-auto h-80 md:h-96">
          {LEMMA_TOOLS.map((tool, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <a href={tool.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-brand-blue to-brand-pink text-white rounded-3xl mb-6 md:mb-0 transform transition-transform duration-300 hover:scale-110">
                  <div className="transform scale-150">{tool.icon}</div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-blue-dark mb-3 group-hover:text-brand-pink transition-colors">{tool.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-3">
          {LEMMA_TOOLS.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-brand-pink' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSlider;
