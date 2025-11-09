import React, { useState } from 'react';
import { generateBusinessNames } from '../services/geminiService';
import type { BusinessNameSuggestion } from '../types';
import { WrenchScrewdriverIcon, PaintBrushIcon, CreditCardIcon, ClipboardListIcon, MailIcon } from './Icons';
import { LEMMA_TOOLS } from '../constants';

interface FreeToolsProps {
  onConsultationClick: () => void;
}

const recommendedTools = [
  {
    icon: <PaintBrushIcon />,
    category: "Design & Branding",
    name: "Canva",
    description: "An easy-to-use graphic design platform for logos, social media posts, and more.",
    link: "https://www.canva.com",
  },
  {
    icon: <CreditCardIcon />,
    category: "Payments",
    name: "Paystack",
    description: "A leading payment gateway in Nigeria for accepting online payments from customers.",
    link: "https://www.paystack.com",
  },
  {
    icon: <ClipboardListIcon />,
    category: "Productivity",
    name: "Trello",
    description: "A visual collaboration tool that creates a shared perspective on any project.",
    link: "https://www.trello.com",
  },
  {
    icon: <MailIcon />,
    category: "Marketing",
    name: "Mailchimp",
    description: "An all-in-one marketing platform to manage mailing lists and create email marketing campaigns.",
    link: "https://www.mailchimp.com",
  },
];

const BusinessNameGenerator: React.FC<FreeToolsProps> = ({ onConsultationClick }) => {
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [names, setNames] = useState<BusinessNameSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) {
      setError('Please describe your business.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setNames([]);

    try {
      const results = await generateBusinessNames(description, keywords);
      setNames(results);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold text-brand-blue-dark mb-2">Business Name Generator</h3>
        <p className="text-gray-600 mb-6">Get unique, brandable names and taglines for your business in seconds.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Business Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., 'An online store selling handmade leather bags in Lagos'"
              className="w-full h-24 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink focus:outline-none transition"
              disabled={isLoading}
              required
            />
          </div>
          <div>
            <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">Keywords (Optional)</label>
            <input
              type="text"
              id="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="e.g., luxury, craft, bespoke"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink focus:outline-none transition"
              disabled={isLoading}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-brand-pink text-white py-3 rounded-full font-bold hover:bg-brand-pink-light transition duration-300 disabled:bg-pink-300 disabled:cursor-not-allowed flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
            {isLoading ? 'Generating...' : 'Generate Names'}
          </button>
        </form>

        {names.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200 animate-fadeInUp">
            <h4 className="text-xl font-bold text-brand-blue-dark mb-4">Here are your results:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {names.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-bold text-brand-blue">{item.name}</p>
                  <p className="text-sm text-gray-600 italic">"{item.tagline}"</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center bg-blue-50 p-6 rounded-lg">
              <h5 className="font-bold text-lg text-brand-blue-dark">Ready for the next step?</h5>
              <p className="text-gray-600 my-2">Let's build your brand around the perfect name.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                  <a href="/contact" className="bg-brand-blue text-white px-6 py-3 rounded-full hover:bg-brand-blue-dark transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    Register & Brand This Name
                  </a>
                  <button onClick={onConsultationClick} className="bg-transparent border border-brand-pink text-brand-pink px-6 py-3 rounded-full hover:bg-brand-pink hover:text-white transition-all duration-300 font-semibold">
                    Get a Custom AI Tool
                  </button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};


const FreeTools: React.FC<FreeToolsProps> = ({ onConsultationClick }) => {
  return (
    <section id="tools" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-brand-pink text-white mb-6 shadow-lg">
                    <WrenchScrewdriverIcon />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-dark tracking-tight">Our AI-Powered Tool</h2>
                <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                    Jumpstart your growth with our free, AI-powered tools. Designed to solve common challenges for Nigerian businesses.
                </p>
                <p className="mt-4 text-gray-600">
                    Want a custom tool like this on your own website to capture leads? We can build it for you.
                </p>
            </div>
            <div>
              <BusinessNameGenerator onConsultationClick={onConsultationClick} />
            </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 mt-12 md:mt-20 border-t border-gray-200">
         <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-dark tracking-tight">Explore Our Free Suite of Business Apps</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful, in-house tools built by LemmaIoT to solve real problems for Nigerian businesses.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEMMA_TOOLS.map((tool) => (
            <a href={tool.link} key={tool.name} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group block">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-pink text-white rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-blue-dark mt-1 mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
            </a>
          ))}
          <div className="bg-blue-50 rounded-2xl p-6 shadow-sm border border-brand-blue/20 flex flex-col justify-center items-center text-center">
             <h3 className="text-xl font-bold text-brand-blue-dark mb-2">Have an idea for a tool?</h3>
             <p className="text-gray-600 text-sm leading-relaxed mb-4">We can build custom AI-powered web applications to automate your unique business processes.</p>
             <button onClick={onConsultationClick} className="bg-brand-pink text-white px-6 py-2 rounded-full hover:bg-brand-pink-light transition-all duration-300 font-semibold text-sm">
                Request a Custom App
             </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 mt-12 md:mt-20 border-t border-gray-200">
         <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-dark tracking-tight">Recommended Business Tools</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A curated list of excellent third-party tools we recommend to our clients.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendedTools.map((tool) => (
            <a href={tool.link} key={tool.name} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group block">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-pink text-white rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {tool.icon}
              </div>
              <p className="text-sm font-semibold text-brand-pink">{tool.category}</p>
              <h3 className="text-xl font-bold text-brand-blue-dark mt-1 mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeTools;