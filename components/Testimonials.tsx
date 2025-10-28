
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';
import { QuoteIcon } from './Icons';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-12 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-dark tracking-tight">Trusted by Businesses Across Nigeria</h2>
                    <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our happy clients have to say.
                    </p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS_DATA.map((testimonial) => (
                        <div key={testimonial.name} className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                            <div className="absolute top-6 left-6 z-0">
                                <QuoteIcon />
                            </div>
                            <img className="w-20 h-20 rounded-full mb-4 z-10" src={testimonial.avatar} alt={testimonial.name} />
                            <blockquote className="text-gray-700 italic leading-relaxed mb-4 flex-grow z-10">
                                “{testimonial.quote}”
                            </blockquote>
                            <footer className="mt-auto z-10">
                                <p className="font-bold text-brand-blue-dark">{testimonial.name}</p>
                                <p className="text-brand-blue font-medium">{testimonial.role}</p>
                            </footer>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;