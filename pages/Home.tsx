import React from 'react';
import Hero from '../components/Hero';
import ToolsSlider from '../components/ToolsSlider';
import { WebDevIcon, AiAutomationIcon, BusinessRegIcon, DigitalMarketingIcon, CheckIcon, SparklesIcon, ChartBarIcon, ShieldCheckIcon } from '../components/Icons';

interface HomePageProps {
  onConsultationClick: () => void;
}

const ServicesOverview: React.FC = () => (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-dark tracking-tight">Digital Solutions for Growth</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We provide the essential digital services to help your Nigerian business succeed online.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center p-4">
            <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-brand-blue text-white mb-4 transform transition-transform duration-300 hover:scale-110">
              <WebDevIcon />
            </div>
            <h3 className="text-lg font-bold text-brand-blue-dark">Web Development</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-brand-blue text-white mb-4 transform transition-transform duration-300 hover:scale-110">
              <AiAutomationIcon />
            </div>
            <h3 className="text-lg font-bold text-brand-blue-dark">AI Automation</h3>
          </div>
           <div className="flex flex-col items-center p-4">
            <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-brand-blue text-white mb-4 transform transition-transform duration-300 hover:scale-110">
              <BusinessRegIcon />
            </div>
            <h3 className="text-lg font-bold text-brand-blue-dark">Business Registration</h3>
          </div>
           <div className="flex flex-col items-center p-4">
            <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-brand-blue text-white mb-4 transform transition-transform duration-300 hover:scale-110">
              <DigitalMarketingIcon />
            </div>
            <h3 className="text-lg font-bold text-brand-blue-dark">Digital Marketing</h3>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="/services" className="inline-block bg-brand-pink text-white px-8 py-3 rounded-full hover:bg-brand-pink-light transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Explore All Services
          </a>
        </div>
      </div>
    </section>
);

const WhyChooseUsOverview: React.FC = () => (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-brand-blue-dark sm:text-4xl">
              Your Digital Partner, <br /> Tailored for <span className="text-brand-pink">Nigeria</span>.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're more than a service provider. We're a team dedicated to navigating the unique challenges of the Nigerian market to ensure your business thrives.
            </p>
            <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                    <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-brand-blue/10 text-brand-blue">
                        <CheckIcon />
                    </div>
                    <span className="ml-3 text-gray-600">Solutions designed for the local market.</span>
                </li>
                <li className="flex items-center">
                    <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-brand-blue/10 text-brand-blue">
                        <CheckIcon />
                    </div>
                    <span className="ml-3 text-gray-600">Affordable, world-class quality.</span>
                </li>
                <li className="flex items-center">
                    <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-brand-blue/10 text-brand-blue">
                        <CheckIcon />
                    </div>
                    <span className="ml-3 text-gray-600">Rapid project delivery and launch.</span>
                </li>
            </ul>
            <div className="mt-8">
               <a href="/about" className="inline-block bg-brand-blue text-white px-8 py-3 rounded-full hover:bg-brand-blue-dark transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Learn More About Us
               </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="relative w-full h-80 lg:h-full min-h-[300px]">
              <div className="absolute inset-0 bg-blue-50 rounded-2xl overflow-hidden">
                <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-pink/10 rounded-full blur-2xl"></div>
                <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-blue/10 rounded-full blur-2xl"></div>
              </div>

              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute text-brand-blue opacity-10 transform scale-[2.0]">
                  <SparklesIcon />
                </div>

                <div className="absolute top-5 left-10 animate-floating" style={{ animationDelay: '0s' }}>
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg text-brand-pink">
                    <ChartBarIcon />
                  </div>
                </div>
                <div className="absolute top-1/4 right-0 animate-floating" style={{ animationDelay: '1.5s' }}>
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg text-brand-blue">
                    <AiAutomationIcon />
                  </div>
                </div>
                <div className="absolute bottom-5 left-1/4 animate-floating" style={{ animationDelay: '1s' }}>
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg text-brand-blue">
                    <WebDevIcon />
                  </div>
                </div>
                <div className="absolute bottom-1/4 right-10 animate-floating" style={{ animationDelay: '0.5s' }}>
                  <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg text-brand-pink">
                    <ShieldCheckIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);

const FinalCTA: React.FC<{ onConsultationClick: () => void }> = ({ onConsultationClick }) => (
    <section className="bg-brand-blue-dark">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to Transform Your Business?</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-200">
                Let's discuss how our digital solutions can help you achieve your goals. Get a free, no-obligation consultation today.
            </p>
            <button onClick={onConsultationClick} className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-brand-blue bg-white hover:bg-blue-50 sm:w-auto">
                Start Your Free Consultation
            </button>
        </div>
    </section>
);

const HomePage: React.FC<HomePageProps> = ({ onConsultationClick }) => {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUsOverview />
      <ToolsSlider />
      <FinalCTA onConsultationClick={onConsultationClick} />
    </>
  );
};

export default HomePage;