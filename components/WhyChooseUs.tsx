import React from 'react';
import { CheckIcon } from './Icons';

const Feature: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
  <div className="flex">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand-blue text-white">
        <CheckIcon />
      </div>
    </div>
    <div className="ml-4">
      <h4 className="text-lg leading-6 font-bold text-brand-blue-dark">{title}</h4>
      <p className="mt-2 text-base leading-6 text-gray-600">
        {children}
      </p>
    </div>
  </div>
);

interface WhyChooseUsProps {
    onConsultationClick: () => void;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onConsultationClick }) => {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-brand-blue-dark sm:text-4xl">
                            The Lemma<span className="text-brand-pink">IoT</span> Advantage
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-600">
                           We're more than a service provider; we're your digital partner. We're dedicated to understanding the unique challenges of the Nigerian market.
                        </p>
                        <div className="mt-8 sm:flex">
                           <button onClick={onConsultationClick} className="bg-brand-blue text-white px-6 py-3 rounded-full hover:bg-brand-blue-dark transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                              Chat With An Expert
                           </button>
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:col-span-2">
                        <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10">
                            <Feature title="Tailored for Nigeria">
                                Our solutions are specifically designed for the Nigerian business landscape, from payment gateways to local market trends.
                            </Feature>
                            <Feature title="Affordable Excellence">
                                Get access to world-class digital services without the exorbitant price tag. Quality and affordability are our cornerstones.
                            </Feature>
                            <Feature title="Rapid Delivery">
                                We understand that speed is crucial. Our streamlined processes ensure your digital assets are built and launched in record time.
                            </Feature>
                            <Feature title="24/7 Expert Support">
                                Our dedicated support team is always available to assist you, ensuring your business runs smoothly around the clock.
                            </Feature>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
