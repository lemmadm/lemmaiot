import React, { useState, useEffect } from 'react';
import { getDigitalStrategy } from '../services/geminiService';
import { ChevronDownIcon, ChevronUpIcon } from './Icons';

const AIBusinessAdvisor: React.FC = () => {
  const [businessDescription, setBusinessDescription] = useState('');
  const [advice, setAdvice] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasGeneratedStrategy, setHasGeneratedStrategy] = useState(false);
  const [isResponseExpanded, setIsResponseExpanded] = useState(true);

  useEffect(() => {
    const storedAdvice = localStorage.getItem('aiBusinessStrategy');
    if (storedAdvice) {
      setAdvice(storedAdvice);
      setHasGeneratedStrategy(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessDescription.trim()) {
      setError('Please describe your business.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setAdvice('');

    try {
      const result = await getDigitalStrategy(businessDescription);
      localStorage.setItem('aiBusinessStrategy', result);
      setAdvice(result);
      setHasGeneratedStrategy(true);
      setIsResponseExpanded(true);
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const parseSimpleMarkdown = (text: string): string => {
    const lines = text.split('\n');
    let html = '';
    let inList = false;

    lines.forEach(line => {
        if (line.trim() === '') return;

        // Bold and Italic transformations
        let processedLine = line
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/_(.*?)_/g, '<em>$1</em>');

        // List item transformation
        if (processedLine.trim().startsWith('* ') || processedLine.trim().startsWith('- ')) {
            if (!inList) {
                html += '<ul>';
                inList = true;
            }
            html += `<li>${processedLine.replace(/[\*\-]\s/, '').trim()}</li>`;
        } else {
            if (inList) {
                html += '</ul>';
                inList = false;
            }
            html += `<p>${processedLine}</p>`;
        }
    });

    if (inList) {
        html += '</ul>';
    }

    return html;
  }


  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl animate-floating">
      {!hasGeneratedStrategy ? (
        <>
          <h3 className="text-2xl font-bold text-white mb-2">AI Business Advisor</h3>
          <p className="text-blue-200 mb-4 text-sm">Describe your business and get a free, instant digital strategy.</p>
          <form onSubmit={handleSubmit}>
            <textarea
              value={businessDescription}
              onChange={(e) => setBusinessDescription(e.target.value)}
              placeholder="E.g., 'I run a small bakery in Abuja specializing in custom cakes for events.'"
              className="w-full h-24 p-3 rounded-lg bg-white/20 text-white placeholder-blue-200 focus:ring-2 focus:ring-brand-pink focus:outline-none transition"
              disabled={isLoading}
            />
            {error && <p className="text-red-300 text-sm mt-2">{error}</p>}
            <button
              type="submit"
              className="w-full mt-4 bg-brand-pink text-white py-3 rounded-full font-bold hover:bg-brand-pink-light transition duration-300 disabled:bg-pink-800/50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? 'Generating Strategy...' : 'Get My Strategy'}
            </button>
          </form>
        </>
      ) : (
         <>
          <button
            onClick={() => setIsResponseExpanded(!isResponseExpanded)}
            className="w-full flex justify-between items-center text-left group"
            aria-expanded={isResponseExpanded}
            aria-controls="ai-response-content"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Your Saved Strategy</h3>
              <p className="text-blue-200 text-sm">Here is the digital strategy we generated. Revisit it anytime!</p>
            </div>
            <div className="text-white transform transition-transform duration-300 group-hover:scale-125">
              {isResponseExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </div>
          </button>
          
          <div
            id="ai-response-content"
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isResponseExpanded ? 'max-h-[1000px] opacity-100 mt-6 pt-4 border-t border-white/20' : 'max-h-0 opacity-0'
            }`}
          >
            {advice && (
              <div 
                  className="prose prose-invert prose-sm text-blue-100 max-w-none 
                             [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 
                             [&>p]:mb-3" 
                  dangerouslySetInnerHTML={{ __html: parseSimpleMarkdown(advice) }} 
              />
            )}
          </div>
         </>
      )}
    </div>
  );
};

export default AIBusinessAdvisor;